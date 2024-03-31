import { readFileSync } from 'node:fs';
import { DB_FILE } from '../index.js';
import { domain, URI_PREFIX } from './const.js';

export const getPizzas = () => {
  const data = JSON.parse(readFileSync(DB_FILE) || '[]');
  // Меняем меняем путь к картинке из базы данных
  const dataPizzas = data.pizzas.map(item => {
    const imageUrl = `${domain}${URI_PREFIX}/images/${item.imageUrl}`;
    return {
      ...item,
      imageUrl,
    };
  });

  return dataPizzas;
};
