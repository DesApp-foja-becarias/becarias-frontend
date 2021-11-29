import { createContext,useState } from "react";

export const LoadingScreenContext = createContext();

export const LoadingScreenProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [loadingText, setLoadingText] = useState("Por favor Espere...");
    return (
        <LoadingScreenContext.Provider value={{loading,setLoading,loadingText,setLoadingText}}>
            {children}
        </LoadingScreenContext.Provider>
    )
}

export default LoadingScreenProvider;