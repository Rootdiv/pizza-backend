export const PORT = 2010;
export const URI_PREFIX = '/pizzas';

export const domain =
  process.env.PROD === 'true' ? 'https://api.rootdiv.ru' : `http://localhost:${PORT}`;
