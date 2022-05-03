import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { login } from '../../action/authAction';
import { clearErrors } from '../../action/errorAction';
import { useNavigate } from 'react-router-dom'
const LoginView = ({
    isAuthenticated,
    error,
    login,
    clearErrors
}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState(null)
    const divStyle = {
        marginTop: '150px'
    }
    const formStyle = {
        backgroundColor: 'lightGrey'
    }
    const navigate = useNavigate()
    const handleToggle = useCallback(() => {
        // Clear errors
        clearErrors();
    }, [clearErrors,]);
    const handleChangeEmail = (e) => setEmail(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { email, password };
        login(user)
    }
    useEffect(() => {
        // Check for register error
        if (error.id === 'LOGIN_FAIL') {
            setMsg(error.msg.msg);
        } else {
            setMsg(null);
        }


        // If authenticated, redirect modal
        if (isAuthenticated) {
            navigate('/')
        }
    }, [error, handleToggle, isAuthenticated, navigate]);
    return (
        <div className="container w-50" style={divStyle}>
            <form onSubmit={handleSubmit} className="p-4" style={formStyle}>
                <h1 className="text-center titleColor">Login</h1>
                {msg ? <p className="btn btn-danger">{msg}</p> : null}
                <div className="form-group">
                    <label>Enter email</label>
                    <input type="email" className="form-control" value={email} onChange={handleChangeEmail} />
                </div>
                <div className="form-group">
                    <label>Enter password</label>
                    <input type="password" className="form-control" value={password} onChange={handleChangePassword} />
                </div>
                <button className="btn btn-primary" value="submit" > Submit</button>
            </form>
        </div>
    );
}
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});
export default connect(mapStateToProps, { login, clearErrors })(LoginView);
