import React, {Component} from "react";
import axios from "axios";

class SentPage extends Component{
    constructor(props){
        super(props);
        this.state={
            name : "",
            job :""
        }
    }
    onHandleInput = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    onSubmitForm(){
        // console.log(this.state)
        let apiURL = "https://recres.in/api/users";

        axios.post(apiURL, this.state)
        .then((response) => {
          let serverData = response.data;
          console.log(serverData);
          alert("Profile has been created");
        })
        .catch((error) => {
          console.log(error);
        })
    }

    onSubmitFormPut(){
        var apiURL = "https://recres.in/api/users/2";

        axios.put(apiURL, this.state)
        .then((response) => {
          let serverData = response.data;
          console.log(serverData);
          alert("Profile has been Modified");
        })
        .catch((error) => {
          console.log(error);
        })
    }
    render(){
        return(
            <div>
                <h1>This is SentPage</h1>
                <div>
                    <label>Enter your Name :</label>
                    <input type="text" placeholder="Enter your name.." onChange={this.onHandleInput} name="name"/>
                </div>
                <div>
                    <label>Enter your Job :</label>
                    <input type="text" placeholder="Enter your job.." onChange={this.onHandleInput} name="job"/>
                </div>
                <button onClick={()=> this.onSubmitForm()}>Submit POST</button>
                <button onClick={()=> this.onSubmitFormPut()}>Submit PUT</button>
            </div>
        )
    }
}

export default SentPage;