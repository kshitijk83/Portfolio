import * as actionTypes from './actionTypes/actionTypes';

export const showWait=()=>{
    return{
        type: actionTypes.SHOW_NAVBAR_WAIT
    }
}

export const showStart=()=>{
    showWait();
    setTimeout(() => {
        showToggle()
    }, 500);
}

export const showToggle=()=>{
    return{
        type: actionTypes.SHOW_NAVBAR
    }
}