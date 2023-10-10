import React from "react";
import TiltCard from "./TiltCard/TiltCard";

const Automation = () => {
  return (
    <div>
      <h1> This is Automation </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <TiltCard>
          <div
            style={{
              width: "300px",
              height: "400px",
              background: "lightblue",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            Your Card Content Here
          </div>
        </TiltCard>
      </div>
    </div>
  );
};

export default Automation;
