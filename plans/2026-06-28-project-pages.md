# Страницы проектов (случаи / кейсы)

Статус: в работе

## Что сделано

- [x] React Router — `/case/:slug` для 7 категорий
- [x] `ProjectPage` — навбар, крупный заголовок, 2-колоночная сетка карточек, Contacts снизу
- [x] Два типа карточек: `full` (картинка снизу) и `side` (текст слева, картинка справа)
- [x] Точные значения из Figma CSS-экспорта: padding 32px/96px, title 90px/600, card title 20px/300, desc 16px/300, gap 64px, стрелка 72px
- [x] Cursor работает на всех страницах (вынесен из Home)
- [x] `vercel.json` — SPA rewrites для клиентского роутинга
- [x] Данные для всех 7 категорий: logo (4), identity (8), poly (8), kv (3), promo (4), social (6), web (3)

## Что осталось

- [ ] **Загрузить реальные фото проектов** — сейчас во многих карточках placeholder-изображения

  Структура папок для новых фото:
  ```
  public/images/projects/
  ├── justore/          ← логотип бренда одежды Justore
  ├── avtomoll/         ← айдентика автосалона АВТОМОЛЛ
  ├── belyy-gus/        ← логотип фотостудии «Белый гусь»
  ├── defektolog/       ← логотип «Дефектолог»
  ├── ithab/            ← логотип iThab
  └── trafic/           ← айдентика Trafic.hab (научный город)
  ```

  После загрузки — обновить пути в `src/data/projects.js`:
  ```js
  { title: '...', image: '/images/projects/justore/main.jpg' }
  ```

- [ ] **Уточнить тексты карточек** — названия проектов и описания взяты приблизительно из Figma; нужно сверить с реальными проектами дизайнера

- [ ] **Figma: остальные страницы категорий** — node-id для poly, kv, promo, social, web ещё не смотрели (лимит MCP исчерпан до 1 июля 2026). Использовать «Copy as code → CSS» из Figma для точных значений

- [x] **Мобильная версия** — Hero/Services/Works/Contacts/ProjectPage/CasePage 428px (Figma CSS). Heading 40px/500, desc 13px/300, Services numbered circles 22px, dots 11px, scroll-to-top button 30px

- [x] **Hover / переходы** — scroll reveal: карточки ProjectPage появляются translateY(24px)→0, галерея CasePage translateY(32px)→0

## Файлы

- `src/pages/ProjectPage.jsx` — компонент страницы
- `src/pages/ProjectPage.css` — стили
- `src/data/projects.js` — данные всех категорий
- `public/images/projects/` — папки с изображениями проектов
