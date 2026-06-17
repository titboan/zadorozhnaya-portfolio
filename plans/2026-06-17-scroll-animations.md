# Анимации скролла (Intersection Observer)

Статус: в работе

## Что делаем

Секции плавно появляются снизу при прокрутке. Без библиотек — только браузерный Intersection Observer API.

## Фазы

- [x] CSS-классы `.reveal` / `.is-visible` в App.css
- [x] Хук `useScrollReveal` в `src/hooks/useScrollReveal.js`
- [x] Применить к Services, Works, Contacts
- [x] Stagger-эффект для карточек Works (появляются по очереди с задержкой)
- [x] Hero — fade-in при загрузке страницы (не скролл, а mount)
- [ ] Проверить на localhost:5173
- [ ] Коммит + пуш (Vercel задеплоит автоматически)
