import React from 'react';
import './header.scss';

const header = (props) => {
    // console.log(props);
    return (
        <div className="header header-leftTranslate">
            <div className="header-bar"></div>
            <div className="header-desc">{props.heading}</div>
        </div>
    );
}

export default header;