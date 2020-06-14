module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        corejs: 3,
        useBuiltIns: 'entry',
        debug: true,
        bugfixes: true,
        modules: false,
        browserslistEnv: 'example'
      }
    ]
  ]
}