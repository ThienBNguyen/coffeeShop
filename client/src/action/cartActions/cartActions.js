import * as actionTypes from '../types';

import axios from ' axios';

export const addToCart = (id, qty) => async (dispatch, getState) => {
	const { data } = await axios.get(`/menu/${id}`);
	dispatch({
		type: actionTypes.ADD_TO_CART,
		payload: {
			product: data._id,
			name: data.name,
			imagePath: data.imagePath,
			price: data.price,
			countInStock: data.countInStock,
			drink: data.drink,
			food: data.food,
			qty
		}
	});
	localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};
export const removeFromCart = (id) => (dispatch, getState) => {
	dispatch({
		type: actionTypes.REMOVE_FROM_CART,
		payload: id
	});
	localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};