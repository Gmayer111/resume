import FlipPage from "components/UI/FlipPage";
import React from "react";
import "assets/Styles/Resume.scss";
import BlockResume from "components/UI/BlockResume";
import ResumeTitle from "components/UI/ResumeTitle";
import BlockMeasure from "components/UI/BlockMeasure";
import dataResume from "data/home-page/data";
import degrees from "data/dataDegrees/data";
import technos from "data/dataTechnos/data";

function Resume() {
  return (
    <FlipPage title={"Parcours."} logo={<i className="fas fa-university"></i>}>
      <div className="main-block-resume">
        <div className="blockUp">
          <div className="blockLeft">
            <div>
              <ResumeTitle title={"EXPERIENCES"} />
            </div>

            {dataResume.map((data) => (
              <div>
                <BlockResume
                  titleUp={data.jobTitle}
                  titleDown={data.companyName}
                  content={data.content}
                  startDate={data.startDate}
                  endDate={data.endDate}
                />
              </div>
            ))}
          </div>
          <div className="blockRight">
            <div>
              <ResumeTitle title={"DIPLOMES"} />
            </div>
            {degrees.map((data) => (
              <div>
                <BlockResume
                  endDate={data.endDate}
                  startDate={data.startDate}
                  titleUp={data.diplomaTitle}
                  titleDown={data.school}
                  content={data.level}
                  height="360px"
                  heightDate="385px"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="blockDown">
          {technos.map((data) => (
            <div
              className={
                data.title === "frontEnd" ? "blockDownLeft" : "blockDownRight"
              }
            >
              <div className="block-title">
                <ResumeTitle
                  title={data.title === "frontEnd" ? "FRONT-END" : "OTHERS"}
                />
              </div>
              {data.title === "frontEnd"
                ? data.items.map((front) => (
                    <BlockMeasure
                      language={front.language}
                      size={front.level}
                    />
                  ))
                : data.items.map((back) => (
                    <BlockMeasure language={back.language} size={back.level} />
                  ))}
            </div>
          ))}
        </div>
      </div>
    </FlipPage>
  );
}

export default Resume;
