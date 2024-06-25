import type { Metadata } from "next";
import "../../assets/sass/core.scss";
import SideBar from "components/layout/sidebar.component";
import { playfair_Display, roboto } from "utils/font";

export const metadata: Metadata = {
  title: "Gaël Mayer - CV ",
  description: "Mon CV en ligne",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${roboto.variable} ${playfair_Display.variable}`}
    >
      <body>
        <SideBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
