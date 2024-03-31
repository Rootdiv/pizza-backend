export const sortBy = (data, params) =>
  data.sort((a, b) => {
    if (params.order === 'asc') {
      if (params.sortby === 'price') {
        return a.price < b.price ? -1 : 1;
      }
      if (params.sortby === 'rating') {
        return a.rating < b.rating ? -1 : 1;
      }
      if (params.sortby === 'title') {
        return a.title < b.title ? -1 : 1;
      }
    } else {
      if (params.sortby === 'price') {
        return a.price > b.price ? -1 : 1;
      }
      if (params.sortby === 'rating') {
        return a.rating > b.rating ? -1 : 1;
      }
      if (params.sortby === 'title') {
        return a.title > b.title ? -1 : 1;
      }
    }
  });
