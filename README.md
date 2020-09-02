# Storybook HTML

- This repo tests that specific addons work OK for HTML stories - i.e. `docs`, `controls` and `a11y`.
- `npm run storybook`.

## Useful Storybook documentation

- [recipes](https://github.com/storybookjs/storybook/blob/next/addons/docs/docs/recipes.md).
- [doc-blocks](https://storybook.js.org/docs/react/writing-docs/doc-blocks).
- [MDX](https://storybook.js.org/docs/react/writing-docs/mdx).
- [args](https://storybook.js.org/docs/react/writing-stories/args).

## Accessing external static UI resources

- The `.storybook\preview-head.html` in this repo contains a `<link>` statement to an **external CSS file** which has been bundled by Parcel in [this external repo](https://github.com/basher/parcel-boilerplate-storybook).
- `npm start` to start the server in the external repo.
