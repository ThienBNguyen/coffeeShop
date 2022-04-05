import React from 'react';
import DessertImages from '../../../../resouces/images/menuImages/dessertImages';
import './SubMenu.scss';
import { Card, Button } from 'react-bootstrap';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useSelector, useDispatch } from 'react-redux'
import { getProducts as listProducts } from "../../../../action/cartActions/productActions"
import { Link } from "react-router-dom"
const SubMenuDesserts = () => {
  const dispatch = useDispatch()
  const getProducts = useSelector((state) => state.getProducts)
  const { products, loading, error } = getProducts

  const menuDesserts = products.map(function (item, i) {
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
            <Button variant="primary"><AddShoppingCartIcon /></Button>

          </Card.Body>{' '}
        </Card>
      );
    }
  });
  return <div className="SubMenuItems">{menuDesserts}</div>;
};

export default SubMenuDesserts;
