import Link from "next/link";
import React, { useEffect, useRef } from "react";

export default function HomeModal({
  lang,
  setShowHomeModal,
}: {
  lang: string;
  setShowHomeModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const modalRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (modalRef.current) {
      console.log("0", modalRef.current);
      modalRef.current.click();
    }
  }, []);
  console.log("hi home modal");
  return (
    <>
      <button
        ref={modalRef}
        data-bs-toggle="modal"
        data-bs-target="#homeModal"
        style={{ display: "none" }}
      >
        ds
      </button>
      <div
        className="modal fade"
        id="homeModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <br />
        <br />
        <br />
        <br />
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <button
                id="close_popup"
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{ display: "none" }}
              ></button>
              <br />
              <br />
              {lang === "hi" ? (
                <center>
                  {" "}
                  <Link
                    id="mb2"
                    href="/"
                    onClick={() => modalRef.current!.click()}
                    style={{ textDecoration: "none" }}
                  >
                    वेबसाइट पर जाएँ
                  </Link>
                </center>
              ) : (
                <center>
                  {" "}
                  <Link
                    id="mb2"
                    href="/en"
                    onClick={() => modalRef.current!.click()}
                    style={{ textDecoration: "none" }}
                  >
                    Back to Main Website
                  </Link>
                </center>
              )}
              <br />
              <br />
              <center>
                {" "}
                <a
                  id="mb1"
                  onClick={() => {
                    modalRef.current!.click();
                    setShowHomeModal(false);
                  }}
                  style={{ textDecoration: "none", cursor: "pointer" }}
                >
                  {lang === "hi" ? "क्विज़ खेलना जारी रखें" : "Keep Quizzing"}
                </a>
              </center>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
