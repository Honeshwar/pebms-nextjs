"use client";

import { useEffect, useRef, useState } from "react";
import "./ringtone.css";
import { useRouter } from "next/navigation";
export default function Page() {
  const [showThanks, setShowThanks] = useState(false);
  const [showRedirect, setShowRedirect] = useState(false);
  const countRef = useRef<any>(null);
  const router = useRouter();

  function downloadAudio() {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/ringtone_download_count`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          const anchor = document.createElement("a");
          anchor.href = `/audio/Audio 2.mp3`;
          anchor.download = "ringtone.mp3";
          anchor.click();

          setShowThanks(true);
        }
      });
  }
  useEffect(() => {
    function share() {
      if (document.getElementById("share")) {
        let l = process.env.NEXT_PUBLIC_ORIGIN_URL + `/ringtone`;
        let a =
          "मेरी तरह आप भी फिर एक बार मोदी सरकार की रिंगटोन सुनने के लिए इस लिंक पर क्लिक करें ।";
        let t = encodeURIComponent(a + l);
        if (screen.width > 750)
          var s = "https://web.whatsapp.com/send?url=" + l + "&text=" + t;
        else var s = "https://wa.me/?url=" + l + "&text=" + t;
        document.getElementById("share")!.innerHTML =
          '<p style ="margin-bottom:0px !important;padding-bottom: 0px;font-weight:700;color:white"><span><a href="' +
          s +
          '" class="social_thank" target="_blank" style="color:black"> <img src="/assets/svg/whatsapp.svg" alt="whatsapp logo" style="width: 40px!important; "></a> </span> <span> <a href = "https://twitter.com/intent/tweet?url=' +
          t +
          '" class="social_thank" style="color:black" target="_blank"> <img src="/assets/svg/twt-x-logo.svg" alt = "twitter logo" style="width: 40px!important;    background-color: black;padding: 3px;border-radius: 50%;"> </a> </span> <span> <a href = "http://www.facebook.com/sharer/sharer.php?u=' +
          t +
          '" target="_blank" class="social_thank" style="color:black"> <img src="/assets/svg/fb.svg" alt = "facebook logo" style="width: 40px!important;"> </a> </span></p> ';
      }
    }

    share();
  }, [showThanks]);
  function counter() {
    let count = 5;
    const interval = setInterval(() => {
      count--;
      if (countRef.current) {
        let text = "",
          e = "";

        text =
          '<p class="" style="color:black;text-align:center">' +
          e +
          `</p> <p class=" text-center"> <span class="" style="color:black;text-align:center">आपको <span class="px-1" id="countdown" style="">` +
          count +
          "</span> सेकंड में मुख्य वेबसाइट पर निर्देशित किया जा रहा है  </span></p>";

        console.log("text", text);
        countRef.current.innerHTML = text;
      }
      if (count === 0) {
        clearInterval(interval);

        router.push("/");
      }
    }, 1000);
  }
  //   useEffect(() => {
  //     if (showRedirect !== -1) {

  //       return () => {
  //         clearInterval(interval);
  //       };
  //     }
  //   }, [showRedirect]);

  return (
    <div className="ringtone-page">
      <div style={{ minHeight: 360 }}>
        <img
          id="master-image"
          className="mob-v"
          loading="eager"
          src="/images/desktop/hi.webp"
          srcSet="/images/mobile/hi.webp 600w, /images/desktop/hi.webp 1500w"
          sizes="(min-width: 768px) 768px,50vw"
          alt="mp pledge"
          style={{}}
        />
      </div>
      <div
        className="container form_box py-1"
        style={{ padding: "0px 15px !important" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        <div
          id="side-container"
          className="mt-md-2"
          style={{ overflow: "hidden" }}
        >
          <h6
            id="l1-heading"
            className="form_head mt-md-3 mb-md-5 translate"
            style={{ textAlign: "center" }}
          >
            फिर एक बार मोदी सरकार की रिंगटोन डाउनलोड करे
          </h6>
          <div>
            <div
              id="ringtone-container"
              className="mb-3 mb-md-3"
              style={{
                border: "none",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* input */}
              <audio id="ringtone" src="/audio/Audio 2.mp3" controls={true} />
            </div>
            <div className="button-container">
              {/* <center>
        <button
          id="l1-submit-button"
          type="button"
          onclick="playAudio('ringtone')"
          class="btn form-control mb-0 mb-md-0 mt-2 submit_button translate"
          style=""
        >
          <b
            style="
              font-family: 'Khand', sans-serif;
              background-color: 0D67A8;
            "
            class="button-txt"
            >ऑडियो चलाएं</b
          >
        </button>
      </center> */}
              <center>
                <button
                  id="download-btn"
                  type="button"
                  onClick={downloadAudio}
                  className="btn form-control mb-0 mb-md-0 mt-1 submit_button translate"
                  style={{}}
                >
                  <b
                    style={{
                      fontFamily: '"Khand", sans-serif',
                      backgroundColor: "0D67A8",
                    }}
                    className="button-txt"
                  >
                    डाउनलोड करें
                  </b>
                </button>
              </center>
            </div>
          </div>
        </div>
      </div>
      {showThanks && (
        <div id="thankyou" className="modal">
          <div className="modal__content">
            <div id="popup1" className="modal-body text-light p-2" style={{}}>
              <h4
                id="thank-modal-message-1"
                className="alert-heading text-center translate"
                style={{
                  color: "#ff7801",
                  fontWeight: 700,
                  lineHeight: "2.2rem",
                  fontSize: 25,
                  textAlign: "center",
                  marginBlock: 0,
                }}
              >
                रिंगटोन डाउनलोड करने के लिए धन्यवाद। अपने साथ अपने मित्रों एवं
                परिवारजनों को भी रिंगटोन शेयर करें।
              </h4>
              {/* <h4
      id="thank-modal-message-2"
      class="alert-heading text-center translate"
      style="
        color: #ff7801;
        font-weight: 700;
        line-height: 2.2rem;
        font-size: 25px;
        text-align: center;
      "
    >
      भाजपा को जिताने का संकल्प लेने के लिए धन्यवाद
    </h4> */}
              <div
                id="share"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
            </div>
            <a
              href="#redirection-modal"
              className="modal__close"
              onClick={() => {
                counter();
                setShowThanks(false);
                setShowRedirect(true);
              }}
              style={{ color: "#131313", fontSize: 20 }}
            >
              ×
            </a>
          </div>
        </div>
      )}
      {showRedirect && (
        <div id="redirection-modal" className="modal">
          <div className="modal__content">
            <div
              ref={countRef}
              id="redirect"
              className="modal-body text-light p-2"
              style={{ height: "100%", textAlign: "center" }}
            />
            <a href="#" className="modal__close">
              ×
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
