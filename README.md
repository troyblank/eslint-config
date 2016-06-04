# ESLint Config

This is a central location to keep eslinting shared amongst all of the projects.

### Usage
In your root `.eslintrc.json`, extend the `es6.js` ruleset:

```
{
    "extends": "troyblank-eslint-config/configs/es6.js"
}
```

### Test

    npm run lint
