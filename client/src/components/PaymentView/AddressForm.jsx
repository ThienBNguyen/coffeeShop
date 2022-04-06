import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const AddressForm = () => {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');
    return (
        <div className="container w-50">
            <h3 gutterBottom>Shipping address</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="text" placeholder="firstName" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" placeholder="lastName" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Address line 1</Form.Label>
                    <Form.Control type="text" placeholder="Address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="City" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Zip / Postal code</Form.Label>
                    <Form.Control type="text" placeholder="Zip / Postal code" />
                </Form.Group>
                <br />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {/* using react router dom LINK on the back to cart  */}
                    <Button className="color-primary"><Link to="/cart" >Back to Cart</Link></Button>
                    {/* using method handle submit to go next payment detail */}
                    <Button type="submit" color="primary">Next</Button>
                </div>

            </Form>
        </div>
    );
}

export default AddressForm;
