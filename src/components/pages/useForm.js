import {useState, useEffect} from "react";

const useForm = (callback, validate) => {
    const[values, setValues] = useState({
        first_name:'',
        last_name:'',
        email:'',
        password:'',
        password2: '',
    })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        setErrors(validate(values));
        setIsSubmitting(true);
        console.log("----")
    }

    const submitHandler = e => {
        e.preventDefault()
        setIsLoggedIn(true);
        console.log(isLoggedIn)
        console.log(`${JSON.stringify(values)}`)
    }

    useEffect(()=>{
        if(Object.keys(errors).length === 0 && isSubmitting){
            callback()
        }
    },
        [errors]
    )
    return{handleChange, values, handleSubmit, errors, submitHandler}
}
export default useForm;