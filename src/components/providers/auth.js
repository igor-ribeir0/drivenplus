import React, {useState} from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {

    const keepsAuth = JSON.parse(localStorage.getItem('auth'));
    const [auth, setAuth] = useState(keepsAuth);

    function login(authData){
        setAuth(authData);
        localStorage.setItem('auth', JSON.stringify(authData));
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

    const [benefitsTitle, setBenefitsTitle] = useState({
        benefitsTitle: ''
    });

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
                    auth, login, 
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