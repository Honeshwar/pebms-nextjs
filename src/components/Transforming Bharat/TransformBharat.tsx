import dynamic from "next/dynamic";

const LazyForDesktop = dynamic(() => import("./ForDesktop"));
const LazyForMobile = dynamic(() => import("./ForMobile"));

export default function TransformBharat({
  title,
  lang,
}: {
  title: string;
  lang: string;
}) {
  return (
    <>
      <div id="achivments" className="container mt-5 mt-md-5 ">
        <h3 className="head mb-md-3">{title}</h3>
        <LazyForDesktop lang={lang} />
        <LazyForMobile lang={lang} />
      </div>
    </>
  );
}
