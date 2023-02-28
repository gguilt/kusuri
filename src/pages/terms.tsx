import Head from "next/head";
import styles from "@/styles/Terms.module.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Terms = () => {
  return (
    <>
      <Head>
        <title>Şartlar - Kusuri</title>
      </Head>

      <Header />

      <main className={styles.terms}>
        <img
          className="d-block mx-auto mb-4"
          src="/img/undraw_Terms_re_6ak4.svg"
          alt=""
          width="50%"
          height="auto"
        />
        <h1>Şartlar</h1>
        <h3>
          Her kullanıcı sisteme <b>kayıt olarak</b>
        </h3>
        <ol>
          <li>
            <a href="/gizlilik">Gizlilik Sözleşmesi</a>&apos;ni,
          </li>
          <li>Sisteme yanlış bilgi girmeyeceğini,</li>
          <li>
            Sistemin kayıtlı bilgileri silme ve değiştirme hakkını saklı
            tuttuğunu,
          </li>
          <li>Sistemin sunduğu hizmetlerde herhangi bir güvence vermediğini</li>
        </ol>
        kabul etmiş sayılır.
      </main>

      <Footer />
    </>
  );
};

export default Terms;
