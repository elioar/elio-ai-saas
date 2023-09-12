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
                <div className="relative h-8 w-8 mr-4">
                    <Image
                        fill
                        alt="Logo"
                        src="/logo.png"
                    />
                </div>
                <h1 className={cn("text-2xl font-bold", font.className)}>
                    Elio Ai
                </h1>
            </Link>
            <div className="flex items-center gap-x-2">
                <ModeToggle />
                <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
                    <Button variant="outline" className="rounded-full">
                        Sign In
                    </Button>
                </Link>
            </div>
        </nav>
    )
}
