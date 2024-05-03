import Image from "next/image";

export default function Footer({ lang }: { lang: string }) {
  const base64_bg =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAIAAAB2XpiaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAFklEQVR4nGP4//7Wn/Nb/985YsTAAABA/QgaTOzu6wAAAABJRU5ErkJggg==";
  const base64_logo =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAYAAAC09K7GAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAPklEQVR4nAEzAMz/AK2RghIAAAAA2vrtle/37agAtIxxitSjhO3z3cr///nv1AD/+a8O/8ybtP/Dnqzv1bx3+ugg7TmfYBAAAAAASUVORK5CYII=";

  return (
    <>
      <div
        className="container-fluid d-none d-md-block"
        style={{ overflow: "hidden" }}
      >
        <div className="row mt-2 pt-5">
          <div className="col-md-3 px-0" style={{ zIndex: "99999" }}>
            <div className="w-100 ">
              <Image
                width={270}
                height={150}
                loading="lazy"
                style={{
                  width: "64%",
                  height: "fit-content",
                  float: "right",
                  marginBottom: "-4%",
                  marginRight: "-8%",
                }}
                src={`/img/${lang === "hi" ? "hin" : "eng"}logo.png`}
                alt="logo"
                placeholder="blur"
                blurDataURL={base64_logo}
              />
            </div>
          </div>
          <div
            className="col-md-9 px-0 "
            style={{ display: "flex", alignItems: "baseline" }}
          >
            <Image
              width={1160}
              height={92}
              className="w-100"
              style={{
                marginTop: "auto",
                marginBottom: "0px",
                height: "92px",
              }}
              src="/img/footer_d1.jpg"
              alt="footer background"
              placeholder="blur"
              blurDataURL={base64_bg}
            />
          </div>
        </div>
        <div
          className="row"
          style={{ backgroundColor: "#913300", position: "relative" }}
        >
          <div className="col-4">
            <p className="contactus pt-3">
              Connect With Us :
              <span>
                <a
                  href="https://www.facebook.com/BJP4India/"
                  target="_blank"
                  style={{ textDecoration: "none", cursor: "pointer" }}
                >
                  <Image
                    width={34}
                    height={34}
                    alt="facebook logo"
                    src="/img/fb.png"
                  />
                </a>
              </span>
              <span>
                <a
                  href="https://www.instagram.com/bjp4india/"
                  target="_blank"
                  style={{ textDecoration: "none", cursor: "pointer" }}
                >
                  <Image
                    width={34}
                    height={34}
                    alt="instagram logo"
                    src="/img/ig.png"
                  />
                </a>
              </span>
              <span>
                <a
                  href="https://whatsapp.com/channel/0029Va8zDJJ7DAWqBIgZSi0K"
                  target="_blank"
                  style={{ textDecoration: "none", cursor: "pointer" }}
                >
                  <Image
                    width={34}
                    height={34}
                    alt="whatsapp logo"
                    src="/img/wts.webp"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "50%",
                    }}
                  />
                </a>
              </span>
            </p>
          </div>
          <div className="col-4 pt-5">
            <p className="footer_text">Copyright © 2024 PhirEkBaarModiSarkar</p>
          </div>
          <p className=" z-index: 99999;">
            <a href="#top">
              {" "}
              <img
                className="p-2"
                style={{
                  position: "absolute",
                  bottom: "0",
                  right: "1%",
                  borderRadius: "52px",
                  border: "5px solid #f16f0a",
                  backgroundColor: "#fff",
                  zIndex: "99999",
                  width: "45px",
                }}
                src="/img/top_arrow.png"
              />
            </a>
          </p>
        </div>
      </div>
      <div className="d-md-none d-block">
        <div className="container mt-3 px-2 mb-3">
          <center>
            <Image
              width={250}
              height={130}
              className="w-75 px-4"
              style={{ height: "fit-content" }}
              src={`/img/${lang === "hi" ? "hin" : "eng"}logo.png`}
              alt="logo"
              placeholder="blur"
              blurDataURL={base64_logo}
            />
          </center>
          <p className="contactus">
            Connect With Us :
            <span>
              <a
                href="https://www.facebook.com/BJP4India/"
                target="_blank"
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                <Image
                  width={34}
                  height={34}
                  alt="facebook logo"
                  src="/img/fb.png"
                />
              </a>
            </span>
            <span>
              <a
                href="https://www.instagram.com/bjp4india/"
                target="_blank"
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                <Image
                  width={34}
                  height={34}
                  alt="instagram logo"
                  src="/img/ig.png"
                />
              </a>
            </span>
            <span>
              <a
                href="https://whatsapp.com/channel/0029Va8zDJJ7DAWqBIgZSi0K"
                target="_blank"
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                <Image
                  width={34}
                  height={34}
                  alt="whatsapp logo"
                  src="/img/Whatsapp-Logo_34X34.webp"
                />
              </a>
            </span>
          </p>
        </div>
        <p style={{ marginBottom: "-1px" }}>
          <Image
            width={275}
            height={50}
            className="w-100"
            src="/img/footer_image1.png"
            alt="footer background"
          />
        </p>
        <div
          className="container-fluid p-3"
          style={{ backgroundColor: "#913300", position: "relative" }}
        >
          {/* <!-- <p className="footer_text">Privacy Policy | Disclaimer </p> --> */}
          <p className="footer_text">Copyright © 2023 PhirEkBaarModiSarkar</p>
          <p>
            <a href="#top">
              {" "}
              <img
                className="p-2"
                style={{
                  position: "absolute",
                  bottom: "-12px",
                  right: "1%",
                  borderRadius: "52px",
                  border: "5px solid #f16f0a",
                  backgroundColor: "#fff",
                  width: "45px",
                }}
                src="/img/top_arrow.png"
              />
            </a>
          </p>
        </div>
      </div>
      <p
        style={{
          width: "100%",
          height: "20px",
          backgroundColor: "#f16f0a",
          zIndex: "1",
          marginBottom: "0px",
        }}
      ></p>
    </>
  );
}
