import React from "react";
import { Link, Router } from "react-router-dom";

let hobby = "makan";

class Home extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {
      username: "who?",
    };
  }

    // componentDidMount(){
    //   alert('Component did mount Running!')
    // }

  // componentWillUnmount() {
  //   alert(hobby);
  // }

  onUpdateUsername = () => {
    this.setState({username : 'mustofa'})
    hobby = "Minum";
  };
  render() {
    return (
      <h1>
        This is Home Component
        <Link to="/login">Go to Login</Link>
        <h2>{this.state.username}</h2>
        <h2>{hobby}</h2>
        <button onClick={this.onUpdateUsername}>Update</button>
      </h1>
    );
  }
}
export default Home;
