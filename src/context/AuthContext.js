import React, {createContext, useState, useEffect} from 'react';

export const AuthContext = createContext();

const AuthProvider = (props) => {
    const [user, setUser] = useState({
        isAuthenticated: false,
    });

    useEffect(() => {
        console.log(user, 'user');
        const getUser = async () => {
            const user = await localStorage.getItem('user');
            if (user) {
                setUser(JSON.parse(user));
            }
            }
        getUser();
    }, []);

    return (
        <AuthContext.Provider value={[user,setUser]}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;