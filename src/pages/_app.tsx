import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  rainbowWallet,
} from "@thirdweb-dev/react";

import { ACTIVE_CHAIN } from "@/lib/constants";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={ACTIVE_CHAIN}
      clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
      supportedWallets={[
        metamaskWallet(),
        coinbaseWallet(),
        walletConnect(),
        rainbowWallet(),
      ]}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThirdwebProvider>
  );
}
