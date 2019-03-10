import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/action/actionTypes/actionTypes';

class Navbar extends Component{


    render(){
        return(
            <>
                <div>navbar</div>
                <div onClick={this.props.change}>
                {this.props.blah}
                </div>
            </>
        )
    }
}

const mapStateToProps = state=>{
    return{
        blah: state.blah
    }
}

const dispatchStateToProps=dispatch=>{
    return{
        change: ()=>dispatch({type: actionTypes.BLAH, change: 'changed'})
    }
}

export default connect(mapStateToProps, dispatchStateToProps)(Navbar);