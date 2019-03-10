import React, { Component } from 'react';
import './_App.scss';
import CSSTransition from 'react-transition-group/CSSTransition';
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
import NavBtn from './utility/navBtn/navBtn';
import Profile from './containers/profile/profile';
import Skills from './containers/skills/skills';

class App extends Component {


  render() {

    // let navbar = this.props.show?<Navbar/>:null;
    return (
      <div className="App">
          <CSSTransition
            in={this.props.show}
            timeout={2000}
            classNames="navAnimation"
            unmountOnExit
            mountOnEnter >
            <div className="App__left">
              <Navbar />
            </div>
          </CSSTransition>
        <div className="App__right">
          <NavBtn/>
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

export default connect(mapStateToProps, null)(App);