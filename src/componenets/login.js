import React,{Component} from "react";
import { NavLink } from "react-router-dom";

import "../css/login.css";

class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : '',
            email : ''
        }
    }
    onHandleInput = (event) =>{
        // console.log(event.target.name,event.target.value)
        this.setState({
            [event.target.name] : event.target.value
        })
        // if(event.target.name == "User Name"){
        //     this.setState({
        //         username : event.target.value
        //     })
        // } 
        // else if(event.target.name == "Password"){
        //     this.setState({
        //         password : event.target.value
        //     })
        // }
    }

    onLogin(){
        this.props.navigate('/home');
        // console.log(this.state)
        if(this.state.username !=="" && this.state.email !== " " && this.state.password !==""){
            // return <NavLink to="/home"></NavLink>
        }
        else{
            alert("Incorrect form input")
        }
    }
    render(){
        return(
            <div>
                <h1>Welcome, Login Page</h1>
                <div className="block-space">
                    <label className="label-message">Please enter your Username :</label>
                    <input className="input-box" type="text" placeholder="Enter your Username.." onChange={this.onHandleInput} name="username" />
                </div>
                <div className="block-space">
                    <label className="label-message">Please enter your Username :</label>
                    <input className="input-box" type="text" placeholder="Enter your Email.." onChange={this.onHandleInput} name="email" />
                </div>
                <div className="block-space">
                    <label className="label-message">Please enter your Password :</label>
                    <input className="input-box" type="password" placeholder="Enter your Password.." onChange={this.onHandleInput} name="password" /> 
                </div>
                <button className="button" onClick={()=>this.onLogin()}>Login</button>
                <br />
                <NavLink to="/mail/inbox">Go to Mail Page</NavLink>
            </div>
        )
    }
}

export default LoginPage;