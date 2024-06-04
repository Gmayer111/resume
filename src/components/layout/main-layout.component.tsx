import React from "react";

export type TMainLayoutProps = {
  children: React.ReactNode;
  headingTitle?: string;
  headingIcon?: JSX.Element;
};

const MainLayout = ({
  children,
  headingTitle,
  headingIcon,
}: TMainLayoutProps) => {
  return (
    <section className="mainLayout">
      <div>
        <div>
          <h2 className="title">{headingTitle}</h2>
          <span className="icon">{headingIcon}</span>
        </div>
        {children}
      </div>
    </section>
  );
};

export default MainLayout;
