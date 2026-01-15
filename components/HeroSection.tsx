"use client";

import { motion } from "framer-motion";
import { ActionButton } from "./ui/action-button";
import { useState, useEffect } from "react";

const WORDS = ["Leads.", "Content Ideas.", "Engagement."];

export function HeroSection() {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    // Typing effect logic
    useEffect(() => {
        if (index >= WORDS.length) {
            setIndex(0); // Loop back
            return;
        }

        if (subIndex === WORDS[index].length + 1 && !reverse) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % WORDS.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? 35 : subIndex === WORDS[index].length ? 2000 : 80); // Faster speed settings

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    // Blinking cursor
    useEffect(() => {
        const timeout2 = setInterval(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearInterval(timeout2);
    }, []);

    return (
        <div className="relative z-10 flex flex-col items-start text-left pl-6 md:pl-12 max-w-full w-full">
            <motion.h1
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-5xl md:text-8xl font-semibold tracking-tighter text-white mb-6 leading-[1.1] min-h-[1.1em]"
            >
                Turn Comments <br /> into <span className="text-zinc-400">
                    {`${WORDS[index].substring(0, subIndex)}${blink ? "|" : " "}`}
                </span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-xl md:text-2xl text-zinc-300 max-w-xl mb-10 font-light"
            >
                Your biggest opportunities are waiting to be noticed in your comment section. <br className="hidden md:block" />
                Reply to fans, crush spam, and spot leads—24/7.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
                <ActionButton variant="primary" className="min-w-[200px] text-lg py-6 bg-white hover:bg-zinc-200">
                    Get Early Access
                </ActionButton>
                <ActionButton variant="secondary" className="min-w-[200px] text-lg py-6 bg-transparent hover:bg-white/10 border border-white/20">
                    View Demo
                </ActionButton>
            </motion.div>
        </div>
    );
}
