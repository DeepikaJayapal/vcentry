import React, {Component} from "react";
import { NavLink } from "react-router-dom";

class HomePage extends Component{
    render(){
        return(
            <div>
                <h2>this is a Home page</h2>
                <NavLink to="/about">GO TO ABOUT PAGE</NavLink>
                <NavLink to="/contact">GO TO CONTACT PAGE</NavLink>
            </div>
        )
    }
}
export default HomePage;