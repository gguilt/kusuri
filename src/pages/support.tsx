import Head from "next/head";
import styles from "@/styles/Terms.module.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Support = () => {
  return (
    <>
      <Head>
        <title>Destek - Kusuri</title>
      </Head>

      <Header />

      <main className={styles.terms}>
        <img
          className="d-block mx-auto mb-4"
          src="/img/undraw_instant_support_elxh.svg"
          alt=""
          width="50%"
          height="auto"
        />
        <h1>Destek</h1>
        <h3>Bize ulaşın: kusuri@duga1.com</h3>
      </main>

      <Footer />
    </>
  );
};

export default Support;
