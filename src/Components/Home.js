import React, { Component } from 'react';
import Camille from '../Images/camille.jpg';

class Home extends Component{
    
    render(){
        return(
            <div>
                <h1>Home Page</h1>
                <p>My name is Camille. I am a full-stack web developer based in Atlanta, GA.
                    I have a passion for creative code and new technology
                </p>
                <img src={Camille}  alt="Camille"/>
            </div>
        )
    }
}

export default Home
