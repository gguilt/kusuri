import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";

const Add = () => {
  return (
    <>
      <Head>
        <title>Yeni Ekle - Kusuri</title>
      </Head>

      <Header />

      <div className="container">
        <main>
          <div className="py-5 text-center">
            <img
              className="d-block mx-auto mb-4"
              src="/img/undraw_medical_research_qg4d.svg"
              alt=""
              width="30%"
              height="auto"
            />
            <h2>Medicine Form</h2>
            <p className="lead">You can use this form to add new medicine.</p>
          </div>

          <div className="row g-5">
            <form
              className="needs-validation"
              action="/post/add"
              method="POST"
              noValidate
            >
              <hr className="my-4" />
              <h4 className="mb-3">Medicine information</h4>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="medicineName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="medicineName"
                    name="medicineName"
                    placeholder=""
                    value=""
                    required
                  />
                  <div className="invalid-feedback">Entry is invalid.</div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="medicineFirm" className="form-label">
                    Producer
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="medicineFirm"
                    name="medicineFirm"
                    placeholder=""
                    value=""
                    required
                  />
                  <div className="invalid-feedback">Entry is invalid.</div>
                </div>

                <div className="col-sm-12">
                  <label htmlFor="medicineExpDate" className="form-label">
                    Best before
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="medicineExpDate"
                    name="medicineExpDate"
                    placeholder="31/12/2025 15:04"
                    value=""
                    required
                  />
                  <div className="invalid-feedback">Entry is invalid.</div>
                </div>

                <div className="col-sm-12">
                  <label htmlFor="entryCount" className="form-label">
                    Entry count
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="entryCount"
                    name="entryCount"
                    placeholder=""
                    value=""
                    required
                  />
                  <small className="text-muted">How many to add?</small>
                  <div className="invalid-feedback">Entry is invalid.</div>
                </div>

                <div className="col-12">
                  <label htmlFor="medicineDescription" className="form-label">
                    Description <span className="text-muted">(optional)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="medicineDescription"
                    name="medicineDescription"
                    placeholder=""
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="medicineSizePerBox" className="form-label">
                    Size per box
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="medicineSizePerBox"
                    name="medicineSizePerBox"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">Entry is invalid.</div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="medicineSizeType" className="form-label">
                    Size type
                  </label>
                  <select
                    className="form-select"
                    id="medicineSizeType"
                    name="medicineSizeType"
                    required
                  >
                    <option>mg (Milligram)</option>
                    <option>ml (Milliliter)</option>
                  </select>
                  <div className="invalid-feedback">Entry is invalid.</div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="medicineCountPerBox" className="form-label">
                    Count per box
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="medicineCountPerBox"
                    name="medicineCountPerBox"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">Entry is invalid.</div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="medicineType" className="form-label">
                    Medicine type
                  </label>
                  <select
                    className="form-select"
                    id="medicineType"
                    name="medicineType"
                    required
                  >
                    <option>Tablet</option>
                    <option>Syrup</option>
                    <option>Spray</option>
                    <option>Capsule</option>
                  </select>
                  <div className="invalid-feedback">Entry is invalid.</div>
                </div>
              </div>

              <hr className="my-4" />
              <h4 className="mb-3">Best before alarm</h4>

              <div className="row gy-3">
                <div className="col-md-12">
                  <label htmlFor="expireAlarmName" className="form-label">
                    Alarm İsmi
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="expireAlarmName"
                    name="expireAlarmName"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">Entry is invalid.</div>
                </div>

                <div className="col-md-4">
                  <label htmlFor="expireAlarmTime" className="form-label">
                    Süre
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="expireAlarmTime"
                    name="expireAlarmTime"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">Entry is invalid.</div>
                </div>

                <div className="col-md-4">
                  <label htmlFor="expireAlarmTimeType" className="form-label">
                    Süre türü
                  </label>
                  <select
                    className="form-select"
                    id="expireAlarmTimeType"
                    name="expireAlarmTimeType"
                    required
                  >
                    <option>Day</option>
                    <option>Week</option>
                    <option>Month</option>
                    <option>Year</option>
                  </select>
                  <div className="invalid-feedback">Entry is invalid.</div>
                </div>

                <div className="col-md-4">
                  <label
                    htmlFor="expireAlarmBeforeAfter"
                    className="form-label"
                  >
                    Before/After
                  </label>
                  <select
                    className="form-select"
                    id="expireAlarmBeforeAfter"
                    name="expireAlarmBeforeAfter"
                    required
                  >
                    <option>Before</option>
                    <option>After</option>
                  </select>
                  <div className="invalid-feedback">Entry is invalid.</div>
                </div>

                <div className="col-md-12">
                  <label htmlFor="expireAlarmAction" className="form-label">
                    Action
                  </label>
                  <select
                    className="form-select"
                    id="expireAlarmAction"
                    name="expireAlarmAction"
                    required
                  >
                    <option>Alarm</option>
                    <option>Auto-delete</option>
                  </select>
                  <div className="invalid-feedback">Entry is invalid.</div>
                </div>
              </div>

              <hr className="my-4" />
              <h4 className="mb-3">Usage alarm</h4>

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="useAlarmMonday"
                  name="useAlarmMonday"
                  checked
                />
                <label className="form-check-label" htmlFor="useAlarmMonday">
                  Monday
                </label>
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="useAlarmTuesday"
                  name="useAlarmTuesday"
                  checked
                />
                <label className="form-check-label" htmlFor="useAlarmTuesday">
                  Tuesday
                </label>
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="useAlarmWednesday"
                  name="useAlarmWednesday"
                  checked
                />
                <label className="form-check-label" htmlFor="useAlarmWednesday">
                  Wednesday
                </label>
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="useAlarmThursday"
                  name="useAlarmThursday"
                  checked
                />
                <label className="form-check-label" htmlFor="useAlarmThursday">
                  Thursday
                </label>
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="useAlarmFriday"
                  name="useAlarmFriday"
                  checked
                />
                <label className="form-check-label" htmlFor="useAlarmFriday">
                  Friday
                </label>
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="useAlarmSaturday"
                  name="useAlarmSaturday"
                  checked
                />
                <label className="form-check-label" htmlFor="useAlarmSaturday">
                  Saturday
                </label>
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="useAlarmSunday"
                  name="useAlarmSunday"
                  checked
                />
                <label className="form-check-label" htmlFor="useAlarmSunday">
                  Sunday
                </label>
              </div>

              <div className="row gy-3">
                <div className="col-md-12">
                  <label htmlFor="useAlarmTime" className="form-label">
                    Hour
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="useAlarmTime"
                    name="useAlarmTime"
                    placeholder="15:04"
                    required
                  />
                  <div className="invalid-feedback">Entry is invalid.</div>
                </div>
              </div>

              <hr className="my-4" />
              <button className="w-100 btn btn-primary btn-lg" type="submit">
                Submit
              </button>
            </form>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Add;
