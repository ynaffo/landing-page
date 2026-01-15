"use client";

import { motion } from "framer-motion";
import { Plug, Sliders, Plane } from "lucide-react";

export function HowItWorksSection() {
    const steps = [
        {
            icon: Plug,
            title: "1. Connect",
            desc: "Link your social accounts securely in seconds. No code required."
        },
        {
            icon: Sliders,
            title: "2. Instruct",
            desc: "Tell the AI your vibe. Upload past comments to clone your voice."
        },
        {
            icon: Plane,
            title: "3. Autopilot",
            desc: "Turn it on. Watch your engagement and leads skyrocket while you sleep."
        }
    ];

    return (
        <div className="relative h-full w-full flex flex-col items-center justify-center p-8 bg-transparent">
            <div className="max-w-7xl w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-20 text-center tracking-tight"
                >
                    Zero to active in <span className="text-blue-500">60 seconds.</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Developing a connecting line graphic could be cool here, but keeping it simple/clean for now */}

                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="mb-8 relative">
                                <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative w-24 h-24 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white group-hover:border-blue-500/50 transition-colors">
                                    <step.icon className="w-10 h-10" />
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                            <p className="text-zinc-400 text-lg max-w-xs leading-relaxed">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
