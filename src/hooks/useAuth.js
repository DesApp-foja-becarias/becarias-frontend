import React, {useContext,useEffect} from 'react'
import { useHistory } from 'react-router'
import {AuthContext} from '../context/AuthContext'
import useSnackbar from './useSnackbar'

const useAuth = () => {
    const [user, setUser] = useContext(AuthContext)

    useEffect(() => {
        const user = localStorage.getItem('user')
        if(user){
            setUser(JSON.parse(user))
        }
    }
    ,[])

    const {showSnackbar} = useSnackbar()
    const history = useHistory()
    const login = (e,user) => {
        e.preventDefault()
        if(user.username === 'y.carro@gmail.com' && user.password === '123456'){
            const userMock = {
                username: user.username,
                password: user.password,
                isAuthenticated: true,
                firstName: 'Yessica',
                lastName: 'Carro',
            }
            localStorage.setItem('user', JSON.stringify(userMock))
            setUser(userMock)
            showSnackbar(`Bienvenid@ ${userMock.firstName}`,'success')
            setTimeout(() => {    
                history.push('/')
            },2000)
        }
        else{
            showSnackbar('Usuario o contraseña incorrectos', 'error')
            }
    }

    const logout = () => {
        localStorage.removeItem('user')
        setUser({
            username: '',
            password: '',
            isAuthenticated: false,
            firstName: '',
            lastName: '',
        })
        showSnackbar(`Adios ${user.firstName}`,'success')
        setTimeout(() => {    
            history.push('/login')
        },2000)
    }

    return {
        user,
        login,
        logout
    }
}

export default useAuth