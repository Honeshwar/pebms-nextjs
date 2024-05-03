import { useCTA_ContextValue } from "@/context/CTA_Context";
import { useEffect, useRef, useState } from "react";
interface FormText {
  heading: string;
  "input-placeholder": string;
  "submit-btn": string;
  "error-msg": string;
  "already-registered": string;
}
export default function OTP_Form({
  lang,
  formText,
}: {
  lang: string;
  formText: FormText;
}) {
  const [error, setError] = useState(false);
  const [call, setCall] = useState(false);
  const otpRef = useRef<HTMLInputElement>(null);
  const { setScreen } = useCTA_ContextValue();
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

  return (
    <form
      onSubmit={handleSubmit}
      id="otp_form"
      className="px-md-1 px-1"
      style={{ color: "white" }}
    >
      <p
        // onClick={() => setScreen(3)}
        className=" px-2 pt-md-1 px-md-1 mb-1 mb-md-2 otp_sub"
        style={{ color: "white" }}
      >
        {formText.heading}
      </p>
      <div className="mb-2 mb-md-3" style={{ position: "relative" }}>
        <input
          ref={otpRef}
          type="tel"
          id="otp"
          name="otp"
          className="form-control"
          placeholder={formText["input-placeholder"]}
          required
          onInput={() => setError(false)}
        />
      </div>
      {error && (
        <p id="otp_error_msg" style={{ color: "red", textAlign: "center" }}>
          {formText["error-msg"]}
        </p>
      )}
      <center>
        <button
          type="submit"
          className="btn form-control "
          style={{
            backgroundColor: "rgb(243 115 5)",
            color: "white",
            textAlign: "center",
            marginTop: "0px",
            fontSize: "22px",
            fontWeight: "700",
          }}
        >
          {formText["submit-btn"]}
        </button>
      </center>
    </form>
  );
}
