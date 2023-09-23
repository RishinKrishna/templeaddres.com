import "@/styles/globals.css";
import "@/styles/table.scss";
import { Outfit } from "next/font/google";
import { Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const outfit = Outfit({
  subsets: ["latin"],
  display: "auto",
  adjustFontFallback: false,
});
const poppins = Poppins({
  subsets: ["latin"],
  display: "auto",
  adjustFontFallback: false,
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }) {
  let getPage = Component.getLayout
    ? () =>
        Component.getLayout(
          <div className={`${outfit.className} ${poppins.className}`} id="root">
            <Component {...pageProps} />
            <ToastContainer />
          </div>
        )
    : () => (
        <div className={outfit.className} id="root">
          <Component {...pageProps} />
          <ToastContainer />
        </div>
      );

  return <>{getPage()}</>;
}
