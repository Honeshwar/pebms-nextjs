import { usePledgeContext } from "@/context/PledgeContext";
import translations from "@/utils/translations";
import React, { useEffect, useRef, useState } from "react";
interface State {
  district_name: string;
  id: number;
}
interface District {
  ac_name: string;
  id: number;
}
function DetailForm({ lang }: { lang: string }) {
  // const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const stateIdRef = useRef<HTMLSelectElement>(null);
  const districtIdRef = useRef<HTMLSelectElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);

  const [states, setStates] = useState<State[]>([]);
  const [districts, setDistricts] = useState<District[]>([]);
  const [stateId, setStateId] = useState(-1); //to reset -1

  const [error, setError] = useState("");
  const [call, setCall] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  const { setScreen } = usePledgeContext();

  useEffect(() => {
    const getState = async () => {
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_API_URL + "/get_district"
        );

        const responseData = await response.json();
        setStates(responseData.result);
      } catch (error) {
        console.log("error while fetching state", error);
      }
    };

    getState();
  }, []);

  useEffect(() => {
    const getDistrict = async () => {
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_API_URL +
            "/get_ac_from_district?district_id=" +
            stateId
        );

        const responseData = await response.json();
        setDistricts(responseData.result);
        setStateId(-1);
      } catch (error) {
        console.log("error while fetching District", error);
      }
    };

    if (stateId !== -1) {
      getDistrict();
    }
  }, [stateId]);

  useEffect(() => {
    const submitDetails = async (
      // name: string,
      age: string,
      state_id: string,
      district_id: string,
      gender: string
    ) => {
      try {
        const f = new FormData();
        // f.append("name", name);
        f.append("age", age);
        f.append("assemblies_id", district_id);
        f.append("districts_id", state_id);
        f.append("gender", gender);
        f.append("mobile", localStorage.getItem("mobile")!);

        const response = await fetch(
          process.env.NEXT_PUBLIC_API_URL + "/user/update",
          {
            method: "PATCH",
            body: f,
          }
        );
        const responseData = await response.json();
        if (responseData.status === 400) {
          setError(responseData.result);
          return;
        }

        // setShowThanks(true);

        setScreen(5);
        localStorage.removeItem("form");
      } catch (error) {
        console.log("error while submitting details", error);
        setError("Something went wrong. Please try again later.");
      } finally {
        setCall(false);
      }
    };
    if (call) {
      submitDetails(
        // nameRef.current!.value,
        ageRef.current!.value,
        stateIdRef.current!.value,
        districtIdRef.current!.value,
        genderRef.current!.value
      );
    }
  }, [call]);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("submit");
    // console.log("name", nameRef.current!.value);
    console.log("age", ageRef.current!.value);
    console.log("state", stateIdRef.current!.value);
    console.log("district", districtIdRef.current!.value);
    console.log("gender", genderRef.current!.value);
    console.log("submit form:", typeof stateIdRef.current!.value);
    if (stateIdRef.current!.value === "-1") {
      return setError(
        lang === "hi" ? "अपनी राज्य का चयन करें" : "Please select your state"
      );
    } else if (districtIdRef.current!.value === "-1") {
      return setError(
        lang === "hi" ? "अपनी जिला का चयन करें" : "Please select your district"
      );
    } else if (genderRef.current!.value === "-1") {
      return setError(
        lang === "hi" ? "अपना लिंग का चयन करें" : "Please select your gender"
      );
    }

    setCall(true);
  };
  const detailText = translations[lang];
  return (
    <form onSubmit={handleSubmit} id="form_l3" className="mt-2 mx-2">
      <h6
        id="l3-heading"
        className="form_head mt-md-3 translate"
        style={{ textAlign: "center" }}
      >
        {/* मेरा समर्थन मोदी को */}
        {detailText["l3-heading"]}
      </h6>
      {error !== "" && (
        <p
          style={{
            color: "red",
            textAlign: "center",
            marginTop: "10px",
          }}
        >
          {error}
        </p>
      )}
      <div className="mb-3 mb-md-2 form-2">
        <select
          ref={stateIdRef}
          className="form-control"
          id="state"
          name="state"
          required
          onChange={(e) => {
            console.log("state id", e.target.value);
            setStateId(Number(e.target.value));
            setError("");
          }}
        >
          {/* <option value="" selected={true} disabled={true}>
            राज्य *
          </option> */}

          <option
            value={-1}
            selected
            disabled
            style={{ color: "grey", fontSize: "14px" }}
          >
            {detailText["state-option"] + " *"}
          </option>
          {states.map((state: State) => (
            <option key={state.id} value={state.id}>
              {state.district_name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3 mb-md-2 form-2">
        <select
          ref={districtIdRef}
          className="form-control"
          id="district"
          name="district"
          required
          onChange={() => setError("")}
        >
          {/* <option value="" selected={true} disabled={true}>
            {lang === "hi" ? " जिला *" : "District *"}
          </option> */}

          <option
            value={"-1"}
            selected
            disabled
            style={{ color: "grey", fontSize: "14px" }}
          >
            {lang === "hi" ? " जिला *" : "District *"}
          </option>
          {districts.map((district: District) => (
            <option key={district.id} value={district.id}>
              {district.ac_name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3 mb-md-2 form-2">
        <input
          ref={ageRef}
          type="tel"
          id="age"
          minLength={2}
          maxLength={3}
          name="age"
          className="form-control translate-placeholder"
          placeholder={detailText["age"]}
          required
        />
      </div>
      <div className="mb-3 mb-md-2 form-2">
        <select
          ref={genderRef}
          className="form-control"
          id="gender"
          name="gender"
          required
          onChange={() => setError("")}
        >
          <option value={-1} selected={true} disabled={true}>
            {lang === "hi" ? "लिंग *" : "Gender *"}
          </option>
          <option value="male">{lang === "hi" ? "पुरुष" : "Male"}</option>
          <option value="female">{lang === "hi" ? "महिला" : "Female"}</option>
          <option value="other">{lang === "hi" ? "अन्य" : "Other"}</option>
        </select>
      </div>
      <center>
        <button
          id="l3-submit-button"
          type="submit"
          className="btn form-control mb-4 mb-md-2 mt-2 submit_button translate"
          style={{ border: "2px solid white" }}
        >
          <b style={{ fontFamily: "'Khand', sans-serif" }}>
            {detailText["l3-submit-button"]}
          </b>
        </button>
      </center>
    </form>
  );
}

export default DetailForm;
