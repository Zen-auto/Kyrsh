const initialState = {
  goods: [],
  productsInCart: 0,
  loading: true
};

const reducer = (state = initialState, action) => {

  switch(action.type) {
    case 'GOODS_REQUESTED':
      return {
        books: [],
        loading: true
      };
    case 'GOODS_LOADED':
      return {
        goods: action.payload,
        loading: false
      };

    default:
      return state;
  }
};

export default reducer;