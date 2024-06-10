import {
  faGithubSquare,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { TBottomNavItems, TNavItems } from "types/sidebar";

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
    content: "PARCOURS",
  },
  {
    path: "/portfolio",
    icon: <BriefcaseIcon height={21} width={20} />,
    content: "PORTFOLIO",
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
  {
    url: "https://watson-vcard.netlify.app/index-dark-particles1.html#home",
    content:
      "Site inspired by watson-vcard.netlify.app/index-dark-particles1.html",
  },
];
