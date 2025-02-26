"use client";
import { useThemeProvider } from "providers/theme-context.provider";
import { CSSProperties } from "react";

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
  const { color } = useThemeProvider();

  return (
    <section
      className="mainLayout"
      style={{ "--main-color": color } as CSSProperties}
    >
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
