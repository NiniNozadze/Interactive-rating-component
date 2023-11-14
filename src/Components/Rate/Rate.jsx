import React, { useState } from "react";
import "./Rate.css";
export default function Rate(props) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="card">
      <div className="image-div">
        <img className="image" src="./images/icon-star.svg" alt="star image" />
      </div>
      <h1 className="question">How did we do?</h1>
      <p className="answer">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="ratings">
        {stars.map((item, index) => {
          return (
            <button
              key={index}
              className="star"
              style={
                props.number == item
                  ? { backgroundColor: "#7C8798", color: "white" }
                  : {}
              }
              onClick={() => props.setNumber(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
      <button
        className="last-btn"
        type="submit"
        onClick={() => {
          if (props.number) props.setSubmit(true);
        }}
      >
        SUBMIT
      </button>
    </div>
  );
}
