import styled from 'styled-components';
import axios from 'axios';
import logo from '../../assets/imgs/logo.svg';
import React, { useState } from 'react';
import { Button, Input, Data } from '../../styles/constants/styledComponents';
import { urlBaseLoginRegister } from '../../styles/constants/urls';
import { useNavigate, Link } from 'react-router-dom';
import {AuthContext} from '../providers/auth';

export default function LoginPage(props){
    const { setMemberId } = props;

    const { keepsToken } = React.useContext(AuthContext);
    const { token } = React.useContext(AuthContext);
    const {setToken} = React.useContext(AuthContext);
    const { setImage } = React.useContext(AuthContext);
    const { setName } = React.useContext(AuthContext);
    const { setBenefitsTitle } = React.useContext(AuthContext);


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function login(event){
        event.preventDefault();

        const promise = axios.post(`${urlBaseLoginRegister}/login`, {
            email: email,
            password: password
        });

        promise.then(answer => goSubscriptions(answer.data.membership));
        promise.then(answer => setToken({token: answer.data.token}));
        promise.then(answer => setImage({image: answer.data.membership.image}));
        promise.then(answer => setMemberId(answer.data.membership.id));
        promise.then(answer => setName({name: answer.data.name}));
        promise.then(answer => setBenefitsTitle(answer.data.membership.perks));
        promise.catch(error => alert(`${error.response.data.message}`));

        keepsToken(token.token);
    };

    function goSubscriptions(membership){
        if(membership === null){
            navigate('/subscriptions');
        }
        else{
            navigate('/home');
        }
    };

    return(
        <>
            <Header>
                <img src={logo} />
            </Header>

            <Data>
                <form onSubmit={login}>
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

                <Link to={'/sign-up'}>
                    <StyledLink>Não possuí uma conta? Cadastre-se</StyledLink>
                </Link>
            </Data>
        </>
    );
};

const Header = styled.header`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
    img{
        width: 299px;
        height: 49px;
    }
`;

const StyledLink = styled.span`
width: 226px;
height: 16px;
font-family: 'Roboto', sans-serif;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;
text-decoration-color: #FFFFFF;
margin: 24px 74px;
`;