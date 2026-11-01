#!/usr/bin/env node
/**
 * Example sessionStart hook for cursor-demo.
 * Reads hook JSON from stdin and returns empty JSON (no-op allow).
 */
let input = ''

process.stdin.setEncoding('utf8')
process.stdin.on('data', (chunk) => {
  input += chunk
})

process.stdin.on('end', () => {
  try {
    JSON.parse(input || '{}')
  } catch {
    // Ignore malformed input; still succeed so the session is not blocked.
  }

  // Optional: log a short marker for debugging in the Hooks output channel.
  console.error('[cursor-demo] sessionStart hook ran')
  process.stdout.write('{}\n')
  process.exit(0)
})
