"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Menu } from "lucide-react";

export function MinimalHeader() {
    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 mix-blend-difference text-white pointer-events-none"
        >
            {/* Pointer events auto re-enabled for interactive elements */}
            <Link href="/" className="text-xl font-bold tracking-widest pointer-events-auto">
                MY SAAS
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide pointer-events-auto">
                <Link href="#problem" className="hover:opacity-60 transition-opacity">Problem</Link>
                <Link href="#solution" className="hover:opacity-60 transition-opacity">Solution</Link>
                <Link href="#leverage" className="hover:opacity-60 transition-opacity">Pricing</Link>
                <Link href="#signin" className="hover:opacity-60 transition-opacity">Account</Link>
            </nav>

            <button className="md:hidden pointer-events-auto bg-white/10 p-2 rounded-md backdrop-blur-sm">
                <Menu className="w-6 h-6" />
            </button>

            <div className="hidden md:block w-20" /> {/* Spacer for balance */}
        </motion.header>
    );
}
