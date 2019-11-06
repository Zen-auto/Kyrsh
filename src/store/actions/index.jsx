
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

const fetchGoods = (goodstoreService, dispatch) => () => {
  dispatch(goodsRequested());
  goodstoreService.getGoods()
    .then((data) => dispatch(goodsLoaded(data)))
    // .catch(err => dispatch(goodsError(err)));
};

const goodAddedToCart = (goodId, categoryId) => {
  return {
    type: 'GOOD_ADDED_TO_CART',
    payload: { goodId: goodId, categoryId: categoryId }
  };
};

export {
  fetchGoods,
  goodAddedToCart
};