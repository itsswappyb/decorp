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

const Review = () => {
  const [showNameInput, setShowNameInput] = useState(false);
  const [nameOrWallet, setNameOrWallet] = useState("");
  const { entity, add: addEntity } = useEntityStore();

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
        <Button
          type="button"
          onClick={() => {
            // Router.push("/success");
          }}
          className="w-full"
        >
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Review;
