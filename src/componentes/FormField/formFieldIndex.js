import React from 'react';


function FormField({type, name, label, value, onChange}) {

    return (
        <div>
            <label>
                {label}
                <input>
                    type={type}                   
                    value={value}
                    name={name}
                    onChange={onChange}
                </input>
            </label>
        </div>
    )
}




export default FormField;