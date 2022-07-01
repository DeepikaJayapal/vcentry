import React, { Component } from 'react';

class RegisterPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            register: {
                first_name : "",
                last_name : "",
                email_id : "",
                password : " ",
                date_of_birth : "",
                gender : " ",
                hobbies : [],
                address :"",
                city:""
            },
            error : {
                first_name : false,
                last_name : false,
                email_id : false,
                password : false,
                date_of_birth : false,
                gender : false,
                hobbies : false,
                address :false,
                city:false
            }
        }
    }

    onHandleInput = (event) => {
        if(event.target.name === "hobbies"){
            if(event.target.checked){
                this.state.register.hobbies.push(event.target.value);
            }
            else{
                let index = this.state.register.hobbies.findIndex((value) =>{
                    return value === event.target.value;
                });
                this.state.register.hobbies.splice(index,1);
            }
            this.setState({
                // hobbies : this.state.hobbies
                register :{...this.state.register,hobbies:this.state.register.hobbies}
            })
        }
        else{
            this.setState({
                // [event.target.name] : event.target.value
                register : {...this.state.register,[event.target.name] : event.target.value}
            })
        }
    }

    onCreateAccount(){
        // console.log(this.state);
        // this.setState({   
        //     first_name : (this.state.first_name === "") ? true : false,
        //     last_name : (this.state.last_name === "") ? true : false,
        //     email_id : (this.state.email_id === "") ? true : false,
        //     password : (this.state.password === "") ? true : false,
        //     gender : (this.state.gender === "") ? true : false,
        //     hobbies : (this.state.hobbies === "") ? true : false,
        //     address : (this.state.address === "") ? true : false,
        //     city : (this.state.city === "") ? true : false,
        // });
        var error ={};
        for(var key in this.state.register){
            if(key === " hobbies"){
                error[key] = this.state.register.hobbies.length===0 ? true : false
            }
            else{
                error[key] = this.state.register[key] === "" ? true : false
            }
        }
        this.setState({
            error : error
        })
        
    }

    render(){
        let name= "Deepika";
        return(
            <div>
                <h1>Welcome to Register Page</h1>
                <div className="block-space">
                    <label className="label-message">Please enter your First Name : </label>
                    <input className="input-box" type="text" placeholder="Enter Your First Name.." onChange={this.onHandleInput} name="first_name"/>
                    {this.state.error.first_name && <span className='error-msg'>Invalid First Name</span>}
                </div>
                <div className="block-space">
                    <label className="label-message">Please enter your Last Name : </label>
                    <input className="input-box" type="text" placeholder="Enter Your Last Name.." onChange={this.onHandleInput} name="last_name"/>
                    {this.state.error.last_name && <span className='error-msg'>Invalid Last Name</span>}
                </div>
                <div className="block-space">
                    <label className="label-message">Please enter your Email Id : </label>
                    <input className="input-box" type="text" placeholder="Enter Your Email Id.." onChange={this.onHandleInput} name="email_id"/>
                    {this.state.error.email_id && <span className='error-msg'>Invalid Email</span>}
                </div>
                <div className="block-space">
                    <label className="label-message">Please enter your password : </label>
                    <input className="input-box" type="password" placeholder="Enter Your password.." onChange={this.onHandleInput} name="password"/>
                    {this.state.error.password && <span className='error-msg'>Invalid password</span>}
                </div>
                <div className="block-space">
                    <label className="label-message">Select your DOB : </label>
                    <input className="input-box" type="date"  onChange={this.onHandleInput} name="date_of_birth"/>
                    {this.state.error.date_of_birth && <span className='error-msg'>Invalid DOB</span>}
                </div>
                <div className="block-space">
                    <label className="label-message"> Select your Gender: </label>
                    <input  type="radio"  onChange={this.onHandleInput} name="gender" value="Male"/>Male
                    <input  type="radio"  onChange={this.onHandleInput} name="gender" value="Female"/>Female
                    <input  type="radio"  onChange={this.onHandleInput} name="gender" value="Others"/>Others
                    {this.state.error.gender && <span className='error-msg'>Invalid Gender</span>}
                </div>
                <div className="block-space">
                    <label className="label-message"> Select your Hobbies: </label>
                    <input  type="checkbox"  onChange={this.onHandleInput} name="hobbies" value="Chess"/>Chess
                    <input  type="checkbox"  onChange={this.onHandleInput} name="hobbies" value="Cricket"/>Cricket
                    <input  type="checkbox"  onChange={this.onHandleInput} name="hobbies" value="Carrom"/>Carrom
                    <input  type="checkbox"  onChange={this.onHandleInput} name="hobbies" value="Tennis"/>Tennis
                    <input  type="checkbox"  onChange={this.onHandleInput} name="hobbies" value="Volleyball"/>Volleyball
                    {this.state.error.hobbies && <span className='error-msg'>Invalid Hobbies</span>}
                </div>
                <div className="block-space">
                    <label className="label-message">Please Enter your Address</label>  
                    <textarea className="input-box address" placeholder="Enetr Your Address.." onChange={this.onHandleInput} name="address"></textarea>
                    {this.state.error.address && <span className='error-msg'>Invalid Address</span>}
                </div>
                <div className="block-space">
                    <label className="label-message"> Select your City: </label>
                    <select className="input-box" onChange={this.onHandleInput} name="city">
                        <option>Please select any city</option>
                        <option>Chennai</option>
                        <option>Thindivanam</option>
                        <option>Cheyyar</option>
                    </select>
                    {this.state.error.city && <span className='error-msg'>Invalid City</span>}
                </div>
                <button className="button" onClick={()=>this.onCreateAccount()}>Create Account</button>
            </div>
        );
    }
}
export default RegisterPage;