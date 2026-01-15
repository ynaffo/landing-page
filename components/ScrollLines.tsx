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
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <svg
                className="w-full h-full"
                viewBox="0 0 1440 3200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                {/* Line 1: Green - Wavy Left */}
                <motion.path
                    d="M 200 0 C 100 400, 300 800, 200 1200 C 100 1600, 300 2000, 200 2400 C 100 2800, 300 3200, 200 3600"
                    stroke="url(#gradient-green)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    style={{ pathLength: draw1, opacity: 0.6 }}
                />

                {/* Line 2: Purple - Wavy Center */}
                <motion.path
                    d="M 720 0 C 600 500, 840 1000, 720 1500 C 600 2000, 840 2500, 720 3000"
                    stroke="url(#gradient-purple)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    style={{ pathLength: draw2, opacity: 0.6 }}
                />

                {/* Line 3: Cyan - Wavy Right */}
                <motion.path
                    d="M 1240 0 C 1340 400, 1140 800, 1240 1200 C 1340 1600, 1140 2000, 1240 2400 C 1340 2800, 1140 3200, 1240 3600"
                    stroke="url(#gradient-cyan)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    style={{ pathLength: draw3, opacity: 0.6 }}
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
