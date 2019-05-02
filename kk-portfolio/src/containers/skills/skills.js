import React, { Component } from 'react';
import Header from '../../utility/header/header';
import './skills.scss';
import css from '../../assets/svg/skills/css3.svg';
import sass from '../../assets/svg/skills/sass-1.svg';
import html from '../../assets/svg/skills/html-5.svg';
import react from '../../assets/svg/skills/react.svg';
import js from '../../assets/svg/skills/javascript.svg';
import nodejs from '../../assets/svg/skills/nodejs.svg';
import c from '../../assets/svg/skills/c.svg';
import xd from '../../assets/svg/skills/adobe-xd.svg';
import jquery from '../../assets/svg/skills/jquery-1.svg';
import git from '../../assets/svg/skills/git-icon.svg';
import reactRouter from '../../assets/svg/skills/react-router.svg';
import redux from '../../assets/svg/skills/redux.svg';

class Skills extends Component{
    render(){
        return(
            <div className="skills">
                <div className="skills_header">
                    <Header heading="Skills" />
                </div>
                <div className="skills_con">
                    <div className="skills_con-imgCon">
                        <img className="css" src={css} alt="css" />
                        <img className="sass" src={sass} alt="sass" />
                        <img className="html" src={html} alt="html" />
                        <img className="react" src={react} alt="react" />
                        <img className="js" src={js} alt="js" />
                        <img className="nodejs" src={nodejs} alt="nodejs" />
                        <img className="c" src={c} alt="c" />
                        <img className="xd" src={xd} alt="xd" />
                        <img className="jquery" src={jquery} alt="jquery" />
                        <img className="git" src={git} alt="git" />
                        <img className="reactRouter" src={reactRouter} alt="react router" />
                        <img className="redux" src={redux} alt="redux" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;