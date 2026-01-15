"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export function ScrollLines() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();

    // Smooth out the scroll progress
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Map progress to line height/draw
    const height1 = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
    const height2 = useTransform(smoothProgress, [0, 1], ["0%", "85%"]); // Slightly varied speed
    const height3 = useTransform(smoothProgress, [0, 1], ["0%", "95%"]);

    return (
        <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
            {/* Line 1: Green - Left */}
            <div className="absolute left-[15%] top-0 w-[3px] h-full opacity-50">
                <motion.div
                    style={{ height: height1 }}
                    className="w-full bg-gradient-to-b from-green-500 to-transparent"
                >
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-20 bg-green-400 blur-md" />
                </motion.div>
            </div>

            {/* Line 2: Purple - Middle-ish */}
            <div className="absolute left-[50%] top-0 w-[3px] h-full opacity-50">
                <motion.div
                    style={{ height: height2 }}
                    className="w-full bg-gradient-to-b from-purple-500 to-transparent"
                >
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-20 bg-purple-400 blur-md" />
                </motion.div>
            </div>

            {/* Line 3: Cyan - Right */}
            <div className="absolute right-[15%] top-0 w-[3px] h-full opacity-50">
                <motion.div
                    style={{ height: height3 }}
                    className="w-full bg-gradient-to-b from-cyan-500 to-transparent"
                >
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-20 bg-cyan-400 blur-md" />
                </motion.div>
            </div>
        </div>
    );
}
