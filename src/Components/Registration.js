import React, { useState } from 'react';
import FormInput from './FormInput';
import '../Styles/register.css';
import CloseIcon from '@mui/icons-material/Close';
const Registration = () => {

    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
    });

    const inputs = [
      
        {
            id: 1,
            name: "email",
            type: "email",
            errorMessage:"Enter a valid email id",
            label: "Email",
            required: true
        },
        {
            id: 2,
            name: "password",
            type: "password",
            errorMessage:"Password must be 8-20 characters long and must atleast include: a letter, a number and a special character",
            label: "Password",
            pattern:"^(?=.*[a-zA-Z])(?=.*)(?=.*[!@#$%^&*()])[A-Za-z][A-Za-z0-9!@#$%^&*()_+]{8,20}$",
            required: true
        },
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const onChange = (e) => {
        setValues({...values, [e.target.name]:e.target.value}) // => takes all properties of values and updates only target property value
    }

    console.log(values);

  return (
    <div className="register">
        
        <form onSubmit={handleSubmit}>
            <div className="closeIcon"><span><CloseIcon /></span></div>
            <div className="regTitle">
                <h1>Sign Up</h1>
            </div>
            {inputs.map(input => (
                <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}  />
            ))}
            
            <button>Register</button>
            <hr></hr>
            <p>Already have an account? <a href="/#">Log in</a></p>
        </form>
    </div>
  )
}

export default Registration;