import React, {Component} from "react";

class DisplayMessage extends Component {
    constructor(props){
        super(props);
        this.state = {
            message:"hello",
            username : "",
            password : "",
            isMessageVisible : true,
        }
    }

    display(){
        let text = "welcome to Display message method";
        console.log(text);
        this.setState({
            message : text
        });
    }
    //onChange -type1
    readInputxBo(event){
        console.log(event.target.value)
        this.setState({
            userName: event.target.value
        });
    }
    //onChange - type2(property method)
    readInputPreopertyMethod=(event)=>{
        console.log(event.target.value)
        this.setState({
            password:event.target.value 
        });
    }

    onLogin(){
        let result = {
            username : this.state.userName,
            password : this.state.password
        };
        console.log(result)
    }
    showMessage(){
        this.setState({
            isMessageVisible:true
        })
    }
    hideMessage(){
        this.setState({
            isMessageVisible: false
        })
    }

    render(){
        return(
            <div>
                <h1>Hi,this is display message</h1>
                <h2>{this.state.message}</h2>

                <button onClick={()=>this.display()}>Print Message</button>
                <br></br>
                <label>Enter Your Username :</label>
                {/* type 1  this type 1 and 2 is for we type input in input bo those displayed in console simuntaneously*/}
                <input className="inputBox" type="text" placeholder="username" onChange={this.readInputxBo.bind(this)} />
                <br/>
                {/*type 2 */}
                <label>Password</label>
                <input className="inputBox" type="password" placeholder="password" onChange={this.readInputPreopertyMethod} />
                <br />
                <button onClick={()=>this.onLogin()}>Login</button>
                <br />
                <button className="btn btn-primary" onClick={()=>this.showMessage()}>Show Message</button>
                <button className="btn btn-danger" onClick={()=>this.hideMessage()}>Hide Message</button>

                {this.state.isMessageVisible &&  <div>
                        <h2>the username is {this.state.userName}</h2>
                        <h2>the password is {this.state.password}</h2>
                </div>}

                {this.state.isMessageVisible ?
                    <div>
                        <h2>Image from file system</h2>
                        <img src={require("../images/varshitha.jpg")} className="img" />
                    </div>
                    :
                    <div>
                        <h2>Images from online</h2>
                        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" className="img" />
                    </div>
                }
            </div>
        )
    }
}

export default DisplayMessage;