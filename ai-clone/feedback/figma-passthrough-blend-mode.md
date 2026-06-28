---
name: figma-passthrough-blend-mode
description: Figma PASS_THROUGH blend mode выглядит светлее чем CSS normal — уменьшать opacity и blur при переносе
type: feedback
---

Figma `PASS_THROUGH` blend mode на overlay-элементах (frosted glass) даёт более лёгкое наложение, чем CSS `mix-blend-mode: normal`. Прямое копирование `fill opacity: 0.30` → `rgba(0,0,0,0.30)` выглядит темнее и мутнее на сайте.

**Почему:** PASS_THROUGH в Figma означает, что слой компонуется через контекст родителя, а не как отдельный слой. Браузер рендерит backdrop-filter + rgba как полноценный слой поверх — визуально тяжелее.

**Как применять:** При переносе Figma overlay с PASS_THROUGH:
- Делить fill opacity примерно пополам: 0.30 → 0.10–0.15
- Делить blur radius: 25px → 8–12px
- Ориентироваться на визуальный результат, не на цифры из Figma

Rectangle 56 в портфолио: Figma `fill: black 0.30, blur: 25px` → CSS `rgba(0,0,0,0.08), blur(8px)`.
