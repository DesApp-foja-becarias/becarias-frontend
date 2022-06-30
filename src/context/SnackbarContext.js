import { Alert, Snackbar } from "@mui/material";
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
            <Snackbar
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
                }}
                open={snackbar.open}
                autoHideDuration={5000}
                message="Note archived"
                onClose={() => setSnackbar(({
                    open: false,
                    message: '',
                    severity: 'info',
                    }))
                }
            >
                <Alert severity={snackbar.severity} variant="filled">
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </SnackbarContext.Provider>
    );
}

export default SnackbarProvider;