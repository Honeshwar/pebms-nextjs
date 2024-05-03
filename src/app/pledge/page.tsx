import "./pledge.css";

import Pledge from "@/components/Pledge/Pledge";

function page({ searchParams }: { searchParams: { lang: string } }) {
  let lang = searchParams.lang || "hi";
  if (
    lang !== "hi" &&
    lang !== "en" &&
    lang !== "bn" &&
    lang !== "te" &&
    lang !== "as" &&
    lang !== "mr" &&
    lang !== "gu" &&
    lang !== "kn" &&
    lang !== "ml" &&
    lang !== "or" &&
    lang !== "ta" &&
    lang !== "pa"
  )
    lang = "hi";
  console.log(lang);

  return (
    <>
      <Pledge lang={lang} />
    </>
  );
}

export default page;
