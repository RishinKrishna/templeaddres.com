import "@/styles/globals.css";
import { Outfit } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const outfit = Outfit({
  subsets: ["latin"],
  display: "auto",
  adjustFontFallback: false,
});

export default function App({ Component, pageProps }) {
  return (
    <div className={outfit.className}>
      <Component {...pageProps} />
      <ToastContainer />
    </div>
  );
}
