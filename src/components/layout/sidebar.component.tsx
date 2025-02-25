"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useWindowSize } from "hooks/use-window-size";
import {
  AcademicCapIcon,
  Bars3Icon,
  BriefcaseIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useRef, useState } from "react";
import { useClickOutside } from "hooks/use-click-outside";
import ProfilImg from "../../../public/Images/profil_2.jpg";
import Image from "next/image";
import { TBottomNavItems, TNavItems } from "types/sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export const navItems: TNavItems[] = [
  {
    path: "/",
    icon: <HomeIcon height={21} width={20} />,
    content: "ACCUEIL",
  },
  {
    path: "/about",
    icon: <UserIcon height={21} width={20} />,
    content: "A PROPOS",
  },
  {
    path: "/resume",
    icon: <AcademicCapIcon height={21} width={20} />,
    content: "EXPERIENCES",
  },
  {
    path: "/projects",
    icon: <BriefcaseIcon height={21} width={20} />,
    content: "REALISATIONS",
  },
];

export const bottomNavItems: TBottomNavItems[] = [
  {
    url: "https://www.linkedin.com/in/ga%C3%ABl-mayer-6b8716234/",
    content: <FontAwesomeIcon icon={faLinkedinIn} />,
  },
  {
    url: "https://github.com/Gmayer111",
    content: <FontAwesomeIcon icon={faGithubSquare} />,
  },
];

const Header = () => {
  const pathName = usePathname();
  const windowSize = useWindowSize();
  const [isResponsive, setIsResponsive] = useState(false);
  const [displayNavbar, setDisplayNavbar] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggle = () => {
    setDisplayNavbar(false);
  };

  useClickOutside({ ref, toggle });

  useEffect(() => {
    setIsResponsive(windowSize.width < 768 ? true : false);
  }, [windowSize]);

  return (
    <header>
      {isResponsive && (
        <div className="responsiveTopbar">
          <h2>GAEL MAYER</h2>
          <button onClick={() => setDisplayNavbar(true)}>
            <Bars3Icon height={35} width={35} />
          </button>
        </div>
      )}
      <div
        ref={ref}
        className={`desktopSidebar ${
          displayNavbar ? "responsiveSidebar" : "hiddenResponsiveSidebar"
        }
          
        `}
      >
        <div className="topSidebar">
          <div>
            <h2>GAEL MAYER</h2>
            <Image src={ProfilImg} alt="Image de profil" />
          </div>
          <nav>
            <ul>
              {navItems.map((linkComponentItem) => (
                <li key={linkComponentItem.path}>
                  <Link
                    className={
                      pathName === linkComponentItem.path ? "active" : ""
                    }
                    href={linkComponentItem.path}
                    onClick={toggle}
                  >
                    <span>{linkComponentItem.icon}</span>
                    {linkComponentItem.content}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="bottomSidebar">
          {bottomNavItems.map((bottomNavItem) => (
            <Link
              className={
                typeof bottomNavItem.content === "string" ? "stringContent" : ""
              }
              rel="noopener noreferrer"
              target="_blank"
              href={bottomNavItem.url}
              onClick={toggle}
              key={bottomNavItem.url}
            >
              {bottomNavItem.content}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
