module.exports = {
  extends: 'airbnb',
  plugins: ['import', 'jsx-a11y', 'react'],
  rules: {
    'react/jsx-filename-extension': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react/prop-types': 0,
  },
  globals: {
    document: 1,
  },
  parser: 'babel-eslint',
  env: { browser: 1 },
};
