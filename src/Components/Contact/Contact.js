import React, { Component } from 'react';
import './Contact.css'

class Contact extends Component{
    render(){
        return(
            <div>
                <h1>Contact Page</h1>
                <div class="contact-card">
                    <div class="contact-items">
                        <div class="contact-item">GitHub</div>
                        <div class="contact-item">Email Me</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
