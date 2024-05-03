"use client";

// import { VideoSliderContextProvider } from "@/context/VideoSliderContext";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const LazyCounter = dynamic(() => import("./Counter/Counter"), {
  ssr: false,
});
const LazyVideoSlider = dynamic(
  () => import("./Once Again Modi Sarkar KyunKi/VideoSlider"),
  {
    ssr: false,
  }
);
const LazyBJPLive = dynamic(() => import("./BJP Live/BJPLive"), {
  ssr: false,
});
const LazyCampaignAnthem = dynamic(
  () => import("./Campaign Anthem/CampaignAnthem"),
  {
    ssr: false,
  }
);
const LazyVoteAppeal = dynamic(() => import("./Aapke Ek Vote Se/VideoSlider"), {
  ssr: false,
});
const LazyQuizBanner = dynamic(() => import("./Banner/QuizBanner"), {
  ssr: false,
});
const LazyTowardDeplopedBharat = dynamic(
  () => import("./Towards A Developed Bharat/TowardDevelopBharat"),
  {
    ssr: false,
  }
);
const LazyFooter = dynamic(() => import("./Footer/Footer"), {
  ssr: false,
});

export default function Main({ lang }: { lang: string }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
  }, []);
  return (
    <>
      {show && (
        <>
          <LazyCounter
            title={lang === "hi" ? "संकल्प लिए जा चुके हैं" : "Pledges Taken"}
          />

          <LazyVideoSlider
            title={
              lang === "hi"
                ? "फिर एक बार मोदी सरकार क्योंकि"
                : "Phir Ek Baar Modi Sarkar Kyunki"
            }
            lang={lang}
          />

          <LazyBJPLive title={lang === "hi" ? "भाजपा लाइव" : "BJP Live"} />
          <LazyCampaignAnthem
            title={lang === "hi" ? "कैंपेन एंथम" : "Campaign Anthem"}
            poster={`/assets/anthem/thumbnail-${
              lang === "hi" ? "hindi" : "english"
            }.webp`}
            src="/assets/anthem/anthem_video.mp4"
          />

          <LazyVoteAppeal
            title={lang === "hi" ? "आपके एक वोट से" : "Aapke Ek Vote Se"}
            lang={lang}
          />

          <LazyQuizBanner lang={lang} />
          <LazyTowardDeplopedBharat
            title={
              lang === "hi" ? "विकसित भारत की ओर" : "Towards a Developed Bharat"
            }
            lang={lang}
          />

          <LazyFooter lang={lang} />
        </>
      )}
    </>
  );
}
