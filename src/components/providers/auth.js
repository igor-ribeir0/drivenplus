import React, {useState} from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
    
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

    return(
        <AuthContext.Provider 
            value={
                {
                    token, setToken, 
                    image, setImage, 
                    name, setName, 
                    benefitsTitle, setBenefitsTitle,
                    cardCode, setCardCode,
                    cardSecurity, setCardSecurity,
                    cardExpiration, setCardExpiration
                }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}