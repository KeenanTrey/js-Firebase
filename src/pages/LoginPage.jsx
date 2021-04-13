import React, {useState, useContext} from 'react';
import styled from 'styled-components'
import FormInput from './../components/forms/FormInput'
import Button from './../components/buttons/Button'
import {Redirect} from 'react-router-dom'

import Firebase from './../firebase/firebase.config'
import AuthContext from 'auth/AuthContext'

const LoginPageStyles = styled.div ` 
    max-width: 480px;
    margin: 6rem auto 0;
    header{
        text-align:center;
        margin-bottom: 2rem;
    }
    h1{
        font-size: 2rem;
        font-weight:600;
    }
    button{
        margin-top:2rem;
    }

    ` 
    
    
    
const LoginPage = (props) => {
    const auth = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isValid, setIsValid] = useState(false)

    const handleClick = (e) => {
        console.log(email, password)
        Firebase.auth().signInWithEmailAndPassword(email, password)
        .then(userCredential => {            
            setIsValid(true)
            auth.authentication=true
            console.log(isValid)
        })
        .catch(error =>{
            setIsValid(false)
            console.log(error.code, error.message)
        })
    }
    if(isValid)
    {
        return <Redirect to="/dashboard"></Redirect>
    }
    else
    {
        return ( 
            <LoginPageStyles>
                <header>
                    <h1>Account Login</h1>
                    <p>access your employee manager</p>
                </header>

                <FormInput inputType="email" label="valid email address" onChange={(e) => setEmail(e.target.value.trim())}/>
                <FormInput inputType="password" label="password (8 charachters)" onChange={(e) => setPassword(e.target.value.trim())}/>
                <Button onClick={handleClick} label="login to your account" uiStyle="signup"/>
            </LoginPageStyles>

        );
    } 
}
export default LoginPage;