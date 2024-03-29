import axios from 'axios';
import { returnErrors } from './errorAction';
import {
	USER_LOADED,
	USER_LOADING,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT_SUCCESS,
	REGISTER_SUCCESS,
	REGISTER_FAIL
} from './types';

export const loadUser = () => (dispatch, getState) => {
	//User loading
	dispatch({ type: USER_LOADING });
	axios
		.get('https://coffee-nslh.onrender.com/', tokenConfig(getState))
		.then((res) =>
			dispatch({
				type: USER_LOADED,
				payload: res.data
			})
		)
		.catch((err) => {
			dispatch(returnErrors(err.response.data, err.response.status));
			dispatch({
				type: AUTH_ERROR
			});
		});
};
//register User
export const register = ({ name, email, password }) => (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};
	const body = JSON.stringify({ name, email, password });

	axios
		.post('https://coffee-nslh.onrender.com/user/create', body, config)
		.then((res) =>
			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data
			})
		)
		.catch((err) => {
			dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
			dispatch({
				type: REGISTER_FAIL
			});
		});
};
//login user
export const login = ({ email, password }) => (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};
	const body = JSON.stringify({ email, password });

	axios
		.post('/user/login', body, config)
		.then((res) =>
			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data
			})
		)
		.catch((err) => {
			dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'));
			dispatch({
				type: LOGIN_FAIL
			});
		});
};
//logout user
export const logout = () => {
	return {
		type: LOGOUT_SUCCESS
	};
};

export const tokenConfig = (getState) => {
	//get token from localstorage
	const token = getState().auth.token;
	//headers
	const config = {
		headers: {
			'Content-type': 'applicaiton/json'
		}
	};
	//if token, add to header
	if (token) {
		config.headers['x-auth-token'] = token;
	}
	return config;
};
