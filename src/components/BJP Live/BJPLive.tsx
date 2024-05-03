"use client";

import { useEffect, useState } from "react";

export default function BJPLive({ title }: { title: string }) {
  const [playBackId, setPlayBackId] = useState("pLhF7VxESGw");
  useEffect(() => {
    const getPlayId = async () => {
      try {
        let playBackId = "";
        const response = await fetch(
          process.env.NEXT_PUBLIC_API_URL + "/get_link"
        );
        console.log("bjp live", response, response.status, response.ok);
        if (!response.ok) throw new Error("Network response was not ok");

        const responseData = await response.json();
        console.log("bjp live", responseData);

        playBackId = responseData.url.split("="); //https://www.youtube.com/watch?v=pLhF7VxESGw
        playBackId = playBackId[1];
        console.log("playback id", playBackId);
        setPlayBackId(playBackId);
      } catch (error) {
        console.log(
          "There was a problem with the fetch youtube video url:",
          error
        );
        // https://www.youtube.com/watch?v=pLhF7VxESGw
        // let a = "";
        // let url = "https://youtu.be/pLhF7VxESGw";
        // playBackId = "pLhF7VxESGw";
      }
    };
    getPlayId();
  }, []);
  return (
    <>
      <br />
      {/* mt-4 */}
      <h3
        className="head1 pb-1 pb-md-4 mt-5"
        style={{
          position: "relative",
          zIndex: "2",
        }}
      >
        {title}
      </h3>
      <section
        id="bjp-live"
        className="bjplivebannerimg d-flex align-items-center justify-content-center "
        style={{
          // height: "70vh",
          background:
            "url(https://www.bjp.org/themes/bjp/images/bjplivebackground.jpeg)  50% 50% no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container ">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 offset-md-1 space title col-sm-12 col-md-10 col-12">
              <div id="live_video">
                {
                  <iframe
                    id="bjp_live_iframe"
                    // className="py-3"
                    src={`https://www.youtube-nocookie.com/embed/${playBackId}?rel=0&amp;showinfo=0`}
                    width="100%"
                    height="450"
                    frameBorder="0"
                  ></iframe>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
