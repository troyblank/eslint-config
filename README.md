# ESLint Config

![Pipe Status](https://github.com/troyblank/eslint-config/actions/workflows/test.yml/badge.svg)

This is a central location to keep eslinting shared amongst all of the projects.

## Global Requirements
* nvm

### Usage
In your root `.eslintrc.json`, extend the `typescript.js` or `es6.js` and `jest.js` ruleset:

```
{
    "extends": "@troyblank/eslint-config-troyblank/configs/typescript.js",
    "extends": "@troyblank/eslint-config-troyblank/configs/jest.js",
}
```

For any subfolder that uses react you can also include an `.eslintrc.json` that extends the `react.js` ruleset:

```
{
    "extends": "@troyblank/eslint-config-troyblank/configs/react.js"
}
```

### Test

    npm test
