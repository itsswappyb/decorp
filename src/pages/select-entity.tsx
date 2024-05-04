import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Router from "next/router";
import { useEntityStore } from "@/store/zustand";
import { useAddress } from "@thirdweb-dev/react";

const SelectEntity = () => {
  const { entity, add: addEntity } = useEntityStore();
  const address = useAddress();

  console.log({ entity });
  return (
    <div className="flex flex-col items-center mt-32 mx-36">
      <h1 className="text-3xl font-thin tracking-widest text-[#8D8D8D] mb-9">
        What kind of entity would you like to form?
      </h1>

      <div className="grid grid-cols-3 gap-x-6">
        {/* DAO */}
        <Card>
          <CardHeader>
            <CardTitle>Decentralized Autonomous Organization (DAO)</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Setup a Decentralized Autonomous Organization (DAO) quickly and
              transparently
              <br />
              <br />
              Perfect for decentralized governance or community-driven projects.
              <br />
              <br />
              Ideal for projects prioritizing decentralized decision-making and
              community involvement.
            </p>
          </CardContent>
          <CardFooter>
            <Button
              onClick={() => {
                console.log("DAO selected");
                addEntity({
                  name: "",
                  ownerOrManagerNameOrAddress: address || "",
                  description: "",
                  type: "DAO",
                  treasuryWalletAddress: "",
                });
                Router.push("/kyc");
              }}
            >
              Select
            </Button>
          </CardFooter>
        </Card>
        {/* BVI */}
        <Card>
          <CardHeader>
            <CardTitle>BVI Business Company</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Setup a BVI Business Company (BC) in just 10 business days.
              <br />
              <br />
              Excellent for token issuance, asset holding, or VC endeavors.
              <br />
              <br />
              Enjoy privacy benefits as directors and shareholders remain off
              public records.
              <br />
              <br /> Ideal for DeFi companies needing a token entity.
            </p>
          </CardContent>
          <CardFooter>
            <Button
              onClick={() => {
                console.log("DAO selected");
                addEntity({
                  name: "",
                  ownerOrManagerNameOrAddress: address || "",
                  description: "",
                  type: "BVI Limited Company",
                  treasuryWalletAddress: "",
                });
                Router.push("/kyc");
              }}
            >
              Select
            </Button>
          </CardFooter>
        </Card>
        {/* Coming Soon */}
        <Card>
          <CardHeader>
            <CardTitle>Cayman Islands</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500 italic">Coming Soon...</p>
          </CardContent>
          <CardFooter className="self-end">
            <Button
              onClick={() => {
                console.log("DAO selected");
              }}
              className="hidden"
            >
              Select
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SelectEntity;
