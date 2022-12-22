import { Data } from '../../styles/constants/styledComponents';
import logoPlus from '../../assets/imgs/logoPlus.svg';
import logoGold from '../../assets/imgs/logoGold.svg';
import logoPlatinum from '../../assets/imgs/logoPlatinum.svg';
import styled from 'styled-components';

export default function SubscriptionsPage(){
    return(
        <Data>
            <Header>
                <h2>Escolha seu Plano</h2>
            </Header>

            <Content>
                <Category>
                    <img src={logoPlus} />
                    <p>R$ 39,99</p>
                </Category>

                <Category>
                    <img src={logoGold} />
                    <p>R$ 39,99</p>
                </Category>

                <Category>
                    <img src={logoPlatinum} />
                    <p>R$ 39,99</p>
                </Category>
            </Content>

        </Data>
    );
};

const Header = styled.header`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: -55px;
margin-bottom: 20px;
    h2{
        width: 263px;
        height: 38px;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 32px;
        line-height: 37px;
        color: #FFFFFF;
    }
`;

const Content = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const Category = styled.div`
width: 290px;
height: 180px;
border-radius: 5px;
border: 2px solid #7E7E7E;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 10px;
    img{
        width: 139px;
        height: 95px;
        margin-left: 10px;
    }
    p{
        width: 116px;
        height: 28px;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: #FFFFFF;
    }
`;