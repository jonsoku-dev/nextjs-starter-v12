## install
```bash
yarn create next-app --typescript
yarn add --dev eslint@^7 @typescript-eslint/eslint-plugin
```

## lint, prettier rules
### .eslintrc.json
```json
{
  "plugins": ["@typescript-eslint"],
  "extends": [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error"
  }
}
```