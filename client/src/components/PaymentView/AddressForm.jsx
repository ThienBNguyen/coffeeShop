import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
const AddressForm = ({ addressForm }) => {
    const { register, handleSubmit } = useForm()
    return (
        < >
            <h3 gutterBottom>Shipping address</h3>
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
                    <Button className="color-primary"><Link to="/cart" >Back to Cart</Link></Button>
                    {/* using method handle submit to go next payment detail */}
                    <Button type="submit" color="primary">Next</Button>
                </div>
            </Form>
        </>
    );
}

export default AddressForm;
