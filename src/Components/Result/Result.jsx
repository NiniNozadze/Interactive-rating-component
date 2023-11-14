import React from "react";
import "./Result.css"

export default function Result(props){
    return (
      <div className="main-div">
        <img className="img"  src="./images/illustration-thank-you.svg"></img> 
        <div className="second-div">
        <h1 className="heading">You selected {props.number} out of 5</h1>
        </div>
        <h2 className="thank">Thank you!</h2>
        <p className="parag">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
      </div>  
    )
}