module.exports = {
  "extends": ["react-app"],
  "rules": {
  },
  "overrides": [
    {
      "files": ["**/*.js?(x)"],
      "rules": {
// ******** add ignore rules here *********
        "react/no-unescaped-entities": "off",
        "react/jsx-no-comment-textnodes": "off",
        "react/display-name": "off",
        "react/prop-types": "off",
        "no-unused-vars": "off"
      }
    }
  ]
}