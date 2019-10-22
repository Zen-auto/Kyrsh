
const goodsLoaded = (newGoods) => {
  return {
    type: 'GOODS_LOADED',
    payload: newGoods
  };
};

const goodsRequested = () => {
  return {
    type: 'GOODS_REQUESTED'
  }
};

export {
  goodsLoaded,
  goodsRequested
};