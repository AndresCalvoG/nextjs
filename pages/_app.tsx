import type { AppProps } from "next/app";
import Layout from "@components/Layout/Layout";
import "../style.css";

export default function App({ Component, pageProps }: AppProps) {
  //providers
  //layout
  //additional props
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
