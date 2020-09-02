# Storybook HTML

- This repo tests that specific addons work OK for HTML stories - i.e. `docs`, `controls` and `a11y`.
- `npm run storybook`.

## Useful addon-docs links

- [recipes](https://github.com/storybookjs/storybook/blob/next/addons/docs/docs/recipes.md).
- [doc-blocks](https://storybook.js.org/docs/react/writing-docs/doc-blocks).

## Accessing external static UI resources

- `.storybook\preview-head.html` contains a `<link>` statement to an external CSS file which has been bundled by Parcel in [this external repo](https://github.com/basher/parcel-boilerplate-storybook).
- `npm start` to start the server in the external repo.
