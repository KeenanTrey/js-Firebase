import React, {useState, useContext} from 'react';
import styled from 'styled-components'
import FormInput from 'components/forms/FormInput'
import Button from'components/buttons/Button'
import {Redirect} from 'react-router-dom'
import Firebase from './../firebase/firebase.config'
import AuthContext from 'auth/AuthContext'

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
const RegisterPage = (props) => {

    const auth = useContext(AuthContext)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isValid, setIsValid] = useState(false)

    const handleClick = (e) => {
        Firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(userCredential => {            
            setIsValid(true)
            auth.authentication=isValid
            auth.username=username
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
            <PageStyle>
                <header>
                    <h1>Trial Account</h1>
                    <p>no card required</p>
                </header>
                
    
                <FormInput  inputType ="name" label="name on the account" onChange={(e) => setUsername(e.target.value.trim())}/>
                <FormInput  inputType ="email" label="email" onChange={(e) => setEmail(e.target.value.trim())}/>
                <FormInput  inputType ="password" label="password (8 characters)" onChange={(e) => setPassword(e.target.value.trim())}/>
                <Button onClick={handleClick} label="Create new Account" uiStyle="login"/>
            </PageStyle> 
        );
    }
    
}
 
export default RegisterPage;