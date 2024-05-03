"use client";
import Quiz from "./Quiz";
import { QuizContextProvider } from "../../context/QuizContext";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useEffect } from "react";
export default function ClientPage({ lang }: { lang: string }) {
  useEffect(() => {
    //directives to ignore typescript checking
    // @ts-ignore
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then(() => console.log("Bootstrap loaded"))
      .catch((error) => console.error("Error loading Bootstrap:", error));
  }, []);

  return (
    <QuizContextProvider>
      <Quiz lang={lang} />
    </QuizContextProvider>
  );
}
