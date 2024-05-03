// import "../hindiPage.css";
import "../../styles/englishPage.css";
// import "../styles/swiperSlider.css";

import { Metadata } from "next"; // import for types
import data from "../../utils/data";
import Header from "../../components/Header/Header";
import Main from "../../components/Main";

export const metadata: Metadata = data.en.Metadata; //naming export key=metadata

export default function page() {
  return (
    <div
      id="english-page"
      className="body-main-site"
      style={{ position: "relative" }}
    >
      <Header lang="en" />
      <Main lang="en" />
    </div>
  );
}
