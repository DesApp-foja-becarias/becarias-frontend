import {useEffect, useState, useContext} from 'react';
import { LoadingScreenContext } from '../context/LoadingScreenContext';
import useSnackbar from './useSnackbar';
import useLoadingScreen from './useLoadingScreen';
import { useHistory } from 'react-router';

const useAxios = ({call, successMessage, errorMessage, loadingMessage, redirectSucc, redirectErr} ) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const {showSnackbar} = useSnackbar();
    const { showLoadingScreen, hideLoadingScreen,  loading} = useLoadingScreen(true);
    const history = useHistory();
    const { setLoading, setLoadingText} = useContext(LoadingScreenContext)

    const useAxiosCall =  () => {
        showLoadingScreen();
        setLoadingText(loadingMessage);
        return call()
            .then( res => {
                handleSuccess(res.data);
                return res.data;
            })
            .catch(err => {
                handleError(err);
                return err;
            })
        }
    
    const handleError = (err) => {
        setError(err);
        showSnackbar(errorMessage, 'error');
        hideLoadingScreen();
        if(redirectErr){
            history.push(redirectErr);
        }
    }

    const handleSuccess = async (res) => {
        setResponse(res);
        showSnackbar(successMessage);
        setLoading(false);
        if(redirectSucc){
            history.push(redirectSucc, 'success');
        }
    }
    return {
        useAxiosCall
    }
    
};

export default useAxios;
