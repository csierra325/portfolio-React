import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './NavBar.css'; 
import Work from '../Work/Work';
import Contact from '../Contact/Contact';
import Home from '../Home/Home'


class NavBar extends Component{
    render(){
        return(
            <Router>
                <div>
                    <ul className="NavBar">
                        <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/portfolio-React//contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/portfolio-React//work">Work</Link>
                        </li>
                    </ul>
                    
                    <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/portfolio-React//contact">
                        <Contact />
                    </Route>
                    <Route path="/portfolio-React/work">
                        <Work />
                    </Route>
                    </Switch>
                </div>
            </Router>
            
        )
    }
}

export default NavBar

    