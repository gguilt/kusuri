import Head from "next/head";
import styles from "@/styles/Terms.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <>
      <Head>
        <title>Gizlilik - Kusuri</title>
      </Head>
      <Header />

      <main className={styles.terms}>
        <img
          className="d-block mx-auto mb-4"
          src="/img/undraw_personal_data_29co.svg"
          alt=""
          width="50%"
          height="auto"
        />
        <h1>Gizlilik Sözleşmesi</h1>
        <h3>
          Her kullanıcı sisteme <b>kayıt olarak</b>
        </h3>
        <ol>
          <li>
            Sistemin e-mail, kullanıcı adı, kayıt giriş tarihleri gibi verilerin
            kaydına,
          </li>
          <li>Sistemin girilen ilaç verilerini kaydetmesine,</li>
          <li>Kayıtlı verilerin işlenmesine,</li>
          <li>
            Verilerin kullanıcılarla ve diğer üçüncü partilerle paylaşılmasına
          </li>
        </ol>
        izin vermiş sayılır.
      </main>

      <Footer />
    </>
  );
};

export default Privacy;
