import React from 'react';
import styled from 'styled-components'
import FormInput from 'components/forms/FormInput'
import Button from'components/buttons/Button'

const PageStyle = styled.div `
    max-width:480px;
    margin: 6rem auto 0;
    header{
        text-align: center;
        margin-bottom: 2rem;
    }

    h1{
        font-size: 2rem;
    }

    Button{
        margin-top: 2rem;
    }
`
const RegisterPage = () => {
    return ( 
        <PageStyle>
            <header>
                <h1>Trial Account</h1>
                <p>no card required</p>
            </header>
            

            <FormInput  inputType ="name" label="name on the account"/>
            <FormInput  inputType ="email" label="email"/>
            <FormInput  inputType ="password" label="password (8 characters)"/>
            <Button label="Create new Account" uiStyle="login"/>
        </PageStyle> 
    );
}
 
export default RegisterPage;