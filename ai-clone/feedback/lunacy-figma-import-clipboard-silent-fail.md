---
name: lunacy-figma-import-clipboard-silent-fail
description: В Lunacy импорт Figma-файла через Ctrl+V (Open URL From Clipboard) может молча ничего не делать — рабочий способ через .fig-файл
metadata:
  type: project
---

При переносе дизайна из Figma в Lunacy стандартный способ из документации Icons8 (Share → Anyone with the link → скопировать ссылку → в Lunacy `Ctrl/Cmd+V`) не сработал: ничего не происходило, без ошибки. Ссылка была публичная, версия Lunacy — судя по интерфейсу (Design/Export вкладки, PLATFORM macOS в правой панели), не самая свежая, возможно поэтому меню отличается от документации (не нашлась кнопка «Import from Figma» на экране Home).

**Рабочий способ:** в Figma `File → Save local copy` (скачивает `.fig`-файл на диск) → в Lunacy `File → Open...` (Ctrl+O) → выбрать скачанный `.fig`. Импорт прошёл успешно, эффект матового стекла (Rectangle56, несколько слоёв blur) перенёсся адекватно.

**Как применять:** если в будущем снова понадобится импортировать/обновлять Figma-файл в Lunacy — сразу предлагать способ через `.fig`-файл, не тратить время на Ctrl+V/Import from Figma, которые не сработали в этой версии Lunacy.
