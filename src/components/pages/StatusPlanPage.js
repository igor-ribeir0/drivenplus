import { Data, Input, Button } from '../../styles/constants/styledComponents';
import styled from 'styled-components';
import clipBoard from '../../assets/imgs/clipboard.svg';
import money from '../../assets/imgs/money.svg';
import close from '../../assets/imgs/close.png';
import back from '../../assets/imgs/back.png';
import { useParams, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { urlBaseSubscription } from '../../styles/constants/urls';
import { urlBaseSignature } from '../../styles/constants/urls';
import {AuthContext} from '../providers/auth';
import axios from 'axios';

export default function StatusPlanPage(props){
    const { memberId, setMemberId } = props;
    const { idPlan } = useParams();

    const { setImage } = React.useContext(AuthContext);
    const { setCardCode } = React.useContext(AuthContext);
    const { setCardSecurity } = React.useContext(AuthContext);
    const { setCardExpiration } = React.useContext(AuthContext);
    const { setIdMember } = React.useContext(AuthContext);
    const { setBenefitsTitle } = React.useContext(AuthContext);
    const { setNameCard } = React.useContext(AuthContext);
    const { getToken } = React.useContext(AuthContext);
    const { token } = React.useContext(AuthContext);


    const [appear, setAppear] = useState(false);
    const [planTitle, setPlanTitle] = useState('');
    const [imageName, setImageName] = useState('');
    const [price, setPrice] = useState('');
    const [benefitsList, setBenefitsList] = useState([]);
    const [nameCardOwner, setNameCardOwner] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cardSafetyPassword, setCardSafetyPassword] = useState();
    const [shelfLife, setShelfLife] = useState('');
    const navigate = useNavigate();

    const config = {
        headers: {
            "Authorization": `Bearer ${getToken}`
        }
    };

    useEffect(() => {
        const promise = axios.get(`${urlBaseSubscription}/${idPlan}`, config);
        promise.then(answer => getData(answer.data));
        promise.then(answer => setImage({image: answer.data.image}));
        promise.catch(error => alert(`${error.response.data.message}`));
    }, []);

    function getData(answer){
        setPlanTitle(answer.name);
        setImageName(answer.image);

        setPrice(answer.price);
        setMemberId(answer.id);

        setBenefitsList(answer.perks);
        setBenefitsTitle(answer.perks);
    };

    function signature(event){
        event.preventDefault();
        setAppear(true);
    };

    function closeConfirmWindow(){
        setAppear(false);
    };

    function backPage(verify){
        if(verify === false){
            navigate('/subscriptions');
        }
    };

    function noConfirm(){
        setAppear(false);
    };

    function yesConfirm(){
        setCardCode({cardCode: cardNumber});
        setCardSecurity({cardSecurity: cardSafetyPassword});
        setCardExpiration({cardExpiration: shelfLife});
        setIdMember({idMember: memberId});
        setNameCard({nameCard: nameCardOwner});

        const promise = axios.post(`${urlBaseSignature}`, {
            membershipId: memberId,
            cardName: nameCardOwner,
            cardNumber: cardNumber,
            securityNumber: cardSafetyPassword,
            expirationDate: shelfLife
        }, config);

        promise.then(goHome);
        promise.catch(error => alert(`${error.response.data.message}`));
    };

    function goHome(){
        navigate('/home');
    };

    return(
        <Data>
            <BackBox onClick={() => backPage(appear)}>
                <Back src={back} />
            </BackBox>

            <Header>
                <img src={imageName} />
                <h3>{planTitle}</h3>
            </Header>

            <Benefit>
                <div>
                    <img src={clipBoard} />
                    <h5>Benefícios:</h5>
                </div>

                <ul>
                    {benefitsList.map(benefit => 
                        <li key={benefit.id}>{benefit.title}</li>)
                    };
                </ul>
            </Benefit>

            <Benefit>
                <div>
                    <img src={money} />
                    <h5>Preço:</h5>
                </div>
                
                <ul>
                    <li>R$ {price} cobrados mensalmente</li>
                </ul>
            </Benefit>

            <CardData>
                <form onSubmit={signature}>
                    <Input 
                        type='text'
                        value={nameCardOwner}
                        onChange={e => setNameCardOwner(e.target.value)}
                        placeholder='Nome impresso no cartão'
                        disabled={appear}
                        required
                    />
                    <Input 
                        type='text'
                        value={cardNumber}
                        onChange={e => setCardNumber(e.target.value)}
                        placeholder='Digitos do cartão'
                        disabled={appear}
                        required
                    /> 
                    <div>
                        <CardKey 
                            type='number'
                            value={cardSafetyPassword}
                            onChange={e => setCardSafetyPassword(e.target.value)}
                            placeholder='Código de Segurança'
                            disabled={appear}
                            required
                        />
                        <CardKey 
                            type='text'
                            value={shelfLife}
                            onChange={e => setShelfLife(e.target.value)}
                            placeholder='Validade'
                            disabled={appear}
                            required
                        />
                    </div>
                    <Button type='submit' disabled={appear}>
                        ASSINAR
                    </Button>
                </form>
            </CardData>

            <ConfirmSignature appear={appear}>
                <Menu>
                    <CloseButton onClick={closeConfirmWindow}>
                        <img src ={close}/>
                    </CloseButton>
                </Menu>

                <div>
                    <ContentConfirm>
                        <h2>Tem certeza que deseja</h2>
                        <h3>assinar o plano</h3>
                        <h2>{planTitle} (R$ {price})?</h2>

                        <NoButton onClick={noConfirm}>Não</NoButton>
                        <YesButton onClick={yesConfirm}>SIM</YesButton>
                    </ContentConfirm>
                </div>
            </ConfirmSignature>

        </Data>
    );
};

