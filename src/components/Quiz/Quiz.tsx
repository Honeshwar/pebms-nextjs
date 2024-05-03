"use client";
import { useQuizContext } from "../../context/QuizContext";
import QuizCertificate from "./QuizCertificate";
import QuizHome from "./QuizHome";
import QuizQuestion from "./QuizQuestion";
import QuizResult from "./QuizResult";

// import "../../styles/quiz/global.css";
import dynamic from "next/dynamic";

export default function Quiz({ lang = "hi" }: { lang?: string }) {
  const LazyQuizQuestion = dynamic(() => import("./QuizQuestion"));
  const LazyQuizResult = dynamic(() => import("./QuizResult"));
  const LazyQuizCertificate = dynamic(() => import("./QuizCertificate"));
  const { screen, setScreen } = useQuizContext();
  return (
    <div className="body">
      {screen === 1 && <QuizHome setScreen={setScreen} lang={lang} />}
      {screen === 2 && <LazyQuizQuestion lang={lang} />}
      {screen === 3 && <LazyQuizResult lang={lang} />}
      {screen === 4 && <LazyQuizCertificate lang={lang} />}
    </div>
  );
}
