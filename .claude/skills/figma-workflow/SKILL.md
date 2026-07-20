---
name: figma-workflow
description: Читать дизайн из Figma (цвета, шрифты, отступы, ассеты) перед вёрсткой новой секции или при вопросах про значения из макета
---

## Когда использовать
При реализации любой новой секции из Figma или при вопросах про цвета/отступы/шрифты.

⚠️ Figma MCP на бесплатном тарифе ограничен ~6 вызовами чтения в месяц (см. `retrospectives/2026-06-18_figma-export-rate-limit.md`). Не тратить вызовы на угадывание — сначала `get_metadata`, потом точечно `get_design_context` по нужному nodeId.

## Порядок работы

1. **Если файл/структура незнакомы — сначала `get_metadata`** (без nodeId), чтобы не потерять вызов не на той странице (см. `ai-clone/feedback/figma-start-with-metadata.md`)

2. **Получить дизайн-контекст секции:**
   - Вызвать `get_design_context` с `fileKey: rA5AGt3zuM05YM7lzS0CoC` и нужным `nodeId`
   - NodeId основных секций:
     - Основной лендинг: `0:613`
     - Контент (портфолио): `0:44`
     - Services: `0:773`
     - Документы: `0:350`
     - Технология: `0:212`

3. **Извлечь:** цвета (HEX), шрифты (family, size, weight), отступы (padding, gap), border-radius

4. **Перенести в CSS-переменные** (`App.css`) если новый токен

5. **Скачать ассеты:** картинки → `public/images/` через `download_assets`; если результат > 2 МБ — перескачать с `defaultScale: 0.5` (см. `ai-clone/feedback/figma-download-assets-scale.md`)

6. Перед версткой overlay/blend-режимов и SVG-логотипов свериться с граблями:
   - `ai-clone/feedback/figma-passthrough-blend-mode.md`
   - `ai-clone/feedback/svg-fill-no-css-vars-in-img.md`

## Figma файл
- fileKey: `rA5AGt3zuM05YM7lzS0CoC`
- Одна страница: Page 1 (0:1)

## Известное будущее
Есть план перехода на Penpot (`plans/2026-07-20-workflow-modernization.md`, часть 4) из-за лимита в 6 запросов/месяц. Пока план не завершён — этот файл остаётся источником правды.
