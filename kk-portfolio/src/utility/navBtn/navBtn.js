import React from 'react';
import { connect } from 'react-redux';
import './_navBtn.scss';
import * as action from '../../store/action/action';

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
        hideToggle: ()=>dispatch(action.showToggle())
    }
}

export default connect(mapStateToProps, dispatchStateToProps)(navBtn);