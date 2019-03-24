import React from 'react';
import './profileDesc.scss';
import Head from './head/head';

const profileDesc = () => {
    return (
        <div className="profileDesc">
            <div className="profileDesc-head">
                I am Kshitiz and i am a <Head />
            </div>
            <div className="profileDesc-desc">I am currently a front-end web developer and learning nodejs for back-end development and wants to be a full stack MERN developer. I believe in smart work 
            rather than hard-work (a bit though!) and loves javaScript (like my girlfriend). Always ready to prove my skills. A chance is greater for me than a selection.
            I am currently a front-end web developer and learning nodejs for back-end development and wants to be a full stack MERN developer. I believe in smart work 
            rather than hard-work (a bit though!) and loves javaScript (like my girlfriend). Always ready to prove my skills. A chance is greater for me than a selection.
            </div>
            <div className="profileDesc-info">
                <ul>
                    <li className="list">
                        <div className="list-head">Email:  </div>
                        <div className="list-info">kkshitiz89@gmail.com</div>
                    </li>
                    <li className="list">
                        <div className="list-head">Phone:  </div>
                        <div className="list-info">+91 7018194070</div>
                    </li>
                    <li className="list">
                        <div className="list-head">City: </div>
                        <div className="list-info">Hamirpur, Himachal Pradesh</div>
                    </li>
                    <li className="list">
                        <div className="list-head">Country: </div>
                        <div className="list-info">India</div>
                    </li>
                    <li className="list">
                        <div className="list-head">College: </div>
                        <div className="list-info">NIT, Hamirpur</div>
                    </li>
                    <li className="list">
                        <div className="list-head">Course/Branch: </div>
                        <div className="list-info">Comp. Sciene and Eng.</div>
                    </li>
                    <li className="list">
                        <div className="list-head">Degree</div>
                        <div className="list-info">Dual-Degree</div>
                    </li>
                </ul>
            </div>
            <div className="profileDesc-btn">
                <div className="profileDesc-btn-con">
                    <div className="btn--black">Download Resume</div>
                </div>
                <div className="profileDesc-btn-con btn2">
                    <div className="btn--black">Contact Message</div>
                </div>
            </div>
        </div>
    );
}

export default profileDesc;