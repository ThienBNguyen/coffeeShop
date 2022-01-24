import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
//provide keep track of store allow access store from anywhere

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";

import reducers from './reducers'
//import "@fortawesome/fontawesome-free/css/all.min.css";
const store = createStore(reducers, compose(applyMiddleware(thunk)))
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById("root"));
