"use client";

import { motion } from "framer-motion";
import { MessageSquare, Bell, User } from "lucide-react";
import Link from "next/link";

export function SocialHeader() {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b border-white/10 bg-black/80 backdrop-blur-md px-6"
        >
            <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600">
                    <MessageSquare className="h-4 w-4 text-white" />
                </div>
                <span className="font-bold tracking-tight text-white">My SaaS</span>
            </div>

            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
                <Link href="#features" className="hover:text-white transition-colors">Features</Link>
                <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
                <Link href="#about" className="hover:text-white transition-colors">About</Link>
            </nav>

            <div className="flex items-center gap-4">
                <button className="relative text-zinc-400 hover:text-white transition-colors">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500" />
                </button>
                <button className="h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors">
                    <User className="h-4 w-4 text-white" />
                </button>
            </div>
        </motion.header>
    );
}
