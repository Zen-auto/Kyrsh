
const goodsLoaded = (newGoods) => {
  return {
    type: 'FETCH_GOODS_SUCCESS',
    payload: newGoods
  };
};

const goodsRequested = () => {
  return {
    type: 'FETCH_GOODS_REQUEST'
  }
};

const fetchGoods = (bookstoreService, dispatch) => () => {
  dispatch(goodsRequested());
  bookstoreService.getGoods()
    .then((data) => dispatch(goodsLoaded(data)))
    // .catch(err => dispatch(goodsError(err)));
};

const goodAddedToCart = (bookId) => {
  return {
    type: 'GOOD_ADDED_TO_CART',
    payload: bookId
  };
};

export {
  fetchGoods,
  goodAddedToCart
};