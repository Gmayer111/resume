"use client";
import MainLayout from "components/layout/main-layout.component";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Restaurant from "../../../public/Images/restaurant.png";
import Chair from "../../../public/Images/chair.png";
import Time from "../../../public/Images/time.png";
import Weather from "../../../public/Images/weather.png";
import Price from "../../../public/Images/price.png";
import {
  JavaScriptIcon,
  NextJSIcon,
  TypeScriptIcon,
} from "../../../public/icons/icons";
import { BriefcaseIcon } from "@heroicons/react/24/solid";
import { TProjectsItems } from "types/resume";

const tabItemsCategoriesArray: string[] = ["TOUT", "DESIGN", "PRO"];

const languageIcons = {
  NEXTJS: <NextJSIcon />,
  JAVASCRIPT: <JavaScriptIcon />,
  TYPESCRIPT: <TypeScriptIcon />,
};

const projectItems: TProjectsItems[] = [
  {
    category: "TOUT PRO",
    title: "Restaurant Van Long",
    picture: Restaurant,
    languages: ["NEXTJS", "TYPESCRIPT"],
    link: "https://van-long.fr/",
  },
  {
    category: "TOUT DESIGN",
    title: "Time tracking dashboard",
    picture: Time,
    languages: ["JAVASCRIPT"],
    link: "https://confident-hamilton-fd4b0e.netlify.app/",
  },
  {
    category: "TOUT DESIGN",
    title: "Room Home Page",
    picture: Chair,
    languages: ["JAVASCRIPT"],
    link: "https://amazing-gates-9da9b3.netlify.app/",
  },
  {
    category: "TOUT DESIGN",
    title: "Current weather",
    picture: Weather,
    languages: ["JAVASCRIPT"],
    link: "https://zealous-chandrasekhar-d4a7e9.netlify.app/",
  },
  {
    category: "TOUT DESIGN",
    title: "Le juste prix",
    picture: Price,
    languages: ["JAVASCRIPT"],
    link: "https://nervous-fermat-f4b9a5.netlify.app/",
  },
];

const ProjectsPage = () => {
  const [tabItemsCategories, setTabItemsCategories] = useState(
    tabItemsCategoriesArray[0]
  );
  return (
    <MainLayout
      headingTitle="Projets"
      headingIcon={<BriefcaseIcon height={50} width={50} />}
    >
      <div className="portfolio-page-container">
        <section>
          <div>
            <ul>
              {tabItemsCategoriesArray.map((tabItemsCategory, index) => (
                <li
                  key={`${tabItemsCategory}-${index}`}
                  onClick={() => setTabItemsCategories(tabItemsCategory)}
                >
                  {tabItemsCategory}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section>
          <div className="project-items-container">
            <ul>
              {projectItems.map((projectItem, index) => {
                return (
                  projectItem.category.includes(tabItemsCategories) && (
                    <div
                      key={`${projectItem.title}-${index}`}
                      className="projects-img-container"
                    >
                      <Link href={projectItem.link} target="_blank">
                        <div className="projects-img">
                          <Image
                            src={projectItem.picture}
                            alt="Image de test"
                          />
                          <div>
                            <h3>{projectItem.title}</h3>
                            <div className="project-item-language">
                              <span>{projectItem.languages.join(" | ")}</span>
                              {projectItem.languages.map((language) => (
                                <div>{languageIcons[language]}</div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  )
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default ProjectsPage;
