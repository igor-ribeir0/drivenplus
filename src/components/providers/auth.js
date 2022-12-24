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

    return(
        <AuthContext.Provider 
            value={{token, setToken, image, setImage, name, setName, benefitsTitle, setBenefitsTitle}}
        >
            {props.children}
        </AuthContext.Provider>
    );
}