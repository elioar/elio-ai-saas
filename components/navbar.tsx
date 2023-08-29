"use client"
import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "@/components/mobile-sidebar";
import { useLayoutEffect, useState } from "react";
import { Switch } from "./ui/switch";
import Image from "next/image";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    useLayoutEffect(() => {
        document.body.classList.toggle('dark', darkMode);
    }, [darkMode]);

    return (
        <div className="flex items-center p-4">
            <MobileSidebar />
            <div className="mr-6 flex w-full justify-end items-center">
                <Image
                    alt="logo"
                    width={30}
                    height={30}
                    src="/sun.png"
                />
                <Switch className="mr-3 ml-1.5" onClick={() => setDarkMode(prevMode => !prevMode)} />
                <Image
                    alt="logo"
                    width={20}
                    height={20}
                    src="/moon.png"
                />
                
            </div>
            <UserButton afterMultiSessionSingleSignOutUrl="/" />
        </div>
    );
}

export default Navbar;