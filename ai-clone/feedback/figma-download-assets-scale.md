---
name: figma-download-assets-scale
description: Для оптимизации больших изображений из Figma использовать download_assets с defaultScale вместо внешних инструментов
metadata:
  type: feedback
---

Если скачанное из Figma изображение слишком большое (> 2 МБ для веба), не искать PIL / ImageMagick — их может не быть. Вместо этого перескачать через `download_assets` с `defaultScale: 0.5` и `defaultFormat: "jpg"`.

**Why:** `work-3-poly.jpg` весил 16 МБ. PIL и ImageMagick отсутствуют на машине пользователя. Решение через Figma MCP дало 50 КБ без установки чего-либо.

**How to apply:** После `curl`-скачивания сразу проверять `ls -la public/images/`. Если файл > 2 МБ — вызвать `download_assets(nodeId, defaultScale: 0.5, defaultFormat: "jpg")` и перезаписать. Перед коммитом убедиться, что ни один файл не > 2 МБ.
