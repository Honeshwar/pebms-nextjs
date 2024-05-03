"use client";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";

import { useRef } from "react";

export default function VideoSlider({
  title,
  lang,
}: {
  title: string;
  lang: string;
}) {
  let videoUrl: string[][] = [];

  const hindiVideos = [
    ["/videos/why/hi/1.mp4", `/videos/why/hi/thumbnails/Aastha.jpeg`],
    ["/videos/why/hi/2.mp4", `/videos/why/hi/thumbnails/Infra.jpeg`],
    ["/videos/why/hi/3.mp4", `/videos/why/hi/thumbnails/ThreeGeneration.jpeg`],
    ["/videos/why/hi/4.mp4", `/videos/why/hi/thumbnails/4.webp`],
    ["/videos/why/hi/5.mp4", `/videos/why/hi/thumbnails/5.webp`],
    ["/videos/why/hi/6.mp4", `/videos/why/hi/thumbnails/6.webp`],
    ["/videos/why/hi/7.mp4", `/videos/why/hi/thumbnails/7.webp`],
    ["/videos/why/hi/8.mp4", `/videos/why/hi/thumbnails/8.webp`],
  ];
  const englishVideos = [
    ["/videos/why/en/1.mp4", `/videos/why/en/thumbnails/Aastha.jpeg`],
    ["/videos/why/en/2.mp4", `/videos/why/en/thumbnails/Infra.jpeg`],
    ["/videos/why/en/3.mp4", `/videos/why/en/thumbnails/ThreeGeneration.jpeg`],
    ["/videos/why/en/4.mp4", `/videos/why/en/thumbnails/4.webp`],
    ["/videos/why/en/5.mp4", `/videos/why/en/thumbnails/5.webp`],
    ["/videos/why/en/6.mp4", `/videos/why/en/thumbnails/6.webp`],
    ["/videos/why/en/7.mp4", `/videos/why/en/thumbnails/7.webp`],
    ["/videos/why/en/8.mp4", `/videos/why/en/thumbnails/8.webp`],
  ];

  videoUrl = lang == "hi" ? hindiVideos : englishVideos;
  const splideRef = useRef<any>(null);

  function playVideo(event: any) {
    event.preventDefault();

    // stop autoplay, by using api
    const { Autoplay } = splideRef.current.splide.Components;
    Autoplay.pause();

    // stop already played videos
    (document.getElementById("kaamdhar_video") as HTMLVideoElement)!.load();
    // voteAppealSplider?.splide.Controller.go(">");

    const videoElement = event.target;
    // videoElement.play();
    // videoElement.controls = true;

    const v = document.querySelectorAll("video");

    v.forEach((video) => {
      // console.log("first", video !== videoElement);
      if (video !== videoElement && !video.paused) {
        video.pause();
        console.log("video", video, video.paused, v.length);
      }
    });

    splideRef.current.splide.on("moved", (splide: any) => {
      console.log("splide move", splide);
      // videoElement.controls = false;
      videoElement.load(); //pause();

      // console.log("pause video", splideRef.current);
      Autoplay.play();
      // splideRef.current.options.autoplay = true;
    });
  }
  const options = {
    type: "loop",
    drag: false,
    perPage: 3,
    perMove: 1,
    autoplay: true,
    // interval: 3000,
    focus: "center",
    pagination: true,
    arrows: true,
    breakpoints: {
      1000: { perPage: 3 },
      768: { perPage: 1 },
      576: { perPage: 1, gap: "1rem", padding: "30px" },
    },
    // Register the onMoved event handler
    // onMoved: handleSlideChange,
  } as any;

  return (
    <>
      <section className="container-fluid mt-4" id="why_modi">
        <h3 className="head mb-4">{title}</h3>
        <Splide
          ref={splideRef}
          id="why-modi-splide"
          className="splide1 "
          role="group"
          aria-label="Splide Basic HTML Example"
          style={{ backgroundColor: "black" }}
          options={options}
        >
          {videoUrl?.map((url: string[], index: number) => (
            <SplideSlide key={"why-" + (index + 1)}>
              <div className="media-card">
                <div className="card-title text-center">
                  <video
                    onPause={(e) => {
                      const v = document.querySelectorAll(
                        "#why-modi-splide video"
                      );
                      let anyVideoPlaying = false;
                      v.forEach((video: any) => {
                        if (!video.paused) {
                          anyVideoPlaying = true;
                        }
                      });
                      if (!anyVideoPlaying)
                        splideRef.current.splide.Components.Autoplay.play();
                    }}
                    onPlay={playVideo}
                    src={url[0]}
                    preload="none"
                    poster={url[1]}
                    className="w-100  "
                    width="100%"
                    style={{ borderRadius: "18px" }}
                    height="100%"
                    controls
                  ></video>
                  <a
                    href={url[0]}
                    className="video_download_icon"
                    download={title}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM376.9 294.6L269.8 394.5c-3.8 3.5-8.7 5.5-13.8 5.5s-10.1-2-13.8-5.5L135.1 294.6c-4.5-4.2-7.1-10.1-7.1-16.3c0-12.3 10-22.3 22.3-22.3l57.7 0 0-96c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 96 57.7 0c12.3 0 22.3 10 22.3 22.3c0 6.2-2.6 12.1-7.1 16.3z" />{" "}
                    </svg>
                  </a>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </section>
    </>
  );
}
