export type TExperiences = {
  title: string;
  items: TExperienceItems[];
};

export type TExperienceItems = {
  mainTitle: string;
  subTitle: string;
  link: string;
  content: string;
  startDate: string;
  endDate: string;
};

export const experiences: TExperiences[] = [
  {
    title: "Expériences",
    items: [
      {
        mainTitle: "Développeur Fullstack",
        subTitle: "Curecall",
        link: "https://www.curecall.fr/",
        content:
          "Conception et développement de composants métiers; projet de migration technologique React vers Next.js 13.",
        startDate: "2024",
        endDate: "2025",
      },
      {
        mainTitle: "Développeur Fullstack",
        subTitle: "Curecall",
        link: "https://www.curecall.fr/",
        content:
          "Conception et développement de composants métiers; projet de migration technologique React vers Next.js 13.",
        startDate: "2022",
        endDate: "2024",
      },
      {
        mainTitle: "Développeur Fullstack",
        subTitle: "Agence NWB",
        link: "https://www.nwb.fr/",
        content:
          "Migration d'un projet Legacy PHP vers Symfony; développement de nouvelles fonctionnalités.",
        startDate: "2022",
        endDate: "2022",
      },
      {
        mainTitle: "Forfaitiste",
        subTitle: "Tour opérateur Asia",
        link: "https://www.asia.fr/",
        content:
          "Réalisation de circuits sur-mesure et à la carte sur le continent asiatique et océanique.",
        startDate: "2018",
        endDate: "2022",
      },
    ],
  },
  {
    title: "Diplômes",
    items: [
      {
        mainTitle: "Concepteur Développeur d'applications",
        subTitle: "Ecole O'Clock",
        link: "https://oclock.io/",
        content: "Niveau Maîtrise / Titre de niveau bac+4",
        startDate: "2022",
        endDate: "2024",
      },
      {
        mainTitle: "Développeur Web - Web Mobile",
        subTitle: "Digital Campus",
        link: "https://www.digital-campus.fr/",
        content: "Titre RNCP de niveau 5",
        startDate: "2021",
        endDate: "2022",
      },
      {
        mainTitle: "Chef de produit touristique",
        subTitle: "Paris school of tourism & Communication",
        link: "https://ecole-pstc.fr/",
        content: "Licence professionnelle",
        startDate: "2017",
        endDate: "2018",
      },
    ],
  },
];
