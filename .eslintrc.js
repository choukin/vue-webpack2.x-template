module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'standard',
  plugins: [
    'html'
  ],
  "globals": {
    "Vue":true,
    "$": true,
    "event":true,
    "history":true,
    "session_storage": true,
    "define": true,
    "require": true,
    "alert":true,
    "Swiper" : true,
    "Context" : true,
    "Tool": true,
    "toast": true,
    "messageBox": true,
    "process": true,
    "ReferrerKiller": true,
  },
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 不能有没有使用变量
    "no-unused-vars": ["error", {"args": "none" }],
    // 代码最后一行关闭
    "no-multiple-empty-lines": "off",
    // 函数内添加空行关闭
    "no-trailing-spaces": "off",
    // 不必要非得用骆驼拼接法
    "camelcase": 0,
    // 可以单独使用 __dirname
    "no-path-concat": "off",
    // 设置为0，代表 == 也可以不必要非得 ===
    "eqeqeq": 0
  }
}
