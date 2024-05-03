import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function ImageCard({
  lang,
  src,
  onClick,
}: {
  lang: string;
  src: string;
  onClick: () => void;
}) {
  const [isMobile, setIsMobile] = useState(true);
  const greetings_share = (t: number) => {};

  useEffect(() => {
    if (screen.width >= 768) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, []);

  return (
    <div className="col-6 col-md-3 videos">
      <div className="promise-card p-1">
        <div className="card-title text-center">
          <Image
            {...{ width: isMobile ? 160 : 305, height: isMobile ? 160 : 305 }}
            className="w-100"
            src={src}
            alt="image card"
            style={{ width: "100%", height: "fit-content" }}
            placeholder="blur"
            blurDataURL="base64 data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nAE0AMv/ANTS2M7LzlFdahsAAADRysTAtqh4WmmkXn8A0MK0iHZpl1dprVOBAP37+vr49uXFre3f0N7LHqQ9znOXAAAAAElFTkSuQmCC"
          />
        </div>
        <div className="promise-card_buttons">
          <p>
            <a
              href={src}
              download
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              <Image
                width={lang === "hi" ? 24 : 75}
                height={lang === "hi" ? 24 : 18}
                src={
                  lang === "hi"
                    ? "/img/download_button.png"
                    : "/img/down_button.png"
                }
                alt="download icon"
                className="me-1 "
                // remove because this image is bydefault smaller than 40x40 px so arount bytes size no need for palceholder only need above 40x40 size image size is bigger
                // placeholder="blur"
                // blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAASklEQVR4nGN43SkU9n+3y8f/m+w+fJsqH8aw2Jrh1f8rJf//3635v8ye4RVDGgPDq/c9Tv9BOIOB4RVDAANDWAgDw4cgBoaPIDYA3oofzLEjMZkAAAAASUVORK5CYII="
              />

              {lang === "hi" && <span style={{ color: "white" }}>डाउनलोड</span>}
              {/* <span style={{ color: "white" }}>
                {" "}
                {lang === "hi" ? "डाउनलोड" : "Download"}
              </span> */}
            </a>
          </p>
          <p onClick={onClick} style={{ color: "white" }}>
            <Image
              width={lang === "hi" ? 24 : 75}
              height={lang === "hi" ? 24 : 18}
              src={
                lang === "hi"
                  ? "/img/share_button.png"
                  : "/img/share_button1.png"
              }
              alt="share icon"
              className="me-1 "
              // placeholder="blur"
              // blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAT0lEQVR4nAFEALv/AMdtAELdhQDr+ac468twAEAAo0IA1P/mkP//55T/nDkA0wBpAADVymwk/+WMRf9mAADSAFAAAEJPAADrYAAA61YAAEFvlx2CLbURTAAAAABJRU5ErkJggg=="
            />
            {lang === "hi" && <span style={{ color: "white" }}> शेयर</span>}

            {/* <span style={{ color: "white" }}>
{lang === "hi" ? "शेयर" : "Share"}
</span> */}
          </p>
        </div>
      </div>
    </div>
  );
}
