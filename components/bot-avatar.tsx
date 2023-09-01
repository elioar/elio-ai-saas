import { Avatar, AvatarImage } from "./ui/avatar";
import React, { useState, useEffect } from "react";

export const BotAvatar = () => {
    const [darkMode, setDarkMode] = useState(true); // Default dark mode state

    useEffect(() => {
        const storedMode = localStorage.getItem("darkMode");
        if (storedMode !== null) {
            setDarkMode(storedMode === "true");
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("darkMode", darkMode.toString());
        document.body.classList.toggle('dark', darkMode);
    }, [darkMode]);

    // Update the image source based on the current mode
    const imageSrc = darkMode ? "/svg/logo-white.svg" : "/svg/logo.svg";

    return (
        <Avatar className="h-8 w-8">
            <AvatarImage className="p-1" src={imageSrc} />
        </Avatar>
    );
};
