import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  //providers
  //layout
  //aditional props
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
