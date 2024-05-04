import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import Link from "next/link";

function Success() {
  const router = useRouter();

  return (
    <Card className="mx-auto max-w-4xl md:min-w-[620px] min-w-[360px] sm:min-w-[420px] min-h-[420px] px-9 flex flex-col justify-center">
      <CardHeader className="text-center flex flex-col items-center">
        <CheckCircle size={60} className="text-green-400" />
        <CardTitle className="text-xl font-bold">Order Confirmation</CardTitle>
        {/* <CardDescription></CardDescription> */}
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        Your order has been confirmed. You will receive an email with your
        Entity status and details shortly.
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button className="px-9" asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Success;
