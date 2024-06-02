"use client";
import Image from "next/image";
import HomePagePicture from "../../public/Images/jura.jpg";
import { useEffect, useState } from "react";
import { TextsAnimated } from "types/home";
import { playfair_Display } from "utils/font";

export default function Home() {
  const [currentText, setCurrentText] = useState<string>("");
  const textsAnimate: TextsAnimated[] = [
    "Développeur Web",
    "Développeur Frontend",
    "Concepteur Développeur",
  ];

  useEffect(() => {
    let words = textsAnimate;
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
    <section className="homePageContainer">
      <Image src={HomePagePicture} alt="Image de la page d'accueil" />
      <div>
        <h1>
          <span className={playfair_Display.className}>GAEL</span>
          <span> MAYER</span>
        </h1>
        <p>
          <span>Je suis </span>
          <span>
            {currentText === "" && <b>{textsAnimate[0]}</b>}
            {textsAnimate
              .filter((textAnimate) => textAnimate === currentText)
              .map((item) => (
                <b>{item}</b>
              ))}
          </span>
        </p>
      </div>
    </section>
  );
}
