import * as actionTypes from '../action/actionTypes/actionTypes';
import { utility } from '../utility';

const initialState = {
    showNav: true,
    showStart: false
}

const reducer = (state=initialState, action)=>{
    switch (action.type) {
        case actionTypes.SHOW_NAVBAR:
            return utility(state, {showNav: !state.showNav});
        
        case actionTypes.SHOW_NAVBAR_WAIT:
            return utility(state, {showStart: !state.showStart});
    
        default:
            return state;
    }
}

export default reducer;