// Server-only helper for sending Telegram messages. Wraps the raw
// sendMessage call with a hard timeout and a single retry so a slow or
// flaky network path fails fast instead of hanging the request for minutes.
const REQUEST_TIMEOUT_MS = 10_000

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
  try {
    const response = await sendOnce(token, chatId, text, parseMode)
    if (response.ok) return true
  } catch {
    // fall through to retry
  }

  try {
    const response = await sendOnce(token, chatId, text, parseMode)
    return response.ok
  } catch {
    return false
  }
}
