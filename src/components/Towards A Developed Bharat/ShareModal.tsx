import { generateShareLinks } from "@/utils/constant";
import React, { useEffect, useRef } from "react";

export default function ShareModal({
  showShareModal,
  setShowShareModal,
  shareText,
}: {
  showShareModal: number;
  setShowShareModal: React.Dispatch<React.SetStateAction<number>>;
  shareText: string;
}) {
  const modalBtnRef = useRef<HTMLButtonElement>(null);
  const { twitter_link, facebook_link, what_link } = generateShareLinks(
    `${process.env.NEXT_PUBLIC_API_URL}/image_metamaker/${showShareModal}`,
    shareText
  );

  useEffect(() => {
    if (modalBtnRef.current) {
      modalBtnRef.current.click();
    }
  }, []);
  return (
    <>
      <button
        ref={modalBtnRef}
        type="button"
        id="thank_youaa"
        className="btn btn-primary"
        style={{ display: "none" }}
        data-bs-toggle="modal"
        data-bs-target="#shareModal"
      >
        Launch demo modal
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="shareModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <button
                onClick={() => setShowShareModal(-1)}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{ position: "absolute", right: "1%", top: "1%" }}
              ></button>
              <div id="share1">
                <div className="row pt-2 ps-auto pe-auto text-center m-0">
                  <div className="text-center col-12">
                    <center>
                      <p
                        className="text-center  px-auto"
                        style={{
                          marginBottom: "0px",
                          paddingBottom: "10px",
                          fontWeight: "700",
                          color: "white",
                        }}
                      >
                        <span className="mx-2">
                          <a
                            href={what_link}
                            className="social_thank"
                            target="_blank"
                            style={{ color: "black" }}
                          >
                            <img src="/assets/svg/whatsapp.svg" />
                          </a>
                        </span>
                        <span className="mx-2">
                          <a
                            href={twitter_link}
                            className="social_thank"
                            style={{ color: "black" }}
                            target="_blank"
                          >
                            <img
                              style={{ backgroundColor: "black" }}
                              src="/assets/svg/twt-x-logo.svg"
                            />
                          </a>
                        </span>
                        <span className="mx-2">
                          <a
                            href={facebook_link}
                            target="_blank"
                            className="social_thank"
                            style={{ color: "black" }}
                          >
                            <img src="/assets/svg/fb.svg" />
                          </a>
                        </span>
                      </p>
                    </center>
                  </div>
                </div>
                {/* </center> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
