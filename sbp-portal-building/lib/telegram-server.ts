// Server-only helper for sending Telegram messages. Wraps the raw
// sendMessage call with a per-attempt timeout and a few retries with
// backoff so a slow network path gets a fair chance to succeed instead
// of failing after a single short attempt.
const REQUEST_TIMEOUT_MS = 15_000
const MAX_ATTEMPTS = 3
const RETRY_DELAY_MS = 1_500

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function sendOnce(
  token: string,
  chatId: string,
  text: string,
  parseMode?: 'HTML',
) {
  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      ...(parseMode ? { parse_mode: parseMode } : {}),
    }),
    cache: 'no-store',
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
  })
  return response
}

export async function sendTelegramMessage(
  token: string,
  chatId: string,
  text: string,
  parseMode?: 'HTML',
) {
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      const response = await sendOnce(token, chatId, text, parseMode)
      if (response.ok) return true

      const body = await response.text().catch(() => '')
      console.log(
        `[v0] Telegram sendMessage failed (attempt ${attempt}/${MAX_ATTEMPTS}): ${response.status} ${body}`,
      )
    } catch (error) {
      console.log(
        `[v0] Telegram sendMessage error (attempt ${attempt}/${MAX_ATTEMPTS}):`,
        error instanceof Error ? error.message : error,
      )
    }

    if (attempt < MAX_ATTEMPTS) {
      await delay(RETRY_DELAY_MS * attempt)
    }
  }

  return false
}
