import React, { Component } from 'react';
import './Navbar.scss';
import logo from '../../assets/svg/logo.svg';
import fb from '../../assets/svg/fb.svg';
import github from '../../assets/svg/github.svg';
import instagram from '../../assets/svg/instagram.svg';
import linkedIn from '../../assets/svg/linkedIn.svg';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as action from '../../store/action/action';

class Navbar extends Component{


    render(){
        return(
            <div className="navbar">
                <div className="navbar-img">
                    <img src={logo} alt="logo" />
                </div>
                <div className="navbar-nav">
                    <nav className="nav">
                        <li>
                            <div><Link to="/profile" className="link">My Profile</Link></div>
                        </li>
                        <li>
                            <div><Link to="/skills" className="link">Skills</Link></div>
                        </li>
                        <li>
                            <div>Work Experience</div>
                        </li>
                        <li>
                            <div>Achievements</div>
                        </li>
                        <li>
                            <div>Education</div>
                        </li>
                        <li>
                            <div>Contact Me</div>
                        </li>
                    </nav>
                </div>
                <div className="navbar-icons">
                    <div className="navbar-icons--icon">
                        <a href="https://www.facebook.com/kshitij.kumar.169067" target="_blank" rel="noopener noreferrer">
                            <img src={fb} alt="facebook" />
                        </a>
                    </div>
                    <div className="navbar-icons--icon">
                        <a href="https://github.com/kshitijk83" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="github" />
                        </a>
                    </div>
                    <div className="navbar-icons--icon">
                        <a href='https://www.instagram.com/kshitij4836/' target="_blank" rel="noopener noreferrer">
                            <img src={instagram} alt="instagram" />
                        </a>
                    </div>
                    <div className="navbar-icons--icon">
                        <a href="https://www.linkedin.com/in/kshitiz-kumar-a0407314b/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedIn} alt="linkedIn" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state=>{
    return{
        hideLiToggle: state.showStart
    }
}

const dispatchStateToProps=dispatch=>{
    return{
        change: ()=>dispatch(action.showStart())
    }
}

export default connect(mapStateToProps, dispatchStateToProps)(Navbar);