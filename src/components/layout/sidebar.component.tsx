"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useWindowSize } from "hooks/use-window-size";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useEffect, useRef, useState } from "react";
import { useClickOutside } from "hooks/use-click-outside";
import ProfilImg from "../../../public/Images/profil.jpg";
import Image from "next/image";
import { bottomNavItems, navItems } from "data/side-bar/data";

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
