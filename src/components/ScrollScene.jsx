import { useEffect, useRef, useState } from "react";
import { motion, useMotionTemplate, useReducedMotion, useScroll, useTransform } from "framer-motion";
import ParallaxSection from "./ParallaxSection";
import dashboard from "../assets/app_dashboard.png";
import insights from "../assets/app_insights.png";
import chat from "../assets/chat.png";

const MotionDiv = motion.div;

export default function ScrollScene() {
  const sceneRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start end", "end start"],
  });

  const backgroundLayerY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const midLayerY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const foregroundLayerY = useTransform(scrollYProgress, [0, 1], [0, -240]);

  const moodOpacity = useTransform(scrollYProgress, [0.05, 0.2, 0.38], [0.35, 1, 0.65]);
  const chatOpacity = useTransform(scrollYProgress, [0.3, 0.52, 0.7], [0.28, 1, 0.7]);
  const insightsOpacity = useTransform(scrollYProgress, [0.62, 0.82, 1], [0.25, 1, 1]);

  const moodY = useTransform(scrollYProgress, [0.05, 0.3, 0.45], [70, 0, -45]);
  const chatY = useTransform(scrollYProgress, [0.25, 0.55, 0.75], [65, 0, -40]);
  const insightsY = useTransform(scrollYProgress, [0.56, 0.82, 1], [60, 0, -30]);

  const chatScale = useTransform(scrollYProgress, [0.4, 0.62], [0.95, 1.04]);

  const bgOne = useTransform(scrollYProgress, [0, 0.42, 1], [236, 224, 214]);
  const bgTwo = useTransform(scrollYProgress, [0, 0.42, 1], [245, 239, 233]);
  const bgThree = useTransform(scrollYProgress, [0, 0.42, 1], [238, 243, 247]);
  const sceneBackground = useMotionTemplate`linear-gradient(170deg, rgb(${bgOne} ${bgTwo} ${bgThree}) 0%, #e3efe7 52%, #dcebe1 100%)`;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const update = () => {
      setIsDesktop(mediaQuery.matches);
    };

    update();
    mediaQuery.addEventListener("change", update);

    return () => {
      mediaQuery.removeEventListener("change", update);
    };
  }, []);

  const enableParallax = isDesktop && !prefersReducedMotion;

  return (
    <section ref={sceneRef} className="relative px-6 pb-12 md:pb-20">
      <MotionDiv style={{ background: sceneBackground }} className="relative overflow-hidden rounded-3xl border border-[#d8e5da] p-6 shadow-[0_24px_80px_-52px_rgba(28,58,39,0.9)] md:p-10">
        <MotionDiv
          style={enableParallax ? { y: backgroundLayerY } : undefined}
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_14%,rgba(180,224,197,0.45),transparent_42%),radial-gradient(circle_at_80%_25%,rgba(145,201,170,0.35),transparent_45%)]"
        />
        <MotionDiv
          style={enableParallax ? { y: midLayerY } : undefined}
          className="pointer-events-none absolute -left-24 top-[12%] h-[360px] w-[360px] rounded-full bg-[#9fd0b0]/20 blur-3xl"
        />
        <MotionDiv
          style={enableParallax ? { y: foregroundLayerY } : undefined}
          className="pointer-events-none absolute -right-20 bottom-[8%] h-[320px] w-[320px] rounded-full bg-[#b7dcc2]/25 blur-3xl"
        />

        <div className="relative z-10">
          <ParallaxSection
            id="mood"
            kicker="Section 2"
            title="Mood tracking appears naturally in flow"
            description="As users continue scrolling, the check-in interface slides into focus while the environment shifts softly to signal the next chapter."
            bullets={[
              "Slide-in + fade reveal synced to scroll",
              "Soft background tint progression",
              "Foreground copy moves slightly faster than background",
            ]}
            image={dashboard}
            imageAlt="InnerCircle mood tracking screen"
            contentStyle={enableParallax ? { opacity: moodOpacity, y: moodY } : undefined}
            imageStyle={enableParallax ? { y: moodY } : undefined}
            mobileSafe={!enableParallax}
          />

          <ParallaxSection
            id="chat"
            kicker="Section 3"
            title="Chat support enters with calm floating depth"
            description="The conversation interface glides in with subtle zoom and buoyant motion to maintain a premium, emotionally safe aesthetic."
            bullets={[
              "Floating image motion when scrolling pauses",
              "Slight zoom to emphasize active conversation",
              "Continuous transition from previous scene",
            ]}
            align="left"
            image={chat}
            imageAlt="InnerCircle chat interface"
            contentStyle={enableParallax ? { opacity: chatOpacity, y: chatY } : undefined}
            imageStyle={enableParallax ? { y: chatY, scale: chatScale } : undefined}
            mobileSafe={!enableParallax}
            overlays={[
              {
                key: "chat-card-insight",
                src: insights,
                alt: "Insights overlay card",
                style: enableParallax ? { y: midLayerY } : undefined,
                wrapperClassName:
                  "absolute -right-1 top-9 z-10 hidden w-[145px] rounded-[1.2rem] border border-white/65 bg-white/35 p-2 shadow-[0_14px_40px_-26px_rgba(24,42,29,0.9)] backdrop-blur-sm md:block",
                imageClassName: "w-full rounded-[0.9rem]",
                floatingDistance: 6,
                floatingDelay: 0.35,
              },
            ]}
          />

          <ParallaxSection
            id="insights"
            kicker="Section 4"
            title="Insights rise upward as progress story completes"
            description="In the final chapter, analytics-driven cards move upward from the base layer to reinforce growth, consistency, and reflection."
            bullets={[
              "Insights panel reaches the front layer",
              "Supporting cards animate upward with depth",
              "No hard cuts between narrative sections",
            ]}
            image={insights}
            imageAlt="InnerCircle insights screen"
            contentStyle={enableParallax ? { opacity: insightsOpacity, y: insightsY } : undefined}
            imageStyle={enableParallax ? { y: insightsY } : undefined}
            mobileSafe={!enableParallax}
            overlays={[
              {
                key: "insights-card-dashboard",
                src: dashboard,
                alt: "Mood dashboard overlay",
                style: enableParallax ? { y: foregroundLayerY } : undefined,
                wrapperClassName:
                  "absolute -left-2 bottom-10 z-10 hidden w-[135px] rounded-[1.2rem] border border-white/65 bg-white/40 p-2 shadow-[0_15px_40px_-26px_rgba(25,43,30,0.9)] backdrop-blur-sm md:block",
                imageClassName: "w-full rounded-[0.9rem]",
                floatingDistance: 7,
                floatingDelay: 0.2,
              },
              {
                key: "insights-card-chat",
                src: chat,
                alt: "Chat overlay",
                style: enableParallax ? { y: midLayerY } : undefined,
                wrapperClassName:
                  "absolute -right-2 top-8 z-10 hidden w-[135px] rounded-[1.2rem] border border-white/65 bg-white/40 p-2 shadow-[0_15px_40px_-26px_rgba(25,43,30,0.9)] backdrop-blur-sm md:block",
                imageClassName: "w-full rounded-[0.9rem]",
                floatingDistance: 6,
                floatingDelay: 0.5,
              },
            ]}
          />
        </div>
      </MotionDiv>
    </section>
  );
}