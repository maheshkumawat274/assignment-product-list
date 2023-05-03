import React, { Component } from "react";
import "./App.css";
import Menu from "./Components/menubar";
import Brand from "./Components/brand";
//import Main from "./Components/mainfile";
// import Product from "./Components/product";
//import Top from "./Components/topbar";

import Allproduct from "./Components/allproduct";
class App extends Component{
  render(){
  return(
    <>
     <div className="menu">
      <Menu />
    </div>
    <div className="branditems">
      <Brand />
    </div>
    <div className="allproduct">
      <Allproduct/>
    </div>
    </>
  )
}
}


export default App;