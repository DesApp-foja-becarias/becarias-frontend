import React , { useContext } from 'react';
import { SnackbarContext } from '../context/SnackbarContext';

const useSnackbar = () => {
    const [snackbar, setSnackbar] = useContext(SnackbarContext);

    const openSnackbar = (message, severity) => {
        setSnackbar({
            open: true,
            message: message,
            severity: severity,
        });
    };

    const handleClose = () => {
        setSnackbar({
            open: false,
            message: '',
            severity: '',
        });
    };

    return {
        snackbar,
        openSnackbar,
        handleClose,
    };
}

export default useSnackbar;