import React from 'react';
import styled from 'styled-components'

const InputStyle = styled.div `
    color: #3a464c;
    box-shadow: 0 4px 4px -2px rgba(0,0,0,0.12);
    label{
        font-size: 13px;
        color: #848d92;
    }
    input{
        width: 100%;
        font-size: 1rem;
        background-color: inherit;
        border: none;
        padding: 0.25;
        outline: none;
        color: #3a464c;
    }
`

const FormInput = (props) => {
    return (  
        <InputStyle {...props}>
            <label htmlFor={props.id}>{props.label}</label>
            <input type={props.inputType} name={props.name} id={props.id}/>
        </InputStyle>
     );
}
 
export default FormInput;