import { combineReducers } from 'redux';
import itemReducer from './authReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import { getProductsReducer, getProductDetailsReducer } from '../reducer/cartReducers/productReducers';
import { cartReducer } from '../reducer/cartReducers/cartReducers';
const rootReducer = combineReducers({
	item: itemReducer,
	error: errorReducer,
	auth: authReducer,
	cart: cartReducer,
	getProducts: getProductsReducer,
	getProductDetails: getProductDetailsReducer
});
export default rootReducer;
