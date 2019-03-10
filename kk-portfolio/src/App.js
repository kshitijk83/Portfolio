import React, { Component } from 'react';
import './_App.scss';
import './sass/utility/_navBtn.scss';

// ----------------
// ROUTING PACKAGES
// ----------------
import { Route, Switch } from 'react-router-dom';

// --------------
// REDUX PACKAGES
// --------------
import { connect } from 'react-redux';

// --------------
// OTHER PACKAGES
// --------------
import Navbar from './containers/Navbar/Navbar';
import Profile from './containers/profile/profile';
import Skills from './containers/skills/skills';
import * as actionTypes from './store/action/actionTypes/actionTypes';

class App extends Component {


  render() {
    let classes=['menu', 'btn'];
    if(!this.props.show){
      classes.push('open');
    }
    let navbar = this.props.show?<Navbar/>:null;
    return (
      <div className="App">
        {navbar}
        <div className="App__right">
          <div onClick={this.props.hideToggle} className={classes.join(' ')} data-menu="10">
            <div className="icon"></div>
          </div>
          <Switch>
            <Route path="/profile" component={Profile} />
            <Route path="/skills" component={Skills} />
          </Switch>
        </div>
      </div>
    );
  }
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

export default connect(mapStateToProps, dispatchStateToProps)(App);