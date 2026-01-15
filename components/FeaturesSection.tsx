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
    const isInView = useInView(containerRef, { amount: 0.5 }); // Slightly lower threshold for stability

    useEffect(() => {
        let resetTimer: NodeJS.Timeout;

        if (isInView && !expanded) {
            // Trigger animation INSTANTLY
            setExpanded(true);
        } else if (!isInView && expanded) {
            // DEBOUNCE the reset. If we just briefly flash out of view (e.g. during layout shift),
            // this gives us a 500ms grace period to "recover" or for the user to settle.
            // If they are truly gone, it will reset.
            resetTimer = setTimeout(() => {
                setExpanded(false);
            }, 500);
        }

        return () => {
            clearTimeout(resetTimer);
        };
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
        <div ref={containerRef} className="relative h-full w-full flex flex-col items-center justify-center p-8 bg-transparent">
            {/* Stable Container */}
            <div className="max-w-7xl w-full flex flex-col justify-center items-center">
                <div className="w-full flex justify-center">
                    <div className="grid grid-cols-2 md:grid-cols-8 gap-6 w-full px-4 md:px-0">
                        {features.map((f, i) => (
                            <motion.div
                                key={f.letter}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    duration: 0.5,
                                    delay: i * 0.05
                                }}
                                className={`relative flex flex-col md:col-span-2 ${i === 6 ? 'col-span-2' : '' /* Mobile: Last item full width */
                                    } ${i === 4 ? 'md:col-start-2' : '' /* Desktop using 8 cols: Row 2 Item 1 starts at col 2 for centering */
                                    }`}
                            >
                                {/* The Letter - Static Header */}
                                <div className="flex items-center gap-4 mb-4 relative z-10">
                                    <span className="text-2xl font-black text-white">
                                        {f.letter}
                                    </span>
                                </div>

                                {/* The Feature Content Card */}
                                <div
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
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
