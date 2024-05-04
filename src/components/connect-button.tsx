import { ConnectWallet } from "@thirdweb-dev/react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

interface Props {
  title?: string;
  className?: string;
  onClick?: () => void;
}

export default function ConnectButton({
  title = "Connect Wallet",
  className,
  onClick,
}: Props) {
  return (
    <ConnectWallet
      theme="light"
      btnTitle={title}
      className={cn(buttonVariants({ variant: "default" }), className)}
      modalTitleIconUrl="/images/swiftlaw-logo.svg"
      modalTitle="SwiftLaw"
      welcomeScreen={{
        title: "Welcome to SwiftLaw - AI-empowered Legal Services.",
        subtitle: "Connect a wallet to proceed!",
        img: {
          src: "/images/swiftlaw-logo.svg",
          width: 300,
          height: 150,
        },
      }}
      showThirdwebBranding={false}
      onConnect={async (wallet) => {
        const walletAddress = await wallet.getAddress();
        console.log("Wallet address:", walletAddress);

        onClick?.();
      }}
    />
  );
}
