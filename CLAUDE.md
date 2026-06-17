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
├── CLAUDE.md              ← этот файл
├── ROADMAP.md             ← дорожная карта
├── plans/                 ← технические планы фич
├── retrospectives/        ← рефлексии после сессий
├── ai-clone/feedback/     ← накопленные правила работы
├── .claude/skills/        ← SKILL.md (figma-workflow, deploy-vercel)
└── src/
    ├── components/        ← Hero, Services, Works, Contacts
    ├── App.jsx            ← собирает компоненты
    ├── App.css            ← CSS-переменные + глобальные стили
    └── main.jsx           ← точка входа (не трогать)
```

---

## Figma

Файл: `rA5AGt3zuM05YM7lzS0CoC`  
Секции: Hero (чёрный) → Services (синий) → Works (тёмный) → Contacts (красный)

---

## Принципы

1. Перед новой секцией — читать дизайн из Figma (`get_design_context`), не угадывать значения
2. Один компонент = один `.jsx` файл + одноимённый `.css` файл
3. Все цвета и шрифты через CSS-переменные в `App.css`, не хардкодить
4. После каждой секции — проверить в браузере (`npm run dev`)
5. Большая фича (2+ файла) = план в `plans/`

---

## Команды

```bash
npm run dev      # запустить dev-сервер → localhost:5173
npm run build    # собрать для деплоя
npm run preview  # посмотреть сборку локально
```

---

## Язык

Всегда отвечай на русском.
