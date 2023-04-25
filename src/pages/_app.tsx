import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function () {
      OneSignal.init({
        appId: "67918cd5-bd76-4138-9fae-3a2e54d39255",
        safari_web_id:
          "web.onesignal.auto.1b1338f0-ae7a-49c0-a5a1-0112be9b9bea",
        notifyButton: { enable: true },
        subdomainName: "pwa-next-js",
      });
    });
  }, []);
  return <Component {...pageProps} />;
}
