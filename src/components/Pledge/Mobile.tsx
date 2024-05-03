import { usePledgeContext } from "@/context/PledgeContext";
import translations from "@/utils/translations";
import React, { useEffect } from "react";

function Mobile({ lang }: { lang: string }) {
  const [error, setError] = React.useState(false);
  const [call, setCall] = React.useState(false);
  const mobileRef = React.useRef<HTMLInputElement>(null);

  const { setScreen } = usePledgeContext();

  // useEffect(() => {
  //   if (
  //     localStorage.getItem("mobile") &&
  //     localStorage.getItem("is_otp_verified") === "true"
  //   ) {
  //     setScreen(4);
  //   }
  // }, []);

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
          setError(true);
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
        setError(true);
      } finally {
        setCall(false);
      }
    };

    if (call) createUser();
  }, [call]);

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    setError(false);
    if (
      mobileRef.current!.value[0].match(/[6789]/) &&
      mobileRef.current!.value.length === 10
    ) {
      setCall(true);
    } else {
      console.log("submit", mobileRef.current!.validity);
    }
  };

  const handleOnInput = (e: any) => {
    e.preventDefault();
    setError(false);
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
        lang !== "hi"
          ? "Please enter a valid mobile number."
          : "कृपया सही मोबाइल नंबर दर्ज करें"
      );
  };
  const mobileText = translations[lang];
  return (
    <form onSubmit={handleFormSubmit} id="my_form" className="mt-md-2">
      <h6
        id="l1-heading"
        className="form_head mt-md-3 translate"
        style={{ textAlign: "center" }}
      >
        {/* मेरा समर्थन मोदी को */}
        {mobileText["l1-heading"]}
      </h6>
      <div className="mb-2 ">
        <input
          ref={mobileRef}
          type="tel"
          id="mob"
          name="mob"
          className="form-control translate-placeholder"
          placeholder={mobileText["mob"]}
          onInput={handleOnInput}
          // with entering any digit
          onInvalid={(e: any) =>
            e.target.setCustomValidity(
              lang === "hi"
                ? "कृपया सही मोबाइल नंबर दर्ज करें"
                : "Please enter a valid mobile number."
            )
          }
          required
        />
      </div>
      {error && (
        <p id="my_form_msg " style={{ color: "red" }}>
          {lang === "hi"
            ? "आपका मोबाइल नंबर पहले से पंजीकृत है"
            : "Mobile number already registered."}
        </p>
      )}
      <center>
        <button
          id="l1-submit-button"
          type="submit"
          className="btn form-control mb-4 mb-md-3   submit_button translate"
        >
          <b
            style={{
              fontFamily: " 'Khand', sans-serif",
              backgroundColor: "0D67A8",
            }}
          >
            {/* संकल्प लें */}
            {mobileText["l1-submit-button"]}
          </b>
        </button>
      </center>
    </form>
  );
}

export default Mobile;
