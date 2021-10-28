import React from 'react';
import useForm from "./useForm";
import validate from "./validateInfo";

const RegisterSuccess = () => {
    const{ values } = useForm(validate);
        return (
            <div className="form-group">
                {console.log(values)}
                <div className="form-success">We have received your request!</div>
            </div>
        );
}

export default RegisterSuccess;