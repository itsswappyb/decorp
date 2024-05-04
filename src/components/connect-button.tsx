import { ConnectWallet } from "@thirdweb-dev/react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { useAddress } from "@thirdweb-dev/react";

interface Props {
  title?: string;
  className?: string;
  onClick?: () => void;
}

export default function ConnectButton({
  title = "Connect Wallet",
  className = "text-white",
  onClick,
}: Props) {
  const address = useAddress();

  return (
    <ConnectWallet
      theme="light"
      btnTitle={title}
      className={cn(className, buttonVariants({ variant: "default" }))}
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
      detailsBtn={() => {
        return (
          <Button variant="outline" asChild className="cursor-pointer">
            {/* sliced address - first 6 and last 6 */}
            <div>{address?.slice(0, 6) + "..." + address?.slice(-6)}</div>
          </Button>
        );
      }}
    />
  );
}
