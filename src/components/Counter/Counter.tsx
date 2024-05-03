"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Counter({ title }: { title: string }) {
  const [countInArr, setCountInArr] = useState<string[]>([
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
  ]);
  useEffect(() => {
    async function getCount() {
      try {
        // Fetch data from an external API
        const response = await fetch(
          process.env.NEXT_PUBLIC_API_URL + "/user/get_count"
        );
        const responseData = await response.json();
        console.log("counter response", responseData);

        let total_count = responseData.user_count; //number return
        let countInArr = total_count.toString().split("");
        console.log(total_count, countInArr);
        setCountInArr(countInArr); //set coun
      } catch (error) {
        console.log("error while caliing get_count API");
      }
    }
    getCount();
  }, []);

  const [isMobile, setIsMobile] = useState<number | boolean>(-1);

  useEffect(() => {
    if (window.screen.width > 600) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, []);
  return (
    <>
      <div className="container-fluid" style={{ position: "relative" }}>
        {
          <Image
            width={375}
            height={349}
            className="w-100"
            src={isMobile !== -1 && isMobile ? "/img/sb.webp" : "/img/sbd.webp"}
            //   srcSet={"img/sb.webp 600w, img/sbd.webp 1600w"}
            sizes="(max-width: 768px) 480px,960px"
            alt="Counter Background Image"
            style={{ height: "349px" }}
            placeholder="blur"
            blurDataURL={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAALklEQVR4nGP4//7S/9u7/7+9+f/dNYYkBoZ4BoYYBoYoBgaGLAaGDAaGNAaQKACMCQ3vGCXsZAAAAABJRU5ErkJggg=="
            }
          />
        }
        <div
          className="a"
          style={{ position: "absolute", top: "30%", width: "100%" }}
        >
          <center>
            <div className=" px-2 pt-3  total_number_d  mt-5">
              <center>
                <div
                  id="counterr"
                  className=" mt-2"
                  style={{
                    backgroundColor: "white",
                    color: "green",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "14px",
                    padding: "10px 0 5px",
                  }}
                >
                  {countInArr?.map((count, index) => (
                    <React.Fragment key={index}>
                      {index === 0 ? (
                        <p className="total_number">{count}</p>
                      ) : (
                        <>
                          <p className="total_number_line">|</p>
                          <p className="total_number">{count}</p>
                        </>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </center>
              <p className="total_number_bottom pb-2">{title}</p>
            </div>
          </center>
        </div>
      </div>
    </>
  );
}
