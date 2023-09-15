"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ModeToggle } from "./Mode-toggle";

const font = Montserrat({
    weight: "600",
    subsets: ["latin"]
})

export const LandingNavbar = () => {
    const { isSignedIn } = useAuth();

    return (
        <nav className="p-4 bg-transparent flex items-center justify-between">
            <Link href="/" className="flex items-center">
                <div className="relative h-8 w-8 mr-2">
                    <Image
                        height="30"
                        width="25"
                        alt="Logo"
                        src="/lighting.png"
                    />
                </div>
                <div className="flex-1 mt-2">
                    <Image
                        width="80"
                        height="50"
                        alt="logo"
                        src="./svg/eixai-w.svg"
                    />
                </div>
            </Link>
            <div className="flex items-center gap-x-2">
                <ModeToggle />
                <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
                    <Button variant="outline" className="rounded-full bg-[rgba(250, 250, 250, 0.20)] border-white">
                        Sign In
                    </Button>
                </Link>
            </div>
        </nav>
    )
}
