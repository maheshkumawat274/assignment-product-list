import React, { Component } from "react";
import "./brand.css";
class Brand extends Component{
    render(){
        return(
            <div className="brand">
                <ul>
                    <li><strong>Filter</strong></li>
                     <li></li>
                </ul>
                <hr />
                <h1 className="brandtext">Brand</h1>

                <p><input type="checkbox" name="checkbox"/>Number A</p>
                <p><input type="checkbox" name="checkbox"/>Brand 2</p>
                <p><input type="checkbox" name="checkbox"/>Brand C</p>
                <p><input type="checkbox" name="checkbox"/>Miracle</p>
                <p><input type="checkbox" name="checkbox" />Empty</p>
                <hr />
                <h1 className="brandtext">Category</h1>
                <p><input type="checkbox" name="checkbox1"/>Number A</p>
                <p><input type="checkbox" name="checkbox1"/>Brand 2</p>
                <p><input type="checkbox" name="checkbox1"/>Brand C</p>
                <p><input type="checkbox" name="checkbox1"/>Miracle</p>
                <p><input type="checkbox" name="checkbox1" />Empty</p>
                <hr />
                <h1 className="brandtext">Price</h1>
                <p><input type="checkbox" name="checkbox2"/>{"<"} $100</p>
                <p><input type="checkbox" name="checkbox2"/>$100-$199</p>
                <p><input type="checkbox" name="checkbox2"/>$200-$599</p>
                <p><input type="checkbox" name="checkbox2"/>$600-$999</p>
                <p><input type="checkbox" name="checkbox2" />{">"} $1000</p>
                <hr />

            </div>
        )
    }
}
export default Brand;