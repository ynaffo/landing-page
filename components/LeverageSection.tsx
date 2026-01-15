"use client";

import { motion } from "framer-motion";
import { ActionButton } from "./ui/action-button";

export function LeverageSection() {
    return (
        <div className="relative h-full w-full flex flex-col items-center justify-center bg-transparent text-white">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center space-y-8"
            >
                <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">
                    Clone Yourself.
                </h2>
                <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto font-medium">
                    Scale your engagement without scaling your time.
                </p>

                <div className="pt-8">
                    <ActionButton className="bg-white text-black hover:bg-zinc-200 px-10 py-4 text-xl h-auto w-auto">
                        Start Free Trial
                    </ActionButton>
                </div>
            </motion.div>


        </div>
    );
}
