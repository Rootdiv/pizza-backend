import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';
import { PORT, URI_PREFIX } from './modules/const.js';
import { getPizzas } from './modules/getPizzas.js';
import { handleRequestPizzas } from './modules/handleRequestPizzas.js';

export const DB_FILE = './db.json';

createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') {
    res.end();
    return;
  }

  if (!req.url || !req.url.startsWith(URI_PREFIX)) {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Not Found' }));
    return;
  }

  if (req.url.includes('images')) {
    const filePath = req.url.substring(URI_PREFIX.length + 1);
    const image = readFileSync(`./${filePath}`);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'image/jpeg');
    res.end(image);
    return;
  }

  const query = Object.fromEntries(new URLSearchParams(req.url.split('?')[1]));

  if (req.url.startsWith(URI_PREFIX) && req.method === 'GET') {
    if (Object.keys(query).length === 0) {
      res.end(JSON.stringify(getPizzas()));
      return;
    }
    handleRequestPizzas(res, query);
    return;
  }

  res.statusCode = 404;
  res.end(JSON.stringify({ message: 'Данные не найдены' }));
}).listen(PORT, 'localhost', () => {
  if (process.env.PROD !== 'true') {
    console.log(`Сервер запущен. Вы можете использовать его по адресу http://localhost:${PORT}`);
    console.log('Нажмите CTRL+C, чтобы остановить сервер');
  }
});
