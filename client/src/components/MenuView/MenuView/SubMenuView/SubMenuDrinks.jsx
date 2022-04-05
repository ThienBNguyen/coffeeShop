import React, { useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import DrinkImages from '../../../../resouces/images/menuImages/drinkImages';
import './SubMenu.scss';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useSelector, useDispatch } from 'react-redux'
import { getProducts as listProducts } from "../../../../action/cartActions/productActions"
import { Link } from "react-router-dom"
const SubMenuDrinks = () => {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts)
  const { products, loading, error } = getProducts;
  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])
  const menuDrinks = products.map((image, i) => {
    if (image.drink === true) {
      return (
        <Card
          key={i}
          style={{ width: '18rem' }}
          className="bg-transparent border-transparent"
        >
          <Card.Img
            variant="top"
            src={image.imagePath}

            alt={image.alt}
            width={300}
            height={300}
          />
          <Card.Body>
            <Card.Title>{image.title}</Card.Title>
            <Card.Text>{image.content}</Card.Text>
            <Card.Text>${image.price} </Card.Text>
            <Button variant="primary"><AddShoppingCartIcon /></Button>
            {/* <Button><Link to={`/`}>View</Link></Button>  */}
          </Card.Body>{' '}
        </Card>
      );
    }
  });

  return <div className="SubMenuItems">{menuDrinks}</div>;
};

export default SubMenuDrinks;
