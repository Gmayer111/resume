import { useEffect, useRef, useState } from "react";
import { TSkills } from "types/resume";

const SkillItem = ({ itemTitle, level }: TSkills) => {
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const handleScroll = () => {
    setScrollTop(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (progressBarRef.current) {
      progressBarRef.current.style.width = `${level}%`;
    }
  }, [level]);

  // WIP
  // useEffect(() => {
  //   let i = 0;
  //   setInterval(() => {
  //     if (i <= 75) {
  //       setPercentValue(i++);
  //     } else {
  //       clearInterval(this);
  //     }
  //   }, 1000);
  // }, []);

  return (
    <div className="skilItemContainer">
      <h4>{itemTitle}</h4>
      <div className="progressBar">
        <div
          ref={progressBarRef}
          content={`${level}%`}
          className={`${
            scrollTop >= 100
              ? "progressPosition triangleShape progressValue"
              : ""
          }`}
        ></div>
      </div>
    </div>
  );
};

export default SkillItem;
