import {useEffect, useState, useContext} from 'react';
import { LoadingScreenContext } from '../context/LoadingScreenContext';
import useSnackbar from './useSnackbar';
import useLoadingScreen from './useLoadingScreen';
import { Router } from 'react-router';
import { useHistory } from 'react-router';

const useAxios = ({call, successMessage, errorMessage, loadingMessage, redirectSucc, redirectErr} ) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const {showSnackbar} = useSnackbar();
    const { showLoadingScreen, hideLoadingScreen,  loading} = useLoadingScreen(true);
    const history = useHistory();
    const { setLoading, setLoadingText} = useContext(LoadingScreenContext)

    const useAxiosCall =  () => {
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
    
    // useEffect( () => {
    //     if(call){
    //         call()
    //         .then( res => {
    //             handleSuccess(res.data.data);
    //         })
    //         .catch(err => {
    //             handleError(err);
    //         })
    //     }
    // }, []);
    
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
        response,
        error,
        loading,
        useAxiosCall
    }
    
};

export default useAxios;
