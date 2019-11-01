const initialState = {
  goods: [],
  productsInCart: 0,
  loading: true,
  cartItems: [
    {
      id: 1,
      title: 'Book 1',
      count: 3,
      price: 150
    },
    {
      id: 2,
      title: 'Book 2',
      count: 2,
      price: 90
    }
  ],
  orderTotal: 220
};

const reducer = (state = initialState, action) => {

  console.log(action.type)

  switch(action.type) {
    case 'FETCH_GOODS_REQUEST':
      return {
        ...state,
        books: [],
        loading: true
      };
    case 'FETCH_GOODS_SUCCESS':
      return {
        ...state,
        goods: action.payload,
        loading: false
      };

    default:
      return state;
  }
};

export default reducer;