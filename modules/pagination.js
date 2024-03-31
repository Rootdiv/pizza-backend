export const pagination = (goods, count = 4, page) => {
  const pageNum = +page || 1;
  const end = count * pageNum;
  const start = pageNum === 1 ? 0 : end - count;

  const pages = Math.ceil(goods.length / count);

  return {
    pizzas: goods.slice(start, end),
    page: pageNum,
    pages,
  };
};
