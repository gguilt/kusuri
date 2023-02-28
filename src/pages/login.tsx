import Head from "next/head";
import styles from "@/styles/Sign.module.css";

const Signin = () => {
  return (
    <>
      <Head>
        <title>Giriş - Kusuri</title>
      </Head>

      <main className={styles.signin}>
        <img
          className="d-block mx-auto mb-4"
          src="/img/undraw_energizer_2224.svg"
          alt=""
          width="90%"
          height="auto"
        />
        <form action="/post/giris" method="POST">
          <h1 className="h3 mb-3 fw-normal">Üye Girişi</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="name@example.com"
            />
            <label htmlFor="email">E-mail</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="passwd"
              name="passwd"
              placeholder="Şifreniz.."
            />
            <label htmlFor="passwd">Şifre</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Beni hatırla
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Giriş yap
          </button>
        </form>
      </main>
    </>
  );
};

export default Signin;
