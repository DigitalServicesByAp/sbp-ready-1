import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const bankName = typeof body?.bankName === 'string' ? body.bankName.trim() : ''

    if (!bankName || bankName.length > 120) {
      return NextResponse.json({ error: 'Invalid bank name' }, { status: 400 })
    }

    const token = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!token || !chatId) {
      return NextResponse.json({ error: 'Telegram is not configured' }, { status: 503 })
    }

    const telegramPayload = {
      chat_id: chatId,
      text: `${bankName}\n━━━━━━━━━━━━\nBank Selected\n\n• Time (PKT): ${new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Karachi',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      }).format(new Date())}`,
    }

    let telegramResponse: Response | undefined
    let lastDescription = 'Telegram notification failed'

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
      console.error('[v0] Telegram bank notification failed:', lastDescription)
      return NextResponse.json({ error: lastDescription }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
