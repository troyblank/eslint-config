# ESLint Config

This is a central location to keep eslinting shared amongst all of the projects.

## Requirements

* npm >= 3.8.3

### Usage
In your root `.eslintrc.json`, extend the `es6.js` ruleset:

```
{
    "extends": "@troyblank/eslint-config-troyblank/configs/es6.js"
}
```

### Test

    npm run lint
