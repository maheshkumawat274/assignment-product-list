import React, { Component } from "react";
import "./menubar.css";
class Menu extends Component{
    render(){
        return(
            
            <div className="topbar">
                <ul>
                    <li><img className="img1" src="./images/w2n.png" alt="" /></li>
                    <li><input className="input1" type="text" placeholder="Search..." /></li>
                    <li className="categories"><img className="img2" src="./images/icon.png" alt="" />Categories</li>
                    <li ><img className="img3" src="./images/bell.png" alt="" /> </li>
                    <li ><img className="avatar"  src="./images/avatar.jpeg" alt=""></img></li>
                </ul>
            </div>
        )
    }
}
export default Menu;