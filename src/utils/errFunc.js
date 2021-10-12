export const validateNotEmpty = (e, updateErr) => {
    if (e.target.value.length > 0) {
        updateErr (e,false);
    }
    else {
        updateErr (e,true);
    }
}

export const validateDni = (e,updateErr) => {
    if (e.target.value > 0 && e.target.value <100000000){
        updateErr(e,false);
    }
    else{
        updateErr(e,true);
    }
}

export const validateEmail = (e, updateErr) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)){
        updateErr (e,false);
    }
    else{
        updateErr (e,true);
    }
}

export const validatePhone = (e, updateErr) => {
    if (e.target.value > 0 && e.target.value <100000000){
        updateErr (e,false);
    }
    else{
        updateErr (e,true);
    }
}