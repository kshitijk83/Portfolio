import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/action/actionTypes/actionTypes';
import './_navBtn.scss';

const navBtn = (props) => {

    let classes=['menu', 'btn'];
    if(!props.show){
        classes.push('open');
    }
    return (
        <div onClick={props.hideToggle} className={classes.join(' ')} data-menu="10">
            <div className="icon"></div>
        </div>
    );
}

const mapStateToProps = state=>{
    return{
        show: state.showNav
    }
}

const dispatchStateToProps=dispatch=>{
    return{
        hideToggle: ()=>dispatch({type: actionTypes.SHOW_NAVBAR})
    }
}

export default connect(mapStateToProps, dispatchStateToProps)(navBtn);