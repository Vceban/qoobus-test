import {useState, useEffect} from "react";

const useForm = (callback, validate) => {
    const[values, setValues] = useState({
        first_name:'',
        last_name:'',
        email:'',
        password:'',
        password2: '',
    })
    const[errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        })
        console.log("==========")
    }

    const handleSubmit = e => {
        console.log("-----------")
        e.preventDefault()
        setErrors(validate(values));
        setIsSubmitting(true);
    }
    useEffect(()=>{
        if(Object.keys(errors).length === 0 && isSubmitting){
            callback()
        }
    },
        [errors]
    )
    return{handleChange, values, handleSubmit, errors}
}
export default useForm;