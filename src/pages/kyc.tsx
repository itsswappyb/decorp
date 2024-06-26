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
import { useAddress } from "@thirdweb-dev/react";

const KYC = () => {
  const [showNameInput, setShowNameInput] = useState(false);
  const [nameOrWallet, setNameOrWallet] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const { entity, add: addEntity } = useEntityStore();

  const address = useAddress();
  console.log({ entity });

  return (
    <Card className="flex flex-col items-center mt-32 max-w-2xl py-6 mx-auto">
      <CardTitle className="text-3xl font-thin tracking-widest text-[#8D8D8D] mb-9">
        {showNameInput
          ? "Enter your full name or wallet address."
          : "Would you like to remain public or private?"}
      </CardTitle>

      <CardContent>
        {showNameInput ? (
          <div className="flex flex-col w-full max-w-xl justify-center">
            <Label className="text-sm tracking-wide text-black mb-3">
              This will be the Manager of the Entity.
            </Label>
            <Input
              type="text"
              placeholder="Full Name or Wallet Address"
              className="mb-6"
              onChange={(e) => setNameOrWallet(e.target.value)}
            />
            <Label className="text-sm tracking-wide text-black mb-3">
              Name of the Entity.
            </Label>
            <Input
              type="text"
              placeholder="Company Name"
              className="mb-6"
              onChange={(e) => setCompanyName(e.target.value)}
            />
            <Label className="text-sm tracking-wide text-black mb-3">
              Describe what your Company does.
            </Label>
            <Input
              type="text"
              placeholder="Company Description"
              className="mb-6"
              onChange={(e) => setCompanyDescription(e.target.value)}
            />
            <Button
              type="button"
              onClick={() => {
                const newEntity = {
                  ...entity,
                  ownerOrManagerNameOrAddress: nameOrWallet,
                  name: companyName,
                  description: companyDescription,
                  treasuryWalletAddress: address,
                };
                addEntity(newEntity);
                Router.push("/review");
              }}
            >
              Next
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-x-6">
            {/* Public */}
            <Card className="max-h-[250px] flex flex-col justify-around">
              <CardHeader>
                <CardTitle>Public</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Good for establishing trust in the public.</p>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() => {
                    console.log("Public selected");
                    setShowNameInput(true);
                  }}
                >
                  Select
                </Button>
              </CardFooter>
            </Card>
            {/* Anonymous */}
            <Card className="max-h-[250px] flex flex-col justify-around">
              <CardHeader>
                <CardTitle>Anonymous</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Preferred by DeFi companies with complex tokenomics.</p>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() => {
                    console.log("Anonymous selected");
                    setShowNameInput(true);
                  }}
                >
                  Select
                </Button>
              </CardFooter>
            </Card>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default KYC;
