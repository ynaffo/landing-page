"use client";

import { SnapWrapper, SnapSection } from "@/components/SnapWrapper";
import { MinimalHeader } from "@/components/MinimalHeader";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { LeverageSection } from "@/components/LeverageSection";
import { SocialSidebar } from "@/components/SocialSidebar";

export default function Home() {
  const sections = [
    {
      id: "hero",
      component: <HeroSection />,
      stats: { likes: "14.2k", comments: "3.2k", shares: "892" },
      bg: (
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 right-0 h-[50vh] bg-gradient-to-b from-blue-900/20 to-transparent opacity-50" />
          <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-violet-900/10 to-transparent opacity-30" />
        </div>
      )
    },
    {
      id: "pain",
      component: <ProblemSection />,
      stats: { likes: "8.5k", comments: "1.1k", shares: "420" }
    },
    {
      id: "benefits",
      component: <SolutionSection />,
      stats: { likes: "22.1k", comments: "5.4k", shares: "1.2k" },
      className: "overflow-hidden"
    },
    {
      id: "features",
      component: <FeaturesSection />,
      stats: { likes: "19.8k", comments: "2.8k", shares: "900" }
    },
    {
      id: "how-it-works",
      component: <HowItWorksSection />,
      stats: { likes: "12.4k", comments: "980", shares: "350" }
    },
    {
      id: "social-proof",
      component: <SocialProofSection />,
      stats: { likes: "35.2k", comments: "8.1k", shares: "4.5k" }
    },
    {
      id: "leverage",
      component: <LeverageSection />,
      stats: { likes: "52.9k", comments: "12k", shares: "15k" }
    }
  ];

  return (
    <>
      <MinimalHeader />
      <SnapWrapper>
        {sections.map((section) => (
          <SnapSection key={section.id} className={`bg-transparent ${section.className || ""}`}>
            {section.bg}
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              {section.component}
            </div>
            <SocialSidebar
              likes={section.stats.likes}
              comments={section.stats.comments}
              shares={section.stats.shares}
              triggerComment={section.id === 'social-proof'}
            />
          </SnapSection>
        ))}
      </SnapWrapper>
    </>
  );
}
