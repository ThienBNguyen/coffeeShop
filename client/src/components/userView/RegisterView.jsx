
import React, { useState, useCallback, useEffect, } from 'react';
import { connect } from 'react-redux';
import { register } from '../../action/authAction';
import { clearErrors } from '../../action/errorAction';
import { useNavigate } from "react-router-dom";
const RegisterView = ({
    isAuthenticated,
    error,
    register,
    clearErrors
}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState(null);
    const navigate = useNavigate();
    const divStyle = {
        marginTop: '150px'
    }
    const formStyle = {
        backgroundColor: 'lightGrey'
    }
    const handleToggle = useCallback(() => {
        // Clear errors
        clearErrors();
    }, [clearErrors]);

    const handleChangeName = (e) => setName(e.target.value);
    const handleChangeEmail = (e) => setEmail(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);

    const handleOnSubmit = (e) => {
        e.preventDefault();

        // Create user object
        const user = {
            name,
            email,
            password
        };
        // Attempt to login
        register(user);
    };

    useEffect(() => {
        // Check for register error
        if (error.id === 'REGISTER_FAIL') {
            setMsg(error.msg.msg);
        } else {
            setMsg(null);
        }

        // If authenticated, redirect
        if (isAuthenticated) {
            navigate('/')
        }
    }, [error, handleToggle, isAuthenticated, navigate]);

    return (
        <div className="container w-50 " style={divStyle}>
            <h1>Register</h1>
            {msg ? (<p className="btn btn-danger">{msg}</p>) : null}
            <form onSubmit={handleOnSubmit} className="p-4 " style={formStyle}>
                <div className="form-group">
                    <label for="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        placeholder="name"
                        onChange={handleChangeName}
                    />
                </div>

                <div className="form-group">
                    <label>email</label>
                    <input className="form-control" type="email"
                        name="email"
                        id="email" onChange={handleChangeEmail}></input>
                </div>
                <div className="form-group">
                    <label>password               </label>
                    <input className="form-control" type="password"
                        name="password"
                        id="password"
                        onChange={handleChangePassword}></input>
                </div>
                <button className="btn btn-primary" >Register</button>
            </form>

        </div>
    );

};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps, { register, clearErrors })(
    RegisterView
);