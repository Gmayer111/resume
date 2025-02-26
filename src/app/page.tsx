"use client";
import Image from "next/image";
import HomePagePicture from "../../public/Images/sweden.jpeg";
import { CSSProperties, useEffect, useState } from "react";
import { useThemeProvider } from "providers/theme-context.provider";

export default function Home() {
  const [currentText, setCurrentText] = useState<string>("");
  const textsAnimated: string[] = ["JS/TS", "Fullstack"];
  const { color } = useThemeProvider();

  useEffect(() => {
    let words = textsAnimated;
    let i = 0;

    function changeText() {
      i = (i + 1) % words.length;
      return words[i];
    }

    setInterval(() => {
      let text = changeText();
      setCurrentText(text);
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      className={`homePageContainer`}
      style={{ "--main-color": color } as CSSProperties}
    >
      <Image src={HomePagePicture} alt="Image de la page d'accueil" />
      <div>
        <h1>
          <span>GAEL</span>
          <span> MAYER</span>
        </h1>
        <p>
          <span>
            Développeur
            {currentText === "" && <b>{textsAnimated[0]}</b>}
            {textsAnimated
              .filter((textAnimated) => textAnimated === currentText)
              .map((item) => (
                <b> {item}</b>
              ))}
          </span>
        </p>
      </div>
    </section>
  );
}
