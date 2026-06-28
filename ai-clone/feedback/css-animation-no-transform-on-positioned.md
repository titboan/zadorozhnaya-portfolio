---
name: css-animation-no-transform-on-positioned
description: CSS-анимация с transform перебивает transform: translateY(-50%) на позиционированных элементах — использовать только opacity
type: feedback
---

Нельзя использовать `transform` в `@keyframes` для элементов, у которых уже есть `transform: translateY(-50%)` для позиционирования.

**Почему:** `animation-fill-mode: both/forwards` фиксирует конечное состояние анимации. Если `to { transform: translateY(0) }`, то после анимации элемент остаётся в `translateY(0)`, перебивая `translateY(-50%)`. Все Hero-элементы съезжают вниз на 50% своей высоты.

**Как применять:** Для Hero-элементов с абсолютным позиционированием и `translateY(-50%)` — анимировать только `opacity`:

```css
@keyframes heroFadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
```

Если нужен слайд — использовать отдельный wrapper без transform, или пересчитывать позицию без translateY(-50%) (pre-compute center offset в top).
