"use client";

import { motion } from "framer-motion";
import { Zap, Target, Repeat } from "lucide-react";

export function SolutionSection() {
    return (
        <div className="relative h-full w-full flex flex-col items-center justify-center p-8 bg-transparent">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full z-10">
                {[
                    {
                        icon: Target,
                        title: "Sniper Precision",
                        desc: "Learns your specific tone of voice. Replies sound exactly like you, not a bot."
                    },
                    {
                        icon: Zap,
                        title: "Instant Revenue",
                        desc: "Identifies high-value leads automatically. Turns questions into sales before they leave."
                    },
                    {
                        icon: Repeat,
                        title: "24/7 Domination",
                        desc: "Never sleeps. Every comment gets a reply, boosting your algorithm ranking while you rest."
                    }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: i * 0.2 }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 flex flex-col items-start gap-6 hover:bg-white/10 transition-colors group"
                    >
                        <div className="p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                            <item.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-lg text-zinc-400 leading-relaxed font-light">
                                {item.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
