import { useCTA_ContextValue } from "@/context/CTA_Context";
import { useEffect, useRef, useState } from "react";
interface FormText {
  // [key:string]:string
  "input-placeholder": string;
  "submit-btn": string;
  "validation-msg": string;
  "already-registered": string;
}
export default function Mobile_Form({
  lang,
  formText,
}: {
  lang: string;
  formText: FormText;
}) {
  const [alreadyExist, setAlreadyExist] = useState<boolean>(false);
  const mobileRef = useRef<HTMLInputElement>(null);
  const [call, setCall] = useState<boolean>(false);
  const { setScreen } = useCTA_ContextValue();

  useEffect(() => {
    if (
      localStorage.getItem("mobile") &&
      localStorage.getItem("is_otp_verified") === "true"
    ) {
      setScreen(4);
    }
  }, []);

  useEffect(() => {
    const createUser = async () => {
      console.log("call");
      let t = new FormData();
      const mobile = mobileRef.current!.value;
      t.append("mobile", mobile);

      //   create user
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_API_URL + "/user",
          {
            method: "POST",
            body: t,
            headers: {
              mode: "no-cors",
              "Access-Control-Allow-Origin": "*",
            },
          }
        );

        const respondeData = await response.json();
        console.log("response1", respondeData);
        if (
          "Mobile Number already registered." === respondeData.result &&
          respondeData.otp_verified_at !== null
        ) {
          localStorage.setItem("mobile", mobile);
          localStorage.setItem("is_otp_verified", "true");
          setAlreadyExist(true);
        } else {
          // send otp
          const response2 = await fetch(
            process.env.NEXT_PUBLIC_API_URL + `/user/send_otp?language=${lang}`,
            {
              method: "PATCH",
              body: t,
            }
          );

          const respondeData2 = await response2.json();
          console.log("response2", respondeData2);
          localStorage.setItem("mobile", mobile);
          localStorage.setItem("is_otp_verified", "false");
          setScreen(2);
          // setCall(false);
        }
      } catch (error) {
        console.log("error while create user and send otp", error);
      } finally {
        setCall(false);
      }
    };

    try {
      if (call) createUser();
    } catch (error) {
      console.log("error while creating user", error);
    }
  }, [call]);

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    if (
      mobileRef.current!.value[0].match(/[6789]/) &&
      mobileRef.current!.value.length === 10
    ) {
      setCall(true);
    } else {
      console.log("submit", mobileRef.current!.validity);
      // mobileRef.current!.setCustomValidity(
      //   lang === "en"
      //     ? "Please enter a valid mobile number."
      //   :
      //   "कृपया सही मोबाइल नंबर दर्ज करें"
      // );
    }
  };

  const handleOnInput = (e: any) => {
    e.preventDefault();

    const code = e.nativeEvent.data;
    console.log(code, typeof code, mobileRef.current?.validity);
    if (!isNaN(code)) {
      //if is number
      e.target.value = e.target.value.slice(0, 10);
    } else if (code !== undefined) {
      e.target.value = e.target.value.slice(0, -1);
    }

    if (e.target.value.length === 10) mobileRef.current!.setCustomValidity("");
    else
      mobileRef.current!.setCustomValidity(
        // lang === "english"
        //   ? "Please enter a valid mobile number."
        //   : "कृपया सही मोबाइल नंबर दर्ज करें"
        formText["validation-msg"]
      );
  };

  return (
    <form onSubmit={handleFormSubmit} id="myform" className="px-md-1 px-4">
      <input
        ref={mobileRef}
        type="tel"
        id="mob"
        name="mob"
        className="form-control"
        placeholder={formText["input-placeholder"]}
        // pattern="[0-9]{10}"
        // maxLength={10}
        // minLength={10}
        onInput={handleOnInput}
        // value={formData.mob}
        required
        // with entering any digit
        onInvalid={(e: any) =>
          e.target.setCustomValidity(formText["validation-msg"])
        }
      />
      {alreadyExist && (
        <p id="my_form_msg" style={{ color: "red" }}>
          {formText["already-registered"]}
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
            marginTop: "10px",
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
