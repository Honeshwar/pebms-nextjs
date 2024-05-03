"use client";
import React, { useState } from "react";
import ImageCard from "./ImageCard";
import Video from "./Video";

export default function ForMobile({ lang }: { lang: string }) {
  const [videoId, setVideoId] = useState(-1);
  const imgSrc = [
    "/assets/transforming-bharat/a1.webp",
    "/assets/transforming-bharat/a2.webp",
    "/assets/transforming-bharat/a3.webp",
    "/assets/transforming-bharat/a4.webp",
    "/assets/transforming-bharat/a5.webp",
    "/assets/transforming-bharat/a6.webp",
    "/assets/transforming-bharat/a7.webp",
    "/assets/transforming-bharat/a8.webp",
    "/assets/transforming-bharat/a9.webp",
    "/assets/transforming-bharat/a10.webp",
  ];
  const imgSrcEnglish = [
    "/assets/transforming-bharat/en/a1.webp",
    "/assets/transforming-bharat/en/a2.webp",
    "/assets/transforming-bharat/en/a3.webp",
    "/assets/transforming-bharat/en/a4.webp",
    "/assets/transforming-bharat/en/a5.webp",
    "/assets/transforming-bharat/en/a6.webp",
    "/assets/transforming-bharat/en/a7.webp",
    "/assets/transforming-bharat/en/a8.webp",
    "/assets/transforming-bharat/en/a9.webp",
    "/assets/transforming-bharat/en/a10.webp",
  ];
  return (
    <>
      <div className="d-md-none d-block ">
        <div className="row  mb-2">
          {lang === "hi"
            ? imgSrc.map((src, i) => (
                <ImageCard
                  key={"img-card-" + (i + 1)}
                  isMobile={true}
                  src={src}
                  onClick={() => setVideoId(i)}
                />
              ))
            : imgSrcEnglish.map((src, i) => (
                <ImageCard
                  key={"img-card-" + (i + 1)}
                  isMobile={true}
                  src={src}
                  onClick={() => setVideoId(i)}
                />
              ))}
        </div>
      </div>
      {videoId !== -1 && (
        <Video lang={lang} videoId={videoId} setVideoId={setVideoId} />
      )}
    </>
  );
}
