import React from 'react';
import { ListGroup, Badge } from 'react-bootstrap';
import { Typography } from '@material-ui/core';

const Review = ({ item, getCartSubTotal }) => {
    const itemTotal = item.qty * item.price;
    return (
        <div className="">
            <Typography gutterBottom>Order Summary</Typography>
            {item.map((item) => (
                <ListGroup as="ol" numbered>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <Typography variant="h6" gutterButton className="fw-bold">{item.title}</Typography>
                            <span>Quantity:</span> <span>{item.qty}</span>
                        </div>
                        <Badge bg="primary" pill>
                            ${item.price * item.qty}
                        </Badge>
                    </ListGroup.Item>
                </ListGroup>
            ))}
            <Typography variant="h6" >Total</Typography>
            <Typography variant="h6" >${getCartSubTotal()}</Typography>

        </div>
    );
}

export default Review;
