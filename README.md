# Сервер API для React Pizza и Vue 3 Pizza

Моя версия сервера для React Pizza и Vue 3 Pizza

Доступные методы:

- `GET /pizzas` - получение всех машин из категории sport

- `GET /pizzas?page={page}` - постраничный вывод пицц

- `GET /pizzas?limit={limit}` - количество выводимых пицц

- `GET /pizzas?category={category}` - получение пицц выбранной категории

- `GET /pizzas?sortby={sortby}` - сортировка пицц

- `GET /pizzas?search={search}` - поиск пицц

## Запуск API на хостинге:

- Установить Node.js по инструкции хостинга
- Установить pm2: npm install pm2 -g
- Выполнить: pm2 startup
- В каталоге API выполнить: pm2 start
- Выполнить: pm2 save
- Настроить web-сервер Apache или Nginx в режиме прокси
