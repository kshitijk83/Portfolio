import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import * as actionTypes from '../../store/action/actionTypes/actionTypes';

class Navbar extends Component{


    render(){
        return(
            <>
                <div className="App__left">navbar</div>
            </>
        )
    }
}

// const mapStateToProps = state=>{
//     return{
//         show: true
//     }
// }

// const dispatchStateToProps=dispatch=>{
//     return{
//         change: ()=>dispatch({type: actionTypes.SHOW_NAVBAR, change: 'changed'})
//     }
// }

export default Navbar;