import { generateShareLinks } from "@/utils/constant";
import React, { useEffect, useRef } from "react";

export default function Video({
  lang,
  videoId,
  setVideoId,
}: {
  lang: string;
  videoId: number;
  setVideoId: React.Dispatch<React.SetStateAction<number>>;
}) {
  const modalRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    console.log("video", videoId, modalRef.current);
    if (modalRef.current) {
      modalRef.current!.click();
    }

    // stop already played videos
    (document.getElementById("kaamdhar_video") as HTMLVideoElement)!.pause();
    const videos = document.getElementsByTagName("video");
    const currVideo = document.getElementById("video1");
    for (let i = 0; i < videos.length; i++) {
      if (videos[i] !== currVideo) videos[i].pause();
    }
    // (currVideo as any).play();
  }, []);
  const link = `${process.env.NEXT_PUBLIC_API_URL}/videos?id=${videoId}&lang=${
    lang === "hi" ? "hi" : "en"
  }&url=${process.env.NEXT_PUBLIC_ORIGIN_URL}/assets/transforming-bharat/${
    lang === "en" ? "en/" : ""
  }videos/${videoId + 1}.mp4`;
  const { twitter_link, facebook_link, what_link } = generateShareLinks(link);
  return (
    <>
      {/* booststrap get id from data-bs-target attribute and click event call/function */}
      <button
        type="button"
        data-bs-target="#openVIdeoPlayer"
        data-bs-toggle="modal"
        ref={modalRef}
        style={{ display: "none" }}
      >
        mn
      </button>
      <div
        className="modal fade"
        id="openVIdeoPlayer"
        aria-hidden="true"
        aria-labelledby="openVIdeoPlayerLabel"
        tabIndex={-1}
        style={{ overflow: "hidden" }}
      >
        <div className="modal-dialog modal-fullscreen modal-dialog-centered modal-backdrop">
          <div className="modal-content">
            <div
              className="modal-body p-0"
              style={{ backgroundColor: "black" }}
            >
              {" "}
              <button
                type="button"
                // onClick={playPause}
                onClick={() => setVideoId(-1)}
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{
                  position: "absolute",
                  right: "4px",
                  top: "4%",
                  color: "white",
                  fill: "whitesmoke",
                  backgroundColor: "white",
                  zIndex: "99999",
                }}
              ></button>
              <div
                className=""
                style={{
                  position: "absolute",
                  right: "4px",
                  top: "9%",
                  zIndex: "99999",
                }}
              >
                <div
                  id="share"
                  className="position:absolute;right: 4px;top:12%; z-index: 99999;"
                >
                  <div className="row pt-2 ps-auto pe-auto text-center m-0">
                    <div className=" text-center col-12  ">
                      {/* <p
                        className="text-center d-flex px-auto"
                        style={{
                          marginBottom: "0px !important",
                          paddingBottom: "10px",
                          fontWeight: "700",
                          color: "white",
                        }}
                      ></p> */}
                      <p className="mx-2">
                        <a
                          href={what_link}
                          className="social_thank"
                          target="_blank"
                          style={{ color: "black" }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            width="24"
                            style={{ fill: "white" }}
                            viewBox="0 0 448 512"
                          >
                            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                          </svg>
                        </a>
                      </p>
                      <p className="mx-2">
                        <a
                          href={twitter_link}
                          className="social_thank"
                          style={{ color: "black" }}
                          target="_blank"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            width="24"
                            style={{ fill: "white" }}
                            viewBox="0 0 448 512"
                          >
                            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" />
                          </svg>
                        </a>
                      </p>
                      <p className="mx-2">
                        <a
                          href={facebook_link}
                          target="_blank"
                          className="social_thank"
                          style={{ color: "black" }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            width="24"
                            style={{ fill: "white" }}
                            viewBox="0 0 448 512"
                          >
                            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
                          </svg>
                        </a>
                      </p>
                      <p></p>
                    </div>
                  </div>
                </div>
                <a
                  id="achivment_download"
                  className="mx-3"
                  href={`/assets/transforming-bharat/${
                    lang === "en" ? "en/" : ""
                  }videos/${videoId + 1}.mp4`}
                  download
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    width="24"
                    style={{ fill: "white" }}
                    viewBox="0 0 512 512"
                  >
                    <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                  </svg>
                </a>
              </div>
              {/* <!-- <div style="position:absolute;right: 8px;bottom: 0; z-index: 99999;">
                            <center>
                                <a id="full_video_knowmore" href="nayabharat/index.html?lang=hi">
                                    <button className="btn mt-5"
                                        style=" background-color:rgb(243 115 5);color:white;text-align: center;margin-top:10px;font-size:22px;font-weight: 700;">अधिक
                                        जानें
                                    </button>
                                </a>
                            </center>
                        </div> --> */}
              <video
                id="video1"
                width="100%"
                height="100%"
                controls
                style={{ zIndex: "9999" }}
                autoPlay
              >
                <source
                  id="fullvideo"
                  src={`/assets/transforming-bharat/${
                    lang === "en" ? "en/" : ""
                  }videos/${videoId + 1}.mp4`}
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
