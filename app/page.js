import BottomLine from "./components/BottomLine/BottomLine";
import ContactUs from "./components/ContactUs/ContactUs";
import Hero from "./components/Hero/Hero";
import MiddleLine from "./components/MiddleLine/MiddleLine";
import Photos from "./components/Photos/Photos";
import Services from "./components/Services/Services";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <MiddleLine />
      <Services />
      <BottomLine />
      <Photos />
      <ContactUs />
    </main>
  );
}
