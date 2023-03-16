module.exports = {
  apps: [
    {
      name: 'pizza',
      script: 'index.js',
      watch: '.',
      env: {
        HTTP: 'https',
      },
    },
  ],
};
