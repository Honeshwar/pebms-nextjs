import { useCTA_ContextValue } from "@/context/CTA_Context";
import { useEffect, useRef, useState } from "react";

// type of state
interface State {
  district_name: string;
  id: number;
}
interface District {
  ac_name: string;
  id: number;
}
interface FormText {
  heading: string;
  "input-1": { placeholder: string };
  "input-2": { "disabled-option": string };
  "input-3": { "disabled-option": string };
  "input-4": { placeholder: string };
  "input-5": { "disabled-option": string; options: string[] };
  "submit-btn": string;
  "thank-you-text": string;
  errorMessages: {
    state: string;
    district: string;
    gender: string;
    apiCallErrorMessage: string;
  };
}
export default function DetailFormModal({
  lang,
  formText,
}: {
  lang: string;
  formText: FormText;
}) {
  const modalRef = useRef<HTMLButtonElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
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
  const { setScreen } = useCTA_ContextValue();

  useEffect(() => {
    console.log(modalRef.current);
    if (modalRef.current) {
      modalRef.current.click();
    }
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
  //   useEffect(() => {
  //     //directives to ignore typescript checking
  //     // @ts-ignore
  //     import("bootstrap/dist/js/bootstrap.bundle.min.js")
  //       .then(() => {
  //         console.log("Bootstrap loaded");
  //         console.log(modalRef.current);
  //         if (modalRef.current) {
  //           modalRef.current.click();
  //         }
  //       })
  //       .catch((error) => console.error("Error loading Bootstrap:", error));
  //   }, []);

  useEffect(() => {
    const submitDetails = async (
      name: string,
      age: string,
      state_id: string,
      district_id: string,
      gender: string
    ) => {
      try {
        const f = new FormData();
        f.append("name", name);
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

        setShowThanks(true);
      } catch (error) {
        console.log("error while submitting details", error);
        setError(formText.errorMessages.apiCallErrorMessage);
      } finally {
        setCall(false);
      }
    };
    if (call) {
      submitDetails(
        nameRef.current!.value,
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
    console.log("name", nameRef.current!.value);
    console.log("age", ageRef.current!.value);
    console.log("state", stateIdRef.current!.value);
    console.log("district", districtIdRef.current!.value);
    console.log("gender", genderRef.current!.value);
    console.log("submit form:", typeof stateIdRef.current!.value);
    if (stateIdRef.current!.value === "-1") {
      return setError(formText.errorMessages.state);
    } else if (districtIdRef.current!.value === "-1") {
      return setError(formText.errorMessages.district);
    } else if (genderRef.current!.value === "-1") {
      return setError(formText.errorMessages.gender);
    }

    setCall(true);
  };
  return (
    <>
      <button
        ref={modalRef}
        type="button"
        id="l3_modal"
        className="btn btn-primary"
        style={{ display: "none" }}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ zIndex: "999999" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                id="close_btn"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{ position: "absolute", right: "1%", top: "1%" }}
                onClick={() => setScreen(4)}
              ></button>

              {!showThanks && (
                <>
                  <form
                    onSubmit={handleSubmit}
                    id="form_l3"
                    className="mt-4 mx-2"
                  >
                    <h6
                      className="form_head mt-md-3"
                      style={{ lineHeight: "2.1rem", textAlign: "center" }}
                    >
                      {formText.heading}
                    </h6>
                    <div className="mb-2 mb-md-2">
                      <input
                        ref={nameRef}
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder={formText["input-1"].placeholder}
                        required
                      />
                    </div>
                    <div className="mb-3 mb-md-2 form-2">
                      <select
                        ref={stateIdRef}
                        className="form-control"
                        id="state"
                        name="state"
                        required
                        // defaultValue={"राज्य*"}
                        onChange={(e) => {
                          console.log("state id", e.target.value);
                          setStateId(Number(e.target.value));
                          setError("");
                        }}
                      >
                        <option
                          value={-1}
                          selected
                          disabled
                          style={{ color: "grey", fontSize: "14px" }}
                        >
                          {formText["input-2"]["disabled-option"]}
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
                        // value={"जिला *"}
                        onChange={() => setError("")}
                      >
                        <option
                          value={"-1"}
                          selected
                          disabled
                          style={{ color: "grey", fontSize: "14px" }}
                        >
                          {formText["input-3"]["disabled-option"]}
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
                        name="age"
                        className="form-control"
                        minLength={2}
                        maxLength={3}
                        placeholder={formText["input-4"].placeholder}
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
                        // value={"लिंग *"}
                        onChange={() => setError("")}
                      >
                        {/* value,selected true */}
                        <option value={-1} selected disabled={true}>
                          {formText["input-5"]["disabled-option"]}
                        </option>
                        {formText["input-5"].options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                        {/* <option value="male">पुरुष</option>
                        <option value="female">महिला</option>
                        <option value="other">अन्य</option> */}
                      </select>
                    </div>
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
                </>
              )}
              <div id="thank_you " className=" p-4">
                {showThanks && (
                  <h4
                    className="alert-heading text-center"
                    style={{
                      color: "#ff7801",
                      fontWeight: "700",
                      lineHeight: "2.2rem",
                      fontSize: "20px",
                      textAlign: "center",
                      // display: "none",
                    }}
                  >
                    {formText["thank-you-text"]}
                  </h4>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
