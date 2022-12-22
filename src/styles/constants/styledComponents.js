import styled from 'styled-components';

export const StyledMain = styled.main`
width: 375px;
height: 667px;
background-color: #000000;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const Button = styled.button`
width: 298px;
height: 52px;
border-radius: 8px;
border: none;
padding: 18px 122px;
gap: 10px;
background-color: #FF4791;
color: #FFFFFF;
margin: 20px 38px;
font-size: 16px;
font-weight: 700;
`;

export const Input = styled.input`
width: 299px;
height: 52px;
background-color: #FFFFFF;
border: none;
margin: 8px 38px;
    &::placeholder{
        color: #7E7E7E;
    }
`;

export const Data = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin-top: 100px;
`;