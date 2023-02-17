import "@/styles/globals.css";
import NavBar from "components/organisms/nav-bar";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="w-screen h-screen">
      <Component {...pageProps} />
    </div>
  );
}
