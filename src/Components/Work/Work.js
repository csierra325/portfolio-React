import React, { Component } from 'react';
import './Work.css';
import PetPro from '../../Images/Petpro.png';
import Giphy from '../../Images/giphy.jpg';
import FriendFinder from '../../Images/friendFinder.png';
import Hangman from '../../Images/hangman.jpg';
import WhetherWeather from '../../Images/whetherWeather.jpg';
import GOTClicky from '../../Images/GOTClicky.png';

class Work extends Component{
    render(){
        return(
            <div>
                <div className="project-header">My Projects</div>
                <div className="Container">
                    <div className="project"><img src={PetPro} alt="Pet Pro"/></div>
                    <div className="project"><img src={Giphy} alt="Giphy App"/></div>
                    <div className="project"><img src={FriendFinder} alt="Friend Finder"/></div>
                    <div className="project"><img src={Hangman} alt="Hangman"/></div>
                    <div className="project"><img src={WhetherWeather} alt="Whether Weather"/></div>
                    <div className="project"><img src={GOTClicky} alt="GOT Clicky Game"/></div>
                </div>
            </div>
            
        )
    }
}

export default Work
