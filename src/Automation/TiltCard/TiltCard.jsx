import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
import "./TiltCard.css";

function TiltCard({ title, description, img, button }) {
  const [springProps, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 10, tension: 350, friction: 30 },
  }));

  const cardRef = useRef(null);

  const handleMouseMove = (event) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    set.start({ xys: [-(y - 0.5) * 20, (x - 0.5) * 20, 1.1] });
  };

  const handleMouseLeave = () => {
    set.start({ xys: [0, 0, 1] });
  };

  return (
    <div className=" ">
      <animated.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className=" bg-white max-w-[360px] p-10 relative cursor-pointer flex flex-col  gap-2  h-[670px]  items-center  "
        style={{
          transform: springProps.xys.to(
            (x, y, s) =>
              `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
          ),
        }}
      >
        <div className="">
          <p className=" font-Pixelify font-bold text-[22px] text-gray-700 h-[60px]   ">
            {title}
          </p>
        </div>
        <p className="text-[18px] font-Pixelify text-gray-700  h-[200px] text-justify  ">
          {description}
        </p>
        <div className="mb-10">
          <img
            className="max-w-[250px]  w-full  h-48  "
            src={img}
            alt=""
          />
        </div>
        <div className=" ">
          <div className=" ">
            <div className=" bottom-0 relative left-[10px]  ">
              <div className="bg-blue-500 h-[80px] w-[230px] absolute "></div>
              <div className="bg-blue-500 h-[60px] w-[250px] relative right-[10px] top-[10px] ">
                <div className="bg-blue-500 h-[70px] w-[240px] absolute right-[5px] -bottom-[5px] ">
                  <button>
                    <p className="text-white font-Pixelify text-[25px]">
                      {button}
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  );
}

export default TiltCard;
