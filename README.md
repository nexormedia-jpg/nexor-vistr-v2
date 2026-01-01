# Nexor Vistr V2 — Telegram SaaS

Production-ready Executive flow with:
- Add Client
- Add Meeting (+ follow-ups)
- Update Status
- Pending Follow-ups
- Calendar View
- My Dashboard

## Deploy Steps
1. npm install
2. npm run package
3. Upload nexor-vistr-v2.zip to AWS Lambda

## Telegram Webhook Setup
Replace <LAMBDA_URL> and <BOT_TOKEN>:
https://api.telegram.org/bot<BOT_TOKEN>/setWebhook?url=<LAMBDA_URL>

## Seed Tenant (ShanTech)
Run:
```bash
node scripts/seed_shantech.mjs
