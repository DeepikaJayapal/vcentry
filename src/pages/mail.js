import React, {Component} from "react";
import { Outlet,NavLink } from "react-router-dom";

class MailPage extends Component{
    render(){
        return(
            <div className="mailpage">
                <div className="header"></div> 
                <div className="wrapper">
                    <div className="sidebar">
                        <div className="top-space">
                            <NavLink to="/mail/inbox" className={({isActive})=>isActive ?"btn btn-primary" : "btn btn-secondary"} >go to inbox page</NavLink>
                        </div>
                        <div className="top-space">
                            <NavLink to="/mail/sent" className={({isActive})=>isActive ?"btn btn-primary" : "btn btn-secondary"} >go to sent page</NavLink>
                        </div>
                        <div className="top-space">
                            <NavLink to="/mail/trash" className={({isActive})=>isActive ?"btn btn-primary" : "btn btn-secondary"}>go to trash page</NavLink>
                        </div>
                    </div>
                    <div className="content">
                        <Outlet></Outlet>
                    </div>
                </div> 
            </div>
        )
    }
}

export default MailPage;