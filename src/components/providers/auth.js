import React, {useState, useEffect} from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {

    const tokenLocalStorage = localStorage.getItem('getToken');
    const [getToken, setGetToken] = useState(tokenLocalStorage);

    function keepsToken(token){
        localStorage.setItem('getToken', token);
    };

    const [token, setToken] = useState({
        token: ''
    });

    const [image, setImage] = useState({
        image: ''
    });

    const [name, setName] = useState({
        name: ''
    });

    const [benefitsTitle, setBenefitsTitle] = useState([]);

    const [cardCode, setCardCode] = useState({
        cardCode: ''
    });

    const [cardSecurity, setCardSecurity] = useState({
        cardSecurity: ''
    });

    const [cardExpiration, setCardExpiration] = useState({
        cardExpiration: ''
    });

    const [idMember, setIdMember] = useState({
        idMember: ''
    });

    const [nameCard, setNameCard] = useState({
        nameCard: ''
    });

    return(
        <AuthContext.Provider 
            value={
                {
                    keepsToken, getToken, setGetToken,
                    token, setToken, 
                    image, setImage, 
                    name, setName, 
                    benefitsTitle, setBenefitsTitle,
                    cardCode, setCardCode,
                    cardSecurity, setCardSecurity,
                    cardExpiration, setCardExpiration,
                    idMember, setIdMember,
                    nameCard, setNameCard
                }
            }
        >
            {props.children}
        </AuthContext.Provider>
    );
}