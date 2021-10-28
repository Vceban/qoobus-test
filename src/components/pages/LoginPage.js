import React, {useState} from "react";
import {Link} from "react-router-dom";
import useForm from "./useForm";
import validate from "./validateInfo";
import { Redirect } from 'react-router';

const LoginPage = ({}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const{ handleChange, submitHandler, values, errors } = useForm(validate);
    {
        console.log(isLoggedIn)
        if(isLoggedIn === true){
            return <Redirect to ="/"/>
        }
    }
    return(
    <form onSubmit={submitHandler}>
        <h3>Login</h3>
        <div className="form-group">
            <label>Email</label>
            <input className="form-control"
                   name="email"
                   type="email"
                   placeholder="Email"
                   onChange={handleChange}
                   value={values.email}
            />
            {errors.email && <p>{errors.email} </p>}
        </div>
        <div className="form-group">
            <label>Password</label>
            <input className="form-control"
                   name="password"
                   type="password"
                   placeholder="Password"
                   value={values.password}
                   onChange={handleChange}
            />
            {errors.password && <p>{errors.password} </p>}
        </div>
        <button className="btn btn-primary btn-block"> Login </button>
    </form>
    )
}

export default LoginPage;