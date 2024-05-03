import { useQuizContext } from "@/context/QuizContext";
import React, { useEffect, useRef, useState } from "react";

export default function MobileNumberModal({
  lang,
  setShowMobileNumberModal,
}: {
  lang: string;
  setShowMobileNumberModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const modalRef = useRef<HTMLButtonElement>(null);
  const { setScreen, setCertificateUrl } = useQuizContext();
  useEffect(() => {
    if (modalRef.current) {
      console.log("0", modalRef.current);
      modalRef.current.click();
    }
  }, []);
  const [error, setError] = useState(false);
  const mobileRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const [call, setCall] = useState(false);

  //validation
  function isValidPhoneNumber(phoneNumber: string) {
    if (phoneNumber.length != 10) return false;

    // Define the provided pattern for mobile numbers
    const pattern = /^[6-9]\d{9}$/;

    // Check if the input matches the pattern
    return pattern.test(phoneNumber);
  }

  function getQueryParam(key: string) {
    return decodeURIComponent(
      window.location.search.replace(
        new RegExp(
          "^(?:.*[&\\?]" +
            encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") +
            "(?:\\=([^&]*))?)?.*$",
          "i"
        ),
        "$1"
      )
    );
  }

  useEffect(() => {
    const submitMobileForm = async () => {
      try {
        setError(false);
        const mobile = mobileRef.current!.value;
        const name = nameRef.current!.value;
        if (!mobile || !isValidPhoneNumber(mobile)) {
          setError(true);
          return;
        }
        if (!name) return;

        localStorage.setItem("quiz_mobile", mobile);
        let fd = new FormData();
        const urlParams = new URLSearchParams(window.location.search);
        const mySource = getQueryParam("utm_source");
        const myMedium = getQueryParam("utm_medium");
        const myCampaign = getQueryParam("utm_campaign");

        fd.append("utm_source", mySource);
        fd.append("utm_medium", myMedium);
        fd.append("utm_campaign", myCampaign);
        fd.append("mobile", mobile);
        fd.append("name", name);

        const response = await fetch(
          process.env.NEXT_PUBLIC_API_URL + "/user",
          {
            method: "POST",
            body: fd,
          }
        );

        const response2 = await fetch(
          process.env.NEXT_PUBLIC_API_URL +
            `/generate_certificate2/${mobile}?language=${lang}`
        );
        const responseData2 = await response2.json();

        localStorage.setItem("mobile", mobile);
        localStorage.setItem("is_otp_verified", "false");
        localStorage.setItem("certificate", responseData2.certicate);
        setCertificateUrl(responseData2.certicate);
        modalRef.current!.click();
        setShowMobileNumberModal(false);
        setScreen(4);
      } catch (error) {
        console.log("error while creating user at quiz", error);
      } finally {
        setCall(false);
      }
    };
    if (call) submitMobileForm();
  }, [call]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setError(false);
    if (
      mobileRef.current!.value.length === 10 &&
      nameRef.current!.value.length > 0
    )
      setCall(true);

    setError(true);
  };
  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button
        ref={modalRef}
        id="form-trigger"
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#submitMobileNumberModal"
        style={{ display: "none" }}
      >
        Trigger
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="submitMobileNumberModal"
        tabIndex={-1}
        aria-labelledby="submitMobileNumberModalLabel"
        aria-hidden="true"
        style={{ zIndex: "11111" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5"
                id="submitMobileNumberModalLabel"
              >
                {lang === "hi"
                  ? "प्रमाणपत्र प्राप्त करे"
                  : "Generate a certificate"}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  modalRef.current!.click();
                  setShowMobileNumberModal(false);
                }}
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit} id="certificate-form">
                <input
                  ref={nameRef}
                  className="form-control"
                  type="text"
                  placeholder={lang === "hi" ? "नाम*" : "Name*"}
                  aria-label="default input example"
                  required
                />
                <input
                  ref={mobileRef}
                  className="form-control mt-3"
                  type="tel"
                  placeholder={lang === "hi" ? "मोबाइल नंबर*" : "Phone*"}
                  required
                />
                {error && (
                  <div id="phoneError" className="my-2 text-danger error">
                    {lang === "hi"
                      ? "अमान्य मोबाइल नंबर"
                      : "Enter valid phone number"}
                  </div>
                )}
                <button type="submit" className="btn btn-primary my-3">
                  {lang === "hi" ? " सबमिट करे" : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
