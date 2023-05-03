import React, { Component } from "react";
import "./home.css";
import StarRating from "./starrating";
class Main extends Component{
    render(){
        return(
            <div className="total">
            
            <div className="itemtotal">
                
                <div className="items">
                    <p>Home / Home decoration / Artificial</p>
                    <div className="itemsFirst">
                        <div className="itemsFirst1">
                            <div className="plant1">
                                <img className="plant1img" src="./images/plant1.png" alt="" />
                            </div>
                            <div className="textitem">
                                <h1>Elegant designed diber plant...</h1>
                                <p>decoration</p>
                            </div>
                        </div>
                        <div className="itemsFirst2">
                            <div className="coffee">
                                <img className="coffeeimg" src="./images/coffe.png" alt=""/>
                            </div>
                            <div className="textitem"></div>
                        </div>
                        <div className="itemsFirst3">
                            <div className="camera">
                                <img className="cameraimg" src="./images/camera.png" alt=""></img>
                            </div>
                            <div className="textitem"></div>
                        </div>
                    </div>
                    <div className="itemsSecond">
                        <div className="itemsSecond1">
                            <div className="bag">
                                <img className="bagimg" src="./images/bag.png" alt="" />
                            </div>
                            <div className="textitem"></div>
                        </div>
                        <div className="itemsSecond2">
                        <div className="camera">
                                <img className="cameraimg" src="./images/camera.png" alt=""></img>
                            </div>
                            <div className="textitem"></div>
                        </div>
                        <div className="itemsSecond3">
                        <div className="plant1">
                                <img className="plant1img" src="./images/plant1.png" alt="" />
                            </div>
                            <div className="textitem">
                                <h1>Elegant designed diber plant...</h1>
                                <p>decoration</p>
                            </div>
                        </div>
                    </div>
                    <div className="itemsThird">
                        <div className="itemsThird1">
                            <div className="morni">
                                <img className="morniimg" src="./images/morni.png" alt=""/>
                            </div>
                            <div className="textitem">
                            </div>
                        </div>
                        <div className="itemsThird2">
                        <div className="coffee">
                                <img className="coffeeimg" src="./images/coffe.png" alt=""/>
                            </div>
                            <div className="textitem"></div>
                        </div>
                        <div className="itemsThird3">
                        <div className="bag">
                                <img className="bagimg" src="./images/bag.png" alt="" />
                            </div>
                            <div className="textitem">
                                <StarRating />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default Main;