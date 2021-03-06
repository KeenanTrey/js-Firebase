import React from 'react';
import styled, {css} from 'styled-components'

const ButtonStyle = styled.button`
    width: 100%;
    border: inherit;
    background-color: inherit;
    font-size: 1rem;
    color: #8e979c;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
    padding: 0.65rem 1rem;
    margin-bottom: 0.5rem;
    ${props => props.uiStyle === "signup" &&
        css`
        background: #f15b29;
        color:white;
        `
    }
    ${props => props.uiStyle === "login" &&
        css`
            background: blue;
            color: #fff;
        `
    }
`


const Button = (props) => {
    return (
        <ButtonStyle {...props}>
            {props.icon}
            {props.label}
            {props.children}
        </ButtonStyle>
      );
}
 
export default Button;