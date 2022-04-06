import React from 'react';
import { Link } from 'react-router-dom';
import "./CartItem.css"
import DeleteIcon from '@material-ui/icons/Delete';
const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
	return (
		<div className="cartitem">
			<div className="cartitem__image">
				<img src={item.imagePath} alt={item.title} />
			</div>
			<Link to={`/product/${item.product}`} className="cartItem__name">
				<p>{item.title}</p>
			</Link>
			<p className="cartitem__price">${item.price}</p>
			<select
				value={item.qty}
				onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
				className="cartItem__select"
			>
				{[...Array(item.countInStock).keys()].map((x) => (
					<option key={x + 1} value={x + 1}>
						{x + 1}
					</option>
				))}
			</select>
			<button className="cartItem__deleteBtn" onClick={() => removeHandler(item.product)}>
				<DeleteIcon />
			</button>
		</div>
	);
};

export default CartItem;
