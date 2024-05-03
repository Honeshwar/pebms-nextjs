import { useState } from "react";
import { useQuizContext } from "@/context/QuizContext";
import dynamic from "next/dynamic";

const LazyQuizHomeModal = dynamic(() => import("./HomeModal"), {
  ssr: false,
});

export default function QuizQuestion({ lang = "hi" }: { lang: string }) {
  const ALL_QUESTION = {
    hi: [
      {
        imgUrl: "/assets/quiz/q1.jpg",
        question: "राम मंदिर का निर्माण किस ट्रस्ट द्वारा कराया जा रहा है?",
        a: "श्री राम जन्मभूमि तीर्थ क्षेत्र",
        b: "उत्तर प्रदेश सरकार",
        c: "केंद्र सरकार",
        d: "इनमें से कोई नहीं",
        answer: "श्री राम जन्मभूमि तीर्थ क्षेत्र",
      },
      {
        imgUrl: "/assets/quiz/q2.png",
        question: "अयोध्या राम मंदिर के पास स्थित पवित्र नदी का क्या नाम है?",
        a: "यमुना नदी",
        b: "सरयू नदी",
        c: "गंगा नदी",
        d: "गोदावरी नदी",
        answer: "सरयू नदी",
      },
      {
        imgUrl: "/assets/quiz/q4.jpg",
        question: "अयोध्या स्थल पर मूल मंदिर कौनसे राजा ने बनवाया था?",
        a: "राजा विक्रमादित्य",
        b: "राजा दशरथ",
        c: "राजा हरीशचंद्र",
        d: "राजा जनक",
        answer: "राजा विक्रमादित्य",
      },
      {
        imgUrl: "/assets/quiz/q3.jpg",

        question: "अयोध्या राम मंदिर के मुख्य शिल्पकार कौन हैं?",
        a: "बृंदा सोमाया",
        b: "बी.वी. दोशी",
        c: "चंद्रकांत सोमपुरा",
        d: "पी.ओ. सोमपुरा",
        answer: "चंद्रकांत सोमपुरा",
      },
      {
        // imgUrl: "/assets/quiz/question/national-herald-jpg.webp",
        audioUrl: "/assets/quiz/audio_m.mp3",
        question: "ये आवाज़ किसकी है?",
        a: "योगी आदित्यनाथ",
        b: "अमित शाह",
        c: "नरेंद्र मोदी",
        d: "पी. नड्डा",
        answer: "नरेंद्र मोदी",
      },
      {
        imgUrl: "/assets/quiz/q6.jpeg",
        question: "'रामलला' की मूर्ति किसके द्वारा बनाई गई है?",
        a: "गणेश भट्ट",
        b: "नारायण पांडे",
        c: "योगीराज",
        d: "कुशदीप बंसल",
        answer: "योगीराज",
      },
    ],
    en: [
      {
        imgUrl: "/assets/quiz/q1.jpg",
        question:
          "The construction of the Ram Temple is being carried out by which trust?",
        a: "Shri Ram Janmabhoomi Teerth Kshetra",
        b: "Government of Uttar Pradesh",
        c: "Central Government",
        d: "None of these",
        answer: "Shri Ram Janmabhoomi Teerth Kshetra",
      },
      {
        imgUrl: "/assets/quiz/q2.png",
        question:
          "What is the name of the sacred water body located near the Ayodhya Ram Mandir?",
        a: "Yamuna River",
        b: "Sarayu River",
        c: "Ganges River",
        d: "Godavari River",
        answer: "Sarayu River",
      },
      {
        imgUrl: "/assets/quiz/q4.jpg",
        question:
          "Which king is believed to have built the original temple at the Ayodhya site?",
        a: "King Vikramaditya",
        b: "King Dashratha",
        c: "King Harishchandra",
        d: "King Janaka",
        answer: "King Vikramaditya",
      },
      {
        imgUrl: "/assets/quiz/q3.jpg",

        question: "Who is the chief architect of the Ram Mandir in Ayodhya?",
        a: "Brinda Somaya",
        b: "B.V. Doshi",
        c: "Chandrakant Sompura",
        d: "P.O. Sompura",
        answer: "Chandrakant Sompura",
      },
      {
        // imgUrl: "/assets/quiz/question/national-herald-jpg.webp",
        audioUrl: "/assets/quiz/audio_m.mp3",
        question: "Whose voice is this?",
        a: "Yogi Adityanath",
        b: "Amit Shah",
        c: "Narendra Modi",
        d: "J.P. Nadda",
        answer: "Narendra Modi",
      },
      {
        imgUrl: "/assets/quiz/q6.jpeg",
        question: "Who is the sculptor of 'Ram Lalla' idol?",
        a: "Ganesh Bhatt",
        b: "Satya Narayan Pandey",
        c: "Arun Yogiraj",
        d: "Kushdeep Bansal",
        answer: "Arun Yogiraj",
      },
    ],
  } as any;

  const [Questions] = useState(ALL_QUESTION[lang]);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [currAnswer, setCurrAnswer] = useState<null | boolean>(null);
  const [score, setScore] = useState(0);

  const [showHomeModal, setShowHomeModal] = useState(false);
  // const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [error, setError] = useState(false);
  // const [openSubmitModal, setOpenSubmitModal] = useState(false);

  const { setScreen, setScored, setTotalQuestion, scored } = useQuizContext();

  const selectOption = (e: any) => {
    setError(false);

    let buttons = document.querySelectorAll("div.buttons button");
    if (buttons) {
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active-btn");
      }
    }

    const clickedButton = e.target;
    clickedButton.classList.add("active-btn");
    const answer = clickedButton.getAttribute("data-answer");
    console.log("on btn click ", currAnswer, "answer", typeof answer, answer);
    if (answer === "true") setCurrAnswer(true);
    else setCurrAnswer(false);
  };

  // const resetGame = () => {
  //   setScore(0);
  //   setCurrentQuestion(1);
  //   // setQuestion(Questions[0]);
  // };

  function loadQuestion() {
    console.log("scored before click", score, currAnswer);

    var x = document.getElementById("source") as HTMLAudioElement;
    x.pause();
    //if no option selected dont move forward
    // $('#source').pause();
    // $('#source').currentTime = 0;
    // $('#source').load();
    setError(false);
    if (currAnswer === null) {
      setError(true);
      return;
    }

    //increae score if correct option
    if (currAnswer) setScore((prev) => prev + 1);

    //reset
    setCurrAnswer(null);

    //check if last question , then swap button text
    if (currentQuestion == Questions.length - 1) {
      document.getElementById("next-btn")!.innerText =
        lang === "hi" ? "सबमिट करे" : "Submit";
    }

    //logic to load question
    if (currentQuestion < Questions.length) {
      //grab current question and hide it
      document.getElementById(`question-${currentQuestion}`)!.style.display =
        "none";

      document.getElementById(
        `question-${currentQuestion + 1}`
      )!.style.display = "block";
      setCurrentQuestion((prev) => prev + 1);

      // console.log(currQuestion);
    } else {
      // set value at context
      setScored(currAnswer ? score + 1 : score);
      setTotalQuestion(Questions.length);

      // move to result screen
      setScreen(3);
    }
  }
  console.log("scored", scored);

  return (
    <>
      <span id="home_nav">
        <img
          //   data-bs-toggle="modal"
          //   data-bs-target="#exampleModal1"
          src="/assets/quiz/Home Icon.svg"
          onClick={() => setShowHomeModal(true)}
          style={{ cursor: "pointer" }}
        />
      </span>
      <section id="quiz-container" className="section-container">
        <div
          id="question-container"
          className="col-10 col-md-9 mt-md-5 mt-4 m-auto d-flex justify-content-center flex-column align-items-center"
        >
          {Questions.map((question: any, index: number) => (
            <div
              id={"question-" + (index + 1)}
              className="question col-12  "
              key={"question-" + (index + 1)}
              style={{ display: index === 0 ? "block" : "none" }}
            >
              <div className="img-section col-12 d-flex justify-content-between flex-md-row flex-column">
                <img
                  className="col-md-7 col-12 "
                  width="100%"
                  src="/assets/quiz/quiz-q.webp"
                  alt="banner"
                />
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                  {question.audioUrl === undefined ? (
                    <img
                      className="col-md-10 col-8 mt-md-0 mt-2"
                      src={question.imgUrl}
                      alt="question images"
                    />
                  ) : (
                    <audio
                      id="source"
                      controls
                      className="col-md-10 col-8 mt-md-0 mt-2"
                    >
                      <source src={question.audioUrl} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  )}
                </div>
              </div>
              <div className="question-section col-12">
                <p className="col-12">{question.question}</p>
                <div className="buttons col-md-11 col-10 m-auto">
                  <button
                    onClick={selectOption}
                    data-answer={
                      question.a === question.answer ? "true" : "false"
                    }
                    className="col-md-4 col-11"
                  >
                    <span className="option-alphabate">A</span>
                    {question.a}
                  </button>
                  <button
                    onClick={selectOption}
                    data-answer={
                      question.b === question.answer ? "true" : "false"
                    }
                    className="col-md-4 col-11"
                  >
                    <span className="option-alphabate">B</span>
                    {question.b}
                  </button>
                  <button
                    onClick={selectOption}
                    data-answer={
                      question.c === question.answer ? "true" : "false"
                    }
                    className="col-md-4 col-11"
                  >
                    <span className="option-alphabate">C</span>
                    {question.c}
                  </button>
                  <button
                    onClick={selectOption}
                    data-answer={
                      question.d === question.answer ? "true" : "false"
                    }
                    className="col-md-4 col-11"
                  >
                    <span className="option-alphabate">D</span>
                    {question.d}
                  </button>
                </div>
              </div>
            </div>
          ))}
          {error && (
            <p className="option_select" style={{ color: "red" }}>
              {lang === "hi"
                ? "कृपया आगे बढ़ने के लिए विकल्प चुनें"
                : "Please select option to proceed"}
            </p>
          )}
          <button id="next-btn" onClick={loadQuestion} className="btn col-4">
            {lang === "hi" ? "आगे बढ़ें" : "Next"}
          </button>
        </div>
        <div className="footer">
          <img
            src="/assets/quiz/footer1.webp"
            className="w-100"
            alt="footer image"
          />
        </div>
      </section>

      {showHomeModal && (
        <LazyQuizHomeModal setShowHomeModal={setShowHomeModal} lang={lang} />
      )}
      {/* {openSubmitModal && (
        <LazySubmitModal
          setOpenSubmitModal={setOpenSubmitModal}
          score={score}
          resetGame={resetGame}
          lang={lang}
        />
      )} */}
    </>
  );
}
