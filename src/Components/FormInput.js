import React, {useState} from 'react';
import '../Styles/formInput.css';

const FormInput = (props) => {
    const [focused, setFocused] = useState(false);
    const {label, errorMessage, onChange, ...inputProps} = props;

    const handleFocus = (e) => {
        setFocused(true);
    }

    return (
        <div className="formInput">
            <label>{label}</label>
            <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()} />
            <span className="errMessage">{errorMessage}</span>
        </div>
    )
}

export default FormInput;