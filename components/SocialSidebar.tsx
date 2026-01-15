"use client";

import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface SocialSidebarProps {
    likes: string;
    comments: string;
    shares: string;
    triggerComment?: boolean;
}

export function SocialSidebar({ likes, comments, shares, triggerComment = false }: SocialSidebarProps) {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { amount: 0.5 });

    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(parseFloat(likes)); // Simplified check, assumes valid inputs mostly
    const [commentAnimate, setCommentAnimate] = useState(false);

    useEffect(() => {
        if (triggerComment && isInView && !commentAnimate) {
            // Delay slightly to match the "arrival" logic
            const timer = setTimeout(() => {
                setCommentAnimate(true);
            }, 300);
            return () => clearTimeout(timer);
        }
        // Reset if out of view? Maybe not, keep it one-off or replayable. User likes replayable.
        if (!isInView && commentAnimate) {
            setCommentAnimate(false);
        }
    }, [triggerComment, isInView, commentAnimate]);

    // Parse the initial string (utility)
    const parseInitial = (str: string) => {
        // ... simple pass through for now or reuse logic if strict
        const num = parseFloat(str);
        if (str.includes('k')) return num * 1000;
        if (str.includes('m')) return num * 1000000;
        return num;
    };

    // We'll trust the prop value for display unless liked, which is local state
    // Re-implementing logic cleanly:

    const formatCount = (num: number) => {
        // rough formatting
        if (num >= 1000000) return (num / 1000000).toFixed(1) + 'm';
        if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
        return num.toString();
    };

    // Sync local state on mount
    useEffect(() => {
        setLikeCount(parseInitial(likes));
    }, [likes]);

    const handleLike = () => {
        if (isLiked) {
            setLikeCount(prev => prev - 1);
        } else {
            setLikeCount(prev => prev + 1);
        }
        setIsLiked(!isLiked);
    };

    const icons = [
        {
            icon: Heart,
            label: "Like",
            count: formatCount(likeCount),
            action: handleLike,
            active: isLiked,
            color: "text-red-500",
            fill: "currentColor"
        },
        {
            icon: MessageCircle,
            label: "Comment",
            count: comments,
            active: commentAnimate, // Use this to trigger styles
            color: "text-blue-500",
            fill: "currentColor"
        },
        { icon: Share2, label: "Share", count: shares },
        { icon: MoreHorizontal, label: "More", count: null },
    ];

    return (
        <div ref={containerRef} className="absolute right-4 md:right-8 bottom-20 md:top-1/2 md:-translate-y-1/2 z-20 flex flex-col gap-6 hidden md:flex p-4 rounded-full bg-black/20 backdrop-blur-md border border-white/5 shadow-2xl">
            {icons.map((item, i) => (
                <div
                    key={i}
                    className="flex flex-col items-center gap-1 group cursor-pointer relative"
                    onClick={item.action}
                >
                    <div className={`p-3 rounded-full transition-all duration-300 ${item.active ? 'bg-white/20 scale-110' : 'bg-transparent hover:bg-white/10 hover:scale-110'}`}>
                        <item.icon
                            className={`w-7 h-7 transition-colors duration-300 ${item.active ? item.color : 'text-white'}`}
                            fill={item.active ? item.fill : (item.label === "Like" ? "rgba(255,255,255,0.1)" : "none")}
                            strokeWidth={item.active ? 0 : 2}
                        />

                        {/* Burst Animation for Like */}
                        <AnimatePresence>
                            {item.active && item.label === "Like" && (
                                <motion.div
                                    initial={{ scale: 0, opacity: 1 }}
                                    animate={{ scale: 2.5, opacity: 0 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="absolute inset-0 rounded-full border-2 border-red-500"
                                />
                            )}
                        </AnimatePresence>

                        {/* Burst Animation for Comment (Blue) */}
                        <AnimatePresence>
                            {item.active && item.label === "Comment" && (
                                <motion.div
                                    initial={{ scale: 0, opacity: 1 }}
                                    animate={{ scale: 2.5, opacity: 0 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="absolute inset-0 rounded-full border-2 border-blue-500"
                                />
                            )}
                        </AnimatePresence>
                    </div>

                    {item.count && (
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={item.count}
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 5 }}
                                className="text-[11px] font-semibold text-white/80 drop-shadow-md"
                            >
                                {item.count}
                            </motion.span>
                        </AnimatePresence>
                    )}
                </div>
            ))}
        </div>
    );
}
