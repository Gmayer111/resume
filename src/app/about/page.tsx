"use client";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainLayout from "components/layout/main-layout.component";
import Link from "next/link";
import { TPersonalInformationsData } from "types/about";

export const personalInformationsData: TPersonalInformationsData[] = [
  {
    title: "Nom",
    content: "Gaël Mayer",
  },
  {
    title: "Age",
    content: "36 ans",
  },
  {
    title: "Ville",
    content: "Paris",
  },
  {
    title: "Mail",
    content: "gaelmayer@yahoo.fr",
  },
];

const About = () => {
  return (
    <MainLayout
      headingTitle="A propos de moi"
      headingIcon={<FontAwesomeIcon icon={faUser} />}
    >
      <div className="aboutPageContainer">
        <div>
          <div>
            <h3>Développeur Front-end</h3>
            <p>
              Développeur Front-end avec une appétence pour les librairies /
              Frameworks Javascript et le langage TypeScript. <br /> J’aime
              travailler en équipe et partager mon expertise sur chaque étape du
              processus de conception et de développement afin d’améliorer
              l’UI/UX d’une application mais aussi optimiser le traitement et la
              récupération de données.
            </p>
          </div>
          <div>
            <h3>Informations personnelles</h3>
            <ul>
              {personalInformationsData.map((item) => (
                <li>
                  <span className="title">{item.title}</span>
                  <span className="info"> : {item.content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <Link
            href={"/CV_Gaël_Mayer.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            TELECHARGER MON CV
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
