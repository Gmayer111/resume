"use client";
import React, { useState } from "react";
import Restaurant from "../../../public/Images/restaurant.png";
import Chair from "../../../public/Images/chair.png";
import Time from "../../../public/Images/time.png";
import MainLayout from "components/layout/main-layout.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import TiltCard from "components/common/tilt-card.component";

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

const dataFilter = ["TOUT", "DESIGN", "PRO"];

const Portfolio = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [__, setShowResult] = useState(tiltvalues);
  const [currentButtonValue, setCurrentButtonValue] = useState("TOUT");

  const handleClickFilterLanguage = (value) => {
    dataFilter.map((buttonValue) => {
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
    <MainLayout
      headingTitle="Portfolio"
      headingIcon={<FontAwesomeIcon icon={faBriefcase} />}
    >
      <div className="portfolioPageContainer">
        <section>
          <div>
            <ul>
              {dataFilter.map((filter) => (
                <li
                  className={
                    filter === currentButtonValue ? "activeFilter" : ""
                  }
                  onClick={() => handleClickFilterLanguage(filter)}
                >
                  {filter}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section>
          <div>
            <TiltCard />
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Portfolio;
