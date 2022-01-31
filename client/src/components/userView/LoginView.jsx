import React, { useState } from 'react';

const LoginView = () => {
    const [logUser, setLogUser] = useState({ email: '', password: '' })
    const divStyle = {
        marginTop: '150px'
    }
    const formStyle = {
        backgroundColor: 'lightGrey'
    }
    return (
        <div className="container w-50" style={divStyle}>
            <form className="p-4" style={formStyle}>
                <h2 className="text-center">Login</h2>
                <div className="form-group">
                    <label>Enter email</label>
                    <input type="email" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Enter password</label>
                    <input type="email" className="form-control" />
                </div>
                <input type="submit" value="submit" />
            </form>
        </div>
    );
}

export default LoginView;
