"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

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
]

export const LandingContent = () => {
    return (
        <div className="px-10 pd-20">
            <h2 className="text-center text-4xl font-extrabold mb-10">
                Testimonials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Testimonials.map((item) => (
                    <Card key={item.description} className="bg-[rgba(250, 250, 250, 0.20)]" style={{ border: '2px solid rgba(255, 255, 255, 0.1)' }}>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-lg">{item.name}</p>
                                    <p className="text-zinc-400 text-sm">{item.title}</p>
                                </div>
                            </CardTitle>
                            <CardContent className="pt-4 px-0">
                                {item.description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    )
}
