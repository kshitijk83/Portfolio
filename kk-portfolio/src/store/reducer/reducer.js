import * as actionTypes from '../action/actionTypes/actionTypes';

const initialState = {
    blah: "asd"
}

const reducer = (state=initialState, action)=>{
    switch (action.type) {
        case actionTypes.BLAH:
            return {
                blah: action.change
            }
    
        default:
            return state;
    }
}

export default reducer;