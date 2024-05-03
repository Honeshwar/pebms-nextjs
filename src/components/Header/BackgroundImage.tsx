"use client";
import Image from "next/image";
import React, { useEffect } from "react";

export default function BackgroundImage({ lang }: { lang: string }) {
  const [isMobile, setIsMobile] = React.useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);
  return (
    <>
      <div
        className="manifesto_redirect"
        style={{ backgroundColor: "transparent" }}
      >
        <a
          href={`https://modikiguarantee.bjp.org/${
            lang === "en" ? "en" : ""
          }?pebms=1`}
          target="_blank"
          style={{ textDecoration: "none", cursor: "pointer" }}
        >
          <p style={{ width: "100%", height: "100%" }}></p>
        </a>
      </div>

      {/* mobile : blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAECAIAAAArjXluAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJUlEQVR4nGMIYWDwYWBg+L/E/kU9A8P/TVb/D3kwtLEwzFJmAAB8EwklS+2AfgAAAABJRU5ErkJggg==" */}

      {isMobile ? (
        <Image
          priority={true}
          width={380}
          height={700}
          className="d-block d-md-none w-100"
          style={{ height: "fit-content", minHeight: "100vh" }}
          src={lang === "hi" ? "/img/m.webp" : "/img/m_english.webp"}
          alt="pebms header banner"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAI0lEQVR4nGMIYWAI0WD4v9U0j4GB4f+Naf8vN/2/GTFBjAEAeIIKv5Mk8GsAAAAASUVORK5CYII="
        />
      ) : (
        <Image
          priority={true}
          width={1520}
          height={750}
          className="d-none d-md-block"
          style={{ width: "100%", height: "100vh", minHeight: "100vh" }}
          src={lang === "hi" ? "/img/d.webp" : "/img/d_english.webp"}
          alt="pebms header banner"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAI0lEQVR4nGMIYWAI0WD4v9U0j4GB4f+Naf8vN/2/GTFBjAEAeIIKv5Mk8GsAAAAASUVORK5CYII="
        />
      )}

      <div
        className="d-md-none d-block"
        style={{
          position: "absolute",
          bottom: "0",
          height: "90%",
          width: "100%",
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 40%, rgba(48,45,87,1) 100%,  rgba(124,121,124,1) 100%)",
        }}
      ></div>
    </>
  );
}
