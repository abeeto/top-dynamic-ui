module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["airbnb-base", "prettier"],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "ignorePatterns": ["node_modules/*", "dist/*"],
    "rules": {
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    },
  }