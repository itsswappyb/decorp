import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const Logo = () => {
  return (
    <Link href="/" className="flex hover:opacity-75">
      <Image
        alt="SwiftLaw"
        width={40}
        height={40}
        src="/images/swiftlaw-logo.png"
        className="object-contain"
      />
      <div className="flex items-center font-extralight tracking-[3px] text-[#8D8D8D]">
        <p className={cn(inter.className, "text-lg")}>
          DeCorp<span className="ml-2 text-[10px] uppercase">by SwiftLaw</span>
        </p>
      </div>
    </Link>
  );
};

export default Logo;
