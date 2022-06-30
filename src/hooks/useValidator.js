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
                !(e.target.value > 0 && e.target.value <1000000000)
            );
    }
    
    const validateEmail = (e) =>
        updateError (e,
            !(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value))
        );
    
    
    const validatePhone = (e) =>
        updateError (
            e,!(e.target.value > 0 && e.target.value <10000000000)
        );
    
    const validateAccountNumber = (e) =>
        updateError (
            // eslint-disable-next-line eqeqeq
            e, !(e.target.value.length == 10 && e.target.value > 0)
        )

    const validateCBU = (e) =>
        updateError (
					// eslint-disable-next-line eqeqeq
            e, !(e.target.value.length == 22 && e.target.value > 0)
        )
    
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
    }, [errors, allValid]);


    return {
        areValidFields,
        errors,
        validateNotEmpty,
        validateDni,
        validateEmail,
        validatePhone,
        validateAccountNumber,
        validateCBU
    }
}
