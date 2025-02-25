export type TListItem = {
  title: string;
  items: TItems[];
};

export type TItems = {
  mainTitle: string;
  subTitle: string;
  link: string;
  content: string;
  startDate: string;
  endDate: string;
};

export type TSkillsItems = {
  title: string;
  items: TSkills[];
};

export type TSkills = {
  itemTitle: string;
  level: number;
};

export type TProjectsItems = {
  category: string;
  title: string;
  picture: any;
  languages: TProjectsLanguages[];
  link: string;
};

type TProjectsLanguages = "NEXTJS" | "JAVASCRIPT" | "TYPESCRIPT";
