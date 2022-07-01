import React, {Component} from "react";
import axios from "axios";

class InboxPage extends Component{
   
  constructor(props){
    super(props);
    this.state = {
      userList: [],
      isLoading: false
    }
  }

  onLoadUser(page){
    let apiURL = "https://reqres.in/api/users?page=" + page;
    this.setState({
      isLoading : true
    })

    axios.get(apiURL)
      .then((response) => {
        let result = response.data;
        console.log(result);
        this.setState({
          userList : result.data, 
          isLoading : false
        })
      })
      .catch((error) => {
        console.log(error)
      })
}

  render(){
   let users = this.state.userList.map((value, index) => {
    return(
      <tr key={index}>
        <td>{value.id}</td>
        <td>{value.first_name}</td>
        <td>{value.last_name}</td>
        <td>{value.email}</td>
        <td>
          <img src={value.avatar} className="round-image"/>
        </td>
      </tr>
    )
   });

    return(
      <div>
        <h1>This is Inbox Page</h1>
        <button onClick={() => this.onLoadUser(1)}>Load User Information</button>

        {this.state.isLoading ? 
            <img src={require("../../images/loader.gif")}/>
            :
          <table id="customers">
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email ID</th>
              <th>Profile Picture</th>
            </tr>
          </thead>

          <tbody>
            {this.state.userList.length === 0 ? 
              <tr>
                <td colSpan="5">No Record Found</td>
              </tr>
              :
              users
            }
          </tbody>
        </table>
      }

        <div>
          <button className="btn btn-primay" onClick={() => this.onLoadUser(1)}>1</button>
          <button className="btn btn-primay" onClick={() => this.onLoadUser(2)}>2</button>
          <button className="btn btn-primay" onClick={() => this.onLoadUser(3)}>3</button>
        </div>
    </div>
        )
    }
}

export default InboxPage;