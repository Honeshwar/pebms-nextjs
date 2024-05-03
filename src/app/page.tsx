import "./hindiPage.css"; //nextjs add all styles in page.css file , if page.css file include any styles, all new style like this boostrap style below add top of the page.css so that it can overide boostrap style
// import "./styles/swiperSlider.css";
import { Metadata } from "next"; // import for types
import data from "../utils/data";
import Header from "../components/Header/Header";

import Main from "../components/Main";
export const metadata: Metadata = data.hi.Metadata; //naming export key=metadata

export default function Home() {
  return (
    <div
      id="hindi-page"
      className="body-main-site"
      style={{ position: "relative" }}
    >
      <Header lang="hi" />
      <Main lang="hi"></Main>
    </div>
  );
}
