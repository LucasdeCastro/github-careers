module.exports = {
  env: {
    browser: true,
    es6: true
  },
  parser: "babel-eslint",
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "babel-eslint"],
  rules: {
    strict: 0,
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    semi: ["error", "always"]
  }
};
