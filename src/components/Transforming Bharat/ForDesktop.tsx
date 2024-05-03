"use client";
import { useState } from "react";
import ImageCard from "./ImageCard";
import Video from "./Video";
import dynamic from "next/dynamic";
const LazyVideo = dynamic(() => import("./Video"), { ssr: false });

export default function ForDesktop({ lang }: { lang: string }) {
  const [videoId, setVideoId] = useState(-1);
  const imgSrc = {
    first: [
      "/assets/transforming-bharat/a1.webp",
      "/assets/transforming-bharat/a2.webp",
      "/assets/transforming-bharat/a3.webp",
      "/assets/transforming-bharat/a4.webp",
      "/assets/transforming-bharat/a5.webp",
    ],
    second: [
      "/assets/transforming-bharat/a6.webp",
      "/assets/transforming-bharat/a7.webp",
      "/assets/transforming-bharat/a8.webp",
      "/assets/transforming-bharat/a9.webp",
      "/assets/transforming-bharat/a10.webp",
    ],
  };

  const imgSrcEnglish = {
    first: [
      "/assets/transforming-bharat/en/a1.webp",
      "/assets/transforming-bharat/en/a2.webp",
      "/assets/transforming-bharat/en/a3.webp",
      "/assets/transforming-bharat/en/a4.webp",
      "/assets/transforming-bharat/en/a5.webp",
    ],
    second: [
      "/assets/transforming-bharat/en/a6.webp",
      "/assets/transforming-bharat/en/a7.webp",
      "/assets/transforming-bharat/en/a8.webp",
      "/assets/transforming-bharat/en/a9.webp",
      "/assets/transforming-bharat/en/a10.webp",
    ],
  };
  return (
    <>
      <div className="d-md-block d-none ">
        {lang === "hi" ? (
          <>
            <div className="row mt-3 mb-2">
              {imgSrc.first.map((src, i) => (
                <ImageCard
                  key={"img-card-" + (i + 1)}
                  src={src}
                  onClick={() => setVideoId(i)}
                  isMobile={false}
                />
              ))}
            </div>
            <div className="row mt-3 mb-2">
              {imgSrc.second.map((src, i) => (
                <ImageCard
                  key={"img-card-" + (i + 1)}
                  src={src}
                  onClick={() => setVideoId(5 + i)}
                  isMobile={false}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="row mt-3 mb-2">
              {imgSrcEnglish.first.map((src, i) => (
                <ImageCard
                  key={"img-card-" + (i + 1)}
                  src={src}
                  onClick={() => setVideoId(i)}
                  isMobile={false}
                />
              ))}
            </div>
            <div className="row mt-3 mb-2">
              {imgSrcEnglish.second.map((src, i) => (
                <ImageCard
                  key={"img-card-" + (i + 1)}
                  src={src}
                  onClick={() => setVideoId(5 + i)}
                  isMobile={false}
                />
              ))}
            </div>
          </>
        )}
      </div>
      {videoId !== -1 && (
        <LazyVideo lang={lang} videoId={videoId} setVideoId={setVideoId} />
      )}
    </>
  );
}
