import React, { useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import './SubMenu.css';
// import drinkImg from "../../../../resouces/images/menuImages/drinkImages";
import foodMenu from "../../../../resouces/images/menuImages/menujson";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useDispatch } from 'react-redux'
import { getProducts as listProducts } from "../../../../action/cartActions/productActions"
import { addToCart } from "../../../../action/cartActions/cartActions"
const SubMenuDrinks = () => {
  const dispatch = useDispatch();
  // const getProducts = useSelector((state) => state.getProducts)
  // const { products } = getProducts;
  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])
  const addToCartHandler = (product) => {
    dispatch(addToCart(product, 1));
  }
  // const menuDrinks = products.map((item, i) => {
  //   if (item.drink === true) {
  //     return (
  //       <Card
  //         key={item._id}
  //         style={{ width: '18rem' }}
  //         className="bg-transparent border-transparent"
  //       >
  //         <Card.Img
  //           variant="top"
  //           src={item.imagePath}

  //           alt={item.alt}
  //           width={300}
  //           height={300}
  //         />
  //         <Card.Body  >
  //           <Card.Title>{item.title}</Card.Title>
  //           <Card.Text>{item.content}</Card.Text>
  //           <Card.Text>${item.price} </Card.Text>

  //           {/* <Button><Link to={`/`}>View</Link></Button>  */}
  //         </Card.Body>{' '}
  //         <Button variant="primary" onClick={() => addToCartHandler(item._id)}><AddShoppingCartIcon /></Button>
  //       </Card>
  //     )

  //   } else {
  //     return null
  //   }
  // });

  return <div className="SubMenuItems"> {foodMenu.map(function (item, i) {
    if (item.drink === true) {
      return (
        <Card
          key={i}
          // style={{ width: '18rem' }}
          className="cards bg-transparent border-transparent"
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
  })}</div>;
};

export default SubMenuDrinks;
