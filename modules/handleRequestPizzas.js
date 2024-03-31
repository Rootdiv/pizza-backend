import { getPizzas } from './getPizzas.js';
import { sortBy } from './sortBy.js';
import { pagination } from './pagination.js';

export const handleRequestPizzas = (res, query) => {
  let data = getPizzas();

  if (query.sortby) {
    data = sortBy(data, query);
  }

  if (query.search) {
    const search = query.search.trim().toLowerCase();
    data = data.filter(item => item.title.toLowerCase().includes(search));
  }

  if (query.category) {
    data = data.filter(item => item.category === +query.category);
  }

  if (query.limit && query.limit > 0) {
    data = pagination(data, query.limit, query.page);
  }

  res.end(JSON.stringify(data));
};
