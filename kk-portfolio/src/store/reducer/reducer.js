import * as actionTypes from '../action/actionTypes/actionTypes';

const initialState = {
    showNav: true
}

const reducer = (state=initialState, action)=>{
    switch (action.type) {
        case actionTypes.SHOW_NAVBAR:
            return {
                showNav: !state.showNav
            }
    
        default:
            return state;
    }
}

export default reducer;