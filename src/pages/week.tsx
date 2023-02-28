import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";

const Week = () => {
  return (
    <>
      <Head>
        <title>Haftalık - Kusuri</title>
      </Head>

      <Header />

      <div className="container">
        <main>
          <div className="py-5 text-center">
            <img
              className="d-block mx-auto mb-4"
              src="/img/undraw_medicine_b1ol.svg"
              alt=""
              width="30%"
              height="auto"
            />
            <h2>Haftalık Tablo</h2>
          </div>

          <div className="row g-5">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Medicine no.</th>
                  <th scope="col">Medicine name</th>
                  <th scope="col">Size</th>
                  <th scope="col">Count per box</th>
                  <th scope="col">Hour</th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th>Monday</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"> .ID </th>
                  <td> .MedicineID </td>
                  <td> .Name </td>
                  <td> .Size </td>
                  <td> .Count </td>
                  <td> .Hour </td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th>Tuesday</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"> .ID </th>
                  <td> .MedicineID </td>
                  <td> .Name </td>
                  <td> .Size </td>
                  <td> .Count </td>
                  <td> .Hour </td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th>Wednesday</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"> .ID </th>
                  <td> .MedicineID </td>
                  <td> .Name </td>
                  <td> .Size </td>
                  <td> .Count </td>
                  <td> .Hour </td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th>Thursday</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"> .ID </th>
                  <td> .MedicineID </td>
                  <td> .Name </td>
                  <td> .Size </td>
                  <td> .Count </td>
                  <td> .Hour </td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th>Friday</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"> .ID </th>
                  <td> .MedicineID </td>
                  <td> .Name </td>
                  <td> .Size </td>
                  <td> .Count </td>
                  <td> .Hour </td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th>Saturday</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"> .ID </th>
                  <td> .MedicineID </td>
                  <td> .Name </td>
                  <td> .Size </td>
                  <td> .Count </td>
                  <td> .Hour </td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th>Sunday</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"> .ID </th>
                  <td> .MedicineID </td>
                  <td> .Name </td>
                  <td> .Size </td>
                  <td> .Count </td>
                  <td> .Hour </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Week;