const Header = styled.header`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 8px;
margin-top: -20px;
    img{
        width: 139px;
        height: 95px;
    }
    h3{
        width: 164px;
        height: 38px;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 32px;
        line-height: 37px;
        color: #FFFFFF;
        margin-top: 12px;
        white-space: nowrap;
        margin-left: -30px;
    }
`;

const Benefit = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
    div{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 16px;
    }
        img{
            width: 20px;
            height: 20px;
            margin-left: 40px;
            margin-right: 4px;
        }
        h5{
            width: 100px;
            height: 17px;
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #FFFFFF;
        }
    ul{
        width: 100%;
    }
        li{
            width: 299px;
            height: 33px;
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
            color: #FFFFFF;
            margin-top: 10px;
            margin-bottom: -24px;
            margin-left: 40px;
        }
`;  

const CardData = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 29px;
    div{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const CardKey = styled.input`
width: 145px;
height: 52px;
border-radius: 10px;
border: none;
margin-right: 9px;
margin-top: 5px;
-moz-appearance: textfield;
appearance: textfield;
&::placeholder{
    color: #7E7E7E;
}
&::-webkit-inner-spin-button { 
    -webkit-appearance: none;
}
`;

const ConfirmSignature = styled.div`
width: 100%;
display: ${props => props.appear? 'flex' : 'none'};
flex-direction: column;
justify-content: center;
align-items: center;
    div{
        width: 250px;
        height: 230px;
        background-color: #FFFFFF;
        border-radius: 10px;
        position: absolute;
        bottom: 80px;
        left: auto;
        display: flex;
        flex-direction: column;
    }
`;

const ContentConfirm = styled.header`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
    h2{
        width: 60px;
        height: 30px;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 18px;
        line-height: 20px;
        color: #000000;
        margin-top: 30px;
        margin-left: -160px;
        white-space: nowrap;
    }
    h3{
        width: 60px;
        height: 30px;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 18px;
        line-height: 20px;
        color: #000000;
        margin-top: -5px;
        margin-bottom: -33px;
        margin-left: -90px;
        white-space: nowrap;
    }
`;

const NoButton = styled.button`
width: 100px;
height: 60px;
font-family: 'Roboto', sans-serif;
font-weight: 700;
font-size: 12px;
line-height: 10px;
color: #FFFFFF;
background-color: #CECECE;
border-radius: 6px;
border: none;
margin-top: 50px;
margin-left: -110px;
`;

const YesButton = styled.button`
width: 100px;
height: 60px;
font-family: 'Roboto', sans-serif;
font-weight: 700;
font-size: 12px;
line-height: 10px;
color: #FFFFFF;
background-color: #FF4791;
border-radius: 6px;
border: none;
margin-top: -59px;
margin-left: 120px;
`;

const CloseButton = styled.button`
width: 30px;
height: 30px;
background-color: #FFFFFF;
border-radius: 5px;
border: none;
display: flex;
justify-content: center;
align-items: center;
margin-top: -195px;
margin-right: -300px;
    img{
        width: 30px;
        height: 30px;
    }
`;

const Back = styled.img`
width: 30px;
height: 30px;
margin-top: 0px;
margin-left: 10px;
`;

const Menu = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`;

const BackBox = styled.div`
width: 60px;
height: 40px;
margin-top: -90px;
margin-bottom: 20px;
`