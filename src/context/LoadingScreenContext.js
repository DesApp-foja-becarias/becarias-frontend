import { createContext,useState } from "react";

export const LoadingScreenContext = createContext();

export const LoadingScreenProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    return (
        <LoadingScreenContext.Provider value={[loading,setLoading]}>
            {children}
        </LoadingScreenContext.Provider>
    )
}

export default LoadingScreenProvider;