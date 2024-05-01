import React from "react";
import "assets/Styles/About.scss";
import Li from "components/UI/Li";
import CV from "assets/Images/CV_Gaël_Mayer.pdf";
import FlipPage from "components/UI/FlipPage";
import Button from "components/UI/Button";

function About() {
  return (
    <FlipPage title={"A propos."} logo={<i className="fas fa-user"></i>}>
      <div className="describeContainer">
        <div className="leftContainer">
          <h2>Développeur Front-end</h2>
          <p>
            Développeur Front-end depuis 2 ans en start-up avec une appétence
            pour les librairies / Frameworks Javascript et le langage
            TypeScript. <br /> J’aime travailler en équipe et partager mon
            expertise sur chaque étape du processus de conception et de
            développement afin d’améliorer l’UI/UX d’une application mais aussi
            optimiser le traitement et la récupération de données.
          </p>
        </div>
        <div className="rightContainer">
          <h2>Informations personnelles</h2>

          <ul>
            <div className="blockInfo">
              <Li title={"Nom"} info={"Gaël Mayer"} />
              <Li title={"Age"} info={"35 ans"} />
              <Li title={"Adresse"} info={"Paris 13ème"} />
              <Li title={"Mail"} info={"gaelmayer@yahoo.fr"} />
              <a href={CV} target="_blank" rel="noopener noreferrer">
                <Button title={"Télécharger CV"} />
              </a>
            </div>
          </ul>
        </div>
      </div>
    </FlipPage>
  );
}

export default About;
