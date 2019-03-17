import React, { Component } from 'react';
import './_App.scss';
import CSSTransition from 'react-transition-group/CSSTransition';
// ----------------
// ROUTING PACKAGES
// ----------------
import { Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { bounce } from './utility/routerAnimations/anim';
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
          <NavBtn/>
          <AnimatedSwitch
            atEnter ={{
              opacity: 0,
              scale: 1.2
            }}
            atLeave = {{
              opacity: bounce(0),
              scale: bounce(0.8),
            }}
            atActive={{
              opacity: bounce(1),
              scale: bounce(1)
            }}
            mapStyles={(styles)=>{
              return{
                opacity: styles.opacity,
                scale: styles.scale 
              }
            }}
            className="route-wrapper"
            timeout={3000}>
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/skills" component={Skills} />
          </AnimatedSwitch>
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