import React, { Component } from 'react';
import GithubIcon from '../Images/github-icon.png';
import LinkdlnIcon from '../Images/linkedln-icon.png';
import TwitterIcon from '../Images/twitter-icon.png';

class Footer extends Component{
    render(){
        return(
            <div className="Footer">
                <span className="FooterIcons">
                    <a href="https://github.com/csierra325"><img src={GithubIcon}  alt="Github Icon"/></a>
                    <a  href="https://www.linkedin.com/in/camille-sierra/"><img src={LinkdlnIcon}  alt="Linkdln Icon"/></a>
                    <a  href="https://twitter.com/seaSierraCode"><img src={TwitterIcon}  alt="Twitter Icon"/></a>
                </span>
                
            </div>
        )
    }
}

export default Footer
