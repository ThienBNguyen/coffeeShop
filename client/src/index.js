import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
//provider keep track of store allow access store from anywhere
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
