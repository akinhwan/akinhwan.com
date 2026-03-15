module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    // On this Nuxt 2 / ESLint 6 stack the rule leaks its internal "clear"
    // marker into CLI output instead of being consumed by post-processing.
    'vue/comment-directive': 'off'
  }
}
