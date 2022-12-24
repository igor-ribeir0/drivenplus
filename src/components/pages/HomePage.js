import { Data } from '../../styles/constants/styledComponents';
import logoPlus from '../../assets/imgs/logoPlus.svg';
import profileIcon from '../../assets/imgs/profileIcon.svg'
import styled from 'styled-components';

export default function HomePage(){
    return(
        <Data>

            <Header>
                <PlanImage src={logoPlus} />
                <Profile src={profileIcon} />
            </Header>

            <Welcome><h3>Olá, fulano</h3></Welcome>

            <Benefits>
                <PlanSettings>Solicitar brindes</PlanSettings>
                <PlanSettings>Materiais bônus de web</PlanSettings>
            </Benefits>

            <Footer>
                <PlanSettings>Mudar plano</PlanSettings>
                <CancelPlan>Cancelar plano</CancelPlan>
            </Footer>
        </Data>
    );
};

const Header = styled.header`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: -80px;
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