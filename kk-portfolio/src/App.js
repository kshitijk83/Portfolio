import React, { Component } from 'react';
import './_App.scss';
import CSSTransition from 'react-transition-group/CSSTransition';
import TranstionGroup from 'react-transition-group/TransitionGroup';
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
    return (
      <div className="App">
          <Route path="/" render={()=>(
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
          )} />
        <div className="App__right">
          <Route render={({location})=>(
            <TranstionGroup component={null}>
              <CSSTransition
              key={location.pathname}
              classNames="fade"
              timeout={100}>
                <Switch location={location}>
                  <Route exact path="/profile" component={Profile} />
                  <Route exact path="/skills" component={Skills} />
                </Switch>
              </CSSTransition>
            </TranstionGroup>
          )} />
          <NavBtn/>
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

export default connect(mapStateToProps, null, null, { pure: false})(App);