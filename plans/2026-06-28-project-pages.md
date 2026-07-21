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

  2026-07-21: полное сканирование `public/images/` (`sharp`, все файлы min=max по пикселям) нашло 7 полностью белых файлов-заглушек: `work-4-kv1.jpg`, `work-5-kv2.jpg`, `work-6-social.jpg`, `projects/flebologiya/key-visual.jpg`, `projects/personal-brand/presentation-2.jpg`, `projects/akcii/cover.jpg`, `projects/dental/website.jpg`. Все места, где они реально рендерились (главная `Works.jsx` + `/case/kv`, `/case/promo`, `/case/social`, `/case/web` через `src/data/projects.js`), временно переключены на другие уже существующие реальные фото — отмечено комментарием прямо у каждой замены в коде. `cover:` поля в `projects.js`, указывающие на те же заглушки, не трогал — это мёртвые данные, нигде не рендерятся (проверено — не используются в `ProjectPage.jsx`).

  Заменить на настоящие фото, когда будут исходники:
  - Главная, карточка Key Visual (`Works.jsx`) — 2 слота
  - `/case/kv` — все 3 карточки (весь раздел был полностью пустым)
  - `/case/promo` — карточка «Акционные материалы» и «Презентация личного бренда»
  - `/case/social` — карточка «Оформление Instagram»
  - `/case/web` — карточка «Дизайн сайта для детской стоматологии»

  Попутно найден и исправлен реальный (не заглушка) баг: `projects/rk-fevral/cover.jpg` при `object-fit: cover` и дефолтном центрировании обрезался ровно в белый промежуток между баннерами на исходнике (широкий 2.57:1 композит с большими полями) — добавлен `imgPosition` проп в `PCard` (`ProjectPage.jsx`) и `style objectPosition` в `Works.jsx`, `10% center` для всех 3 мест использования этого файла.

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

  - [x] Починено 2026-07-20: в `src/data/projects.js` два пути (`flebologiya`, `personal-brand`) ссылались на файлы, у которых имя на диске = склеенный текст описания задачи из Figma (с буквальным переводом строки U+2028 / неразрывным пробелом внутри имени) — байт-в-байт не совпадало с строкой в коде, картинки не грузились в браузере. Файлы переименованы в `key-visual.jpg` и `presentation-2.jpg`, пути в коде поправлены, `npm run build`/`npm run lint` чистые. Коммит `8226ed7`.

- [ ] **Figma: остальные страницы категорий** — node-id для poly, kv, promo, social, web ещё не смотрели (лимит MCP исчерпан до 1 июля 2026). Использовать «Copy as code → CSS» из Figma для точных значений

- [x] **Мобильная версия** — Hero/Services/Works/Contacts/ProjectPage/CasePage 428px (Figma CSS). Heading 40px/500, desc 13px/300, Services numbered circles 22px, dots 11px, scroll-to-top button 30px

- [x] **Hover / переходы** — scroll reveal: карточки ProjectPage появляются translateY(24px)→0, галерея CasePage translateY(32px)→0

## Файлы

- `src/pages/ProjectPage.jsx` — компонент страницы
- `src/pages/ProjectPage.css` — стили
- `src/data/projects.js` — данные всех категорий
- `public/images/projects/` — папки с изображениями проектов
