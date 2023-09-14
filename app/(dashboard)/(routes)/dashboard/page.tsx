"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { SendHorizontalIcon } from "lucide-react";

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
                    <Link href="/video">
                        <div
                            className="relative group transition-transform transform scale-100 group-hover:scale-105 rounded-xl hover:scale-105"
                            style={{
                                backgroundImage: `url('https://images.unsplash.com/photo-1626428091984-48f9ffbf927c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1866&q=80')`,
                                backgroundSize: 'cover',
                                height: '200px',
                            }}
                        >
                            <div
                                className="absolute inset-0 backdrop-blur-md backdrop-filter duration-300 opacity-0 group-hover:opacity-100 rounded-xl"
                            ></div>
                            <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl">
                                Video Generation
                            </p>
                        </div>
                    </Link>
                    <Link href="/music">
                        <div
                            className="relative group transition-transform transform scale-100 group-hover:scale-105 rounded-xl hover:scale-105"
                            style={{
                                backgroundImage: `url('https://images.unsplash.com/photo-1629946832022-c327f74956e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80')`,
                                backgroundSize: 'cover',
                                height: '200px',
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
                                height: '200px',
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
                                height: '200px',
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
                    <div className="bg-black relative group transition-transform transform scale-100 group-hover:scale-105 rounded-xl hover:scale-105"
                            style={{
                            backgroundImage: `url('https://images.unsplash.com/photo-1618029529501-9adf93df3e84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
                            backgroundSize: 'cover',
                            height: '100px',
                        }}
                    >                      
                    <div className="absolute inset-0 backdrop-blur-md backdrop-filter duration-300 opacity-0 group-hover:opacity-100 rounded-xl"></div>
                        <p className="ml-12 absolute inset-0 flex items-center justify-left text-white font-bold text-2xl">
                            Code Generation
                        </p>
                        <div className="mr-12 absolute inset-0 flex items-center justify-end text-white font-bold text-2xl">
                            <SendHorizontalIcon />
                        </div>
                    </div>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default DashboardPage;