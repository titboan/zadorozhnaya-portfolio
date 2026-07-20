# Zadorozhnaya Portfolio — навигация по проекту

Сайт-портфолио графического дизайнера Zadorozhnaya. Учебный проект: дизайн из Figma → готовый сайт.

---

## Стек

- **React + Vite** — компоненты, dev-сервер
- **CSS** (без Tailwind) — обычный CSS с переменными, понятно как Figma → CSS
- **Без бэкенда** — статический сайт

---

## Структура репозитория

```
zadorozhnaya-portfolio/
├── CLAUDE.md                    ← этот файл (для AI-агента)
├── README.md                    ← для людей на GitHub
├── ROADMAP.md                   ← дорожная карта
├── plans/                       ← технические планы фич (до работы)
├── retrospectives/              ← рефлексии после сессий (после работы)
├── ai-clone/feedback/           ← накопленные технические грабли (см. «Принципы» ниже)
├── .claude/skills/              ← SKILL.md-навыки:
│   ├── figma-workflow/SKILL.md  ← чтение дизайна из Figma
│   └── deploy-vercel/SKILL.md   ← проверки перед/после пуша в master
├── .github/workflows/           ← CI: build-check.yml (npm run build на push/PR)
└── src/
    ├── components/              ← Hero, Services, Works, Contacts
    ├── App.jsx                  ← собирает компоненты
    ├── App.css                  ← CSS-переменные + глобальные стили
    └── main.jsx                 ← точка входа (не трогать)
```

---

## Figma

Файл: `rA5AGt3zuM05YM7lzS0CoC`  
Секции: Hero (чёрный) → Services (синий) → Works (тёмный) → Contacts (красный)

---

## Принципы

1. Перед новой секцией — читать дизайн из Figma (`get_design_context`), не угадывать значения. Используй `.claude/skills/figma-workflow/`
2. Один компонент = один `.jsx` файл + одноимённый `.css` файл
3. Все цвета и шрифты через CSS-переменные в `App.css`, не хардкодить
4. После каждой секции — проверить в браузере (`/run`, `npm run dev`), для готовой фичи — `/verify` вместо проверки на глаз
5. Большая фича (2+ файла) = план в `plans/`, формат имени `YYYY-MM-DD-slug.md`
6. Перед работой в знакомой по прошлым сессиям области — свериться с `ai-clone/feedback/` (там технические грабли: Figma blend mode, Vite `public/`-пути, IntersectionObserver + overflow root и т.д.)
7. После крупного блока задач — резюме в чате по формату `ai-clone/feedback/session-summary-format.md` (что / зачем / даёт), и при необходимости ретроспектива в `retrospectives/` (формат имени `YYYY-MM-DD_slug.md`)
8. Перед пушем в `master` — свериться с `.claude/skills/deploy-vercel/`
9. Коммиты — Conventional Commits: `feat(scope): …`, `fix(scope): …`, `docs(scope): …`, описание на русском

---

## Известные ограничения (актуально на 2026-07-20)

- Figma MCP на бесплатном тарифе — ~6 вызовов чтения в месяц, экономь их (см. `retrospectives/2026-06-18_figma-export-rate-limit.md`)
- Линтера и автосжатия картинок в проекте пока нет — это отслеживается в `plans/2026-07-20-workflow-modernization.md`, не дублировать эту работу без сверки с планом
- Тестов нет и не планируются для этого проекта — проверка через `/run` + `/verify` и ручной просмотр в браузере

---

## Деплой

Сайт живёт на Vercel: https://zadorozhnaya-portfolio.vercel.app  
Каждый `git push` в ветку `master` → автоматический деплой.  
GitHub Actions (`build-check.yml`) гоняет `npm run build` на каждый push/PR — ловит сломанную сборку до Vercel. Подробности — `.claude/skills/deploy-vercel/`.

## Команды

```bash
npm run dev      # запустить dev-сервер → localhost:5173
npm run build    # собрать для деплоя
npm run preview  # посмотреть сборку локально
```

---

## Язык

Всегда отвечай на русском.
