import type { Metadata } from "next";
import "../../assets/sass/core.scss";
import Header from "components/layout/sidebar.component";

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
    <html lang="en">
      <body>
        <Header />
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
