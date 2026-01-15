"use client";

import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export function SocialProofSection() {
    const testimonials = [
        {
            name: "Marcus L.",
            role: "Growth Creator",
            quote: "The engagement quality is indistinguishable from my own writing. It's actually scary good.",
            stat: "+450% Leads"
        },
        {
            name: "Sarah J.",
            role: "Lifestyle Brand",
            quote: "I used to spend 2 hours a day replying. Now I spend 0. And my community loves me more.",
            stat: "15hrs Saved/wk"
        },
        {
            name: "TechDaily",
            role: "Media Publisher",
            quote: "Spam is gone. Trolls are silenced. Only value remains in my comment section.",
            stat: "Zero Toxicity"
        }
    ];

    const [animationState, setAnimationState] = useState<'idle' | 'expanding' | 'showing'>('idle');
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { amount: 0.5 });

    // TRIGGER ANIMAITON START
    useEffect(() => {
        if (isInView && animationState === 'idle') {
            const timer = setTimeout(() => {
                setAnimationState('expanding');
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isInView, animationState]);

    // HANDLE LOADING TRANSITION
    useEffect(() => {
        if (animationState === 'expanding') {
            // Expansion (0.6s) + Loading (0.3s) = 0.9s delay
            const timer = setTimeout(() => {
                setAnimationState('showing');
            }, 900);
            return () => clearTimeout(timer);
        }
    }, [animationState]);

    // RESET IF SCROLLED AWAY
    useEffect(() => {
        if (!isInView && animationState !== 'idle') {
            setAnimationState('idle');
        }
    }, [isInView, animationState]);

    return (
        <div ref={containerRef} className="relative h-full w-full flex flex-col items-center justify-center p-8 bg-transparent">
            <div className="max-w-7xl w-full flex flex-col items-center justify-center min-h-[400px]">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 absolute top-0"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                        Trusted by the <span className="text-zinc-500">1%.</span>
                    </h2>
                    <p className="text-xl text-zinc-400 font-light">
                        Managing over 10 million comments monthly.
                    </p>
                </motion.div>

                {/* The Content Container */}
                <div className="relative w-full flex items-center justify-center mt-32 perspective-1000">
                    {animationState !== 'idle' && (
                        <motion.div
                            key="grid-state"
                            layoutId="social-proof-board"
                            className="w-full flex justify-center items-center"
                            initial={{
                                opacity: 0,
                                scale: 0.05,
                                x: "45vw", // Start effectively at the sidebar's position on desktop
                                y: 0
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                x: 0,
                                y: 0
                            }}
                            transition={{
                                type: "spring",
                                damping: 20,
                                stiffness: 80,
                                duration: 1.2
                            }}
                        >
                            <motion.div
                                className="w-full bg-transparent"
                            >
                                {animationState !== 'showing' ? (
                                    <div className="h-[300px] w-full flex items-center justify-center">
                                        <div className="flex flex-col items-center gap-4">
                                            <div className="w-10 h-10 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                        </div>
                                    </div>
                                ) : (
                                    <motion.div
                                        className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {testimonials.map((t, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                                className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors flex flex-col justify-between h-full"
                                            >
                                                <div className="space-y-4 mb-8">
                                                    <div className="flex gap-1">
                                                        {[...Array(5)].map((_, j) => (
                                                            <Star key={j} className="w-4 h-4 text-blue-500 fill-blue-500" />
                                                        ))}
                                                    </div>
                                                    <p className="text-lg text-zinc-300 leading-relaxed font-light">
                                                        "{t.quote}"
                                                    </p>
                                                </div>

                                                <div className="pt-6 border-t border-white/5 flex items-end justify-between">
                                                    <div>
                                                        <div className="font-semibold text-white">{t.name}</div>
                                                        <div className="text-sm text-zinc-500">{t.role}</div>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="text-xl font-bold text-white tracking-tight">{t.stat}</div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                )}
                            </motion.div>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}
