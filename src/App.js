import React, { Component } from "react";
import Intro from "./Components/Intro/Intro";
import "./App.css";
import Quiz from "./Quiz/Quiz";
class App  extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      TakeTest : true
    }
    this.handleclick = this.handleclick.bind(this);
  }
  handleclick(){
    this.setState({
    TakeTest : false
    });
  }
  render(){
    return(
<div className="App">
  {
    this.state.TakeTest ? 
  
      (<div className="Intro">
       <Intro clickevent = {this.handleclick}/>
      </div>) :
      (
        <div className="Quiz">
        <Quiz/>
      </div> 
      )
      }      
    </div>
    )
  }
}
export default App;