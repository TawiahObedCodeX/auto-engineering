// postcss.config.mjs
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // Use this instead of 'tailwindcss'
    'autoprefixer': {},
  },
};

export default config;