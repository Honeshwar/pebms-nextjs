import Image from "next/image";
import React from "react";
// width={180}
// height={140}

export default function ImageCard({
  isMobile,
  src,
  onClick,
}: {
  isMobile: boolean;
  src: string;
  onClick: () => void;
}) {
  return (
    <>
      <div className="col-6 col-md videos">
        <Image
          {...{ width: isMobile ? 180 : 240, height: isMobile ? 140 : 200 }}
          {...{ src }}
          className="w-100 mhtm_img"
          loading="lazy"
          onClick={onClick}
          alt="Transforming bharat image card"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGMwVRNLS4ioyAoRZGJgKEtJfnX/3ey25qdXQxjK3VX+vz30/+KyCSmCACE6EYpdqxaUAAAAAElFTkSuQmCC"
        />
      </div>
    </>
  );
}
