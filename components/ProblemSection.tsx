"use client";

import { motion } from "framer-motion";
import { XCircle } from "lucide-react";

export function ProblemSection() {
    const points = [
        "Buyers leave because their questions go unanswered",
        "Real fans feel ignored",
        "Product and content ideas get lost in the noise",
        "High-intent comments never turn into leads",
        "Their audience tells them what they want, and it gets missed"
    ];

    return (
        <div className="relative h-full w-full flex flex-col items-center justify-center p-8 text-center bg-transparent">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-16"
            >
                What our non-users <span className="text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]">miss.</span>
            </motion.h2>

            <div className="grid gap-6 max-w-3xl mx-auto">
                {points.map((point, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="flex items-center gap-4 text-left"
                    >
                        <XCircle className="w-6 h-6 text-red-500 shrink-0 opacity-80" />
                        <p className="text-xl md:text-2xl text-zinc-300 font-light">
                            {point}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
