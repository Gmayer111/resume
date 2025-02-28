import Restaurant from "/public/Images/restaurant.png";
import Chair from "/public/Images/chair.png";
import Time from "/public/Images/time.png";
import Weather from "/public/Images/weather.png";
import Price from "/public/Images/price.png";

type TProjectsItems = {
  category: string;
  title: string;
  picture: any;
  languages: TProjectsLanguages[];
  link: string;
};

type TProjectsLanguages = "NEXTJS" | "JAVASCRIPT" | "TYPESCRIPT";

export const projects: TProjectsItems[] = [
  {
    category: "PRO",
    title: "Restaurant Van Long",
    picture: Restaurant,
    languages: ["NEXTJS", "TYPESCRIPT"],
    link: "https://van-long.fr/",
  },
  {
    category: "DESIGN",
    title: "Time tracking dashboard",
    picture: Time,
    languages: ["JAVASCRIPT"],
    link: "https://confident-hamilton-fd4b0e.netlify.app/",
  },
  {
    category: "DESIGN",
    title: "Room Home Page",
    picture: Chair,
    languages: ["JAVASCRIPT"],
    link: "https://amazing-gates-9da9b3.netlify.app/",
  },
  {
    category: "DESIGN",
    title: "Current weather",
    picture: Weather,
    languages: ["JAVASCRIPT"],
    link: "https://zealous-chandrasekhar-d4a7e9.netlify.app/",
  },
  {
    category: "DESIGN",
    title: "Le juste prix",
    picture: Price,
    languages: ["JAVASCRIPT"],
    link: "https://nervous-fermat-f4b9a5.netlify.app/",
  },
];
