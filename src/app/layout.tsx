import type { Metadata } from "next";
import "../../assets/style/core.scss";
import SideBar from "components/layout/sidebar.component";
import { Playfair_Display, Roboto } from "next/font/google";
import { ThemeContextProvider } from "providers/theme-context.provider";
import PageColorSwitcher from "components/common/page-color-switcher.component";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

const playfair_Display = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Gaël Mayer ",
  description: "POrtfolio de Gaël Mayer, Développeur Fullstack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${roboto.variable} ${playfair_Display.variable}`}
    >
      <body>
        <ThemeContextProvider>
          <SideBar />
          <main>
            <PageColorSwitcher />
            {children}
          </main>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
