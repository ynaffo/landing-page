"use client";

import { motion } from "framer-motion";
import { Heart, MessageCircle, Repeat2, Send, MoreHorizontal, BadgeCheck } from "lucide-react";
import { ActionButton } from "./ui/action-button";
import { useState, useEffect } from "react";

export function HeroPost() {
    const [likes, setLikes] = useState(10420);

    useEffect(() => {
        // Simulate live engagement
        const interval = setInterval(() => {
            if (Math.random() > 0.7) {
                setLikes(prev => prev + Math.floor(Math.random() * 5));
            }
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border-b border-white/5 bg-black/40 backdrop-blur-sm p-4 md:p-6"
        >
            {/* Post Header */}
            <div className="flex gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-600 flex-shrink-0" />
                <div className="flex-1">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 group cursor-pointer">
                            <span className="font-bold text-white group-hover:underline">My SaaS</span>
                            <BadgeCheck className="h-4 w-4 text-blue-500" fill="currentColor" stroke="black" />
                            <span className="text-zinc-500">@mysaas</span>
                            <span className="text-zinc-500">·</span>
                            <span className="text-zinc-500 hover:underline">Just now</span>
                        </div>
                        <button className="text-zinc-500 hover:text-blue-500">
                            <MoreHorizontal className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Post Content */}
                    <div className="mt-2 text-[17px] leading-normal text-zinc-100 whitespace-pre-wrap">
                        <p>I cloned myself to handle 10k comments. 🤖✨</p>
                        <br />
                        <p>Every creator knows the pain: You post a viral video, and the comment section becomes a war zone. Spam, questions, leads... all ignored.</p>
                        <br />
                        <p>So I built an AI that lives in your comments. It replies like you, hides the toxicity, and DMs the people who actually want to buy.</p>
                        <br />
                        <p className="text-blue-400 hover:underline cursor-pointer">#AI #CreatorEconomy #Growthhack</p>
                    </div>

                    {/* Media / Visual Hook */}
                    <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 aspect-video relative flex items-center justify-center group cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 opacity-50 transition-opacity group-hover:opacity-70" />
                        <div className="text-center z-10 p-6">
                            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400 mb-2">
                                Turn Comments into Capital.
                            </h3>
                            <ActionButton glow className="mt-4">
                                Get Early Access
                            </ActionButton>
                        </div>
                    </div>

                    {/* Engagement Bar */}
                    <div className="mt-4 flex items-center justify-between max-w-md text-zinc-500">
                        <button className="flex items-center gap-2 group hover:text-blue-500 transition-colors">
                            <div className="p-2 rounded-full group-hover:bg-blue-500/10 transition-colors">
                                <MessageCircle className="h-5 w-5" />
                            </div>
                            <span className="text-sm">2.4k</span>
                        </button>

                        <button className="flex items-center gap-2 group hover:text-green-500 transition-colors">
                            <div className="p-2 rounded-full group-hover:bg-green-500/10 transition-colors">
                                <Repeat2 className="h-5 w-5" />
                            </div>
                            <span className="text-sm">842</span>
                        </button>

                        <button className="flex items-center gap-2 group hover:text-pink-500 transition-colors">
                            <div className="p-2 rounded-full group-hover:bg-pink-500/10 transition-colors">
                                <Heart className="h-5 w-5" />
                            </div>
                            <span className="text-sm tabular-nums">{likes.toLocaleString()}</span>
                        </button>

                        <button className="flex items-center gap-2 group hover:text-blue-500 transition-colors">
                            <div className="p-2 rounded-full group-hover:bg-blue-500/10 transition-colors">
                                <Send className="h-5 w-5" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </motion.article>
    );
}
