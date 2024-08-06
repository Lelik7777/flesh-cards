const baseConfig = require("@it-incubator/eslint-config");

module.exports = {
  extends: ["@it-incubator/eslint-config", "plugin:storybook/recommended"],
  rules: {
    ...baseConfig.rules,
    "lines-around-comment": ["error", {
      "afterBlockComment": true,
      "afterLineComment": true,
      "beforeBlockComment": true,
      "beforeLineComment": true
    }]
  }
}
