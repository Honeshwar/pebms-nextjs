import { usePledgeContext } from "@/context/PledgeContext";
import React, { useEffect } from "react";
import Mobile from "./Mobile";
import Otp from "./Otp";
import DetailForm from "./DetailForm";
import translations from "@/utils/translations";
import NameModal from "./NameModal";
import ThankModal from "./ThankModal";
import RedirectModal from "./RedirectModal";

export default function PledgeDescendant({ lang }: { lang: string }) {
  const { screen, setScreen } = usePledgeContext();

  useEffect(() => {
    if (localStorage.getItem("form") === "l3") {
      setScreen(4);
    }
  }, []);

  const Text = translations[lang];
  return (
    <div id="pledge-hindi" style={{ position: "relative" }}>
      <div style={{ minHeight: "360px" }}>
        <img
          id="master-image"
          className="mob-v"
          loading="eager"
          src={`/images/desktop/${lang}.webp`}
          // @ts-ignore
          srcSet={`/images/mobile/${lang}.webp 600w, /images/desktop/${lang}.webp 1500w`}
          sizes="(min-width: 768px) 768px,50vw"
          alt="mp pledge"
        />
      </div>

      <div
        className="container form_box py-1"
        style={{ padding: " 0px 15px !important" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></div>
        {screen === 1 && <Mobile lang={lang} />}
        {screen === 2 && <Otp lang={lang} />}
        {screen === 4 && <DetailForm lang={lang} />}
      </div>
      {screen === 3 && <NameModal lang={lang} />}
      {screen === 5 && <ThankModal lang={lang} />}
      {screen === 6 && <RedirectModal lang={lang} />}
    </div>
  );
}
