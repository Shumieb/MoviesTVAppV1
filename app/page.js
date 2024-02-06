import styles from "./page.module.css";
import Footer from "./ui/Footer/footer";
import Header from "./ui/Header/header";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      Home page
      <Footer />
    </main>

  );
}
