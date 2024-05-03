import { useQuizContext } from "@/context/QuizContext";
import dynamic from "next/dynamic";
import React, { useState } from "react";
const LazyMobileNumberModal = dynamic(() => import("./MobileNumberModal"), {
  ssr: false,
});
const LazyHomeModal = dynamic(() => import("./HomeModal"), {
  ssr: false,
});
export default function QuizResult({ lang }: { lang: string }) {
  const { scored, totalQuestion, setScreen, setCertificateUrl } =
    useQuizContext();
  const [showMobileNumberModal, setShowMobileNumberModal] = useState(false);
  const [showHomeModal, setShowHomeModal] = useState(false);

  const downloadCertificate = () => {
    if (localStorage.getItem("mobile") === null) setShowMobileNumberModal(true);
    else {
      setCertificateUrl(localStorage.getItem("certificate"));
      setScreen(4);
    }
  };
  return (
    <>
      <span id="home_nav">
        <img
          //   data-bs-toggle="modal"
          //   data-bs-target="#exampleModal1"
          src="/assets/quiz/Home Icon.svg"
          onClick={() => setShowHomeModal(true)}
          style={{ cursor: "pointer" }}
        />
      </span>
      <section
        id="result-container"
        className="section-container justify-content-center align-content-center"
      >
        <div
          id="result"
          className="col-md-4 col-11 d-flex flex-column justify-content-between align-items-center"
        >
          <img
            src="/assets/quiz/result.webp"
            className="col-md-3 col-5"
            alt="result image"
          />
          <p
            style={{
              textAlign: "center",
              marginBottom: "0px",
              fontSize: "24px",
              fontWeight: "bold",
              marginTop: "0px",
            }}
          >
            {lang === "hi" ? "आपका स्कोर है" : "Your Score"}
          </p>
          {scored !== 0 ? (
            <div id="score-container" style={{ display: "flex" }}>
              <span id="score">{scored}</span>/{totalQuestion}
            </div>
          ) : (
            <>
              <span id="zero-score-img">
                <img width="100%" src="/assets/quiz/sad.webp" alt="sad image" />
              </span>
              <span
                id="zero-score-text"
                className="text-danger fw-bold px-3 text-center my-3"
              >
                0/{totalQuestion}{" "}
                {lang === "hi"
                  ? "स्कोर! दिए गए उत्तरों में से कोई भी सही नहीं है"
                  : "Score! None of the given answers were right."}
              </span>
            </>
          )}

          {/* <!-- <div className="mb-5 col-12 d-flex justify-content-around">
      <button id="reset-btn" onclick="reset()" className="btn col-5"><img className="me-2" src="/assets/quiz/again.svg" alt=""> Try Again</button>
      <button id="cancel-btn" onclick="showCertificate()" className="btn col-5"><i className="fa fa-download me-2" aria-hidden="true"></i> Certificate </button>
    </div> --> */}
          <div className=" col-12 d-flex" style={{ justifyContent: "center" }}>
            <button
              id="cancel-btn"
              onClick={downloadCertificate}
              className="btn col-8"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "0px",
              }}
            >
              {/* <i className="fa fa-download me-2" aria-hidden="true"></i>{" "} */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width={17}
                height={17}
                fill="white"
                className="me-2"
              >
                <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
              </svg>
              {lang === "hi"
                ? "सर्टिफिकेट डाउनलोड करें"
                : "Download Certificate"}
            </button>
            {/* <!-- <button className="btn"><a href="../index.html" className="mx-3 p-3 text-dark">Go Back to Main website</a></button> --> */}
          </div>

          <center>
            {" "}
            <a
              id=""
              onClick={() => {
                setScreen(1);
              }}
              className="btn col-12"
            >
              <p>
                <u>
                  <img
                    className=""
                    style={{ textShadow: "1px 1px 4px black" }}
                    src="/assets/quiz/again.svg"
                    alt="Again image"
                  />
                  <span>
                    {" "}
                    {lang === "hi" ? "दोबारा क्विज़ खेलें" : "Try Again"}
                  </span>
                </u>
              </p>
            </a>
          </center>
        </div>
        <div className="footer">
          <img
            src="/assets/quiz/footer.webp"
            className="w-100"
            alt="footer image"
          />
        </div>
      </section>

      {showHomeModal && (
        <LazyHomeModal lang={lang} setShowHomeModal={setShowHomeModal} />
      )}
      {showMobileNumberModal && (
        <LazyMobileNumberModal
          lang={lang}
          setShowMobileNumberModal={setShowMobileNumberModal}
        />
      )}
    </>
  );
}
