import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class ContactPage extends Component{
    render(){
        return(
            <div>
                <h2>this is a Contact page</h2>
                <NavLink to="/">GO TO HOME PAGE</NavLink>
            </div>
        )
    }
}
export default ContactPage;