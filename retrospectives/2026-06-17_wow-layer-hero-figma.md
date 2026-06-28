# Ретроспектива: WOW-слой + Hero по Figma

## 1. Задача

Добавить 9 визуальных эффектов (Lenis, hover zoom, grain, cursor, parallax, counters, word animation, marquee, service counters) и точно перенести Hero-секцию из Figma (node 0:46) в код.

---

## 2. Как решали

**WOW-слой (9 эффектов):**
- Lenis — `main.jsx`, raf-loop
- Grain — `body::after` SVG-шум в `App.css`
- Hover Works — `scale(1.05)` + overlay в `Works.jsx/css`
- Cursor — `Cursor.jsx` + `Cursor.css`, растёт до 80px на Works
- Параллакс — `scroll` listener на `photoRef` в `Hero.jsx`
- `useCounter` — `src/hooks/useCounter.js`, IntersectionObserver + rAF ease-out
- Word animation — CSS `@keyframes wordSlide`, `--d` custom property на каждом `<span>`
- Marquee — `Marquee.jsx/css`, `translateX(-50%)` за 22s
- Service counters — `ServiceItem` компонент с `useCounter` в `Services.jsx`

**Hero по Figma:**
- Правило: все позиции в `vw` (px/1920×100), высота `63.28vw` (1215/1920)
- Rectangle56 (node 0:52) — сначала реализован как CSS-градиент, но оказался `backdrop-filter: blur(25px)` + `rgba(0,0,0,0.3)` + `border-radius: 9.06vw`
- Группа Group4 — три цветных круга, добавлены по координатам Figma

**Услуги:**
- Список расширен с 4 до 10 позиций из Figma
- Добавлен `max-height` + `overflow-y: auto` + `data-lenis-prevent` для независимого скролла

---

## 3. Решили — да / нет / частично

**Да.** Все 9 эффектов задеплоены. Hero точно соответствует Figma. Rectangle56 исправлен на frosted glass.

---

## 4. Что можно было лучше

- **Rectangle56** сначала сделан как градиент — неверно. Надо было сразу скачать SVG-ассет из Figma и прочитать его содержимое: `fill-opacity="0.3"` + `backdrop-filter` там явно написаны.
- При первом переводе Hero в `vw` использовал `%` от высоты вьюпорта — сломало layout на 1366px. Нужно было сразу всё в `vw`.
- `package.json` с Lenis не был закоммичен → Vercel build failed. Всегда коммитить `package.json` и `package-lock.json` вместе с зависимостью.

---

## 5. Что узнал нового о проекте

- Figma MCP возвращает ассеты как SVG, не PNG. Содержимое SVG раскрывает реальные параметры (blur, opacity, border-radius) точнее, чем скриншот.
- Figma: `Fill (width) × Fixed (height)` — значит высота масштабируется с шириной → vw везде, не px/vh.
- Lenis перехватывает все scroll события глобально. Для вложенного прокручиваемого контейнера — `data-lenis-prevent` на элементе.

---

## 6. Нарушения правил

Нет.
