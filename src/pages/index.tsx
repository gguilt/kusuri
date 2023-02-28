import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Kusuri</title>
        <meta name="description" content="İlaç Takip Uygulaması" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="container">
        <main>
          <div className="py-5 text-center">
            <img
              className="d-block mx-auto mb-4"
              src="/img/undraw_medical_care_movn.svg"
              alt=""
              width="30%"
              height="auto"
            />
            <h2>Medicine List</h2>
          </div>

          <div className="row g-5">
            <h4>Expired</h4>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Medicine no.</th>
                  <th scope="col">Entry date</th>
                  <th scope="col">Best before</th>
                  <th scope="col">Name</th>
                  <th scope="col">Producer</th>
                  <th scope="col">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"> .ID </th>
                  <td> .MedicineID </td>
                  <td> .EntryDate </td>
                  <td> .FinalDate </td>
                  <td> .Name </td>
                  <td> .Producer </td>
                  <td> .Description </td>
                </tr>
              </tbody>
            </table>

            <h4>Alarmed</h4>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Medicine no.</th>
                  <th scope="col">Entry date</th>
                  <th scope="col">Best before</th>
                  <th scope="col">Name</th>
                  <th scope="col">Producer</th>
                  <th scope="col">Description</th>
                  <th scope="col">Best before alarm</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"> .ID </th>
                  <td> .MedicineID </td>
                  <td> .EntryDate </td>
                  <td> .FinalDate </td>
                  <td> .Name </td>
                  <td> .Producer </td>
                  <td> .Description </td>
                  <td> .Alarm </td>
                </tr>
              </tbody>
            </table>

            <h4>Close to Best Before</h4>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Medicine no.</th>
                  <th scope="col">Entry date</th>
                  <th scope="col">Best before</th>
                  <th scope="col">Name</th>
                  <th scope="col">Producer</th>
                  <th scope="col">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"> .ID </th>
                  <td> .MedicineID </td>
                  <td> .EntryDate </td>
                  <td> .FinalDate </td>
                  <td> .Name </td>
                  <td> .Producer </td>
                  <td> .Description </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
