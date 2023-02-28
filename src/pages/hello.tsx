import Footer from "@/components/Footer";
import Head from "next/head";
import styles from "@/styles/Hello.module.css";

const Hello = () => {
  return (
    <>
      <Head>
        <title>Merhaba! - Kusuri</title>
      </Head>

      <div id={styles.intro} className="bg-image">
        <div className={styles.headerimage + "mask shadow h-100"}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-black text-center">
              <h1 className="mb-3">Get Your Medicine Under Control</h1>
              <h5 className="mb-4">
                Track your medicine use and best before dates easily!
              </h5>
              <a
                className="btn btn-dark btn-lg m-2"
                href="/signup"
                role="button"
              >
                Register now!
              </a>
              <a
                className="btn btn-dark btn-lg m-2"
                href="/login"
                role="button"
              >
                Login
              </a>
              <br />
              <div className={styles.area2}>
                <a
                  className={styles.area3 + "btn btn-outline-dark"}
                  href="#intro"
                >
                  <i data-feather="chevrons-down" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="b-example-divider"></div>

      <div className="container py-5" id="intro">
        <img
          className="mx-auto d-block"
          src="/img/undraw_medical_care_movn.svg"
          width="30%"
          height="auto"
        />
        <h2 className="pb-2 border-bottom">Kolayca Düzenleyin</h2>
        <div className="row g-5 py-5">
          <div className="feature col-md-4">
            <div className="feature-icon bg-primary bg-gradient">
              {/* TODO add feather clock 32px */}
            </div>
            <h2>Zamanlayıcı</h2>
            <p>
              Düzenli kullanmanız gereken ilaçları kolayca ekleyin, kolayca
              takip edin.
            </p>
          </div>
          <div className="feature col-md-4">
            <div className="feature-icon bg-primary bg-gradient">
              {/* TODO add feather list 32px */}
            </div>
            <h2>Hepsi tek yerde</h2>
            <p>Tüm ilaçları tek yere kaydedin, tek yerden kontrol edin.</p>
          </div>
          <div className="feature col-md-4">
            <div className="feature-icon bg-primary bg-gradient">
              {/* TODO add feather alert-circle 32px */}
            </div>
            <h2>Kontrol altında</h2>
            <p>Son kullanma tarihi yaklaşan ilaçları geç kalmadan öğrenin.</p>
          </div>
        </div>
      </div>

      <div className="b-example-divider"></div>

      <div className="container py-5" id="hanging-icons">
        <img
          className="mx-auto d-block"
          src="/img/undraw_schedule_pnbk.svg"
          width="30%"
          height="auto"
        />
        <h2 className="pb-2 border-bottom">Kontrol Sizde</h2>
        <div className="row g-5 py-5">
          <div className="col-md-4 d-flex align-items-start">
            <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
              {/* TODO add feather bell 32px */}
            </div>
            <div>
              <h2>Özelleştirilebilir alarmlar</h2>
              <p>
                Her ilaç için ihtiyacınıza uygun alarm kurun. İster 5 gün önce,
                ister 2 ay önce haberdar olun
              </p>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-start">
            <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
              {/* TODO add feather fast-forward 32px */}
            </div>
            <div>
              <h2>Otomatik tamamlama</h2>
              <p>
                Daha önce eklediğiniz ilacı tekrar tekrar girmeyin. Sadece
                ismini yazdığınızda diğer kısımlar otomatik dolar
              </p>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-start">
            <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
              {/* TODO add feather wifi 32px */}
            </div>
            <div>
              <h2>Her yerden erişim</h2>
              <p>
                İnternetin olduğu her yerden, ister telefondan ister
                bilgisayardan ilaçlarınıza erişin
              </p>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <a href="/kayit" className="btn btn-primary">
            Hemen Başlayın!
          </a>
        </div>
      </div>

      <div className="b-example-divider"></div>

      <Footer />
    </>
  );
};

export default Hello;
