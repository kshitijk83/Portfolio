import React, { Component } from 'react';
import './profileImg.scss';
import profilePic from '../../../assets/png/kshitij.png';

class profileImg extends Component{

    state={
        x:0,
        y:0,
        posX: 0,
        posY: 0
    }

    imgBox=(x)=>{
        this.box = x;
    }

    leave=()=>{
        this.setState({ posX: 0, posY: 0 });
    }

    imgMove=(e)=>{
        const boxWidth = this.box.offsetWidth;
        const boxHeight = this.box.offsetHeight;
        const left =e.clientX-this.box.getBoundingClientRect().left-boxWidth/2;
        const right =e.clientY-this.box.getBoundingClientRect().top-boxHeight/2;
        this.setState({x: e.screenX, y: e.screenY, posX: left/18, posY: right/18});
    }
    
    render(){
        return (
            <div className="profileImg">
                {/* <div className="profileImg-back"></div> */}
                <div  className="profileImg-img">
                    <img
                    onMouseLeave={this.leave}
                    style={{
                        transform: "rotateX("+this.state.posX+"deg) rotateY("+this.state.posY+"deg)",
                        boxShadow: "1px "+this.state.posY+"px 40px black"
                    }}
                    ref={(x)=>{this.imgBox(x)}} onMouseMove={this.imgMove} 
                    src={profilePic} alt="That's me" />
                </div>
            </div>
        );
    }
    
}

export default profileImg;