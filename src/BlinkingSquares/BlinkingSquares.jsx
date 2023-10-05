import React, { useEffect, useState } from "react";
import "./BlinkingSquares.css";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import call from "../assets/call.png";
import email from "../assets/email.png";
const BlinkingSquares = () => {
  const [squares, setSquares] = useState([]);



  useEffect(() => {
    const numRows = 22;
    const numCols = 45;
    const squareSize = 42;
    const spacing = 2;

    const squareElements = [];

    // here in this loop create box vertically and horizontaly.
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        // this will generate random delay for each box .. cause, to create blinking effect then each box need a different animation delay, and this will generate random delay for each box...and square box will appeard and disappeard in different time so that it its look like blinking box..
        const animationDelay = Math.random() * 10 + "s";

        // this will set position for horizontaly  for each box created when loop is running
        const left = col * (squareSize + spacing) + "px";
        // and this will also do the same , but it will set positon for vertically .
        const top = row * (squareSize + spacing) + "px";

        // and this creating square box and and then added in  "squareElements"
        squareElements.push(
          <div
            key={`${row}-${col}`}
            className="square"
            style={{
              width: `${squareSize}px`,
              height: `${squareSize}px`,
              left: left,
              top: top,
              animationDelay: animationDelay,
            }}
          />
        );
        console.log("start");
      }
    }
    // console.log('render check')
    // Update state with the squares box
    setSquares(squareElements);
  }, []);

  return (
    <>
      <div>
        <div className="firstBg ">
          <div className="secondBg ">
            {/* and here is those updated animated square box container */}
            <div className="square-container">{squares}</div>
          </div>
          <div className=" middleBox">
            <h1 className="title">RACHAEL DECKARD</h1>
            <hr className="divider" />
            <p className="description">
              MORBI CONDIMENTUM PURUS QUIS EST SEMPER MAXIMUS INTEGER.
            </p>

            <div className="contact-container">
              <div className="contact">
                <div className="twitter">
                  <img src={twitter} alt="" />
                </div>
                <div className="facebook">
                  <img src={facebook} alt="" />
                </div>
                <div className="phone">
                  <img src={call} alt="" />
                </div>
                <div className="mail">
                  <img src={email} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlinkingSquares;
