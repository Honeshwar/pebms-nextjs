"use client";
import Image from "next/image";
import Mobile_Form from "./Mobile_Form";
import dynamic from "next/dynamic";
import { useCTA_ContextValue } from "@/context/CTA_Context";
import DetailFormModal from "./CTA/DetailFormModal";
import data from "../../utils/data";
import Link from "next/link";
const LazyOTP_Form = dynamic(() => import("./OTP_Form"), {
  ssr: false,
});

export default function CTA({ lang }: { lang: string }) {
  const { screen, setScreen } = useCTA_ContextValue();
  const CTA = data[lang].CTA;
  return (
    <div className="container pt-4  hero_section_above">
      {/* py-4 */}
      <div className="pb-0">
        <center>
          <Image
            width={300}
            height={200}
            alt="formlogo"
            src={CTA.logo_url}
            style={{
              objectFit: "contain",
              // width: "fit-content",
              // height: "fit-content",
            }}
          />
        </center>

        <div id="" className="py-3" style={{ position: "relative" }}>
          {screen === 1 && <Mobile_Form lang={lang} formText={CTA["form-1"]} />}
          {screen === 2 && (
            <LazyOTP_Form lang={lang} formText={CTA["form-2"]} />
          )}
          {screen === 3 && (
            <DetailFormModal lang={lang} formText={CTA["form-3"]} />
          )}
          {/* screen === 4 */}
          {screen === 4 && (
            <>
              <h4
                id="th_head"
                className="alert-heading text-center p-4  pb-2  "
                style={{
                  color: "#ff7801",
                  fontWeight: "700",
                  lineHeight: "2.2rem",
                  fontSize: "28px",
                  textAlign: "center",
                  //   display: "none",
                }}
              >
                {CTA["already-registered"].heading}
              </h4>
              <Link id="quiz-swap" href={lang == "hi" ? "/quiz/" : "/en/quiz"}>
                <button
                  className="btn form-control"
                  style={{
                    backgroundColor: "rgb(243 115 5)",
                    color: "white",
                    textAlign: "center",
                    marginBottom: "10px",
                    fontSize: "22px",
                    fontWeight: 700,
                  }}
                >
                  {lang == "hi" ? "क्विज़ खेलें!" : "Play Quiz!"}
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
