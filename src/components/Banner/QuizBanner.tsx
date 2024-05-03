import Image from "next/image";
import Link from "next/link";

export default function QuizBanner({ lang }: { lang: string }) {
  const href = lang === "hi" ? "/quiz" : "/en/quiz";
  const src = `/img/${lang === "hi" ? "hindi" : "english"} banner.webp`;
  const base64 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAIAAAB2XpiaAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAFUlEQVR4nGP4/+s9H4Mqg7KlsYstACSHBCxsie+qAAAAAElFTkSuQmCC";

  return (
    <>
      <Link href={href} id="quiz_section" className="container-fluid my-5 ">
        <Image
          width={1600}
          height={550}
          className="w-100 d-md-block d-none"
          style={{ width: "100%", height: "fit-content" }}
          src={src}
          alt="quiz banner"
          placeholder="blur"
          blurDataURL={base64}
        />
        <Image
          width={375}
          height={140}
          className="w-100 d-md-none d-block"
          style={{ width: "100%", height: "fit-content" }}
          src={src}
          alt="quiz banner"
          placeholder="blur"
          blurDataURL={
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAIAAAB2XpiaAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAFUlEQVR4nGP4/+s9H4Mqg7KlsYstACSHBCxsie+qAAAAAElFTkSuQmCC"
          }
        />
      </Link>
    </>
  );
}
