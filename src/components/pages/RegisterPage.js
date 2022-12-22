import { Button, Input, Data } from '../../styles/constants/styledComponents';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { urlBaseLoginRegister } from '../../styles/constants/urls';
import axios from 'axios';
import styled from 'styled-components';

export default function RegisterPage(){

    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function register(event){
        event.preventDefault();

        const promise = axios.post(`${urlBaseLoginRegister}/sign-up`, {
            email: email,
            name: name,
            cpf: cpf,
            password: password
        });

        promise.then(goLogin);
        promise.catch(error => alert(`${error.response.data.message}`));

        setName('');
        setCpf('');
        setEmail('');
        setPassword('');
    };

    function goLogin(){
        navigate('/');
    };

    return(
        <Data>
            <form onSubmit={register}>
                <Input 
                    type='text' 
                    placeholder='Nome'
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
                <Input 
                    type='text' 
                    placeholder='CPF'
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
                    required
                />
                <Input 
                    type='email' 
                    placeholder='E-mail'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <Input 
                    type='password' 
                    placeholder='Senha'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <Button 
                    type='submit'
                >
                    Entrar
                </Button>
            </form>

            <Link to={'/'}>
                <StyledLink>Já possuí uma conta? Entre</StyledLink>
            </Link>
        </Data>
    );
};

const StyledLink = styled.span`
width: 226px;
height: 16px;
font-family: 'Roboto', sans-serif;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;
text-decoration-color: #FFFFFF;
margin: 24px 101px;
`;