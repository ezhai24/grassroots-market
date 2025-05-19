import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grassroots Market",
  description: `A new kind of marketplace that connects chefs with local, 
    high-end, & unique foods and facilitates the development of circular 
    economies in their communities.`,
};

interface Props {
  children: React.ReactNode;
}
const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
