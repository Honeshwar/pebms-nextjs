import { usePledgeContext } from "@/context/PledgeContext";
import translations from "@/utils/translations";
import React from "react";

export default function ThankModal({ lang }: { lang: string }) {
  const { setScreen } = usePledgeContext();
  const Text = translations[lang];
  return (
    <div id="thankyou" className="modal">
      <div className="modal__content">
        <div id="popup1" className="modal-body text-light p-2">
          <h4
            id="thank-modal-message-1"
            className="alert-heading text-center translate"
            style={{
              color: "#ff7801",
              fontWeight: "700",
              lineHeight: "2.2rem",
              fontSize: "25px",
              textAlign: "center",
            }}
          >
            {/* भाजपा को जिताने का संकल्प लेने के लिए धन्यवाद */}
            {Text["thank-modal-message-1"]}
          </h4>
          <h4
            id="thank-modal-message-2"
            className="alert-heading text-center translate"
            style={{
              color: "#ff7801",
              fontWeight: "700",
              lineHeight: "2.2rem",
              fontSize: "25px",
              textAlign: "center",
            }}
          >
            {/* भाजपा को जिताने का संकल्प लेने के लिए धन्यवाद */}
            {Text["thank-modal-message-2"]}
          </h4>
        </div>
        <a
          onClick={() => {
            setScreen(6);
          }}
          className="modal__close"
          style={{ color: "#131313", fontSize: "30px", marginTop: "-10px" }}
        >
          &times;
        </a>
        {/* onClick="counter('') */}
      </div>
    </div>
  );
}
