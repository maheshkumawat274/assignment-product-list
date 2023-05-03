import React, { Component } from "react";
import "./product.css";
import StarRating from "./starrating";
class Product extends Component{
    render(){
        return(
            <div className="item">
                <div className="itemplant">
                    <img src="./images/plant1.png" alt="" height="100%" width="100%"></img>
                </div>
                <div className="itemtext">
                    <h1 style={{fontSize:"15px"}}>Elegant designed diber plant...</h1>
                    <p style={{fontSize:"15",color:"gray",margin:"0"}}>Decoration</p>
                    
                    < StarRating />
                    <p style={{margin:"0",padding:"0"}}>$160.5 <s>%13.5</s> 32% off</p>
                </div>
            </div>
        )
    }
}
export default Product;