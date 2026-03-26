import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import screen1 from "../assets/app_dashboard.png";
import screen2 from "../assets/app_insights.png";
import screen3 from "../assets/chat.png";

const ThreeBackground = lazy(() => import("./ThreeBackground"));
const MotionDiv = motion.div;
const MotionImg = motion.img;
const MotionSection = motion.section;

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Hero() {
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const [showThreeBackground, setShowThreeBackground] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const headingY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.25]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, -95]);
  const visualScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const leftCardY = useTransform(scrollYProgress, [0, 1], [0, -55]);
  const rightCardY = useTransform(scrollYProgress, [0, 1], [0, -35]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const updateVisibility = () => {
      setShowThreeBackground(mediaQuery.matches && !prefersReducedMotion);
    };

    updateVisibility();
    mediaQuery.addEventListener("change", updateVisibility);

    return () => {
      mediaQuery.removeEventListener("change", updateVisibility);
    };
  }, [prefersReducedMotion]);

  return (
    <MotionSection id="hero" ref={sectionRef} className="relative overflow-hidden px-6 pb-24 pt-12 md:pb-28 md:pt-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(191,226,202,0.45)_0%,transparent_45%),radial-gradient(circle_at_85%_30%,rgba(150,202,169,0.32)_0%,transparent_42%),linear-gradient(160deg,#eef5ef_0%,#e6f1e9_52%,#deeee3_100%)]" />

      {showThreeBackground ? (
        <Suspense fallback={null}>
          <ThreeBackground />
        </Suspense>
      ) : null}

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2 md:gap-16">
        <MotionDiv
          style={prefersReducedMotion ? undefined : { y: headingY, opacity: headingOpacity }}
          variants={reveal}
          initial="hidden"
          animate="visible"
          className="max-w-xl space-y-7"
        >
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#1f2c23] sm:text-5xl md:text-6xl">
            Calm your mind.<br />
            Track your mood.<br />
            <span className="text-[#446749]">Feel better.</span>
          </h1>

          <p className="max-w-lg text-base text-[#4f6456] md:text-lg">
            A gentle space designed for your emotional well-being.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-[#446749] px-6 py-3 text-sm font-medium text-white shadow-[0_14px_30px_-18px_rgba(68,103,73,1)] transition hover:-translate-y-0.5 hover:bg-[#3d5d42]">
              Download APK
            </button>
            <button className="rounded-full border border-[#d6dfd4] bg-white/70 px-6 py-3 text-sm font-medium text-[#2c4631] backdrop-blur-sm transition hover:bg-white">
              Learn More
            </button>
          </div>
        </MotionDiv>

        <MotionDiv
          style={prefersReducedMotion ? undefined : { y: visualY, scale: visualScale }}
          variants={reveal}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.08 }}
          className="relative flex min-h-[450px] items-center justify-center md:min-h-[560px]"
        >
          <MotionDiv
            style={prefersReducedMotion ? undefined : { y: glowY }}
            className="absolute h-[300px] w-[300px] rounded-full bg-[#b8ddc4]/70 blur-3xl sm:h-[360px] sm:w-[360px]"
          />
          <MotionDiv
            style={prefersReducedMotion ? undefined : { y: rightCardY }}
            className="absolute h-[220px] w-[220px] translate-y-16 rounded-full bg-[#dceee1]/80 blur-3xl"
          />

          <img
            src={screen1}
            alt="InnerCircle dashboard"
            className="relative z-20 w-[235px] rounded-[28px] border border-white/60 shadow-[0_28px_70px_-30px_rgba(27,46,31,0.75)] sm:w-[270px]"
          />

          <MotionImg
            src={screen2}
            alt="InnerCircle insights"
            style={prefersReducedMotion ? undefined : { y: leftCardY }}
            initial={{ opacity: 0, x: -18, y: 12 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="absolute left-2 top-10 z-10 hidden w-[170px] rounded-2xl border border-white/60 shadow-[0_18px_40px_-25px_rgba(28,43,31,0.8)] md:block lg:left-0 lg:w-[200px]"
          />

          <MotionImg
            src={screen3}
            alt="InnerCircle chat"
            style={prefersReducedMotion ? undefined : { y: rightCardY }}
            initial={{ opacity: 0, x: 18, y: -12 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="absolute bottom-8 right-2 z-10 hidden w-[170px] rounded-2xl border border-white/60 shadow-[0_18px_40px_-25px_rgba(28,43,31,0.8)] md:block lg:right-0 lg:w-[200px]"
          />
        </MotionDiv>
      </div>
    </MotionSection>
  );
}