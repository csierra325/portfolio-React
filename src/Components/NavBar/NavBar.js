import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './NavBar.css'; 
import Work from '../Work/Work';
import Contact from '../Contact';
import Home from '../Home'


class NavBar extends Component{
    render(){
        return(
            <Router>
                <div>
                    <ul className="NavBar">
                        <li>
                        <Link to="/sierra_portfolio">Home</Link>
                        </li>
                        <li>
                            <Link to="/sierra_portfolio/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/sierra_portfolio/work">Work</Link>
                        </li>
                    </ul>
                    
                    <Switch>
                    <Route exact path="/sierra_portfolio">
                        <Home />
                    </Route>
                    <Route path="/sierra_portfolio/contact">
                        <Contact />
                    </Route>
                    <Route path="/sierra_portfolio/work">
                        <Work />
                    </Route>
                    </Switch>
                </div>
            </Router>
            
        )
    }
}

export default NavBar

    