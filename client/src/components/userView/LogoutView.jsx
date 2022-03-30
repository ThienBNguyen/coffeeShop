import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { Navbar } from "react-bootstrap";
import { logout } from '../../action/authAction'
const LogoutView = ({ logout }) => {
    return (
        <Fragment>
            <Navbar onClick={logout} className="nav-link" to="/home">
                Logout
          </Navbar>
        </Fragment>
    );
}

export default connect(null, { logout })(LogoutView);
