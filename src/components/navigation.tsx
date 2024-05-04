import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";
import Logo from "./ui/logo";
import ConnectButton from "@/components/connect-button";

type Props = {};

function Navigation({}: Props) {
  const router = useRouter();

  return (
    <nav className="mb-12 z-10 fixed flex w-full justify-around border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-sm">
      {/* <Link href="/" className="hover:opacity-75"> */}

      {/* <p className="font-[ramaraga-bold] font-extrabold text-xl">Augier</p> */}
      <Logo />
      {/* </Link> */}

      {/* <Button onClick={() => router.push("#")} className="">
        Connect Wallet
      </Button> */}
      <ConnectButton />
    </nav>
  );
}

export default Navigation;
