import FlipPage from "components/UI/FlipPage";
import React, { useState } from "react";
import "assets/Styles/Portfolio.scss";
import Restaurant from "assets/Images/restaurant.png";
import Chair from "assets/Images/chair.png";
import Time from "assets/Images/time.png";
import TiltCard from "components/UI/TiltCard";

const tiltvalues = [
  {
    id: 1,
    title: "Restaurant Van Long",
    picture: Restaurant,
    language: "NEXTJS",
    link: "https://van-long.fr/",
    logo: <i className="fab fa-wordpress"></i>,
  },
  {
    id: 2,
    title: "Time tracking dashboard",
    picture: Time,
    language: "JAVASCRIPT",
    link: "https://confident-hamilton-fd4b0e.netlify.app/",
    logo: <i className="fab fa-js"></i>,
  },
  {
    id: 1,
    title: "Room Home Page",
    picture: Chair,
    language: "JAVASCRIPT",
    link: "https://amazing-gates-9da9b3.netlify.app/",
    logo: <i className="fab fa-js"></i>,
  },
];

const buttonValues = ["TOUT", "NEXTJS", "JAVASCRIPT"];

function Portfolio() {
  const [showResult, setShowResult] = useState(tiltvalues);
  const [currentButtonValue, setCurrentButtonValue] = useState("TOUT");

  const handleClickButtonLanguage = (value) => {
    buttonValues.map((buttonValue) => {
      if (value === buttonValue) {
        setShowResult(
          value === "TOUT"
            ? tiltvalues
            : tiltvalues.filter((tiltvalue) => tiltvalue.language === value)
        );
        setCurrentButtonValue(value);
      }
      return null;
    });
  };

  return (
    <FlipPage title={"Portfolio."} logo={<i className="fas fa-briefcase"></i>}>
      <div className="mainBlock">
        <div className="up">
          <ul>
            {buttonValues.map((buttonValue) => (
              <button
                className={buttonValue === currentButtonValue && "active"}
                onClick={() => handleClickButtonLanguage(buttonValue)}
              >
                <li>{buttonValue}</li>
              </button>
            ))}
          </ul>
        </div>
        <div className="down">
          <TiltCard tiltvalues={showResult} />
        </div>
      </div>
    </FlipPage>
  );
}

export default Portfolio;
