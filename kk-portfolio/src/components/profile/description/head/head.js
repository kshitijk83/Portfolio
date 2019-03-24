import React, { Component } from 'react';
import './head.scss';
const words = ['MERN Developer', 'UI/UX designer', 'JavaScript Lover', 'Front-end Developer', 'Nodejs Developer'];
var wordCount=0;
var i = 0;
var word='';
class Head extends Component{
    state={
        currentWord: '',
        curentLetter: ''
    }

    wordsChange=()=>{
        setTimeout(() => {
            if(i<words[wordCount].length){
                var curL = words[wordCount][i];
                word = word.concat(curL);
                // console.log(word);
                this.setState({ curentLetter: word });
                i++;
            } else{
                i=0;
                word='';
                wordCount=(wordCount+1)%3;
                this.setState({ currentLetter: word });
            }
        }, 300);
    }


    render(){
        this.wordsChange();
        return(
            <div className="words">{this.state.curentLetter}</div>
        )
    }
}

export default Head;