# slides

Levi Zitting's presentations, built with Vue 3, Vite, and Reveal.js.

## Adding a presentation

1. Create `src/presentations/YourPresentation/` with the deck and its assets.
2. Add a `presentation.ts` file in that folder, following an existing deck's definition. Give it a unique `name` and `path`, a homepage `title`, an `order`, and a lazy component import.
3. Use `PresentationWrapper` for the site's backgrounds and logo, or `RevealPresentation` for a custom theme. Both manage Reveal initialization and cleanup. Do not initialize Reveal again in the deck.
4. Keep custom CSS under a deck-specific class. Put slides inside the wrapper's default slot and optional backgrounds in `RevealPresentation`'s `decorations` slot.

The registry in `src/presentations/index.ts` discovers definitions automatically. The router and homepage read the same registry, so adding a deck does not require editing either file.

`RevealPresentation` accepts an `options` prop for deck-specific Reveal settings. Its `plugins` array adds to the shared highlighting and speaker-notes plugins.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
