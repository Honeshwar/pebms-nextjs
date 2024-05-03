import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";
import data from "@/utils/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata = data.hi.Metadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi">
      <head>
        {/* <GTMComponent /> */}
        {/* before interactive  call , strategy: determine where to load the script  in head or body*/}
        <Script id="GTM-N6NTGGTG" strategy="beforeInteractive">
          {`
          (function (w, d, s, l, i) {
            console.log("GTM is called");
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-N6NTGGTG');
        `}
        </Script>
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N6NTGGTG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}

        {/* Add Bootstrap JS CDN link */}
        <Script
          id="bootstrap-cdn"
          strategy="lazyOnload"
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossOrigin="anonymous"
        ></Script>
      </body>
    </html>
  );
}

/**
 * <script async>{`(function (w, d, s, l, i) {
          console.log("GTM is called");
          w[l] = w[l] || [];
          w[l].push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
          });
          var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != 'dataLayer' ? '&l=' + l : '';
          j.async = true;
          j.src =
            'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
          f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-N6NTGGTG');`}</script>
 *   <Html>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id=%27+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GOOGLE_TAG_MANAGER_ID');
            `,
          }}
        />
      </Head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-xxxx"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
 */
