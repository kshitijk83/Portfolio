import React, { Component } from 'react';
import './profile.scss';
import Header from '../../utility/header/header';
import ProfileImg from '../../components/profile/profileImg/profileImg';
import ProfileDesc from '../../components/profile/description/profileDesc';
import quotationLeft from '../../assets/svg/quotation-mark.svg';
import quotationRight from '../../assets/svg/right-quote-sign.svg';
import yellowRect from '../../assets/svg/Rectangle 14.svg';
import blueRect from '../../assets/svg/Rectangle 16.svg';

class Profile extends Component{

    constructor(props){
        super(props);
        this.profileRef = React.createRef();
    }

    render(){
        return(
            <div className="profile">
                <div className="svg svgYellow svgYellow-right">
                    <img src={yellowRect} alt="yellow" />
                </div>
                <div className="svg svgYellow svgYellow-left">
                    <img src={yellowRect} alt="yellow" />
                </div>
                <div className="svg svgBlue svgBlue-right">
                    <img src={blueRect} alt="blue" />
                </div>
                <div className="svg svgBlue svgBlue-left">
                    <img src={blueRect} alt="blue"/>
                </div>
                <div className="profile_header">
                    <Header heading="About Us" />
                </div>
                <div className="profile_con">
                    <div className="profile_img">
                        <ProfileImg />
                    </div>
                    <div className="profile_desc">
                        <ProfileDesc />
                    </div>
                    <div className="profile_tagline">
                        <div className="profile_tagline-svg">
                            <img className="left" src={quotationLeft} alt="quote-left" />
                        </div>
                        Consistency matters, not perfection
                        <div className="profile_tagline-svg">
                            <img className="right" src={quotationRight} alt="quoute-right" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;