import React,{Component} from 'react';
import './App.css';
import Header from "./components/Header"
import Bank from "./components/Bank"
import Family from "./components/Family"
import Home from "./components/Home"
import Product from "./components/Products"
import FamilyExpenses from "./components/FamilyExpenses"
import ProductExpenses from "./components/ProductExpenses"
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
        <Route path = "/familyExpenses" component = {FamilyExpenses}></Route>
        <Route path = "/productExpenses" component = {ProductExpenses}></Route>
        <Route path = "/familyStatements" component = {Family}></Route>
        <Route path = "/bankStatements" component = {Bank}></Route>
        <Route path = "/products" component = {Product}></Route>
        </body>
      </div>
      </Router>
    );
  }

}

export default App;
