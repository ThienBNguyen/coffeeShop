import React from 'react'
import { useSelector } from "react-redux"
function RegisterView() {
    const divStyle = {
        marginTop: '150px'
    }
    const formStyle = {
        backgroundColor: "lightGrey"
    }
    const users = useSelector((state) => state.users)
    console.log(users)
    return (
        <div className="container w-50 " style={divStyle}>
            <form className="  p-4 " style={formStyle}>
                <div className="form-group">
                    <label>Name </label>
                    <input className="form-control" type="text" name="name"></input>
                </div>

                <div className="form-group">
                    <label>email</label>
                    <input className="form-control" type="email" name="email"></input>
                </div>
                <div className="form-group">
                    <label>password               </label>
                    <input className="form-control" type="password" name="password"></input>
                </div>
                <input type="submit" value="submit" className="btn btn-primary" />
            </form>
            {/* </div>
            </div> */}
        </div>
    );
}

export default RegisterView;