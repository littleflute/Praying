import React,{Component} from 'react';
import './App.css';
import Header from "./components/Header"
import Home from "./components/Home"
import Prayers from "./components/Prayers"
import Members from "./components/Members"
import PostPrayer from "./components/PostPrayer"
import Route from "react-router-dom/Route";
import {BrowserRouter as Router} from "react-router-dom";

//main
class App extends Component {

  render() {

    return(
      <Router>
      <div className="App">
        <Header/>
        <body>
        <Route path = "/" exact component = {Home}></Route>
        <Route path = "/postprayer" component = {PostPrayer}></Route>
        <Route path = "/getprayers" component = {Prayers}></Route>
        <Route path = "/ccccmembers" component = {Members}></Route>
        </body>
      </div>
      </Router>
    );
  }

}

export default App;
