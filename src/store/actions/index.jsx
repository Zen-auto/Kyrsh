
const goodsLoaded = (newGoods) => {
  return {
    type: 'GOODS_LOADED',
    payload: newGoods
  };
};

const booksRequested = () => {
  return {
    type: 'BOOKS_REQUESTED'
  }
};

export {
  goodsLoaded,
  booksRequested
};