import { usePledgeContext } from "@/context/PledgeContext";
import translations from "@/utils/translations";
import React, { useEffect, useRef, useState } from "react";

function Otp({ lang }: { lang: string }) {
  const [error, setError] = React.useState(false);
  const { setScreen } = usePledgeContext();
  const [call, setCall] = useState(false);
  const otpRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const verifyOTP = async () => {
      try {
        const f = new FormData();
        f.append("otp", otpRef.current!.value);
        f.append("mobile", localStorage.getItem("mobile")!);

        const response = await fetch(
          process.env.NEXT_PUBLIC_API_URL + "/user/verify_otp?language=" + lang,
          {
            method: "PATCH",
            body: f,
          }
        );
        const responseData = await response.json();
        if (responseData.status === 400) {
          throw new Error(responseData.result);
          return;
        }

        //show name form
        localStorage.setItem("is_otp_verified", "true");
        setScreen(3);
      } catch (error) {
        console.log("error while verifying otp", error);
        setError(true);
      } finally {
        setCall(false);
      }
    };
    if (call) {
      console.log("calling veridy otp api");
      verifyOTP();
    }
  }, [call]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setError(false);

    if (
      otpRef.current!.value.length === 6 &&
      !isNaN(Number(otpRef.current!.value))
    ) {
      //Number("ds22") return NaN when we do convert to number
      setCall(true);
    } else {
      setError(true);
    }
  };

  const otpText = translations[lang];
  return (
    <form onSubmit={handleSubmit} id="otp_form">
      <h6
        id="l2-heading"
        className="form_head mt-md-3 translate"
        style={{ textAlign: "center" }}
      >
        {/* मेरा समर्थन मोदी को */}
        {otpText["l2-heading"]}
      </h6>
      <p
        id="l2-message"
        className="px-2 pt-md-1 px-md-1 mb-1 mb-md-2 otp_sub translate"
      >
        {/* आपको OTP भेजा गया है। कृपया आपके मोबाइल पर भेजे गए OTP को दर्ज करें। */}
        {otpText["l2-message"]}
      </p>
      <div className="mb-2 mb-md-3" style={{ position: "relative" }}>
        <input
          ref={otpRef}
          type="tel"
          id="otp"
          name="otp"
          className="form-control"
          placeholder="OTP *"
          required
        />
      </div>
      {error && (
        <p id="otp_error_msg" style={{ color: "red" }}>
          अमान्य ओटीपी / Invalid OTP
        </p>
      )}
      <center>
        <button
          id="l2-submit-button"
          type="submit"
          className="btn form-control mb-4 mb-md-3 mt-1 submit_button translate"
        >
          <b style={{ fontFamily: "'Khand', sans-serif" }}>
            {/* OTP दर्ज़ करें */}
            {otpText["l2-submit-button"]}
          </b>
        </button>
      </center>
    </form>
  );
}

export default Otp;
