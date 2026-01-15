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
                viewBox="0 0 1440 3200"
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
                        <feGaussianBlur stdDeviation="6" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                {/* Line 1: Green - Dancing Wave */}
                <motion.path
                    d="M 200 0 Q 300 400, 200 800 T 200 1600 T 200 2400 T 200 3200"
                    animate={{
                        d: [
                            "M 200 0 Q 300 400, 200 800 T 200 1600 T 200 2400 T 200 3200",
                            "M 200 0 Q 100 400, 200 800 T 200 1600 T 200 2400 T 200 3200",
                            "M 200 0 Q 300 400, 200 800 T 200 1600 T 200 2400 T 200 3200"
                        ]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    stroke="url(#gradient-green)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    filter="url(#glow)"
                    style={{ pathLength: draw1 }}
                />

                {/* Line 2: Purple - Dancing Wave */}
                <motion.path
                    d="M 720 0 Q 600 500, 720 1000 T 720 2000 T 720 3000"
                    animate={{
                        d: [
                            "M 720 0 Q 600 500, 720 1000 T 720 2000 T 720 3000",
                            "M 720 0 Q 840 500, 720 1000 T 720 2000 T 720 3000",
                            "M 720 0 Q 600 500, 720 1000 T 720 2000 T 720 3000"
                        ]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    stroke="url(#gradient-purple)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    filter="url(#glow)"
                    style={{ pathLength: draw2 }}
                />

                {/* Line 3: Cyan - Dancing Wave */}
                <motion.path
                    d="M 1240 0 Q 1140 400, 1240 800 T 1240 1600 T 1240 2400 T 1240 3200"
                    animate={{
                        d: [
                            "M 1240 0 Q 1140 400, 1240 800 T 1240 1600 T 1240 2400 T 1240 3200",
                            "M 1240 0 Q 1340 400, 1240 800 T 1240 1600 T 1240 2400 T 1240 3200",
                            "M 1240 0 Q 1140 400, 1240 800 T 1240 1600 T 1240 2400 T 1240 3200"
                        ]
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    stroke="url(#gradient-cyan)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    filter="url(#glow)"
                    style={{ pathLength: draw3 }}
                />
            </svg>
        </div>
    );
}
