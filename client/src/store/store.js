import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/index';
// dev tools middleware
import { composeWithDevTools } from 'redux-devtools-extension';
const initialState = {};

const middleware = [ thunk ];
const cartItemsInLocalStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
const INITIAL_STATE = {
	cart: {
		cartItems: cartItemsInLocalStorage
	}
};
const store = createStore(rootReducer, INITIAL_STATE, compose(composeWithDevTools(applyMiddleware(...middleware))));

export default store;
