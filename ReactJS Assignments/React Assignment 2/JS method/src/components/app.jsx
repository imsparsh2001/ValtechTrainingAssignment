import { Component } from "react"
import axios from "axios";
 
class App extends Component{
    state = {
        users : []
    }
 
    componentDidMount(){
        axios.get("https://reqres.in/api/users?page=2")
        .then( res => this.setState({users : res.data.data}))
        .catch(err => console.log("Error",err))
    }
    render(){
        console.log("App Component's render was called")
       return <div>
                   <h1>Ajax | API Call</h1>
                   <hr/>
                   <ol>

                    { this.state.users.map( val => <li key = {val.id} style={{backgroundColor:val.id%2===0?"red":"blue"}}><img src={val.avatar} alt={val.first_name}/> {val.first_name}</li>)}
 
                   </ol>
 
               </div>
    }
}
 
export default App;