import React, { useState, useEffect } from "react";
import "assets/Styles/Header.scss";
import CustomLinkComponent from "./custom-link.component";
import {
  AcademicCapIcon,
  Bars3Icon,
  BriefcaseIcon,
  CodeBracketIcon,
  GlobeAltIcon,
  HomeIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const linkComponentItems = [
  {
    path: "/",
    icon: <HomeIcon height={20} width={20} />,
    content: "ACCUEIL",
  },
  {
    path: "/a-propos",
    icon: <UserIcon height={20} width={20} />,
    content: "A PROPOS",
  },
  {
    path: "/parcours",
    icon: <AcademicCapIcon height={20} width={20} />,
    content: "PARCOURS",
  },
  {
    path: "/portfolio",
    icon: <BriefcaseIcon height={20} width={20} />,
    content: "PORTFOLIO",
  },
];

const Header = (props) => {
  const [displayHeader, setDisplayHeader] = useState();

  useEffect(() => {
    setDisplayHeader("no-head");
  }, []);

  return (
    <header>
      <div className="block-bars">
        <span>GAEL MAYER</span>
        <div>
          {displayHeader === "no-head" ? (
            <div
              onClick={() => {
                setDisplayHeader("head");
              }}
            >
              <Bars3Icon
                height={20}
                width={20}
                className="h-8 w-8 text-blue-500"
              />
            </div>
          ) : (
            <div
              onClick={() => {
                setDisplayHeader("no-head");
              }}
            >
              <XMarkIcon
                height={20}
                width={20}
                className="h-8 w-8 text-blue-500"
              />
            </div>
          )}
        </div>
      </div>
      <div className={displayHeader}>
        <div className="headUp">
          <div className="imgProfil">
            <span>GAEL MAYER</span>
          </div>
          <ul>
            {linkComponentItems.map((linkComponentItem) => (
              <li>
                <CustomLinkComponent
                  className="link"
                  to={linkComponentItem.path}
                  onClick={() => {
                    setDisplayHeader("no-head");
                  }}
                >
                  {linkComponentItem.icon}
                  <span>{linkComponentItem.content}</span>
                </CustomLinkComponent>
              </li>
            ))}
          </ul>
        </div>
        <div className="headDown">
          <div>
            <a
              href="https://www.linkedin.com/in/ga%C3%ABl-mayer-6b8716234/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GlobeAltIcon color="white" height={25} width={25} />
            </a>
            <a
              href="https://github.com/Gmayer111"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CodeBracketIcon color="white" height={25} width={25} />
            </a>
          </div>
          <a
            className="inspi"
            href="https://watson-vcard.netlify.app/index-dark-particles1.html#home"
            target="_blank"
            rel="noopener noreferrer"
          >
            Site inspired by watson-vcard.netlify.app/index-dark-particles1.html
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
