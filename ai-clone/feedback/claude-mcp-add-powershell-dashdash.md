---
name: claude-mcp-add-powershell-dashdash
description: "claude mcp add ... -- команда --флаг" в PowerShell на Windows не работает — разделитель -- съедается, команда падает на первом же флаге subprocess-а
metadata:
  type: project
---

При подключении Lunacy как MCP-сервера команда `claude mcp add --scope user Lunacy -- "C:\Program Files\Lunacy\Lunacy.exe" -mcp`, запущенная прямо в PowerShell-терминале (Windows), падала с ошибкой `error: unknown option '-mcp'` — как будто `--` не сработал как разделитель, и `-mcp` попал в парсер самой команды `claude`, а не ушёл в subprocess.

`claude mcp add-json` тоже не спас: JSON-конфиг, скопированный из самой Lunacy (`{"command": "...", "args": ["-mcp"]}"`), при передаче через `claude mcp add-json --scope user Lunacy '...'` в PowerShell давал `Invalid configuration: : Invalid input`.

**Рабочий вариант:** та же самая команда `claude mcp add --scope user Lunacy -- "C:\Program Files\Lunacy\Lunacy.exe" -mcp`, но запущенная через Git Bash на той же машине — отработала с первого раза, `claude mcp list` подтвердил `✓ Connected`.

**Как применять:** если подключение MCP-сервера с флагами в команде (`args` вроде `-mcp`, `--foo`) не заводится в PowerShell — не тратить время на варианты `add-json`/эскейпинг кавычек, сразу пробовать через Git Bash (`claude mcp add ... -- ...` в его обычном POSIX-виде). Похоже, дело в том, как PowerShell (а не Node/commander) обрабатывает `--` при передаче аргументов внешней программе.
