import React, {createContext, useState, useEffect} from 'react';

export const AuthContext = createContext();

const AuthProvider = (props) => {
    const [user, setUser] = useState({
    });

    useEffect(() => {
        const getUser = () => {
            const user = localStorage.getItem('user');
            if (user) {
                setUser(JSON.parse(user));
            }
            }
        getUser();
    }, []);

    return  (
        <AuthContext.Provider value={[user,setUser]}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;