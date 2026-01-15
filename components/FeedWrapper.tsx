"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export function FeedWrapper({ children, className }: { children: React.ReactNode; className?: string }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Parallax background effect
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-black text-foreground selection:bg-violet-500/30">
            {/* Dynamic Background */}
            <motion.div
                style={{ y: backgroundY }}
                className="fixed inset-0 z-0 opacity-40 pointer-events-none"
            >
                <div className="absolute top-[-10%] left-[-10%] h-[50rem] w-[50rem] rounded-full bg-violet-900/20 blur-[120px] mix-blend-screen animate-float" />
                <div className="absolute top-[20%] right-[-10%] h-[40rem] w-[40rem] rounded-full bg-fuchsia-900/20 blur-[100px] mix-blend-screen animate-pulse-slow" />
                <div className="absolute bottom-[-10%] left-[20%] h-[60rem] w-[60rem] rounded-full bg-blue-900/10 blur-[140px] mix-blend-screen" />
            </motion.div>

            {/* Feed Stream */}
            <div
                ref={containerRef}
                className={cn(
                    "relative z-10 mx-auto min-h-screen max-w-2xl border-x border-white/5 bg-black/40 backdrop-blur-sm",
                    className
                )}
            >
                {children}
            </div>

            {/* Decorative Side Borders (Desktop only) */}
            <div className="fixed inset-y-0 left-[calc(50%-24rem)] hidden w-px bg-gradient-to-b from-transparent via-white/10 to-transparent xl:block" />
            <div className="fixed inset-y-0 right-[calc(50%-24rem)] hidden w-px bg-gradient-to-b from-transparent via-white/10 to-transparent xl:block" />
        </div>
    );
}
