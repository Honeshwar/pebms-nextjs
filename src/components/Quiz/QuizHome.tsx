import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LazyHomeModal = dynamic(() => import("./HomeModal"));
export default function QuizHome({
  lang,
  setScreen,
}: {
  lang: string;
  setScreen: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [showHomeModal, setShowHomeModal] = useState(false);
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
      <section id="start-container" className="w-100 section-container">
        <span id="language">
          {lang === "hi" ? (
            <Link href="/en/quiz">English</Link>
          ) : (
            <Link href="/quiz">हिंदी</Link>
          )}
        </span>

        <Image
          width={1600}
          height={600}
          className="d-none d-md-block"
          src={`/assets/quiz${lang === "en" ? "/en" : ""}/st-img.webp`}
          style={{ width: "100%", height: "fit-content" }}
          alt="background image"
          // placeholder="blur"
          // blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAGklEQVR4nGP4/enVSwkehp//v7951lKUcAgAXpwKvnf8XnIAAAAASUVORK5CYII="
        />
        <Image
          width={400}
          height={250}
          className="d-block d-md-none"
          src={`/assets/quiz${lang === "en" ? "/en" : ""}/st-img-m.webp`}
          style={{ width: "100%", height: "fit-content" }}
          alt="background image"
          // placeholder="blur"
          // blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAGklEQVR4nGP4/enVSwkehp//v7951lKUcAgAXpwKvnf8XnIAAAAASUVORK5CYII="
        />
        <div
          id="start"
          className="col-md-3 col-10 d-flex flex-column align-items-end justify-content-md-between justify-content-between py-md-5 py-3"
        >
          <Image
            width={400}
            height={280}
            src="/assets/quiz/quiz.webp"
            className="w-100 d-none d-md-block"
            alt="box image"
            style={{ width: "100%", height: "fit-content" }}
            // placeholder="blur"
            // blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAGklEQVR4nGP4/enVSwkehp//v7951lKUcAgAXpwKvnf8XnIAAAAASUVORK5CYII="
          />
          <Image
            width={320}
            height={230}
            src="/assets/quiz/quiz.webp"
            className="w-100 d-block d-md-none"
            alt="box image"
            style={{ width: "100%", height: "fit-content" }}
            // placeholder="blur"
            // blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAGklEQVR4nGP4/enVSwkehp//v7951lKUcAgAXpwKvnf8XnIAAAAASUVORK5CYII="
          />
          <button
            id="start-btn"
            className="btn  col-8 mx-auto"
            onClick={() => setScreen(2)}
          >
            {lang === "hi" ? "क्विज़ खेलें!" : "Take the Quiz!"}
          </button>
        </div>
        <div className="footer">
          <Image
            //   1600 300,400 70
            width={1600}
            height={300}
            src="/assets/quiz/footer.webp"
            className="w-100"
            style={{ width: "100%", height: "fit-content" }}
            alt="footer image"
            // placeholder="blur"
            // blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAGUlEQVR4nGPwY2Do2OXIkPCmkCE9k4GhBAApTgTTAqp6rwAAAABJRU5ErkJggg=="
          />
        </div>
      </section>

      {showHomeModal && (
        <LazyHomeModal lang={lang} setShowHomeModal={setShowHomeModal} />
      )}
    </>
  );
}
