import React, { Component } from 'react';
import Camille from '../../Images/camille.jpg';
import './home.css'

class Home extends Component{
    
    render(){
        return(
            <div>
                <div className="home-header">Hello, I'm Camille</div>
                <div className="home-description">
                    <div className="home-text">
                        <div className="home-subtext">I am a full-stack web developer based in Las Vegas, NV.
                            I have a passion for creative code and new technology.
                        </div>
                        <div className="home-subtext">Currently building web stores and applications at Icebox Cool Stuff</div>
                    </div>
                    <img className="portrait" src={Camille}  alt="Camille"/>
                </div>
                <div className="topleft"></div>
            </div>
        )
    }
}

export default Home
