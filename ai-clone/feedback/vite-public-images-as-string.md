---
name: vite-public-images-as-string
description: В Vite изображения из папки public/ использовать строкой, не через import
metadata:
  type: feedback
---

Картинки из `public/` в Vite-проекте всегда указывать как строковый путь: `<img src="/images/foto.jpg" />`. Никогда не делать `import foto from '/images/foto.jpg'`.

**Why:** Vite обрабатывает `import` как ES-модуль через бандлер Rollup и пытается разрешить путь к файлу. Файлы из `public/` не проходят через бандлер — они копируются напрямую. Результат: `Rollup failed to resolve import "/images/hero-photo.jpg"` и пустая страница.

**How to apply:** Любой `<img>` или `background-image` с файлом из `public/` — строка. Если файл лежит в `src/assets/` — тогда `import`.
