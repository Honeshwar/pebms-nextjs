"use client";

// import { useEffect, useState } from "react";
import { PledgeContextProvider } from "@/context/PledgeContext";
import PledgeDescendant from "./PledgeDescendant";
import { useEffect } from "react";
import translations from "@/utils/translations";

function Pledge({ lang }: { lang: string }) {
  useEffect(() => {
    function updateContent(t: string) {
      var e = document.querySelector('meta[name="title"]'),
        a = document.querySelector('meta[name="description"]');
      if (e) e.setAttribute("content", translations[t]["meta-title"]);
      else {
        const metaTag = document.createElement("meta");
        metaTag.setAttribute("name", "title");
        metaTag.setAttribute("content", translations[t]["meta-title"]);
        // Get the head element
        var head = document.head || document.getElementsByTagName("head")[0];

        // Append the meta tag to the head
        head.appendChild(metaTag);
      }
      if (a) a.setAttribute("content", translations[t]["meta-description"]);
      else {
        const metaTag = document.createElement("meta");
        metaTag.setAttribute("name", "description");
        metaTag.setAttribute("content", translations[t]["meta-description"]);
        // Get the head element
        var head = document.head || document.getElementsByTagName("head")[0];

        // Append the meta tag to the head
        head.appendChild(metaTag);
      }

      const title = document.querySelector("title");
      title && (title.textContent = translations[t]["title"]);
    }

    updateContent(lang);
  }, [lang]);

  return (
    <PledgeContextProvider>
      <PledgeDescendant lang={lang} />
    </PledgeContextProvider>
  );
}

export default Pledge;
