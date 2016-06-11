# ESLint Config

[![Build Status](https://travis-ci.org/troyblank/eslint-config.svg?branch=master)](https://travis-ci.org/troyblank/eslint-config)

This is a central location to keep eslinting shared amongst all of the projects.

## Requirements

* Node: 5.10.1

### Usage
In your root `.eslintrc.json`, extend the `es6.js` ruleset:

```
{
    "extends": "@troyblank/eslint-config-troyblank/configs/es6.js"
}
```

### Test

    npm run test
