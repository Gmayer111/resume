import { UserIcon } from "@heroicons/react/24/solid";
import MainLayout from "components/layout/main-layout.component";
import Link from "next/link";

type TProfilDetails = {
  title: string;
  content: string;
};

const profilDetails: TProfilDetails[] = [
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
  {
    title: "Mobile",
    content: "06 43 22 55 32",
  },
];

const About = () => {
  return (
    <MainLayout
      headingTitle="A propos de moi"
      headingIcon={<UserIcon height={50} width={50} />}
    >
      <div className="aboutPageContainer">
        <div>
          <div>
            <p>
              Développeur Fullstack dynamique et investi, j’observe de près la
              liaison amoureuse entre la librairie React et le langage
              TypeScript afin d’élaborer des interfaces sécurisées et
              optimisées. <br />
              <br /> J’aime également m’immiscer dans les affaires côté serveur,
              pour manipuler les données relationnelles (ou pas &#128521;) afin
              de créer des API protégées et complètes pour fournir les données
              nécessaires à nos chers utilisateurs.
              <br />
              <br />
              Bien évidemment, il me faut être AGILE lors de ces observations,
              afin de concevoir des fonctionnalités où <b>maintenabilité</b> est
              le maître mot.
              <br />
              <br />
              Si vous souhaitez échanger, je suis joignable par mail.
            </p>
          </div>
          <div>
            <h3>Informations personnelles</h3>
            <ul>
              {profilDetails.map((profilDetail) => (
                <li>
                  <span className="title">{profilDetail.title}</span>
                  {profilDetail.content.includes("@") ? (
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`mailto:${profilDetail.content}`}
                    >
                      : <span>{profilDetail.content}</span>
                    </Link>
                  ) : (
                    <span className="info"> : {profilDetail.content}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <Link
            href={"/Images/CV_Gaël_Mayer.pdf"}
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
