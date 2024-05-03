// "use client";
// import "bootstrap/dist/js/bootstrap.bundle.min.js"; //only use in browser so also use with use client declaration, not in server component, otherwise error will be thrown
import Image from "next/image";
import Link from "next/link";
// import { useEffect } from "react";

interface Navbar_DATA {
  hi: {
    navText: { id: string; text: string; href: string }[];
    language: { id: string; text: string; href: string };
  };
  en: {
    navText: { id: string; text: string; href: string }[];
    language: { id: string; text: string; href: string };
  };
}
// import "@/app/styles/Navbar/navbar.module.css";
export default function Navbar({ lang }: { lang: string }) {
  const base64 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAYAAAC09K7GAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAPklEQVR4nAEzAMz/AK2RghIAAAAA2vrtle/37agAtIxxitSjhO3z3cr///nv1AD/+a8O/8ybtP/Dnqzv1bx3+ugg7TmfYBAAAAAASUVORK5CYII=";

  // nested: so less condional rendering like lang === "hi"
  const DATA = {
    hi: {
      navText: [
        {
          id: "nav-0",
          text: "फिर एक बार मोदी सरकार क्योंकि",
          href: "#why_modi",
        },
        {
          id: "nav-1",
          text: "भाजपा लाइव",
          href: "#bjp-live",
        },
        {
          id: "nav-2",
          text: "कैंपेन एंथम",
          href: "#kaamdaar",
        },
        {
          id: "nav-3",
          // text: "नए भारत का नया जोश",
          text: "आपके एक वोट से",
          href: "#achivments",
        },
        {
          id: "nav-4",
          text: "क्विज़",
          href: "#quiz_section",
        },
        {
          id: "nav-5",
          text: "विकसित भारत की ओर",
          href: "#promise",
        },
      ],
      language: {
        id: "nav-8",
        text: "English",
        href: "/en/",
      },
    },
    en: {
      navText: [
        {
          id: "nav-0",
          text: "Phir Ek Baar Modi Sarkar Kyunki",
          href: "#why_modi",
        },
        {
          id: "nav-1",
          text: "BJP Live",
          href: "#bjp-live",
        },
        {
          id: "nav-2",
          text: "Campaign Anthem",
          href: "#kaamdaar",
        },
        {
          id: "nav-3",
          // text: "Transforming Bharat",
          text: "Aapke Ek Vote Se",
          href: "#achivments",
        },
        {
          id: "nav-4",
          text: "Quiz",
          href: "#quiz_section",
        },
        {
          id: "nav-5",
          text: "Towards a Developed Bharat",
          href: "#promise",
        },
      ],
      language: {
        id: "nav-8",
        text: "हिंदी",
        href: "/",
      },
    },
  } as Navbar_DATA;

  const navLinks = lang === "hi" ? DATA.hi : DATA.en;

  return (
    // bg-body-tertiary
    <nav className="navbar navbar-expand-lg  py-md-0">
      <div className="container-fluid px-2 px-md-5 py-md-0">
        <a className="navbar-brand" href={lang === "hi" ? "/" : "/en/"}>
          <Image
            width={125}
            height={86}
            alt="logo"
            className=""
            style={{ width: "125px", objectFit: "contain" }}
            src={lang === "hi" ? "/img/hinlogo.png" : "/img/englogo.png"}
            // placeholder="blur"
            // blurDataURL={base64}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="t">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              viewBox="0 0 448 512"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-0 ms-auto">
            {/* LESS CONDITION FAST EXECUTION THAT WHY WRITE LANG CONDITION OUTSIDE */}
            <>
              {navLinks.navText.map((nav, index) => (
                <li className="nav-item " key={nav.id}>
                  <a
                    className="nav-link  nav-right-border"
                    aria-current="page"
                    href={nav.href}
                  >
                    {nav.text}
                  </a>
                </li>
              ))}
              <li className="nav-item " key={navLinks.language.id}>
                <Link
                  className="nav-link nav-right-border nav-button"
                  href={navLinks.language.href}
                >
                  {navLinks.language.text}
                </Link>
              </li>
            </>
          </ul>
        </div>
      </div>
    </nav>
  );
}
