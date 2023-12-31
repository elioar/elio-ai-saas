"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { AiOutlinePicture, AiOutlineCode, AiOutlineVideoCamera, AiFillProfile, AiOutlineUser } from 'react-icons/ai';


const Testimonials = [
    {
        name: "Emily",
        avatar: "E",
        title: "UX Designer",
        description: "I'm impressed with the user-friendly design of this application."
    },
    {
        name: "Aleks",
        avatar: "A",
        title: "Data Analyst",
        description: "The data analysis tools in this app are incredibly useful."
    },
    {
        name: "Sarah",
        avatar: "S",
        title: "Product Manager",
        description: "This app has greatly improved our team's productivity."
    },
    {
        name: "John",
        avatar: "J",
        title: "Software Engineer",
        description: "The code quality in this application is top-notch."
    },
];

export const LandingContent = () => {
    return (
        <div className="px-10 py-20">
            <h2 className="text-center text-5xl font-extrabold mb-12">
                Testimonials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Testimonials.map((item) => (
                    <Card key={item.description} className="bg-[rgba(250, 250, 250, 0.20)] rounded-lg shadow-lg" style={{ border: '2px solid rgba(255, 255, 255, 0.1)'}} >
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-4">
                            <div className="flex items-center gap-x-4">
                                <AiOutlineUser />
                                <div>
                                    <p className="text-xl">{item.name}</p>
                                    <p className="text-zinc-400 text-lg">{item.title}</p>
                                </div>
                            </div>
                            </CardTitle>
                            <CardContent className="pt-6 px-4 text-lg">
                                {item.description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>
            <div className="py-12">
                <h2 className="text-center text-5xl font-extrabold mb-12">
                    Latest Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    <div className="bg-[rgba(250, 250, 250, 0.20)] p-4 sm:p-6 rounded-lg shadow-lg border border-white/20 hover:scale-105 duration-300">
                        <div className="flex items-center mb-2 sm:mb-4">
                            <AiOutlinePicture className="text-3xl sm:text-4xl text-indigo-500 mr-2 sm:mr-4" />
                            <h3 className="text-xl sm:text-2xl font-semibold" style={{ cursor: 'default' }}>AI Image Generator</h3>
                        </div>
                        <p className="text-base sm:text-lg" style={{ cursor: 'default' }}>
                            Our new AI-powered image generator lets you create stunning visuals with ease. Generate high-quality images for your projects without any design experience.
                        </p>
                    </div>
                    <div className="bg-[rgba(250, 250, 250, 0.20)] p-4 sm:p-6 rounded-lg shadow-lg border border-white/20 hover:scale-105 duration-300">
                        <div className="flex items-center mb-2 sm:mb-4">
                            <AiOutlineCode className="text-3xl sm:text-4xl text-pink-500 mr-2 sm:mr-4" />
                            <h3 className="text-xl sm:text-2xl font-semibold" style={{ cursor: 'default' }}>Code Generator</h3>
                        </div>
                        <p className="text-base sm:text-lg" style={{ cursor: 'default' }}>
                            Say goodbye to manual coding. Our code generator streamlines the development process, automatically generating clean and efficient code for your applications.
                        </p>
                    </div>
                    <div className="bg-[rgba(250, 250, 250, 0.20)] p-4 sm:p-6 rounded-lg shadow-lg border border-white/20 hover:scale-105 duration-300">
                        <div className="flex items-center mb-2 sm:mb-4">
                            <AiOutlineVideoCamera className="text-3xl sm:text-4xl text-cyan-500 mr-2 sm:mr-4" />
                            <h3 className="text-xl sm:text-2xl font-semibold" style={{ cursor: 'default' }}>Video Generator</h3>
                        </div>
                        <p className="text-base sm:text-lg" style={{ cursor: 'default' }}>
                            Create engaging videos in minutes. Our video generator empowers you to produce professional-looking videos for your marketing campaigns or presentations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
