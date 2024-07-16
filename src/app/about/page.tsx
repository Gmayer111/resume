"use client";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainLayout from "components/layout/main-layout.component";
import Link from "next/link";
import { TPersonalInformationsData } from "types/about";

const personalInformationsData: TPersonalInformationsData[] = [
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
            <h3>Développeur Fullstack</h3>
            <p>
              Développeur Fullstack orienté Frontend, j’apporte un attention
              particulière à la résolution de problèmes complexes. J’aime aussi
              partager mes idées créatives lors de la réalisation de nouvelles
              fonctionnalités tout en prenant en compte les besoins de
              l’utilisateur final. Je travail actuellement avec l’écosystème
              Javascript couplé au langage TypeScript afin de créer des
              applications robustes et sécurisées.
            </p>
          </div>
          <div>
            <h3>Informations personnelles</h3>
            <ul>
              {personalInformationsData.map((item) => (
                <li>
                  <span className="title">{item.title}</span>
                  {item.content.includes("@") ? (
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`mailto:${item.content}`}
                    >
                      : <span>{item.content}</span>
                    </Link>
                  ) : (
                    <span className="info"> : {item.content}</span>
                  )}
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
