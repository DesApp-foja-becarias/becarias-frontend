import { useContext, useEffect } from "react"
import { LoadingScreenContext } from "../context/LoadingScreenContext"

const useLoadingScreen = () => {
    const { setLoading, setLoadingText} = useContext(LoadingScreenContext)

    const showLoadingScreen = (loadingText='') => {
        setLoadingText(loadingText)
        setLoading(true)
    }

    const hideLoadingScreen = () => {
        setLoadingText('Por Favor Espere...')        
        setLoading(false)
    }

    useEffect(() => {
        showLoadingScreen()
    }, [])
    

    
    return {  hideLoadingScreen, showLoadingScreen }
    }

export default useLoadingScreen