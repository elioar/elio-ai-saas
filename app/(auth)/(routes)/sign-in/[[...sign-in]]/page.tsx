"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";


import {
  Card,
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
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, delay: 1 } // 1-second delay
    }}
  >
      {isCardVisible && (
    
  <Card className="border-0	rounded-[20px] pr-20 relative mb-5 bg-[rgba(0,0,0,0.7)]">
    <button
      onClick={handleRemoveCard}
      className="absolute top-4 right-3.5 p-0.5 cursor-pointer ease-in-put  hover:scale-110 duration-300"
    >
      <Image
        alt=""
        height="13"
        src="/images/close.png"
        width="13"
      />
    </button>
    <CardHeader>
      <CardTitle className="pl-5 pt-5">Demo Preview:</CardTitle>
      <CardDescription className="p-5">
        Email: <b>demo@demo.com</b>
        <br />
        Password: <b>1234</b>
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
      </motion.div>
    </div>
  );
}
