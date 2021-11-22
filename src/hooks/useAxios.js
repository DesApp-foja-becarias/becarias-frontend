import {useEffect, useState} from 'react';
import useSnackbar from './useSnackbar';
import useLoadingScreen from './useLoadingScreen';

const useAxios = ({call, successMessage, errorMessage} ) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const {showSnackbar} = useSnackbar();
    const { showLoadingScreen, hideLoadingScreen, loading} = useLoadingScreen(false);

    useEffect(() => {
        showLoadingScreen();
        const fetchData = async () => {
            await call()
                .then(response => {
                    showSnackbar(successMessage,'success');
                    setResponse(response);
                    hideLoadingScreen();
                    
                })
                .catch(error => {
                    showSnackbar(errorMessage)
                    setError(error);
                });
        }
        fetchData();
    }, []);

    return {response, error, loading};
};

export default useAxios;
