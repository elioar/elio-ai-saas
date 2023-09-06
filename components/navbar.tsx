"use client"
import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "@/components/mobile-sidebar";
import { useEffect, useState } from "react";
import { Switch } from "./ui/switch";
import Image from "next/image";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(true); // Set dark mode as default

    // Load user preference from localStorage on component mount
    useEffect(() => {
        const storedMode = localStorage.getItem("darkMode");
        if (storedMode !== null) {
            setDarkMode(storedMode === "true");
        }
    }, []);

    // Update user preference in localStorage whenever darkMode changes
    useEffect(() => {
        localStorage.setItem("darkMode", darkMode.toString());
        document.body.classList.toggle('dark', darkMode);
    }, [darkMode]);

    return (
        <div className="flex items-center p-4">
            <MobileSidebar />
            <div className="mr-6 flex w-full justify-end items-center">
                <svg className="dark:fill-white"
                viewBox="0 0 129 129"
                width={30}
                height={30}
                >
                <g>
                    <g>
                    <path d="m64.5,92.6c15.5,0 28-12.6 28-28s-12.6-28-28-28-28,12.6-28,28 12.5,28 28,28zm0-47.9c11,0 19.9,8.9 19.9,19.9 0,11-8.9,19.9-19.9,19.9s-19.9-8.9-19.9-19.9c0-11 8.9-19.9 19.9-19.9z"/>
                    <path d="m68.6,23.6v-12.9c0-2.3-1.8-4.1-4.1-4.1s-4.1,1.8-4.1,4.1v12.9c0,2.3 1.8,4.1 4.1,4.1s4.1-1.8 4.1-4.1z"/>
                    <path d="m60.4,105.6v12.9c0,2.3 1.8,4.1 4.1,4.1s4.1-1.8 4.1-4.1v-12.9c0-2.3-1.8-4.1-4.1-4.1s-4.1,1.8-4.1,4.1z"/>
                    <path d="m96.4,38.5l9.1-9.1c1.6-1.6 1.6-4.2 0-5.8-1.6-1.6-4.2-1.6-5.8,0l-9.1,9.1c-1.6,1.6-1.6,4.2 0,5.8 0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2z"/>
                    <path d="m23.5,105.6c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l9.1-9.1c1.6-1.6 1.6-4.2 0-5.8-1.6-1.6-4.2-1.6-5.8,0l-9.1,9.1c-1.6,1.6-1.6,4.2 0,5.8z"/>
                    <path d="m122.5,64.6c0-2.3-1.8-4.1-4.1-4.1h-12.9c-2.3,0-4.1,1.8-4.1,4.1 0,2.3 1.8,4.1 4.1,4.1h12.9c2.2,1.42109e-14 4.1-1.8 4.1-4.1z"/>
                    <path d="m10.6,68.7h12.9c2.3,0 4.1-1.8 4.1-4.1 0-2.3-1.8-4.1-4.1-4.1h-12.9c-2.3,0-4.1,1.8-4.1,4.1 0,2.3 1.9,4.1 4.1,4.1z"/>
                    <path d="m102.6,106.8c1,0 2.1-0.4 2.9-1.2 1.6-1.6 1.6-4.2 0-5.8l-9.1-9.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l9.1,9.1c0.8,0.8 1.9,1.2 2.9,1.2z"/>
                    <path d="m38.4,38.5c1.6-1.6 1.6-4.2 0-5.8l-9.1-9.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l9.1,9.1c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2z"/>
                    </g>
                </g>
                </svg>
                <Switch className="mr-3 ml-1.5" onClick={() => setDarkMode(prevMode => !prevMode)} />
                <svg className="dark:fill-white"
                    width={25}
                    height={25}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path id="Moon"
                    d="M12.79,25A12.79,12.79,0,0,1,8.93,0,.5.5,0,0,1,9.5.76,10.72,10.72,0,0,0,24.24,15.49a.5.5,0,0,1,.74.58A12.73,12.73,0,0,1,12.79,25ZM8,1.43A11.79,11.79,0,1,0,23.57,17,11.73,11.73,0,0,1,8,1.43Z"
                    />
            </svg>
            </div>
            <UserButton afterMultiSessionSingleSignOutUrl="/" />
        </div>
    );
}
export default Navbar;