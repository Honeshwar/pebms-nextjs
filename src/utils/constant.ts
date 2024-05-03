function generateShareLinks(link: string, text?: string) {
  link = encodeURIComponent(link);
  if (text && text?.length >= 1) {
    text = encodeURIComponent(text);
  } else {
    text = "";
  }
  let what_link = text + " " + link;
  let twitter_link =
    "https://twitter.com/intent/tweet?url=" + link + "&text=" + text;
  let facebook_link =
    "http://www.facebook.com/sharer/sharer.php?u=" + link + "&text=" + text;
  let whatsapp_link = "";
  if (screen.width > 750) {
    whatsapp_link =
      "https://web.whatsapp.com/send?url=" + link + "&text=" + what_link;
  } else {
    whatsapp_link = "https://wa.me/?url=" + link + "&text=" + what_link;
  }

  return { twitter_link, facebook_link, what_link };
}

function generateCertificate(
  mobile: string,
  lang: string,
  cb: () => void,
  setScreen: () => void
) {}
export { generateShareLinks, generateCertificate };
