const initialState = {
  goods: [],
  productsInCart: 0,
  loading: true,
  cartItems: [],
  orderTotal: 0
};

const reducer = (state = initialState, action) => {

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
    case 'GOOD_ADDED_TO_CART':
      const goodId = action.payload.goodId;
      const categoryId = action.payload.categoryId;
      const itemIndex = state.goods[categoryId].findIndex(({id}) => id === goodId);
      const item = state.goods[categoryId][itemIndex];

      const newItem = {
        ...item,
        inCart: true
      };

      const category = [
        ...state.goods[categoryId].slice(0, itemIndex),
        newItem,
        ...state.goods[categoryId].slice(itemIndex + 1),
      ];

      const obj = {
        ...state,
        goods: {
          ...state.goods,
          [categoryId]: category
        },
        cartItems: [
          ...state.cartItems,
          newItem
        ],
        ...state.productsInCart++,
        orderTotal: state.orderTotal + item.price
      };

      return obj;

    default:
      return state;
  }
};

export default reducer;