"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import Image from "@/node_modules/next/image";
import { ModeToggle } from "@/components/Mode-toggle";

const LandingPage = () => {
    const [darkMode, setDarkMode] = useState(true); // Set dark mode as default

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkMode]);

    useEffect(() => {
        // Load user preference from localStorage on component mount
        const storedMode = localStorage.getItem("darkMode");
        if (storedMode !== null) {
            setDarkMode(storedMode === "true");
        }
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    // Update user preference in localStorage whenever darkMode changes
    useEffect(() => {
        localStorage.setItem("darkMode", darkMode.toString());
    }, [darkMode]);

    return (
        <div className="flex items-center mt-2">
            <div className="ml-5 w-20 h-20 relative">
                <Image
                    alt="logo"
                    fill
                    src="/svg/logo-white.svg"
                    className="white:bg-dark"
                />
            </div>
            <div className="flex w-full justify-end mr-5">
                <ModeToggle/>
            </div>
            <div>
                <Link href="/sign-in">
                    <Button>
                        Login
                    </Button>
                </Link>
                <Link href="/sign-up">
                    <Button>
                        Register
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage;
