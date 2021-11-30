import React, {useEffect} from "react"
import { AuthContext } from "../../context/AuthContext"
import { Redirect } from "react-router"
import { useContext } from "react"
import { StaticRouter} from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const PrivateRoute = ({children}) => {
    const {user} = useAuth()
    return user.isAuthenticated ? children : <Redirect to="/login" />
    
    
}

export default PrivateRoute
