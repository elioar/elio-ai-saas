"use client";

import { Card } from "@/components/ui/card";
import { ArrowRight, Code, MessageSquare, ImageIcon, VideoIcon, Music, } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const tools = [
    {
        label: "Conversation",
        icon: MessageSquare,
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
        href: "/conversation"
    }, {
        label: "Music Generation",
        icon: Music,
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10",
        href: "/music"
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        color: "text-pink-700",
        bgColor: "bg-pink-700/10",
        href: "/image"
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        color: "text-yellow-700",
        bgColor: "bg-yellow-700/10",
        href: "/video"
    },
    {
        label: "Code Generation",
        icon: Code,
        color: "text-blue-700",
        bgColor: "bg-blue-700/10",
        href: "/code"
    },
]

const DashboardPage = () => {
    const router = useRouter();
    return (
        <div>
            <div className="mb-8 space-y-4">
                <h2 className="text-2xl md:text-4xl font-bold text-center">
                    Explore The Power Of AI
                </h2>
                <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
                    Chat with the smartest AI - Experience the power of AI
                </p>
            </div>
            <div className="px-4 md:px-20 lg:px-52 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-6 md:gap-6">
                    <Link href="/conversation">
                        <div
                            className="relative group transition-transform transform scale-100 group-hover:scale-105 rounded-xl hover:scale-105"
                            style={{
                                backgroundImage: `url('https://images.unsplash.com/photo-1626428091984-48f9ffbf927c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1866&q=80')`,
                                backgroundSize: 'cover',
                                height: '250px',
                            }}
                        >
                            <div
                                className="absolute inset-0 backdrop-blur-md backdrop-filter duration-300 opacity-0 group-hover:opacity-100 rounded-xl"
                            ></div>
                            <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl">
                                Conversation
                            </p>
                        </div>
                    </Link>
                    <Link href="/music">
                        <div
                            className="relative group transition-transform transform scale-100 group-hover:scale-105 rounded-xl hover:scale-105"
                            style={{
                                backgroundImage: `url('https://images.unsplash.com/photo-1629946832022-c327f74956e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80')`,
                                backgroundSize: 'cover',
                                height: '250px',
                            }}
                        >
                            <div
                                className="absolute inset-0 backdrop-blur-md backdrop-filter duration-300 opacity-0 group-hover:opacity-100 rounded-xl"
                            ></div>
                            <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl">
                                Music Generation
                            </p>
                        </div>
                    </Link>
                    <Link href="/image">
                        <div
                            className="relative group transition-transform transform scale-100 group-hover:scale-105 rounded-xl hover:scale-105"
                            style={{
                                backgroundImage: `url('https://images.unsplash.com/photo-1633907284646-7abf4a195875?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80')`,
                                backgroundSize: 'cover',
                                height: '250px',
                            }}
                        >
                            <div
                                className="absolute inset-0 backdrop-blur-md backdrop-filter duration-300 opacity-0 group-hover:opacity-100 rounded-xl"
                            ></div>
                            <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl">
                                Image Generation
                            </p>
                        </div>
                    </Link>
                    <Link href="/code">
                        <div
                            className="relative group transition-transform transform scale-100 group-hover:scale-105 rounded-xl hover:scale-105"
                            style={{
                                backgroundImage: `url('https://images.unsplash.com/photo-1650018943477-781416d478cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80')`,
                                backgroundSize: 'cover',
                                height: '250px',
                            }}
                        >
                            <div
                                className="absolute inset-0 backdrop-blur-md backdrop-filter duration-300 opacity-0 group-hover:opacity-100 rounded-xl"
                            ></div>
                            <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl">
                                Code Generation
                            </p>
                        </div>
                    </Link>

                </div>
            <div>
                <Link href="/code">
                    <div className="relative group transition-transform transform scale-100 group-hover:scale-105 rounded-xl hover:scale-105"
                            style={{
                            backgroundImage: `url('https://images.unsplash.com/photo-1559838536-082a0c488adf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80')`,
                            backgroundSize: 'cover',
                            height: '100px',
                        }}
                    >                      
                    <div className="absolute inset-0 backdrop-blur-md backdrop-filter duration-300 opacity-0 group-hover:opacity-100 rounded-xl"></div>
                        <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl">
                            Code Generation
                        </p>
                    </div>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default DashboardPage;