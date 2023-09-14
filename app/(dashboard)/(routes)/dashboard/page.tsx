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
                                backgroundImage: `url('https://www.analyticsinsight.net/wp-content/uploads/2020/06/The-rise-of-conversational-AI.jpg')`,
                                backgroundSize: 'cover',
                                height: '300px',
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
                                backgroundImage: `url('https://images1.welcomesoftware.com/Zz1jMjJlYWU5MjgyZGExMWVjOWYwMTQyYjRkZjYxNDhlYw==')`,
                                backgroundSize: 'cover',
                                height: '300px',
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
                                backgroundImage: `url('https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg')`,
                                backgroundSize: 'cover',
                                height: '300px',
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
                                backgroundImage: `url('https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&w=1000&q=80')`,
                                backgroundSize: 'cover',
                                height: '300px',
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

            </div>
        </div>
    )
}

export default DashboardPage;