import { Data, Input, Button } from '../../styles/constants/styledComponents';
import styled from 'styled-components';
import logoPlus from '../../assets/imgs/logoPlus.svg';
import clipBoard from '../../assets/imgs/clipboard.svg';
import money from '../../assets/imgs/money.svg';

export default function StatusPlanPage(){
    return(
        <Data>
            <Header>
                <img src={logoPlus} />
                <h3>Driven Plus</h3>
            </Header>

            <Benefit>
                <div>
                    <img src={clipBoard} />
                    <h5>Benefícios:</h5>
                </div>

                <ul>
                    <li>1.Brindes exclusivos</li>
                    <li>2.Materiais bônus de web</li>
                </ul>
            </Benefit>

            <Benefit>
                <div>
                    <img src={money} />
                    <h5>Preço:</h5>
                </div>
                
                <ul>
                    <li>R$ 39,99 cobrados mensalmente</li>
                </ul>
            </Benefit>

            <CardData>
                <form>
                    <Input 
                        type='text'
                        placeholder='Nome impresso no cartão'
                        required
                    />
                    <Input 
                        type='number'
                        placeholder='Digitos do cartão'
                        required
                    /> 
                    <div>
                        <CardKey 
                            type='number'
                            placeholder='Código de Segurança'
                            required
                        />
                        <CardKey 
                            type='number'
                            placeholder='Validade'
                            required
                        />
                    </div>
                    <Button>
                        ASSINAR
                    </Button>
                </form>
            </CardData>
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
margin-top: -25px;
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