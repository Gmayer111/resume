import { TSkillItems } from "app/resume/data/skills";
import { useEffect, useRef, useState } from "react";

const SkillItem = ({ itemTitle, level }: TSkillItems) => {
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
