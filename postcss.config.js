export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      overrideBrowserslist: ['> 1%', 'last 2 versions', 'not dead']
    },
    cssnano: {
      preset: 'default'
    }
  }
}