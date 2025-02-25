"use client";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import ListItem from "components/common/list-item.component";
import SkillItem from "components/common/skill-item.component";
import MainLayout from "components/layout/main-layout.component";
import { experiences } from "./data/experiences";
import { skills } from "./data/skills";

const Resume = () => {
  return (
    <MainLayout
      headingTitle="Mon parcours"
      headingIcon={<AcademicCapIcon height={50} width={50} />}
    >
      <div className="resumePageContainer">
        <section>
          {experiences.map((experience) => (
            <div>
              <div>
                <h3>{experience.title}</h3>
              </div>
              <ul>
                {experience.items.map((item) => (
                  <ListItem
                    mainTitle={item.mainTitle}
                    subTitle={item.subTitle}
                    link={item.link}
                    content={item.content}
                    startDate={item.startDate}
                    endDate={item.endDate}
                  />
                ))}
              </ul>
            </div>
          ))}
        </section>
        <section>
          {skills.map((skill) => (
            <div>
              <div>
                <h3>{skill.title}</h3>
              </div>
              {skill.items.map((item) => (
                <SkillItem itemTitle={item.itemTitle} level={item.level} />
              ))}
            </div>
          ))}
        </section>
      </div>
    </MainLayout>
  );
};

export default Resume;
