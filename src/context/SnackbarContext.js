import { createContext, useState } from "react";

export const SnackbarContext = createContext();

const SnackbarProvider = ({children}) =>{

    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'info',
    });


    return(
        <SnackbarContext.Provider value={[snackbar, setSnackbar]}>
            {children}
        </SnackbarContext.Provider>
    );
}

export default SnackbarProvider;