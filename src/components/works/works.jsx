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
        <div className="items-container">
          <div className="items-box">
            <div className="items-1">
              <p>1</p>
            </div>
            <div className="items-text">
              <p className="items-text1">Lorem ipsum</p>
              <p className="items-text2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                consectetur adipiscing{" "}
              </p>
            </div>
          </div>
          <div className="items-box">
            <div className="items-1">
              <p>1</p>
            </div>
            <div className="items-text">
              <p className="items-text1">Lorem ipsum</p>
              <p className="items-text2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                consectetur adipiscing{" "}
              </p>
            </div>
          </div>
          <div className="items-box">
            <div className="items-1">
              <p>1</p>
            </div>
            <div className="items-text">
              <p className="items-text1">Lorem ipsum</p>
              <p className="items-text2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                consectetur adipiscing{" "}
              </p>
            </div>
                  </div>
                  <div className="button-box">
                      
                  <a href="#" className="booking">Make a booking</a>
                  </div>

                  
        </div>
      </div>
    </div>
  );
}

export default Works;
