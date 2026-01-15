"use client";

import { cn } from "@/lib/utils";

interface SnapWrapperProps {
    children: React.ReactNode;
    className?: string;
}

export function SnapWrapper({ children, className }: SnapWrapperProps) {
    return (
        <div
            className={cn(
                "h-screen w-full overflow-y-scroll",
                className
            )}
        >
            {children}
        </div>
    );
}

export function SnapSection({ children, className }: SnapWrapperProps) {
    return (
        <section
            className={cn(
                "relative h-screen w-full flex flex-col items-center justify-center overflow-hidden",
                className
            )}
        >
            {children}
        </section>
    );
}
