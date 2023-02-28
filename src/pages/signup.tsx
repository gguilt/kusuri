import styles from "@/styles/Sign.module.css";
import Head from "next/head";

const Signup = () => {
  return (
    <>
      <Head>
        <title>Kayıt - Kusuri</title>
      </Head>
      <main className={styles.signin}>
        <img
          className="d-block mx-auto mb-4"
          src="/img/undraw_doctor_kw5l.svg"
          alt=""
          width="90%"
          height="auto"
        />
        <form action="/post/kayit" method="POST">
          <h1 className="h3 mb-3 fw-normal">Yeni Üye Kaydı</h1>

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
              type="name"
              className="form-control"
              id="name"
              name="name"
              placeholder="Username"
            />

            <label htmlFor="name">Kullanıcı adı</label>
          </div>

          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="passwd"
              name="passwd"
              placeholder="Password"
            />
            <label htmlFor="passwd">Şifre</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Beni hatırla
            </label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Kayıt ol
          </button>
        </form>
      </main>
    </>
  );
};

export default Signup;
