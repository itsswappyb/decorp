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

const KYC = () => {
  const [showNameInput, setShowNameInput] = useState(false);

  return (
    <div className="flex flex-col items-center mt-32 mx-36">
      <h1 className="text-3xl font-thin tracking-widest text-[#8D8D8D] mb-9">
        {showNameInput
          ? "Enter your full name or wallet address"
          : "Would you like to remain public or private?"}
      </h1>

      {showNameInput ? (
        <div className="flex w-full max-w-xl items-center space-x-2">
          <Input type="text" placeholder="Full Name or Wallet Address" />
          <Button
            type="button"
            onClick={() => Router.push("/company-overview")}
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
    </div>
  );
};

export default KYC;
