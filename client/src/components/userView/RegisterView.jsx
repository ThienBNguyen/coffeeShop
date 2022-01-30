import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { createUser } from '../../actions/users'
function RegisterView() {
    const [postUser, setDataUser] = useState({ name: '', email: '', password: '' })

    const divStyle = {
        marginTop: '150px'
    }
    const formStyle = {
        backgroundColor: 'lightGrey'
    }
    const users = useSelector((state) => state.users)
    console.log(users)
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDedault();
        dispatch(createUser(postUser))
        console.log(dispatch(createUser(postUser)))
    }
    return (
        <div className="container w-50 " style={divStyle}>
            <form className="  p-4 " style={formStyle}>
                <div className="form-group">
                    <label>Name </label>
                    <input className="form-control" type="text" name="name" onChange={(e) => setDataUser({ name: e.target.value })}></input>
                </div>

                <div className="form-group">
                    <label>email</label>
                    <input className="form-control" type="email" name="email" value={postUser.email} onChange={(e) => setDataUser({ email: e.target.value })}></input>
                </div>
                <div className="form-group">
                    <label>password               </label>
                    <input className="form-control" type="password" name="password" value={postUser.password} onChange={(e) => setDataUser({ password: e.target.value })}></input>
                </div>
                <input type="submit" value="submit" className="btn btn-primary" onSubmit={handleSubmit} />
            </form>
            {/* </div>
            </div> */}
        </div>
    );
}

export default RegisterView;