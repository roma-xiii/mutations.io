# mutations.io UI generators

Этот репозиторий использует Turborepo и кастомные генераторы (`turbo gen`) для быстрой генерации UI‑компонентов в пакете `@repo/ui`.

## Создание UI‑компонента

1. Запусти генератор UI‑компонентов:

```bash
npm run gen:ui
```

2. Ответь на вопросы в консоли:

- **Name of the UI component** – имя компонента (например, `button-save`).
- **Where to create the component?** – выбираешь область:
  - `Bricks (ui/src/bricks)`
  - `Blocks (ui/src/blocks)`
  - `Compositions (ui/src/compositions)`
  - `Layouts (ui/src/layouts)`
  - `Icons (ui/src/icons)`
- **Create separate props file?** – `Yes/No`, создавать ли отдельный `*.props.ts` файл.

3. В результате генератор:

- создаёт папку `packages/ui/src/<scope>/<name>/`;
- добавляет в неё:
  - файл компонента с нужным суффиксом:
    - `*.brick.tsx` → `NameBrick`
    - `*.block.tsx` → `NameBlock`
    - `*.composition.tsx` → `NameComposition`
    - `*.layout.tsx` → `NameLayout`
    - `*.icon.tsx` → `NameIcon`
  - локальный `index.ts` с экспортом компонента;
  - (опционально) `*.props.ts` с интерфейсом пропсов;
- обновляет `index.ts` внутри выбранной папки (`bricks`, `blocks`, `compositions`, `layouts`, `icons`), добавляя `export * from "./<name>";`.

## Использование компонентов в приложениях

Пакет `@repo/ui` экспортирует все компоненты через `packages/ui/src/index.ts`, поэтому в приложениях (например, `apps/client-account`) их можно импортировать так:

```tsx
import { ButtonBrick, ModalFormComposition, EditIcon } from '@repo/ui';
```
