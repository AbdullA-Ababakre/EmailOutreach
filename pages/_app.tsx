import "@/styles/globals.css";
import type { AppProps } from "next/app";
import 'dotenv/config'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className="scroll-smooth antialiased [font-feature-settings:'ss01']">
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
