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
    const [expanded, setExpanded] = useState(false);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { amount: 0.5 }); // Restore amount and remove 'once'

    useEffect(() => {
        let resetTimer: NodeJS.Timeout;

        if (isInView && !expanded) {
            setExpanded(true);
        } else if (!isInView && expanded) {
            // Restore debounce logic
            resetTimer = setTimeout(() => {
                setExpanded(false);
            }, 500);
        }

        return () => clearTimeout(resetTimer);
    }, [isInView, expanded]);

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
        <div ref={containerRef} className="relative w-full flex flex-col items-center justify-center p-8 bg-transparent min-h-[800px]">
            {/* 
                min-h-[800px] ensures the section reserves enough space for the expanded grid 
                BEFORE it expands, preventing the page from jumping when the content changes size.
            */}
            <div className="max-w-7xl w-full flex flex-col justify-center items-center">
                <div className="w-full flex justify-center">
                    {!expanded ? (
                        // Initial State: Huge Letters N-E-M-I-P-L-Y
                        <motion.div
                            className="flex justify-center items-center gap-2 md:gap-6"
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.5 } }}
                        >
                            {features.map((f, i) => (
                                <motion.div
                                    key={f.letter}
                                    layoutId={`container-${i}`} // Syncs with the grid card
                                    className="relative flex items-center justify-center"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: i * 0.05 }}
                                >
                                    <motion.span
                                        layoutId={`text-${i}`} // Syncs with the letter in the card
                                        className="text-5xl md:text-9xl font-black bg-clip-text text-transparent bg-gradient-to-b from-white to-white/20 tracking-tighter cursor-default"
                                        style={{ display: "inline-block" }}
                                    >
                                        {f.letter}
                                    </motion.span>
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        // Expanded State: Grid of Cards
                        <div className="grid grid-cols-2 md:grid-cols-8 gap-6 w-full px-4 md:px-0">
                            {features.map((f, i) => (
                                <motion.div
                                    key={f.letter}
                                    layoutId={`container-${i}`}
                                    className={`relative flex flex-col md:col-span-2 ${i === 6 ? 'col-span-2' : '' /* Mobile: Last item full width */
                                        } ${i === 4 ? 'md:col-start-2' : '' /* Desktop: Centering logic */
                                        }`}
                                    transition={{
                                        duration: 0.8,
                                        type: "spring",
                                        bounce: 0.15
                                    }}
                                >
                                    {/* The Feature Content Drawer */}
                                    <motion.div
                                        className="bg-white/5 border border-white/5 rounded-2xl p-6 overflow-hidden flex flex-col justify-center relative group hover:bg-white/10 transition-colors z-20 backdrop-blur-md h-full min-h-[160px]"
                                    >
                                        <div className="flex items-start gap-4">
                                            {/* Icon fades in */}
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.3 + (i * 0.05) }}
                                                className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0"
                                            >
                                                <f.icon className="w-6 h-6" />
                                            </motion.div>

                                            <div>
                                                <div className="flex items-center gap-2 mb-2">
                                                    {/* The Letter moves to be the header icon? No, just sits there. */}
                                                    <motion.span
                                                        layoutId={`text-${i}`}
                                                        className="text-xl font-black text-white/20"
                                                    >
                                                        {f.letter}
                                                    </motion.span>

                                                    <motion.h3
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ delay: 0.4 + (i * 0.05) }}
                                                        className="text-lg font-semibold text-white"
                                                    >
                                                        {f.title}
                                                    </motion.h3>
                                                </div>

                                                <motion.p
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: 0.5 + (i * 0.05) }}
                                                    className="text-sm text-zinc-400 leading-relaxed"
                                                >
                                                    {f.description}
                                                </motion.p>
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
