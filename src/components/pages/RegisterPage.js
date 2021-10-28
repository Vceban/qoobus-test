import  React from "react";
import useForm from "./useForm";
import validate from  './validateInfo'
import './Form.css'

const RegisterPage  = ({submitForm}) => {
        const{ handleChange, values, handleSubmit, errors } = useForm(submitForm,validate);
    return (
        <form onSubmit={handleSubmit}>
            <h3>Sign Up</h3>
            <div className="form-group">
                <label>First Name</label>
                <input onChange={handleChange}
                       name='first_name'
                       value={values.first_name}
                       type="text"
                       className="form-control"
                       placeholder="First Name" />
                {errors.first_name && <p>{errors.first_name}</p>}
            </div>
            <div className="form-group">
                <label>Last Name</label>
                <input onChange={handleChange}
                       name='last_name'
                       value={values.last_name}
                       type="text"
                       className="form-control"
                       placeholder="Last Name" />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input onChange={handleChange}
                       value={values.email}
                       name='email'
                       type="email"
                       className="form-control"
                       placeholder="Email"/>
                {errors.email && <p>{errors.email} </p>}
            </div>
            <div className="form-group">
                <label>Password</label>
                <input onChange={handleChange}
                       value={values.password}
                       type="password"
                       name='password'
                       className="form-control"
                       placeholder="Password"/>
                {errors.password && <p>{errors.password} </p>}
            </div>
            <div className="form-group">
                <label>Confirm Password</label>
                <input onChange={handleChange}
                       value={values.password2}
                       name='password2'
                       type="password2"
                       className="form-control"
                       placeholder="Confirm Password"/>
                {errors.password2 && <p>{errors.password2} </p>}
            </div>
            {console.log(values)}
            <button className="btn btn-primary btn-block">Sign Up</button>
        </form>
    );
};
export default RegisterPage;