import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Router from "next/router";
import { Label } from "@/components/ui/label";
import { useEntityStore } from "@/store/zustand";
import Image from "next/image";

import { useContract, useLazyMint, Web3Button } from "@thirdweb-dev/react";
import { NFT_ADDRESS_CARDONA } from "../lib/constants";

const Review = () => {
  const [showNameInput, setShowNameInput] = useState(false);
  const [nameOrWallet, setNameOrWallet] = useState("");
  const { entity, add: addEntity } = useEntityStore();

  const { contract } = useContract(NFT_ADDRESS_CARDONA);
  const { mutateAsync: lazyMint, isLoading, error } = useLazyMint(contract);

  console.log({ entity });

  return (
    <Card className="flex flex-col items-center mt-32 max-w-2xl py-6 mx-auto">
      <CardTitle className="text-3xl font-thin tracking-widest text-[#8D8D8D] mb-9">
        Review & Submit
      </CardTitle>

      <CardContent className="px-12">
        <div className="grid grid-cols-2 gap-x-6 items-center">
          <div className="border-[1px] rounded-md border-gray-300 p-6">
            <Image
              src="/images/swiftlaw-logo.png"
              width={200}
              height={200}
              alt="logo"
            />
          </div>
          <div>
            <div>
              <p className="text-sm uppercase font-bold mb-3">
                Registered Address At
              </p>
              <p className="tracking-widest font-light">
                {entity?.residentialAddress}
              </p>
            </div>
            <br />
            <div>
              <p className="text-sm uppercase font-bold  mb-3">Entity NFT</p>
              <p className="tracking-widest font-light">
                Upon submission, an NFT will be found in your wallet as proof of
                control of your new entity.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="w-full px-12">
        {/* <Button
          type="button"
          onClick={() => {
            // TODO:
            // lazy mint NFT
            // Router.push("/success");
          }}
          className="w-full"
        >
          Submit
        </Button> */}
        <Web3Button
          contractAddress={NFT_ADDRESS_CARDONA}
          action={async () => {
            await lazyMint({
              // Metadata of the NFTs to upload
              metadatas: [
                {
                  name: entity?.name || "",
                  description: entity?.description || "",
                  image: "/images/swiftlaw-logo.png",
                  external_url: "https://swiftlaw-decorp.vercel.app",
                  attributes: [
                    {
                      trait_type: "Company Name",
                      value: entity?.name || "",
                    },
                    {
                      trait_type: "Company Description",
                      value: entity?.description || "",
                    },
                    {
                      trait_type: "Owner",
                      value: entity?.ownerOrManagerNameOrAddress || "",
                    },
                    {
                      trait_type: "Company Type",
                      value: entity?.type || "",
                    },
                    {
                      trait_type: "Treasury Wallet Address",
                      value: entity?.treasuryWalletAddress || "",
                    },
                    {
                      trait_type: "Residential Address",
                      value: entity?.residentialAddress || "",
                    },
                  ],
                },
              ],
            });

            Router.push("/success");
          }}
        >
          {isLoading ? "Submitting..." : "Submit & Claim"}
        </Web3Button>
      </CardFooter>
    </Card>
  );
};

export default Review;
