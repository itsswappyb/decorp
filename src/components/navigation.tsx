import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";
import Logo from "./ui/logo";

type Props = {};

function Navigation({}: Props) {
  const router = useRouter();

  return (
    <nav className="my-12 flex justify-around items-center sticky z-10 backdrop-filter backdrop-blur-lg bg-opacity-30">
      <Link href="/" className="hover:opacity-75">
        {/* <p className="font-[ramaraga-bold] font-extrabold text-xl">Augier</p> */}
        <Logo />
      </Link>

      <Button onClick={() => router.push("#")} variant="link" className="">
        Connect Wallet
      </Button>
    </nav>
  );
}

export default Navigation;
