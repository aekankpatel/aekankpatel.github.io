# Aekank Portfolio — AI Chat Worker

A tiny Cloudflare Worker that proxies chat questions to Groq. It holds your Groq
API key server-side so it is never exposed in the browser.

## One-time setup

You need a free [Cloudflare account](https://dash.cloudflare.com/sign-up) and your
Groq API key (from https://console.groq.com/keys).

From this `worker/` folder:

```bash
# 1. Log in to Cloudflare (opens a browser)
npx wrangler login

# 2. Store your Groq key as a secret (paste the key when prompted)
npx wrangler secret put GROQ_API_KEY

# 3. Deploy
npx wrangler deploy
```

`wrangler deploy` prints your Worker URL, e.g.
`https://aekank-chat.<your-subdomain>.workers.dev`.

## Connect the site

Put that URL in the widget: open `src/components/ChatBot.jsx` and set
`CHAT_API_URL`, **or** add it to the site build env as `VITE_CHAT_API_URL`.
Rebuild/redeploy the site and the bubble is live.

## Optional: rate limiting (recommended)

Protects your Groq quota from abuse. Create a KV namespace and wire it up:

```bash
npx wrangler kv namespace create RATE_LIMIT
```

Copy the printed `id` into `wrangler.toml` (uncomment the `[[kv_namespaces]]`
block), then `npx wrangler deploy` again. Without it the Worker still runs; it
just skips per-IP limiting.

## Tweaks

All in `src/index.js`:
- `ALLOWED_ORIGINS` — the domains allowed to call the Worker.
- `MODEL` — Groq model (default `llama-3.3-70b-versatile`; `llama-3.1-8b-instant` is lighter).
- `SYSTEM_PROMPT` — the facts about you the assistant is allowed to use.
- `RATE_MAX` / `RATE_WINDOW` — limit thresholds.
