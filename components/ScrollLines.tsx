"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function ScrollLines() {
    const { scrollYProgress } = useScroll();

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const draw1 = useTransform(smoothProgress, [0, 1], [0, 1]);
    const draw2 = useTransform(smoothProgress, [0, 1], [0, 1]);
    const draw3 = useTransform(smoothProgress, [0, 1], [0, 1]);

    return (
        <div className="fixed inset-0 z-40 pointer-events-none overflow-hidden">
            <svg
                className="w-full h-full opacity-60"
                viewBox="0 0 1440 4800"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
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

                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="5" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                {/* Line 1: Green - Morphing (Smooth <-> Loop) */}
                <motion.path
                    d="M 200 0 C 100 600, 300 1400, 200 2200 C 100 3000, 300 3800, 200 4600"
                    animate={{
                        d: [
                            "M 200 0 C 100 600, 300 1400, 200 2200 C 100 3000, 300 3800, 200 4600", // Smooth
                            "M 200 0 C 400 300, -100 600, 300 900 C 600 1100, 100 1300, 200 1600 C 400 2200, -200 2500, 300 3000", // Loop
                            "M 200 0 C 100 600, 300 1400, 200 2200 C 100 3000, 300 3800, 200 4600" // Back to Smooth
                        ]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    stroke="url(#gradient-green)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    fill="none"
                    filter="url(#glow)"
                    style={{ pathLength: draw1, opacity: 0.8 }}
                />

                {/* Line 2: Purple - Morphing (Smooth <-> Wild) */}
                <motion.path
                    d="M 720 0 C 600 800, 840 1600, 720 2400 C 600 3200, 840 4000, 720 4800"
                    animate={{
                        d: [
                            "M 720 0 C 600 800, 840 1600, 720 2400 C 600 3200, 840 4000, 720 4800", // Smooth
                            "M 720 0 C 400 400, 1000 700, 720 1200 C 300 1600, 1200 1900, 720 2500 C 500 2900, 900 3200, 720 3800", // Wild Loop
                            "M 720 0 C 600 800, 840 1600, 720 2400 C 600 3200, 840 4000, 720 4800" // Back to Smooth
                        ]
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    stroke="url(#gradient-purple)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    fill="none"
                    filter="url(#glow)"
                    style={{ pathLength: draw2, opacity: 0.8 }}
                />

                {/* Line 3: Cyan - Morphing (Smooth <-> Spiral) */}
                <motion.path
                    d="M 1240 0 C 1340 700, 1140 1500, 1240 2300 C 1340 3100, 1140 3900, 1240 4700"
                    animate={{
                        d: [
                            "M 1240 0 C 1340 700, 1140 1500, 1240 2300 C 1340 3100, 1140 3900, 1240 4700", // Smooth
                            "M 1240 0 C 900 300, 1600 600, 1100 1000 C 800 1300, 1500 1700, 1240 2200 C 900 2700, 1500 3000, 1100 3500", // Spiral
                            "M 1240 0 C 1340 700, 1140 1500, 1240 2300 C 1340 3100, 1140 3900, 1240 4700" // Back to Smooth
                        ]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    stroke="url(#gradient-cyan)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    fill="none"
                    filter="url(#glow)"
                    style={{ pathLength: draw3, opacity: 0.8 }}
                />
            </svg>
        </div>
    );
}
