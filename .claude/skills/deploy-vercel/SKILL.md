---
name: deploy-vercel
description: Проверка перед пушем в master и после него — сайт деплоится на Vercel автоматически, но билд может упасть незаметно
---

## Как устроен деплой
Каждый `git push` в ветку `master` запускает автоматический деплой на Vercel (`https://zadorozhnaya-portfolio.vercel.app`). PR/preview-окружений в обычном потоке нет — пуш в master сразу уходит в прод.

## Перед пушем в master

1. Обязательно `npm run build` локально — Vercel собирает с нуля в чистом окружении, и то, что работает в `npm run dev`, может упасть на билде.
   - Прецедент: `lenis` не был закоммичен в `package.json` → прод-билд на Vercel падал, а локально всё работало, потому что зависимость уже стояла в `node_modules`.
2. Убедиться, что все новые зависимости попали в `package.json` (`git status` / `git diff package.json`).
3. Проверить вес новых картинок в `public/images/` — ничего больше ~2 МБ (см. `ai-clone/feedback/figma-download-assets-scale.md`).

## После пуша

- Если подключён коннектор Vercel (`plans/2026-07-20-workflow-modernization.md`, часть 3) — проверить статус последнего деплоя через него вместо предположения «наверное сработало».
- Если коннектор не подключён — открыть `https://zadorozhnaya-portfolio.vercel.app` и глазами убедиться, что сайт обновился и не белый экран.
- Есть also GitHub Actions билд-чек (`.github/workflows/build-check.yml`) — он ловит падение сборки ещё до мержа/пуша в master, но сам по себе Vercel не проверяет — только компилируемость.

## vercel.json
SPA-рероутинг: все пути отдают `/index.html` (нужно для React Router).
