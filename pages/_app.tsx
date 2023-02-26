import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import network from "../utils/network";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={network}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
