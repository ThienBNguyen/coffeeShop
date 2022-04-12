import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Typography, Button } from '@material-ui/core';
const AddressForm = ({ addressForm }) => {
    const { register, handleSubmit } = useForm()
    return (
        < >
            <Typography gutterBottom>Shipping address</Typography>
            <Form onSubmit={handleSubmit((data) => {
                addressForm(data)
            })}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First name</Form.Label>
                    <Form.Control {...register("firstName")} required type="text" placeholder="First Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control {...register("lastName")} required type="text" placeholder="Last Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Address line 1</Form.Label>
                    <Form.Control {...register("address")} required type="text" placeholder="Address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control {...register("email")} required type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>City</Form.Label>
                    <Form.Control {...register("city")} required type="text" placeholder="City" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Zip / Postal code</Form.Label>
                    <Form.Control {...register("zip")} required type="text" placeholder="Zip / Postal code" />
                </Form.Group>
                <br />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {/* using react router dom LINK on the back to cart  */}
                    <Button variant="outlined"><Link className="color" to="/cart" >Back to Cart</Link></Button>
                    {/* using method handle submit to go next payment detail */}
                    <Button variant="contained" type="submit" color="primary">Next</Button>
                </div>
            </Form >
        </>
    );
}

export default AddressForm;
