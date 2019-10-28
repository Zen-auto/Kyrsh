const initialState = {
  goods: [],
  productsInCart: 0,
  loading: true
};

const reducer = (state = initialState, action) => {

  switch(action.type) {
    case 'FETCH_GOODS_REQUEST':
      return {
        books: [],
        loading: true
      };
    case 'FETCH_GOODS_SUCCESS':
      return {
        goods: action.payload,
        loading: false
      };

    default:
      return state;
  }
};

export default reducer;