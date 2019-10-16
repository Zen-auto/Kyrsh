import { createStore } from 'react-redux';

import reducer from './reducers';

const store = createStore(reducer);
export default store;