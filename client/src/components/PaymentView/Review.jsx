import React from 'react';
import { ListGroup, Badge } from 'react-bootstrap';

const Review = ({ item, getCartSubTotal }) => {
    const itemTotal = item.qty * item.price;
    return (
        <div className="container w-50">
            <h3 gutterBottom>Shipping address</h3>
            {item.map((item) => (
                <ListGroup as="ol" numbered>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <h5 variant="dark" className="fw-bold">{item.title}</h5>
                            <span>Quantity:</span> <span>{item.qty}</span>
                        </div>
                        <Badge bg="primary" pill>
                            ${item.price * item.qty}
                        </Badge>
                    </ListGroup.Item>
                </ListGroup>
            ))}
            <h5 variant="dark">Total</h5>
            <h5>${getCartSubTotal()}</h5>

        </div>
    );
}

export default Review;
