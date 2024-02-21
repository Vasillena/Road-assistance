import { Sofia_Sans_Condensed } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import AOSInit from "./components/AOS/AosInit";

const sofiaFont = Sofia_Sans_Condensed({ subsets: ["cyrillic"] });

export const metadata = {
  title: "ПЪТНА ПОМОЩ ПЛОВДИВ",
  description:
    "Ние сме тук, за да ви осигурим спокойствие и безпроблемно решаване на всяка аварийна ситуация на пътя в Пловдив и страната. Потърсете ни при необходимост. Работим 24/7. Със сериозност и отдаденост към нашите клиенти, ние се стремим да предложим най-бързите и най-ефективните решения за всяка ситуация. Нашата цел е да бъдем партньорът, на когото може да разчитате в най-трудните моменти на пътя.",
  keywords: [
    "пътна помощ",
    "пътна помощ Пловдив",
    "пътна помощ Старосел",
    "пътна помощ Хисаря",
    "пътна помощ Калояново",
    "пътна помощ Житница",
    "авария",
    "спешна помощ",
    "автомобилна помощ",
    "бърза помощ на пътя",
    "помощ при автомобилна авария",
    "пътна асистенция",
    "аварийна услуга",
    "24/7 пътна помощ",
    "спокойствие на пътя",
    "пътни инциденти",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AOSInit />
      <body className={sofiaFont.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
