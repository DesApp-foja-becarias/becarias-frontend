import { useContext, useEffect } from "react"
import { LoadingScreenContext } from "../context/LoadingScreenContext"

const useLoadingScreen = (loadingScreen) => {
    const [loading, setLoading] = useContext(LoadingScreenContext)
    const showLoadingScreen = () => 
        setLoading(true)
    const hideLoadingScreen = () => 
        setLoading(false)
    
    useEffect(() => {
        if(loadingScreen) {
            showLoadingScreen()
        } else {
            hideLoadingScreen()
        }
    }, [])
    
    return { loading, hideLoadingScreen, showLoadingScreen }
    }

export default useLoadingScreen