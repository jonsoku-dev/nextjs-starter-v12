## Install

```bash
$ npx sb init
```

## with storybook theme

https://storybook.js.org/addons/storybook-addon-styled-component-theme

```bash
$ yarn add --dev storybook-addon-styled-component-theme --dev
```

## Postcss

```bash
yarn add --dev @storybook/addon-postcss
```

## storybook proposal error

https://babeljs.io/docs/en/babel-plugin-proposal-private-methods
https://babeljs.io/docs/en/babel-plugin-proposal-private-property-in-object

```bash
$ yarn add --dev @babel/plugin-proposal-private-methods @babel/plugin-proposal-private-property-in-object
```

`.babelrc`

```json
{
  "presets": ["next/babel"],
  "plugins": [
    [
      "styled-components",
      {
        "ssr": true
      }
    ],
    [
      "transform-remove-console",
      {
        "exclude": ["error", "warn"]
      }
    ],
    [
      "@babel/plugin-proposal-private-methods",
      {
        "loose": true
      }
    ],
    [
      "@babel/plugin-proposal-private-property-in-object",
      {
        "loose": true
      }
    ]
  ],
  "env": {
    "development": {
      "compact": false
    }
  }
}
```
