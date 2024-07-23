"use client";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import ListItem from "components/common/list-item.component";
import SkillItem from "components/common/skill-item.component";
import MainLayout from "components/layout/main-layout.component";
import { experiencesData } from "data/home-page/experiences-data";
import { skillsData } from "data/home-page/skills-data";

const Resume = () => {
  return (
    <MainLayout
      headingTitle="Mon parcours"
      headingIcon={<AcademicCapIcon height={50} width={50} />}
    >
      <div className="resumePageContainer">
        <section>
          {experiencesData.map((experienceData) => (
            <div>
              <div>
                <h3>{experienceData.title}</h3>
              </div>
              <ul>
                {experienceData.items.map((item) => (
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
          {skillsData.map((skillData) => (
            <div>
              <div>
                <h3>{skillData.title}</h3>
              </div>
              {skillData.items.map((item) => (
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
