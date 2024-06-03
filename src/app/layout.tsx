import type { Metadata } from "next";
import "../../assets/sass/core.scss";
import SideBar from "components/layout/sidebar.component";
import { playfair_Display, roboto } from "utils/font";

export const metadata: Metadata = {
  title: "React App",
  description: "Web site created with Next.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${playfair_Display.variable}`}
    >
      <body>
        <SideBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
