import { Data } from '../../styles/constants/styledComponents';
import styled from 'styled-components';
import { urlBaseSubscription } from '../../styles/constants/urls';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {AuthContext} from '../providers/auth';
import { Link } from 'react-router-dom';

export default function SubscriptionsPage(){

    const [listPlans, setListPlans] = useState([]);
    const { getToken } = React.useContext(AuthContext);

    const config = {
        headers: {
            "Authorization": `Bearer ${getToken}`
        }
    };

    useEffect(() => {
        const promise = axios.get(`${urlBaseSubscription}`, config);
        promise.then(answer => setListPlans(answer.data));
        promise.catch(error => alert(`${error.response.data.message}`));
    }, []);


    return(
        <Data>
            <Header>
                <h2>Escolha seu Plano</h2>
            </Header>

            <Content>
                {listPlans.map((plan) => {
                    return(
                        <Link to={`/subscriptions/${plan.id}`} key={plan.id}>
                            <Category>
                                <img src={plan.image} />
                                <p>R$ {plan.price}</p>
                            </Category>
                        </Link>
                    );
                })};
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
        text-decoration-line: none;
    }
`;