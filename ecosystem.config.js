module.exports = {
  apps: [
    {
      name: 'pizza',
      script: 'index.js',
      watch: 'index.js',
      env: {
        PROD: true,
      },
    },
  ],
};
