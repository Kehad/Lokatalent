import React from "react";
import lady from "../../assets/lady.png";
import layers from "../../assets/ic_layers_48px.png";
import "./works.css";

function Works() {
  return (
    <div className="works">
      <h1 className="header">How it works</h1>
      <div className="main">
        <div className="imgBox">
          <img className="lady" src={lady} alt="A lady with a phone" />
          {/* <div className="imgContainer" ></div> */}
          <div className="layers">
            <div className="layer_box">
              <img src={layers} alt="layers" />
            </div>
            <div className="text-box">
              <p className="text1">Lorem</p>
              <p className="text2">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Works;
