"use client";
import Mobile from "@/components/Pledge/Mobile";
import "./thankyou.css";
// import "../pledge.css";
import translations from "@/utils/translations";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Page({
  searchParams,
}: {
  searchParams: { lang: string };
}) {
  let lang = searchParams.lang || "hi";
  if (
    lang !== "hi" &&
    lang !== "en" &&
    lang !== "bn" &&
    lang !== "te" &&
    lang !== "as" &&
    lang !== "mr" &&
    lang !== "gu" &&
    lang !== "kn" &&
    lang !== "ml" &&
    lang !== "or" &&
    lang !== "ta" &&
    lang !== "pa"
  )
    lang = "hi";
  console.log(lang);

  const router = useRouter();

  if (localStorage.getItem("mobile") === null) {
    router.push("/pledge?lang=" + lang);
  }
  useEffect(() => {
    function updateContent(t: string) {
      var e = document.querySelector('meta[name="title"]'),
        a = document.querySelector('meta[name="description"]');
      e
        ? e.setAttribute("content", translations[t]["meta-title"])
        : console.error("Meta tag not found"),
        a
          ? a.setAttribute("content", translations[t]["meta-description"])
          : console.error("Meta tag not found");
      // let o = document.getElementById("master-image") as HTMLImageElement;
      // o &&
      //   ((o.src = `images/desktop/${t}.webp`),
      //   (o.srcset = `images/mobile/${t}.webp 600w, images/desktop/${t}.webp 1600w`));

      // let n = document.querySelectorAll(".translate-placeholder") as any;
      // n &&
      //   n.forEach((e: any) => {
      //     let a = e.id,
      //       o = translations[t][a];
      //     o && (e.placeholder = o);
      //   });
      // let l = document.querySelectorAll(".translate");
      // l &&
      //   l.forEach((e) => {
      //     let a = e.id,
      //       o = translations[t][a];
      //     o && (e.textContent = o);
      //   });
    }
    document.addEventListener("DOMContentLoaded", function () {
      let t = new URLSearchParams(window.location.search),
        e = t.get("lang") || "hi";
      console.log(e), updateContent(e);
    });
  }, [lang]);

  function share() {
    let link =
      process.env.NEXT_PUBLIC_API_URL +
      "/metamaker/" +
      localStorage.getItem("mobile") +
      `?lang=${lang}`;
    let text = encodeURIComponent(
      `मेरी तरह आप भी भारत को विश्वगुरु बनाने के लिए इस लिंक पर क्लिक करे और मोदी जी को अपना समर्थन दे ।`
    );
    let text2 = encodeURIComponent(` फिर एक बार मोदी सरकार`);

    switch (lang) {
      case "hi":
        text = encodeURIComponent(
          `मेरी तरह आप भी भारत को विश्वगुरु बनाने के लिए इस लिंक पर क्लिक करे और मोदी जी को अपना समर्थन दे ।`
        );
        text2 = encodeURIComponent(` फिर एक बार मोदी सरकार`);
        break;
      case "mr":
        text = encodeURIComponent(
          `माझ्याप्रमाणे तुम्हीही भारताला विश्वगुरु बनवण्यासाठी या लिंकवर क्लिक करा आणि मोदीजींना तुमचं समर्थन द्या `
        );
        text2 = encodeURIComponent(` पुन्हा एकदा मोदी सरकार`);
        break;
      case "bn":
        text = encodeURIComponent(
          `আমার মতো, আপনিও এই লিঙ্কে ক্লিক করুন এবং বিশ্বগুরু ভারতের লক্ষ্য অর্জন করতে মোদীজিকে সমর্থন করুন।`
        );
        text2 = encodeURIComponent(` আরো একবার মোদি সরকার`);
        break;
      case "gu":
        text = encodeURIComponent(
          `મારી જેમ તમે પણ ભારતને વિશ્વગુરૂ બનાવવા માટે આ લિંક પર ક્લિક કરો અને મોદીજીને તમારૂ સમર્થન આપો.`
        );
        text2 = encodeURIComponent(` ફરી એક વાર મોદી સરકાર`);
        break;
      case "as":
        text = encodeURIComponent(
          `মোৰ দৰে আপুনিও এই লিংকটোত ক্লিক কৰক আৰু ভাৰতক বিশ্বৰ আগশাৰীৰ দেশ হিচাপে গঢ়ি তুলিবলৈ মোদীজীক সমৰ্থন কৰক।`
        );
        text2 = encodeURIComponent(` আকৌ এবাৰ মোদী চৰকাৰ`);
        break;
      case "or":
        text = encodeURIComponent(
          `ମୋଦୀ ଜୀଙ୍କର ଏକ ନୂତନ ଭାରତର ଦୃଷ୍ଟିକୋଣ ପାଇଁ ମୁଁ ମୋର ସମର୍ଥନ ପ୍ରତିଶ୍ରୁତି ଦେଇଛି। ମୁଁ ମୋର ସ୍ୱପ୍ନକୁ ସାକାର କରିବା ଦିଗରେ ପଦକ୍ଷେପ ନେଇଛି, ଏବଂ ବର୍ତ୍ତମାନ ଏହା ତୁମର ପାଳି। ମୋ ସହିତ ଯୋଗଦେବା ପାଇଁ ନିମ୍ନ ଲିଙ୍କ କ୍ଲିକ୍ କରନ୍ତୁ:`
        );
        text2 = encodeURIComponent(` ପୁଣି ଥରେ ମୋଦୀ ସରକାର`);
        break;
      case "pa":
        text = encodeURIComponent(
          `ਮੇਰੇ ਵਾਂਗ, ਤੁਸੀਂ ਵੀ ਇਸ ਲਿੰਕ 'ਤੇ ਕਲਿੱਕ ਕਰੋ ਅਤੇ ਭਾਰਤ ਨੂੰ ਵਿਸ਼ਵ ਗੁਰੂ ਬਣਾਉਣ ਲਈ ਮੋਦੀ ਜੀ ਦਾ ਸਮਰਥਨ ਕਰੋ।`
        );
        text2 = encodeURIComponent(` ਇੱਕ ਵਾਰ ਫਿਰ ਮੋਦੀ ਸਰਕਾਰ`);
        break;

      case "kn":
        text = encodeURIComponent(
          `ನನ್ನಂತೆಯೇ ನೀವೂ ಭಾರತವನ್ನು ವಿಶ್ವಗುರುವನ್ನಾಗಿ ಮಾಡಲು ಈ ಲಿಂಕನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ ಮತ್ತು ಮೋದಿಜಿಯನ್ನು ಬೆಂಬಲಿಸಿ.`
        );
        text2 = encodeURIComponent(` ಮತ್ತೊಮ್ಮೆ ಮೋದಿ ಸರ್ಕಾರ`);
        break;
      case "te":
        text = encodeURIComponent(
          `నవ భారత నిర్మాణానికి మోదీ గారికి నా మద్దతు ఇస్తానని ప్రతిజ్ఞ చేస్తున్నాను. నా కలను సాకారం చేసుకునే దిశగా నేను ఒక అడుగు వేశాను, ఇప్పుడు మీ వంతు వచ్చింది. నాతో పాటు చేరడానికి క్రింది లింక్‌ను క్లిక్ చేయండి`
        );
        text2 = encodeURIComponent(`  మరోసారి మోదీ ప్రభుత్వం`);
        break;
      case "en":
        text = encodeURIComponent(
          ` I've pledged my support for Modi Ji's vision of a New India. I have taken a step towards realizing my dream, and now it's your turn. Click the link below to join me:`
        );
        text2 = encodeURIComponent(
          ` Let's make it happen: Phir Ek Baar Modi Sarkar`
        );
        break;
      case "ml":
        text = encodeURIComponent(
          `എന്നെപ്പോലെ നിങ്ങളും ഈ ലിങ്കിൽ ക്ലിക്ക് ചെയ്ത് ഭാരതത്തെ  വിശ്വഗുരു പദവിയിലെത്തിക്കാൻ മോദിജിയെ പിന്തുണയ്ക്കുക.`
        );
        text2 = encodeURIComponent(` ഒരിക്കൽ കൂടി മോദി സർക്കാർ`);
        break;
      case "ta":
        text = encodeURIComponent(
          `மோடியின் புதிய இந்தியாவை உருவாக்க ஆதரவளித்து நான் உறுதிமொழி எடுத்து விட்டேன். என் கனவை நனவாக்க நான் ஒரு அடி எடுத்து வைத்து விட்டேன். இப்போது உங்கள் முறை. கீழே இருக்கும் லிங்கை கிளிக் செய்யுங்கள்`
        );
        text2 = encodeURIComponent(` மீண்டும் மோடி வேண்டும் மோடி`);
        break;

      default:
        console.log("in default");
        text = encodeURIComponent(
          `मेरी तरह आप भी भारत को विश्वगुरु बनाने के लिए इस लिंक पर क्लिक करे और मोदी जी को अपना समर्थन दे ।`
        );
        text2 = encodeURIComponent(` फिर एक बार मोदी सरकार`);
        break;
    }
    let what_link = text + " " + link + text2;
    let whatsapp_link = "";
    let twitter_link =
      "https://twitter.com/intent/tweet?url=" + link + "&text=" + text + text2;
    let facebook_link =
      "http://www.facebook.com/sharer/sharer.php?u=" +
      link +
      "&text=" +
      text +
      text2;
    if (screen.width > 750) {
      whatsapp_link =
        "https://web.whatsapp.com/send?url=" + link + "&text=" + what_link;
    } else {
      whatsapp_link = "https://wa.me/?url=" + link + "&text=" + what_link;
    }
    var share =
      '<div><p style ="margin-bottom:0px !important;padding-bottom: 10px;font-weight:700;color:white"><span><a href="' +
      whatsapp_link +
      '" class="social_thank" target="_blank" style="color:black"> <img src="/assets/svg/whatsapp.svg" alt="whatsapp logo"></a> </span> <span> <a href = "' +
      twitter_link +
      '" class="social_thank" style="color:black" target="_blank"> <img src="/assets/svg/twt-x-logo.svg" alt = "twitter logo" style="    background-color: black;padding: 3px;border-radius: 50%;"> </a> </span> <span> <a href = "' +
      facebook_link +
      '" target="_blank" class="social_thank" style="color:black"> <img src="/assets/svg/fb.svg" alt = "facebook logo"> </a> </span>  </p> </center> </div>';

    document.getElementById("share")!.innerHTML = share;
  }

  useEffect(() => {
    share();
  }, []);

  function download_certificate() {
    var x = localStorage.getItem("mobile");
    window.location.href =
      process.env.NEXT_PUBLIC_API_URL + "/get_certificate/" + x;
  }

  function form_complete() {
    localStorage.setItem("form", "l3");
    router.push("/pledge?lang=" + lang);
    // window.location.href = `pledge.html?lang=${lang}`;
  }

  const [certificateUrl, setCertificateUrl] = useState<string>("/img/1.jpg");
  useEffect(() => {
    if (localStorage.getItem("mobile")) {
      //   if (localStorage.getItem("certificate")) {
      //     setCertificateUrl(localStorage.getItem("certificate")!);
      //     return;
      //   }
      // else {
      fetch(
        process.env.NEXT_PUBLIC_API_URL +
          `/generate_certificate2/${localStorage.getItem(
            "mobile"
          )}?language=${lang}`
      )
        .then((resp) => resp.json())
        .then((res) => {
          console.log(res);
          localStorage.setItem("ceritificate", res.certicate);
          setCertificateUrl(res.certicate);

          // setTimeout(() => {
          //   setCertificateUrl(res.certificate_url);
          // }, 5000);
        });
      // }
    } else {
      router.push("/pledge?lang=" + lang);
    }
  }, []);

  const Text = translations[lang];

  return (
    <div className="thankyou-page" style={{ overflow: "auto !important" }}>
      <div className="container-fluid ">
        <h4
          id="header-thankyou-title-1"
          className="alert-heading text-center translate"
          style={{
            color: "#ff7801",
            fontWeight: "700",
            lineHeight: "2.2rem",
            fontSize: "30px",
            textAlign: "center",
            marginTop: "2%",
          }}
        >
          {/* संकल्प लेने के लिए धन्यवाद */}
          {Text["header-thankyou-title-1"]}
        </h4>
        <h4
          id="header-thankyou-title-2"
          className="alert-heading text-center translate"
          style={{
            color: "#ff7801",
            fontWeight: "700",
            lineHeight: "2.2rem",
            fontSize: "30px",
            textAlign: "center",
            marginTop: "2%",
          }}
        >
          {/* 140 करोड़ है उसका परिवार, फिर एक बार मोदी सरकार ! */}
          {Text["header-thankyou-title-2"]}
        </h4>
      </div>
      <div className="container">
        <div className="row">
          <div className=" col-md-6  col-12  mt-1 mt-md-5 text center">
            <div
              className=" my-1 my-md-1"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                id="ceritifcate"
                className="px-md-2"
                src={certificateUrl}
                style={{ maxWidth: "100%", borderRadius: "5px" }}
              />
            </div>
          </div>
          <div className=" col-md-6  col-12  mt-2 mt-md-5 text center">
            <h4
              id="share-cta"
              className="alert-heading text-center translate"
              style={{
                color: "#ff7801",
                fontWeight: "700",
                lineHeight: "2.2rem",
                fontSize: "18px",
                textAlign: "center",
              }}
            >
              {" "}
              {/* अपना संकल्प पत्र शेयर करें */}
              {Text["share-cta"]}
            </h4>

            <div
              id="share"
              className="my-1 my-md-4"
              style={{ textAlign: "center" }}
            ></div>

            {/* mobile */}
            <div
              className="d-md-none d-block"
              style={{ margin: "10%  auto", width: "80%" }}
            >
              <center>
                <p
                  id="download-cta"
                  onClick={download_certificate}
                  className="py-2 rounded-5  mx-md-5 translate rounded-5"
                  style={{
                    textAlign: "center",
                    fontWeight: "700",
                    backgroundColor: " #FF6600",
                    color: "white",
                    borderRadius: "90px !important",
                    padding: "8px 30px !important",
                    fontSize: "20px",
                    fontFamily: "'Khand', sans-serif",
                    border: "none",
                    cursor: "pointer !important",
                  }}
                >
                  {Text["download-cta"]}
                </p>
              </center>
              <center>
                <a
                  href="https://www.whatsapp.com/channel/0029VaA8qLn1noz0rQUBx11O"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <p
                    id="wtsapp-cta"
                    className="py-2 rounded-5 mx-md-5 translate"
                    style={{
                      textAlign: "center",
                      fontWeight: "700",
                      backgroundColor: "#11b416",
                      color: "white",
                      borderRadius: "90px !important",
                      padding: "8px 30px !important",
                      fontSize: "20px",
                      fontFamily: "'Khand', sans-serif",
                      border: "none",
                      cursor: "pointer !important",
                    }}
                  >
                    {Text["wtsapp-cta"]}
                  </p>
                </a>
              </center>

              <center>
                <p
                  onClick={form_complete}
                  style={{
                    cursor: "pointer !important",
                    textDecoration: "none",
                  }}
                >
                  <button
                    className="pb-4"
                    style={{
                      color: "#555555",
                      textAlign: "center",
                      backgroundColor: "transparent",
                      borderRadius: " 90px !important",
                      padding: "5px 10px !important",
                      fontSize: "14px",
                      fontFamily: "'Khand', sans-serif",

                      border: "none",
                    }}
                  >
                    <u id="complete-cta" className="translate">
                      {Text["complete-cta"]}
                    </u>
                  </button>
                </p>
              </center>
            </div>

            {/* desktop */}
            <div className="d-md-block d-none">
              <center>
                <p
                  id="download-cta-desktop"
                  onClick={download_certificate}
                  className="py-2 rounded-5 mx-md-5 translate"
                  style={{
                    textAlign: "center",
                    fontWeight: "700",
                    backgroundColor: "#FF6600",
                    color: "white",
                    borderRadius: "90px !important",
                    padding: "8px 10px !important",
                    fontSize: "20px",
                    fontFamily: "'Khand', sans-serif",
                    border: "none",
                    cursor: "pointer !important",
                  }}
                >
                  {Text["download-cta-desktop"]}
                </p>
              </center>
              <center>
                <a
                  href="https://www.whatsapp.com/channel/0029VaA8qLn1noz0rQUBx11O"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <p
                    id="wtsapp-cta-desktop"
                    className="py-2 rounded-5  mx-md-5 translate"
                    style={{
                      textAlign: "center",
                      fontWeight: "700",
                      backgroundColor: "#11b416",
                      color: "white",
                      borderRadius: "90px !important",
                      padding: "8px 30px !important",
                      fontSize: "20px",
                      fontFamily: "'Khand', sans-serif",
                      border: "none",
                      cursor: "pointer !important",
                    }}
                  >
                    {Text["wtsapp-cta-desktop"]}
                  </p>
                </a>
              </center>
              <center>
                <p
                  onClick={form_complete}
                  style={{
                    cursor: "pointer !important",
                    textDecoration: "none",
                  }}
                >
                  <button
                    className="pb-4"
                    style={{
                      color: "#555555",
                      textAlign: "center",
                      backgroundColor: "transparent",
                      borderRadius: " 90px !important",
                      padding: "5px 10px !important",
                      fontSize: "14px",
                      fontFamily: "'Khand', sans-serif",

                      border: "none",
                    }}
                  >
                    <u id="complete-cta-desktop" className="translate">
                      {Text["complete-cta-desktop"]}
                    </u>
                  </button>
                </p>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
