import { Data } from '../../styles/constants/styledComponents';
import profileIcon from '../../assets/imgs/profileIcon.svg'
import styled from 'styled-components';
import {AuthContext} from '../providers/auth';
import axios from 'axios';
import { urlBaseSignature } from '../../styles/constants/urls';
import { useNavigate } from 'react-router-dom';
import React from 'react';

export default function HomePage(props){
    const { memberId } = props;
    const { token } = React.useContext(AuthContext);
    const { image } = React.useContext(AuthContext);
    const { name } = React.useContext(AuthContext);
    const { cardCode } = React.useContext(AuthContext);
    const { cardSecurity } = React.useContext(AuthContext);
    const { cardExpiration } = React.useContext(AuthContext);
    const { nameCard } = React.useContext(AuthContext);
    const { benefitsTitle } = React.useContext(AuthContext);
    const navigate = useNavigate();

    const config = {
        headers: {
            "Authorization": `Bearer ${token.token}`
        }
    };

    function cancelPlan(){
        const promise = axios.delete(`${urlBaseSignature}`, config);
        promise.then(() => navigate('/subscriptions'));
        promise.catch(error => alert(`${error.response.data.message}`));
    };

    function changePlan(){
        const promise = axios.post(`${urlBaseSignature}`, 
            {
                membershipId: memberId,
                cardName: nameCard.nameCard,
                cardNumber: cardCode.cardCode,
                securityNumber: cardSecurity.cardSecurity,
                expirationDate: cardExpiration.cardExpiration
            }, 
            config
        );

        promise.then(() => navigate('/subscriptions'));
        promise.catch(error => alert(`${error.response.data.message}`));
    };

    return(
        <Data>

            <Header>
                <PlanImage src={image.image} />
                <Profile src={profileIcon} />
            </Header>

            <Welcome><h3>Olá, {name.name}</h3></Welcome>

            <Benefits>
                {benefitsTitle.map(benefit =>
                    <LinkBenefit target = "_blank" href={benefit.link} key={benefit.id}>
                        <PlanSettings>{benefit.title}</PlanSettings>
                    </LinkBenefit>
                )}
            </Benefits>

            <Footer>
                <PlanSettings onClick={changePlan}>Mudar plano</PlanSettings>
                <CancelPlan onClick={cancelPlan}>Cancelar plano</CancelPlan>
            </Footer>
        </Data>
    );
};

const Header = styled.header`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: -40px;
margin-bottom: 12px;
`;

const PlanImage = styled.img`
width: 75px;
height: 51px;
margin-left: 38px;
margin-top: 32px;
`;

const Profile = styled.img`
width: 34px;
height: 34px;
margin-right: 22px;
margin-top: 22px;
`;

const Welcome = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 53px;
    h3{
        width: 116px;
        height: 28px;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: #FFFFFF;
    }
`;

const Benefits = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 255px;
`;

const PlanSettings = styled.button`
width: 298px;
height: 52px;
border-radius: 8px;
border: none;
padding: 18px 122px;
gap: 10px;
background-color: #FF4791;
color: #FFFFFF;
margin-bottom: 8px;
font-size: 16px;
font-weight: 700;
display: flex;
justify-content: center;
align-items: center;
white-space: nowrap;
`;

const Footer = styled.footer`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const CancelPlan = styled.button`
width: 298px;
height: 52px;
border-radius: 8px;
border: none;
padding: 18px 122px;
gap: 10px;
background-color: #FF4747;
color: #FFFFFF;
margin-bottom: 8px;
font-size: 16px;
font-weight: 700;
display: flex;
justify-content: center;
align-items: center;
white-space: nowrap;
`;

const LinkBenefit = styled.a`
text-align: none;
text-decoration: none;
`