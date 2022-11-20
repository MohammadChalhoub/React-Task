import React, {useState, useEffect} from "react";
import './Register.css'

export default function Register() {

    const initialValues = {username: '', email: '', password: '', passwordConfirmation: ''};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const{name, value} = e.target
        setFormValues({...formValues, [name]: value})
        console.log(formValues)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors)
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues)
        }
    },[formErrors])

    const validate = (values) => {
        const errors = {}
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var passw=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
        if(!values.username){
            errors.username = "Username is required";  
        }

        if(!values.email){
            errors.email = "Email is required";  
        }
        else if (!regex.test(values.email)){
            errors.email = "this is not a valide email"
        }

        if(!values.password){
            errors.password = "Password is required";  
        }
        else if (values.password.length < 7){
            errors.password = "your password should be more than 7 characters "
        }
        else if (!passw.test(values.password)){
            errors.password = "missing 1 Capital letter, 1 number, 1 special character"
        }

        if(!values.passwordConfirmation){
            errors.passwordConfirmation = "Confirm your password";  
        }
        else if (values.passwordConfirmation !== values.password){
            errors.passwordConfirmation = "No matching"
        }
        return errors
    }
    return(
        <div className="form-container">
        {Object.keys(formErrors).length === 0 && isSubmit? (<div>Succesfully registered</div>) : (<></>)}
            
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="username" placeholder="name" value = {formValues.username} onChange={handleChange}/>
                <br/>
                <p className="error">{formErrors.username}</p>
                <br/>
                <label>Email</label>
                <input type="text" name="email" placeholder="email" value = {formValues.email} onChange={handleChange}/>
                <br/>
                <p className="error">{formErrors.email}</p>
                <br/>
                <label>Password</label>
                <input type="password" name="password" placeholder="password" value = {formValues.password} onChange={handleChange}/>
                <br/>
                <p className="error">{formErrors.password}</p>
                <br/>
                <label>Confirm Password</label>
                <input type="password" name="passwordConfirmation" placeholder="confirm password" value = {formValues.passwordConfirmation} onChange={handleChange}/>
                <br/>
                <p className="error">{formErrors.passwordConfirmation}</p>
                <br/>
                <input type="submit" />
            </form>
        </div>
    )
}