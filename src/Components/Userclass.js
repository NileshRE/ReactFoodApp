import React from "react"
import UserContext from "../Utils/UserContext";

class Userclass extends React.Component {
 constructor(props){
    super(props);

    this.state={
        userInfo: {
            login:"Dummy",
            id:"default",
            
        },
    };
}

async componentDidMount(){
    const data = await fetch("https://api.github.com/users/NileshRE");
    const json = await data.json();

this.setState({
    userInfo: json,
});

}

    render(){

        const{login, id, avatar_url} = this.state.userInfo;

        return(
        <div className="p-6 m-8 w-64 shadow-inner rounded-md">
            <img className="w-44 mb-4" src={avatar_url}/>
        <p className="text-lg font-medium">Name: {login}</p>
        <p>Location: {id}</p>
        <p>Contact: @19nilesh.kumar</p>
        <button className="px-4 py-2 mr-8 my-4 border-2 border-orange-500 rounded-md text-black"> Contact</button>
        <UserContext.Consumer>
            {({loggedInUser})=><h1>{loggedInUser}</h1>}
        </UserContext.Consumer>
    </div> 
        );
    };
};

export default Userclass;