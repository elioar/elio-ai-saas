"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("16b7b370-1ddd-40b2-ab77-67c3f4c82a11");
    }, [])


return null;
}