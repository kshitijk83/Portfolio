import React from 'react';
import './profileImg.scss';
import profilePic from '../../../assets/png/kshitij.png';

const profileImg = () => {
    return (
        <div className="profileImg">
            <div className="profileImg-back"></div>
            <div className="profileImg-img">
                <img src={profilePic} alt="That's me" />
            </div>
        </div>
    );
}

export default profileImg;