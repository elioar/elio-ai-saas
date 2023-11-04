"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  const [isCardVisible, setCardVisible] = useState(true);

  const handleRemoveCard = () => {
    setCardVisible(false);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {isCardVisible && (
        <Card className="pl-16 pr-20 relative mb-5 bg-[rgba(0,0,0,0.7)]">
          <button
            onClick={handleRemoveCard}
            className="absolute top-2 right-2 p-0.5 bg-red-500 text-white rounded-full cursor-pointer hover:bg-red-600"
          >
            X
          </button>
          <CardHeader>
            <CardTitle className="pl-5 pt-5">Demo Preview:</CardTitle>
            <CardDescription className="p-5">
                Email: demo@demo.com
                <br />
                Password: 1234
            </CardDescription>
          </CardHeader>
        </Card>
      )}
      <SignIn
        appearance={{
          layout: {
            socialButtonsPlacement: "bottom",
            socialButtonsVariant: "iconButton",
            termsPageUrl: "https://clerk.dev/terms",
          },
          variables: {
            colorText: "white",
            colorPrimary: "white",
            colorAlphaShade: "white",
            colorInputText: "white",
            colorBackground: "rgba(0, 0, 0, 0.75)",
            colorInputBackground: "rgba(250, 250, 250, 0.05)",
          },
          elements: {
            formButtonPrimary:
              "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
            socialButtonsProviderIcon__apple:
              "bg-origin-content p-0.5 bg-white rounded-full",
          },
        }}
      />
    </div>
  );
}
