import React, {Component} from "react";
import axios from "axios";

class TrashPage extends Component{

    onDelete(){
        let apiURL = "https://recres.in/api/users/2";

        axios.delete(apiURL)
            .then((response)=>{
                console.log(response)
            })
            .catch((error)=>{
                console.log(error)
            })
    }

    render(){
        return(
            <div>
                <h1>This is TrashPage</h1>
                <button onClick={() =>this.onDelete()}>Delete API</button>
            </div>
        )
    }
}

export default TrashPage;