"use client";
import MainLayout from "components/layout/main-layout.component";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  JavaScriptIcon,
  NextJSIcon,
  TypeScriptIcon,
} from "../../../public/icons/icons";
import { BriefcaseIcon } from "@heroicons/react/24/solid";
import { projects } from "./data/projects";

const tabs: string[] = ["TOUT", "DESIGN", "PRO"];

const languageIcons = {
  NEXTJS: <NextJSIcon />,
  JAVASCRIPT: <JavaScriptIcon />,
  TYPESCRIPT: <TypeScriptIcon />,
};

const ProjectsPage = () => {
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  const currentProjectsSelected =
    currentTab === "TOUT"
      ? projects
      : projects.filter((projectItem) => {
          return projectItem.category.includes(currentTab);
        });
  return (
    <MainLayout
      headingTitle="Projets"
      headingIcon={<BriefcaseIcon height={50} width={50} />}
    >
      <div className="projects-page-container">
        <section>
          <div>
            <ul>
              {tabs.map((tab, index) => (
                <li
                  key={`${tab}-${index}`}
                  onClick={() => setCurrentTab(tab)}
                  className={tab === currentTab ? "currentTabActived" : ""}
                >
                  {tab}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section>
          <div className="project-items-container">
            <ul>
              {currentProjectsSelected.map((currentProjectSelected, index) => {
                return (
                  <li
                    key={`${currentProjectSelected.title}-${index}`}
                    className="projects-img-container"
                  >
                    <Link href={currentProjectSelected.link} target="_blank">
                      <div className="projects-img">
                        <Image
                          src={currentProjectSelected.picture}
                          alt={`${currentProjectSelected.title} image`}
                        />
                        <div>
                          <h3>{currentProjectSelected.title}</h3>
                          <div className="project-item-language">
                            <span>
                              {currentProjectSelected.languages.join(" | ")}
                            </span>
                            {currentProjectSelected.languages.map(
                              (language) => (
                                <div key={language}>
                                  {languageIcons[language]}
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
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
