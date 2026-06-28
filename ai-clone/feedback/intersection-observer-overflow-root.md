---
name: intersection-observer-overflow-root
description: IntersectionObserver не видит элементы внутри overflow:auto — передавать скролл-контейнер как root
type: feedback
---

IntersectionObserver с `root: null` (viewport) не срабатывает для элементов, скрытых за `overflow: auto` скролл-контейнером. Элементы считаются невидимыми даже если скролл-контейнер сам в viewport.

**Почему:** Spec определяет intersection с учётом clip-path от overflow-предков. Элементы внутри `.services__list { overflow-y: auto; max-height: 820px }` за пределами scroll-fold → не пересекают viewport в смысле IO.

**Как применять:** Передавать ref скролл-контейнера как `root` в IntersectionObserver:

```js
// useCounter(target, duration, rootRef) — rootRef = useRef(listElement)
const observer = new IntersectionObserver(cb, { root: rootRef?.current ?? null, threshold: 0.1 })
```

Services: `scrollListRef` передаётся в каждый `ServiceItem` и далее в `useCounter`.

Не забыть: ref.current равен `null` во время рендера → передавать сам ref-объект, а не `.current`. Разворачивать внутри `useEffect`.
