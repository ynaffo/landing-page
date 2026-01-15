"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ActionButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "ghost";
    glow?: boolean;
    children: React.ReactNode;
}

export function ActionButton({ className, variant = "primary", glow = false, children, ...props }: ActionButtonProps) {
    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                "relative flex items-center justify-center rounded-full px-6 py-3 font-semibold transition-all duration-300",
                variant === "primary" && "bg-white text-black hover:bg-zinc-200",
                variant === "secondary" && "bg-zinc-800 text-white hover:bg-zinc-700",
                variant === "ghost" && "bg-transparent text-zinc-400 hover:text-white hover:bg-white/5",
                className
            )}
            {...props}
        >
            {glow && (
                <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 opacity-50 blur-lg transition-opacity duration-300 group-hover:opacity-100" />
            )}
            {children}
        </motion.button>
    );
}
