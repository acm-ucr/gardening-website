/* eslint-disable new-cap */
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Karma } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const karma = Karma({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-Karma",
});

export const metadata = {
  title: "UCR Gardening Club",
  description:
    "We are a student-led club at UC Riverside focused on sustainability, food security, & community gardening!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${karma.className} bg-gardening-tan-100 min-h-screen flex flex-col flex-auto justify-between`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
