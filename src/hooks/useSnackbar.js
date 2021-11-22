import React , { useContext } from 'react';
import { SnackbarContext } from '../context/SnackbarContext';

const useSnackbar = () => {
    const [snackbar, setSnackbar] = useContext(SnackbarContext);

    const showSnackbar = (message, severity) => {
        setSnackbar({
            open: true,
            message: message,
            severity: severity,
        });
    };

    const closeSnackbar = () => {
        setSnackbar({
            open: false,
            message: '',
            severity: 'success',
        });
    };

    return {
        snackbar,
        showSnackbar,
        closeSnackbar,
    };
}

export default useSnackbar;