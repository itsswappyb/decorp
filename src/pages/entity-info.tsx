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

const EntityInfo = () => {
  return (
    <div className="flex flex-col items-center mt-32 mx-36">
      <h1 className="text-3xl font-thin tracking-widest text-[#8D8D8D] mb-9">
        Enter your Company Information
      </h1>
      {/* <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Decentralized Autonomous Organization (DAO)
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Establish a Decentralized Autonomous Organization (DAO) swiftly. Our
          streamlined process ensures quick setup, incorporating appropriate
          protocols and designating us as your facilitator for rapid activation.
          DAOs offer exceptional value for decentralized governance,
          crowdfunding, or community-driven projects. Enjoy the added benefit of
          transparency, as DAO operations are visible on the blockchain. Plus,
          DAOs offer global accessibility and eliminate the need for traditional
          intermediaries. Ideal for projects seeking decentralized
          decision-making and community involvement.
        </p>
      </div> */}
      <div className="grid grid-cols-12 gap-x-6">
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

export default EntityInfo;
