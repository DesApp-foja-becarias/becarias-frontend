import {useState,useEffect} from 'react';

export default function useFieldValidator(initialValue){

    const [areValidFields,setAreValidFields] = useState(null);
    const [errors, setErrors] = useState(initialValue)

    const updateError = (e,value) => {
        setErrors({
            ...errors,
            [e.target.name]: value,
        });
    }

    const validateNotEmpty = (e) => updateError(e, !(e.target.value.length > 0))

    
    const validateDni = (e) => {
            updateError(e, 
                !(e.target.value > 0 && e.target.value <100000000)
            );
    }
    
    const validateEmail = (e) =>
        updateError (e,
            !(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value))
        );
    
    
    const validatePhone = (e) =>
        updateError (
            e,!(e.target.value > 0 && e.target.value <100000000000)
        );
    
        const allValid = () => {
            let valid = true;
            for (let key in errors) {
                if (errors[key]) {
                    valid = false;
                }
            }
            return valid;
        }

        
    useEffect(() => {
        setAreValidFields(allValid());
    }, [errors])


    return {
        areValidFields,
        errors,
        validateNotEmpty,
        validateDni,
        validateEmail,
        validatePhone
    }
}
