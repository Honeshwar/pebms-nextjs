import { useQuizContext } from "@/context/QuizContext";
import { generateShareLinks } from "@/utils/constant";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";
const LazyHomeModal = dynamic(() => import("./HomeModal"), {
  ssr: false,
});
export default function QuizCertificate({ lang }: { lang: string }) {
  const [what_link, setWhat_link] = useState<string>("");
  const [facebook_link, setFacebook_link] = useState<string>("");
  const [twitter_link, setTwitter_link] = useState<string>("");
  const [showHomeModal, setShowHomeModal] = useState(false);

  const { certificateUrl, isMobile } = useQuizContext();

  const shareTextHindi =
    "मेरी तरह आप भी भारत को विश्वगुरु बनाने के लिए इस लिंक पर क्लिक करे और मोदी जी को अपना समर्थन दे ।" +
    "फिर एक बार मोदी सरकार";
  const shareTextEnglish =
    "Like me, you also click on this link to make India a world leader and support Modi ji. ।" +
    "Phir Ek Baar Modi Sarkar";
  useEffect(() => {
    const { twitter_link, facebook_link, what_link } = generateShareLinks(
      process.env.NEXT_PUBLIC_API_URL +
        "/metamaker/" +
        localStorage.getItem("mobile") +
        "?lang=" +
        lang,
      lang === "hi" ? shareTextHindi : shareTextEnglish
    );

    console.log(what_link, facebook_link, twitter_link);
    setWhat_link(what_link);
    setFacebook_link(facebook_link);
    setTwitter_link(twitter_link);
  }, []);

  const downloadCertificate = () => {
    var x = localStorage.getItem("mobile");
    window.location.href =
      `${process.env.NEXT_PUBLIC_API_URL}/get_certificate/` + x;
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
      <section id="certificate-container" className="section-container">
        <div id="certificate-section" className="col-md-5 col-11 p-3 m-auto">
          <Image
            width={isMobile ? 300 : 580}
            height={isMobile ? 200 : 400}
            style={{ height: "fit-content" }}
            id="ceritificate"
            className="col-11 my-2"
            src={certificateUrl}
            alt="certificate"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAGklEQVR4nGP4/enVSwkehp//v7951lKUcAgAXpwKvnf8XnIAAAAASUVORK5CYII="
          />
          <div className="col-12 d-flex flex-column flex-md-row justify-content-center align-items-center">
            <button
              id="download-btn"
              className="col-md-6 col-10 btn btn-primary my-2"
              onClick={downloadCertificate}
            >
              <img
                className="me-2"
                src="/assets/quiz/download.svg"
                style={{ width: "20px" }}
                alt="download icon"
              />{" "}
              {lang === "hi" ? "डाउनलोड करें" : "Download"}
            </button>
            <div className="col-md-6 col-10 d-flex justify-content-center align-items-center my-2">
              <span className="mx-2">
                {lang === "hi" ? "शेयर करें:" : "Share:"}
              </span>
              <div className="d-flex justify-content-center align-items-center">
                <a
                  id="facebook-link"
                  target="_blank"
                  href={facebook_link}
                  className="mx-1"
                >
                  <img src="/assets/quiz/fb.svg" alt="facebook logo" />
                </a>
                <a
                  id="whatsapp-link"
                  target="_blank"
                  href={what_link}
                  className="mx-1"
                >
                  <img src="/assets/quiz/whatsapp.svg" alt="whatsapp logo" />
                </a>
                <a
                  id="twitter-link"
                  target="_blank"
                  href={twitter_link}
                  className="mx-1"
                >
                  <img
                    src="/assets/quiz/twt-x-logo.svg"
                    style={{
                      backgroundColor: "black",
                      padding: "3px",
                      borderRadius: "50%",
                    }}
                    alt="twitter logo"
                  />
                </a>
              </div>
            </div>
          </div>
          {lang === "hi" ? (
            <Link href="/" className="mx-3 p-3">
              वेबसाइट पर जाएँ
            </Link>
          ) : (
            <Link href="/en" className="mx-3 p-3">
              Go Back to Main website
            </Link>
          )}
        </div>
        <div className="footer">
          <img src="/assets/quiz/footer.webp" className="w-100" alt="footer" />
        </div>
      </section>

      {showHomeModal && (
        <LazyHomeModal lang={lang} setShowHomeModal={setShowHomeModal} />
      )}
    </>
  );
}
