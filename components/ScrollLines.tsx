"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export function ScrollLines() {
    const { scrollYProgress } = useScroll();

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Create drawing effect
    const draw1 = useTransform(smoothProgress, [0, 1], [0, 1]);
    const draw2 = useTransform(smoothProgress, [0, 1], [0, 1]);
    const draw3 = useTransform(smoothProgress, [0, 1], [0, 1]);

    return (
        <div className="fixed inset-0 z-40 pointer-events-none overflow-hidden">
            <svg
                className="w-full h-full"
                viewBox="0 0 1440 3200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <defs>
                    <filter id="glow-green" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                    <filter id="glow-purple" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                    <filter id="glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                {/* Line 1: Green - Looping Left */}
                <motion.path
                    d="M 200 -100 C 400 300, -100 600, 300 900 C 600 1100, 100 1300, 200 1600 C 400 2200, -200 2500, 300 3000 C 600 3300, 200 3600, 400 3800"
                    stroke="url(#gradient-green)"
                    strokeWidth="10"
                    strokeLinecap="round"
                    filter="url(#glow-green)"
                    style={{ pathLength: draw1, opacity: 0.9 }}
                />

                {/* Line 2: Purple - Wild Center */}
                <motion.path
                    d="M 720 -100 C 400 400, 1000 700, 720 1200 C 300 1600, 1200 1900, 720 2500 C 500 2900, 900 3200, 720 3800"
                    stroke="url(#gradient-purple)"
                    strokeWidth="10"
                    strokeLinecap="round"
                    filter="url(#glow-purple)"
                    style={{ pathLength: draw2, opacity: 0.9 }}
                />

                {/* Line 3: Cyan - Spiraling Right */}
                <motion.path
                    d="M 1240 -100 C 900 300, 1600 600, 1100 1000 C 800 1300, 1500 1700, 1240 2200 C 900 2700, 1500 3000, 1100 3500 C 900 3800, 1300 4000, 1240 4200"
                    stroke="url(#gradient-cyan)"
                    strokeWidth="10"
                    strokeLinecap="round"
                    filter="url(#glow-cyan)"
                    style={{ pathLength: draw3, opacity: 0.9 }}
                />

                <defs>
                    <linearGradient id="gradient-green" x1="0" y1="0" x2="0" y2="1">
                        <stop stopColor="#4ade80" />
                        <stop offset="1" stopColor="#4ade80" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="gradient-purple" x1="0" y1="0" x2="0" y2="1">
                        <stop stopColor="#a855f7" />
                        <stop offset="1" stopColor="#a855f7" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="gradient-cyan" x1="0" y1="0" x2="0" y2="1">
                        <stop stopColor="#06b6d4" />
                        <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}
