module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        './es6.js'
    ],
    settings: {
        "import/resolver": {
          "node": {
            "extensions": [".js", ".jsx", ".ts", ".tsx"]
          }
        }
    }
};
