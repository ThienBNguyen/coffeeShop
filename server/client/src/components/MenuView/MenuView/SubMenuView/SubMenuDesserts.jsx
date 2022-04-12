import React from 'react';
// import DessertImages from '../../../../resouces/images/menuImages/dessertImages';
import './SubMenu.scss';
import { Card, Button } from 'react-bootstrap';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from "../../../../action/cartActions/cartActions"
const SubMenuDesserts = () => {
  const dispatch = useDispatch()
  const getProducts = useSelector((state) => state.getProducts)
  const { products } = getProducts
  const addToCartHandler = (product) => {
    dispatch(addToCart(product, 1));
  }
  return (<div className="SubMenuItems">{products.map(function (item, i) {
    if (item.food === true) {
      return (
        <Card
          key={i}
          style={{ width: '18rem' }}
          className="bg-transparent border-transparent"
        >
          <Card.Img
            variant="top"
            src={item.imagePath}
            alt={item.imagePath}
            width={300}
            height={300}
          />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.content}</Card.Text>
            <Card.Text>${item.price}</Card.Text>

          </Card.Body>{' '}
          <Button variant="primary" onClick={() => addToCartHandler(item._id)}><AddShoppingCartIcon /></Button>
        </Card>
      );
    } else {
      return null;
    }
  })}</div>);
};

export default SubMenuDesserts;
