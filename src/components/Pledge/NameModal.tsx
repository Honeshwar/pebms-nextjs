import { usePledgeContext } from "@/context/PledgeContext";
import translations from "@/utils/translations";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function NameModal({ lang }: { lang: string }) {
  const Text = translations[lang];
  const [name, setName] = useState("");
  const [call, setCall] = useState(false);
  const navigate = useRouter();

  useEffect(() => {
    function callAPI() {
      try {
        // do api call
        console.log(name);
        let t = new FormData();
        t.append("name", name),
          t.append("mobile", localStorage.getItem("mobile")!),
          fetch(process.env.NEXT_PUBLIC_API_URL + "/user/update", {
            method: "PATCH",
            body: t,
          })
            .then((e) => e.json())
            .then((e) => {
              fetch(
                process.env.NEXT_PUBLIC_API_URL +
                  `/generate_certificate2/${localStorage.getItem(
                    "mobile"
                  )}?language=${lang}`
              )
                .then((e) => e.json())
                .then((e) => {
                  localStorage.setItem("certificate", e.certicate);
                  console.log(e);
                  localStorage.setItem("name", name);

                  navigate.push("/pledge/thankyou?lang=" + lang);
                  setCall(false);
                  // window.location.href = `thankyou.html?lang=${lang}`;
                });
            });
      } catch (e) {
        console.log("error", e);
      } finally {
        setCall(false);
      }
    }
    if (call) {
      callAPI();
    }
  }, [call]);
  return (
    <div id="name_modal" className="modal">
      <div className="modal__content">
        <div id="popup" className="modal-body text-light p-2">
          <h4
            id="name-modal-heading"
            className="alert-heading text-center translate"
            style={{
              color: "#ff7801",
              fontWeight: "700",
              lineHeight: "2.2rem",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            {/* निजीकृत संकल्प पत्र पानें के लिए, अपना नाम दर्ज करें */}

            {Text["name-modal-heading"]}
          </h4>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setCall(true);
            }}
            id="name_submit"
          >
            <div className="mb-2 mb-md-2">
              <input
                type="text"
                className="form-control translate-placeholder"
                id="name"
                name="name"
                placeholder={Text["name"]}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <center>
              <button
                id="name-submit-button"
                type="submit"
                className="btn form-control mb-4 mb-md-2 mt-2 submit_button translate"
              >
                <b style={{ fontFamily: "'Khand', sans-serif" }}>
                  {Text["name-submit-button"]}
                </b>
              </button>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
}
