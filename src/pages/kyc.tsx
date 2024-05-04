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

const KYC = () => {
  return (
    <div className="flex flex-col items-center mt-32 mx-36">
      <h1 className="text-3xl font-thin tracking-widest text-[#8D8D8D] mb-9">
        Would you like to remain public or private?
      </h1>
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
              }}
            >
              Select
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default KYC;
