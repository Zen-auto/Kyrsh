
const goodsLoaded = (newGoods) => {
  return {
    type: 'GOODS_LOADED',
    payload: newGoods
  };
};

export {
  goodsLoaded
};