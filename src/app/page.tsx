"use client";

import React, { useEffect, useRef } from "react";

const page = () => {
  const front = useRef();

  useEffect(() => {
    let words = ["textFront"];
    let i = 0;

    function changeText() {
      i = (i + 1) % words.length;
      return words[i];
    }

    const domNodeFront = front.current;

    function flashChangeText() {
      let text = changeText();

      if (text === "textFront") {
        domNodeFront.style.display = "inline-block";
        domNodeFront.style.animation =
          "moveBorder 1.5s ease-in infinite alternate";
      }
    }

    setInterval(flashChangeText, 3000);
  }, []);

  return (
    <div className="imgContainer">
      <div className="blockTitle">
        <h1>
          <span className="firstName">GAEL</span>
          <span className="lastName"> MAYER</span>
        </h1>
        <p>
          <span className="title">Développeur </span>
          <span className="textAnim">
            <b className="textAnim textFront" ref={front}>
              Front-end
            </b>
          </span>
        </p>
      </div>
    </div>
  );
};

export default page;
