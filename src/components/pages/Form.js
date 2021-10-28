import React, { useState } from "react";
import RegisterPage from "./RegisterPage";
import RegisterSuccess from "./RegisterSuccess";
import validateInfo from "./validateInfo";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    function submitForm(){
        setIsSubmitted(true);
    }

    function submitLoginForm(){
        setIsLoggedIn(true);
    }
    return(
        <div>
            {console.log("here")}
            {!isSubmitted?(<RegisterPage submitForm={submitForm}/>) : (<RegisterSuccess/>)}
        </div>
    )
}
export default Form