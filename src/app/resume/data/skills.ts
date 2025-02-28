export type TSkills = {
  title: string;
  items: TSkillItems[];
};

export type TSkillItems = {
  itemTitle: string;
  level: number;
};

export const skills: TSkills[] = [
  {
    title: "Frontend",
    items: [
      {
        itemTitle: "Javascript ES6+",
        level: 70,
      },
      {
        itemTitle: "TypeScript",
        level: 70,
      },
      {
        itemTitle: "React | Next.js",
        level: 70,
      },
      {
        itemTitle: "HTML5",
        level: 80,
      },
      {
        itemTitle: "CSS3 / SASS",
        level: 70,
      },
      {
        itemTitle: "Tailwind CSS",
        level: 80,
      },
    ],
  },
  {
    title: "Backend",
    items: [
      {
        itemTitle: "Node.js",
        level: 60,
      },
      {
        itemTitle: "Nest.js",
        level: 60,
      },
      {
        itemTitle: "MySQL",
        level: 70,
      },
      {
        itemTitle: "GraphQL/Appolo",
        level: 50,
      },
    ],
  },
  {
    title: "outils / tests / CI/CD",
    items: [
      {
        itemTitle: "Jest / Testing Library",
        level: 70,
      },
      {
        itemTitle: "Github Actions",
        level: 70,
      },
      {
        itemTitle: "Docker",
        level: 50,
      },
      {
        itemTitle: "Git",
        level: 70,
      },
    ],
  },
];
