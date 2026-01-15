"use client";

import { motion, useInView } from "framer-motion";
import {
    BrainCircuit,
    ShieldAlert,
    Sparkles,
    Zap,
    BookOpen,
    Target,
    TrendingUp
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

export function FeaturesSection() {
    // Use margin to create hysteresis (enter early, leave late)
    const isInView = useInView(containerRef, {
        margin: "-10% 0px -10% 0px", // Only trigger when significantly inside
        amount: 0.2
    });

    useEffect(() => {
        setExpanded(isInView);
    }, [isInView]);

    const features = [
        {
            letter: "N",
            icon: BrainCircuit,
            title: "Your AI Version",
            description: "Connect with your audience by letting AI reply as your desired voice and behavior"
        },
        {
            letter: "E",
            icon: Sparkles,
            title: "Discover what your audience has for you",
            description: "Get your comments categorized and extract potential opportunites and ideas"
        },
        {
            letter: "M",
            icon: ShieldAlert,
            title: "Smart replies",
            description: "Your AI respects strictly the activity limits rules of each platform avoiding risky behavior or account flags"
        },
        {
            letter: "I",
            icon: Zap,
            title: "Instant Speed",
            description: "0.2s latency response time."
        },
        {
            letter: "P",
            icon: BookOpen,
            title: "Playbooks",
            description: "Define your own rule sets."
        },
        {
            letter: "L",
            icon: Target,
            title: "Lead Detection",
            description: "Auto-detects high intent."
        },
        {
            letter: "Y",
            icon: TrendingUp,
            title: "ROI Analytics",
            description: "Track sales from comments."
        }
    ];

    return (
        <div ref={containerRef} className="relative w-full flex flex-col items-center justify-center p-8 bg-transparent transition-all duration-700 ease-in-out">
            <div className="max-w-7xl w-full flex flex-col justify-center items-center">
                <div className="w-full flex justify-center">
                    {!expanded ? (
                        <motion.div
                            layout
                            className="flex justify-center items-center gap-2 md:gap-6"
                        >
                            {features.map((f, i) => (
                                <motion.div
                                    key={f.letter}
                                    layoutId={`container-${i}`}
                                    className="relative flex items-center justify-center"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: i * 0.05 }}
                                >
                                    <motion.span
                                        layoutId={`text-${i}`}
                                        className="text-5xl md:text-9xl font-black bg-clip-text text-transparent bg-gradient-to-b from-white to-white/20 tracking-tighter"
                                        style={{ display: "inline-block" }}
                                    >
                                        {f.letter}
                                    </motion.span>
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <div className="grid grid-cols-2 md:grid-cols-8 gap-6 w-full px-4 md:px-0">
                            {features.map((f, i) => (
                                <motion.div
                                    key={f.letter}
                                    layoutId={`container-${i}`}
                                    className={`relative flex flex-col md:col-span-2 ${i === 6 ? 'col-span-2' : ''
                                        } ${i === 4 ? 'md:col-start-2' : ''
                                        }`}
                                    transition={{
                                        duration: 0.6,
                                        ease: "easeInOut",
                                        delay: i * 0.05
                                    }}
                                >
                                    <div className="flex items-center gap-4 mb-4 relative z-10">
                                        <motion.span
                                            layoutId={`text-${i}`}
                                            className="text-2xl font-black text-white"
                                            initial={{ opacity: 1 }}
                                            animate={{ opacity: 0 }}
                                            transition={{
                                                duration: 0.5,
                                                delay: 0.8 + (i * 0.05)
                                            }}
                                            style={{ display: "inline-block" }}
                                        >
                                            {f.letter}
                                        </motion.span>
                                    </div>

                                    <motion.div
                                        initial={{ height: 0, opacity: 0, margin: 0 }}
                                        animate={{ height: "auto", opacity: 1, marginTop: -40 }}
                                        transition={{
                                            duration: 0.6,
                                            ease: "easeOut",
                                            delay: 0.4 + (i * 0.05)
                                        }}
                                        className="bg-white/5 border border-white/5 rounded-2xl p-6 overflow-hidden min-h-[140px] flex flex-col justify-center relative group hover:bg-white/10 transition-colors z-20 backdrop-blur-md"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                                                <f.icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                                                <p className="text-sm text-zinc-400 leading-relaxed">
                                                    {f.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
