import React, { useState } from "react";
import RegisterPage from "./RegisterPage";
import RegisterSuccess from "./RegisterSuccess";
import validateInfo from "./validateInfo";

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm(){
        setIsSubmitted(true);
    }
    return(
        <div>
            {console.log("here")}
            {!isSubmitted?(<RegisterPage submitForm={submitForm}/>) : (<RegisterSuccess/>)}
        </div>
    )
}
export default Form