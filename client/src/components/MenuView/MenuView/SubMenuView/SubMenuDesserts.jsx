import React, { } from 'react';
// import DessertImages from '../../../../resouces/images/menuImages/dessertImages';
import foodMenu from "../../../../resouces/images/menuImages/menujson";
import './SubMenu.css';
import { Card, Button } from 'react-bootstrap';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from "../../../../action/cartActions/cartActions"
const SubMenuDesserts = () => {
  const dispatch = useDispatch()
  const getProducts = useSelector((state) => state.getProducts)
  const { products } = getProducts
  console.log(products);
  const addToCartHandler = (product) => {
    dispatch(addToCart(product, 1));
  }
  console.log(foodMenu);
  return (
    <div className="SubMenuItems">
      {foodMenu.map(function (item, i) {
        if (item.food === true) {
          return (
            <Card
              key={i}
              // style={{ width: '18rem' }}
              className="cards bg-transparent border-transparent "
            >
              <Card.Img
                variant="top"
                src={item.imagePath}
                alt={item.imagePath}
                className='card-img'
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
          return null
        }
      })}</div>
  );
};

export default SubMenuDesserts;
