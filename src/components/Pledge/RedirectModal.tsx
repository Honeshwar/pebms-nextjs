import { usePledgeContext } from "@/context/PledgeContext";
import translations from "@/utils/translations";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";

export default function RedirectModal({ lang }: { lang: string }) {
  const Text = translations[lang];
  const { setScreen } = usePledgeContext();
  const router = useRouter();
  const countRef = useRef<any>(null);
  console.log("redirect modal");
  useEffect(() => {
    let count = 5;
    const interval = setInterval(() => {
      count--;
      if (countRef.current) {
        let text = "",
          e = "";
        switch (lang) {
          case "hi":
            text =
              '<p class="" style="color:black;text-align:center">' +
              e +
              `</p> <p class=" text-center"> <span class="" style="color:black;text-align:center">आपको <span class="px-1" id="countdown" style="">` +
              count +
              "</span> सेकंड में मुख्य वेबसाइट पर निर्देशित किया जा रहा है  </span></p>";
            break;
          case "mr":
            text =
              '<p class="" style="color:black;text-align:center">' +
              e +
              `</p> <p class=" text-center"> <span class="" style="color:black;text-align:center">तुम्हालाा <span class="px-1" id="countdown" style="">` +
              count +
              "</span> सेकंदात मुख्य वेबसाईटवर निर्देशित करण्यात येत आहे  </span></p>";
            break;
          case "bn":
            text =
              '<p class="" style="color:black;text-align:center">' +
              e +
              `</p> <p class=" text-center"> <span class="" style="color:black;text-align:center">আপনাকে  <span class="px-1" id="countdown" style="">` +
              count +
              "</span>  সেকেন্ডের মধ্যে মূল ওয়েবসাইটে নিয়ে যাওয়া হচ্ছে </span></p>";
            break;
          case "gu":
            text =
              '<p class="" style="color:black;text-align:center">' +
              e +
              `</p> <p class=" text-center"> <span class="" style="color:black;text-align:center">તમને  <span class="px-1" id="countdown" style="">` +
              count +
              "</span>  સેંકન્ડમાં મુખ્ય વેબસાઇટ પર નિર્દેશિત કરવામાં આવી રહ્યાં છે. </span></p>";
            break;
          case "as":
            text =
              '<p class="" style="color:black;text-align:center">' +
              e +
              `</p> <p class=" text-center"> <span class="" style="color:black;text-align:center">আপোনাক  <span class="px-1" id="countdown" style="">` +
              count +
              "</span>   ছেকেণ্ডৰ ভিতৰত মুখ্য ৱেবছাইটলৈ নিৰ্দেশিত কৰা হৈছে  </span></p>";
            break;
          case "or":
            text =
              '<p class="" style="color:black;text-align:center">' +
              e +
              `</p> <p class=" text-center"> <span class="" style="color:black;text-align:center">ଆପଣଙ୍କୁ  <span class="px-1" id="countdown" style="">` +
              count +
              "</span>  ସେକେଣ୍ଡ ରେ ମୁଖ୍ୟ ୱେବସାଇଟ୍ କୁ ନିର୍ଦ୍ଦେଶିତ କରା ଯାଉଛି. </span></p>";
            break;
          case "pa":
            text =
              '<p class="" style="color:black;text-align:center">' +
              e +
              `</p> <p class=" text-center"> <span class="" style="color:black;text-align:center">ਤੁਹਾਨੂੰ   <span class="px-1" id="countdown" style="">` +
              count +
              "</span>  ਸਕਿੰਟਾਂ ਵਿੱਚ ਮੁੱਖ ਵੈੱਬਸਾਈਟ 'ਤੇ ਭੇਜਿਆ ਜਾ ਰਿਹਾ ਹੈ	</span></p>";
            break;
          case "kn":
            text =
              '<p class="" style="color:black;text-align:center">' +
              e +
              '</p> <p class=" text-center"> <span class="" style="color:black;text-align:center"> <span class="px-1" id="countdown" style="">' +
              count +
              "</span>  ಸೆಕೆಂಡುಗಳಲ್ಲಿ ನಿಮ್ಮನ್ನು ಮುಖ್ಯ ವೆಬ್‌ಸೈಟ್‌ಗೆ ಮರು ಪ್ರವೇಶಿಸಲಾಗುವುದು	</span></p>";
            break;
          case "te":
            text =
              '<p class="" style="color:black;text-align:center">' +
              e +
              `</p> <p class=" text-center"> <span class="" style="color:black;text-align:center">మీరు <span class="px-1" id="countdown" style="">` +
              count +
              "</span>  సెకన్లలో ప్రధాన వెబ్‌సైట్‌కి మళ్ళించబడతారు	</span></p>";
            break;
          case "en":
            text =
              '<p class="" style="color:black;text-align:center">' +
              e +
              '</p> <p class=" text-center"> <span class="" style="color:black;text-align:center">You are being redirected to the main website in  <span class="px-1" id="countdown" style="">' +
              count +
              "</span> sec </span></p>";
            break;
          case "ml":
            text =
              '<p class="" style="color:black;text-align:center">' +
              e +
              '</p> <p class=" text-center"> <span class="" style="color:black;text-align:center"> <span class="px-1" id="countdown" style="">' +
              count +
              "</span> സെക്കൻഡിനുള്ളിൽ  നിങ്ങളെ പ്രധാന വെബ്‌സൈറ്റിലേക്ക് തിരിച്ചുവിടുന്നതാണ്	</span></p>";
            break;
          case "ta":
            text =
              '<p class="" style="color:black;text-align:center">' +
              e +
              '</p> <p class=" text-center"> <span class="" style="color:black;text-align:center"> <span class="px-1" id="countdown" style="">' +
              count +
              "</span>   வினாடிகளில் முதன்மை இணையதளத்திற்கு திருப்பி விடப்படுவீர்கள்	</span></p>";
            break;
          default:
            text =
              '<p class="" style="color:black;text-align:center">' +
              e +
              '</p> <p class="text-center"> <span class="" style="color:red;text-align:center">You are being redirected to the main website in  <span class="px-1" id="countdown" style="">' +
              count +
              "</span> sec </span></p>";
        }
        console.log("text", text);
        countRef.current.innerHTML = text;
      }
      if (count === 0) {
        clearInterval(interval);
        setScreen(1);
        let redirect = "";
        switch (lang) {
          case "hi":
          case "mr":
          case "gu":
            redirect = "/";
            break;
          case "bn":
            redirect = "/en/";
            break;
          case "as":
            redirect = "/";
          case "or":
          case "pa":
            redirect = "/";
            break;
          default:
            redirect = "/en/";
        }
        router.push(redirect);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div id="redirection-modal" className="modal">
      <div className="modal__content">
        <div
          ref={countRef}
          id="redirect"
          className="modal-body text-light p-2"
          style={{ height: "100%", textAlign: "center", fontSize: "20px" }}
        ></div>
        <a href="#" className="modal__close">
          &times;
        </a>
      </div>
    </div>
  );
}
