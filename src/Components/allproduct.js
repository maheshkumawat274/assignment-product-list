import React, { Component } from "react";
import Product from "./product";
class Allproduct extends Component{
    renderProduct=()=>{
       return <Product/>
    }
    render() {
        let products = [];
        for (let i = 0; i < 9; i++) {
            products.push(this.renderProduct());
        }
        return products;
    // return this.renderProduct()
    }
}
export default Allproduct;