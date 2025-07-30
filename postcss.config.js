export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {
      overrideBrowserslist: ['> 1%', 'last 2 versions', 'not dead']
    },
    cssnano: {
      preset: 'default'
    }
  }
}