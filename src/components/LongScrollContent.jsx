import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Activity,
  AudioLines,
  Bot,
  Brain,
  CalendarCheck,
  HeartPulse,
  Lock,
  ShieldAlert,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import screen1 from "../assets/app_dashboard.webp";
import screen2 from "../assets/app_insights.webp";
import screen3 from "../assets/chat.webp";

const MotionSection = motion.section;
const MotionDiv = motion.div;
const MotionArticle = motion.article;
const MotionImg = motion.img;

const flowSteps = [
  "Open app and complete the welcome safety check.",
  "Pick your current mood from gentle daily check-in options.",
  "Start an emotion-aware AI conversation tailored to context.",
  "Use breathing, meditation, reflection, or journaling in one tap.",
  "Track trends, streaks, and dominant mood in Insights.",
  "Control privacy, reminders, and crisis support anytime.",
];

const capabilityCards = [
  {
    title: "Emotion-Aware AI Chat",
    description:
      "Hybrid response engine balances instant support for simple messages and deeper hosted-AI guidance for emotionally complex moments.",
    points: [
      "Emotion and sentiment-aware replies",
      "Graceful fallback when hosted AI is unavailable",
      "Action suggestions: breathing, grounding, journaling",
    ],
    Icon: Bot,
  },
  {
    title: "Voice-First Companion",
    description:
      "Speak naturally when typing feels heavy, and listen back to supportive responses through a smooth listening-thinking-speaking loop.",
    points: [
      "Speech-to-text input",
      "Text-to-speech and replay controls",
      "Continuous live voice mode",
    ],
    Icon: AudioLines,
  },
  {
    title: "Integrated Wellness Tools",
    description:
      "Move from feeling to action in seconds with practical self-care tools directly connected to the conversation context.",
    points: [
      "Guided breathing (4-2-4 cycle)",
      "Meditation timers: 3, 5, 10 minutes",
      "Reflection summaries and journal saves",
    ],
    Icon: HeartPulse,
  },
  {
    title: "Insights and Habit Growth",
    description:
      "Build emotional awareness through visual trend tracking, streak momentum, and exportable records you own.",
    points: [
      "Weekly mood chart and dominant mood view",
      "Current and total streak tracking",
      "PDF export for journal and mood history",
    ],
    Icon: TrendingUp,
  },
  {
    title: "Privacy and Trust Controls",
    description:
      "Privacy is not hidden in settings; it is designed as a visible part of the daily wellness experience.",
    points: [
      "Conversation history on/off",
      "Incognito mode with no persistence",
      "Consent-focused privacy messaging",
    ],
    Icon: Lock,
  },
  {
    title: "Safety-Conscious Support",
    description:
      "Risk checks and crisis pathways are integrated from the start to guide users toward immediate support when needed.",
    points: [
      "High-risk language detection in chat",
      "Trusted contact quick-reach action",
      "Crisis resources and emergency reminders",
    ],
    Icon: ShieldAlert,
  },
];

const appWalkthrough = [
  {
    id: "checkin",
    title: "Check-In Home",
    subtitle: "A gentle emotional entry point for each day",
    description:
      "Time-based greetings, mood tiles, affirmations, and streak cues make the first interaction emotionally safe and low-friction.",
    highlights: [
      "One-tap mood states: Happy, Okay, Calm, Tired, Anxious, Sad",
      "Daily affirmation framing to reduce emotional pressure",
      "Streak momentum indicators for habit consistency",
    ],
    image: screen1,
  },
  {
    id: "insights",
    title: "Insights Dashboard",
    subtitle: "Progress users can understand in seconds",
    description:
      "Weekly mood trends, streak counters, and dominant mood summaries help users notice patterns without overwhelming analytics.",
    highlights: [
      "Weekly emotional trend visualization",
      "Current + total check-in streak metrics",
      "Summary chips that simplify habit reflection",
    ],
    image: screen2,
  },
  {
    id: "reminders",
    title: "Notifications & Reminders",
    subtitle: "Supportive nudges, not noisy alerts",
    description:
      "Daily check-ins, mindful moments, and streak saver reminders are permission-aware and clearly explained for trust.",
    highlights: [
      "Custom reminder categories mapped to wellbeing routines",
      "Permission-denied fallback messaging",
      "Gentle tone optimized for mental wellness",
    ],
    image: screen1,
  },
  {
    id: "support-view",
    title: "Crisis Support",
    subtitle: "Immediate pathways when emotional intensity rises",
    description:
      "InnerCircle includes trusted-contact outreach and visible resource cards, guiding users from distress to action quickly.",
    highlights: [
      "One-tap reach-out action for trusted contacts",
      "Support resource card stack with emergency context",
      "Clear reminder that the tool complements professional care",
    ],
    image: screen3,
  },
  {
    id: "privacy-view",
    title: "Privacy & Trust",
    subtitle: "Control designed into the core experience",
    description:
      "Privacy principles are visible in-product with controls for history behavior, consent clarity, and user-owned data framing.",
    highlights: [
      "Conversation privacy messaging in plain language",
      "Data control and deletion expectations",
      "Trust-forward UI hierarchy across settings",
    ],
    image: screen2,
  },
  {
    id: "chat-view",
    title: "AI Chat & Voice",
    subtitle: "Emotion-aware support in text and voice",
    description:
      "Conversation view combines empathetic chat, voice playback, and assistive actions like reflection for high-engagement support.",
    highlights: [
      "Speech-friendly controls with speaker and mic affordances",
      "Empathetic first-response pattern and supportive tone",
      "Reflection action integrated directly in chat header",
    ],
    image: screen3,
  },
];

const pillars = [
  {
    title: "Hybrid intelligence",
    detail: "Balances speed and emotional depth instead of forcing one mode for every message.",
    Icon: Sparkles,
  },
  {
    title: "Daily progress loop",
    detail: "Check-ins, streaks, and insights reinforce healthy consistency over time.",
    Icon: CalendarCheck,
  },
  {
    title: "Practical intervention",
    detail: "Breathing, meditation, and reflection are available exactly when emotional intensity rises.",
    Icon: Brain,
  },
  {
    title: "Real-world reliability",
    detail: "Safety pathways and privacy controls make support dependable, not just decorative.",
    Icon: Activity,
  },
];

export default function LongScrollContent() {
  const parallaxRef = useRef(null);
  const productRef = useRef(null);
  const cinematicRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: cinematicProgress } = useScroll({
    target: cinematicRef,
    offset: ["start start", "end end"],
  });
  const { scrollYProgress: productProgress } = useScroll({
    target: productRef,
    offset: ["start 70%", "end 30%"],
  });

  const yLayerOne = useTransform(scrollYProgress, [0, 1], [50, -70]);
  const yLayerTwo = useTransform(scrollYProgress, [0, 1], [80, -100]);
  const progressScale = useTransform(productProgress, [0, 1], [0, 1]);
  const skyY = useTransform(cinematicProgress, [0, 1], [0, -140]);
  const hillY = useTransform(cinematicProgress, [0, 1], [0, -220]);
  const foregroundY = useTransform(cinematicProgress, [0, 1], [0, -310]);
  const phoneOneY = useTransform(cinematicProgress, [0, 1], [0, -260]);
  const phoneTwoY = useTransform(cinematicProgress, [0, 1], [30, -210]);
  const titleOneOpacity = useTransform(cinematicProgress, [0, 0.35, 0.48], [1, 1, 0]);
  const titleTwoOpacity = useTransform(cinematicProgress, [0.35, 0.52, 1], [0, 1, 1]);
  const titleOneY = useTransform(cinematicProgress, [0, 0.5], [0, -24]);
  const titleTwoY = useTransform(cinematicProgress, [0.3, 1], [26, 0]);

  return (
    <>
      <MotionSection
        id="flow"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="px-6 py-16 md:py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-10 rounded-3xl border border-[#dbe5db] bg-white/80 p-7 shadow-[0_24px_70px_-45px_rgba(31,64,42,0.85)] backdrop-blur-sm md:grid-cols-2 md:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5b7562]">Core Experience</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1f2c23] md:text-4xl">
              A complete daily wellness flow, not just a chatbot
            </h2>
            <p className="mt-4 text-[#587061]">
              InnerCircle guides users from emotional check-in to supportive action, then closes the loop with insights,
              reminders, and privacy control.
            </p>
          </div>

          <ol className="space-y-4">
            {flowSteps.map((step, index) => (
              <li key={step} className="flex items-start gap-3 rounded-2xl border border-[#e2e9e2] bg-[#f7faf7] p-4">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#446749] text-xs font-semibold text-white">
                  {index + 1}
                </span>
                <p className="text-sm leading-relaxed text-[#3f5848] md:text-base">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </MotionSection>

      <section ref={parallaxRef} className="relative px-6 py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(188,224,198,0.35),transparent_45%),radial-gradient(circle_at_85%_80%,rgba(155,209,175,0.28),transparent_42%)]" />
        <div className="relative z-10 mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="lg:sticky lg:top-32 lg:h-[520px]">
            <div className="rounded-3xl border border-[#dbe6dc] bg-[#f8faf8]/90 p-6 shadow-[0_20px_55px_-35px_rgba(27,56,36,0.85)] backdrop-blur-sm md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5b7562]">Scroll Story</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#1f2c23] md:text-3xl">
                Product depth explained through motion
              </h3>
              <p className="mt-4 text-[#587061]">
                As users scroll, layered app surfaces move at different speeds to create a calm parallax narrative that
                mirrors InnerCircle’s guided experience.
              </p>

              <div className="relative mt-8 flex min-h-[310px] items-center justify-center">
                <MotionImg
                  src={screen1}
                  alt="InnerCircle dashboard interface"
                  style={{ y: yLayerOne }}
                  className="relative z-20 w-[210px] rounded-[24px] border border-white/70 shadow-[0_25px_60px_-30px_rgba(23,45,31,0.85)] md:w-[235px]"
                />
                <MotionImg
                  src={screen2}
                  alt="InnerCircle insights interface"
                  style={{ y: yLayerTwo }}
                  className="absolute -left-1 top-8 z-10 hidden w-[145px] rounded-2xl border border-white/70 shadow-[0_18px_45px_-28px_rgba(23,45,31,0.85)] sm:block"
                />
                <MotionImg
                  src={screen3}
                  alt="InnerCircle chat interface"
                  style={{ y: yLayerOne }}
                  className="absolute -right-1 bottom-8 z-10 hidden w-[145px] rounded-2xl border border-white/70 shadow-[0_18px_45px_-28px_rgba(23,45,31,0.85)] sm:block"
                />
              </div>
            </div>
          </div>

          <div id="features" className="grid gap-6 md:grid-cols-2">
            {capabilityCards.map((card, index) => {
              const IconComponent = card.Icon;

              return (
                <MotionArticle
                  key={card.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: index * 0.04, ease: "easeOut" }}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl border border-[#dce5dc] bg-white/85 p-6 shadow-[0_18px_45px_-35px_rgba(20,43,29,0.9)] backdrop-blur-sm"
                >
                  <div className="mb-4 inline-flex rounded-xl border border-[#d4e1d8] bg-[#ecf4ef] p-2.5 text-[#446749]">
                    <IconComponent size={20} />
                  </div>
                  <h4 className="text-lg font-semibold text-[#213428]">{card.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-[#557060]">{card.description}</p>
                  <ul className="mt-4 space-y-2">
                    {card.points.map((point) => (
                      <li key={point} className="text-sm text-[#44614f]">
                        • {point}
                      </li>
                    ))}
                  </ul>
                </MotionArticle>
              );
            })}
          </div>
        </div>
      </section>

      <section id="journey" ref={cinematicRef} className="relative h-[220vh] px-6 py-12 md:py-16">
        <div className="sticky top-24 mx-auto max-w-6xl overflow-hidden rounded-3xl border border-[#d7e2d9] bg-[#101b2f] shadow-[0_30px_80px_-35px_rgba(9,25,18,0.8)]">
          <MotionDiv style={{ y: skyY }} className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(132,165,214,0.35),transparent_42%),linear-gradient(180deg,#111d36_0%,#18264a_40%,#1a2d56_100%)]" />
            <div className="absolute inset-x-0 bottom-0 h-[44%] bg-gradient-to-t from-[#172743] to-transparent" />
          </MotionDiv>

          <MotionDiv style={{ y: hillY }} className="pointer-events-none absolute inset-x-0 bottom-0 h-[62%]">
            <div className="absolute inset-x-0 bottom-0 h-[62%] bg-gradient-to-t from-[#0f2441] via-[#1a365e] to-transparent" />
            <div className="absolute left-[6%] top-[18%] h-[220px] w-[220px] rounded-full bg-[#7aa3df]/20 blur-3xl" />
            <div className="absolute right-[8%] top-[20%] h-[180px] w-[180px] rounded-full bg-[#69b5aa]/20 blur-3xl" />
          </MotionDiv>

          <div className="relative z-20 grid min-h-[76vh] items-center gap-10 px-8 py-12 md:grid-cols-[1.05fr_0.95fr] md:px-12">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b7c4ea]">Cinematic Scroll Story</p>

              <MotionDiv style={{ opacity: titleOneOpacity, y: titleOneY }}>
                <h3 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">Tranquility</h3>
                <p className="mt-4 text-[#c8d5f2] md:text-lg">
                  Gentle depth animation reveals calm layers first: check-in comfort, mood clarity, and soft emotional
                  pacing.
                </p>
              </MotionDiv>

              <MotionDiv style={{ opacity: titleTwoOpacity, y: titleTwoY }} className="-mt-28 md:-mt-24">
                <h3 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">Progress & Clarity</h3>
                <p className="mt-4 text-[#c8d5f2] md:text-lg">
                  As scroll continues, insights and support surfaces rise forward, mirroring a shift from emotion to
                  action.
                </p>
              </MotionDiv>

              <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#8eaadf]/45 bg-white/5 px-5 py-2 text-sm text-[#dbe5ff]">
                Scroll to reveal the full story
              </div>
            </div>

            <div className="relative mx-auto h-[430px] w-full max-w-[340px]">
              <MotionDiv
                style={{ y: phoneTwoY }}
                className="absolute left-0 top-10 w-[190px] rotate-[-7deg] rounded-[1.6rem] border border-white/35 bg-white/10 p-2 shadow-[0_20px_50px_-25px_rgba(10,20,40,0.9)] backdrop-blur"
              >
                <MotionImg src={screen2} alt="Insights preview" className="w-full rounded-[1.2rem]" />
              </MotionDiv>

              <MotionDiv
                style={{ y: phoneOneY }}
                className="absolute right-0 top-2 w-[210px] rotate-[6deg] rounded-[1.8rem] border border-white/40 bg-white/10 p-2.5 shadow-[0_24px_60px_-30px_rgba(10,20,40,0.95)] backdrop-blur"
              >
                <MotionImg src={screen1} alt="Check-in preview" className="w-full rounded-[1.35rem]" />
              </MotionDiv>

              <MotionDiv
                style={{ y: foregroundY }}
                className="absolute bottom-2 left-10 w-[200px] rounded-[1.5rem] border border-white/35 bg-white/10 p-2 shadow-[0_20px_45px_-28px_rgba(10,20,40,0.95)] backdrop-blur"
              >
                <MotionImg src={screen3} alt="Chat preview" className="w-full rounded-[1.15rem]" />
              </MotionDiv>
            </div>
          </div>

          <MotionDiv style={{ y: foregroundY }} className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[26%]">
            <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-[#0c1e3b] via-[#122a4c] to-transparent" />
          </MotionDiv>

          <MotionDiv
            animate={{ x: ["-8%", "106%"], y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 11, ease: "linear" }}
            className="pointer-events-none absolute left-0 top-[22%] z-30 text-[#dce7ff]"
          >
            ✦ ✦
          </MotionDiv>
          <MotionDiv
            animate={{ x: ["-10%", "106%"], y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 14, ease: "linear", delay: 2 }}
            className="pointer-events-none absolute left-0 top-[34%] z-30 text-[#dce7ff]"
          >
            ✦ ✦ ✦
          </MotionDiv>
        </div>
      </section>

      <MotionSection
        id="product"
        ref={productRef}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="px-6 py-16 md:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5b7562]">App Walkthrough</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[#1f2c23] md:text-4xl">
              Explore every core screen in the InnerCircle experience
            </h3>
            <p className="mt-4 text-[#577061]">
              This scroll sequence maps directly to the real product journey: check-in, insights, reminders, support,
              privacy, and emotionally safe conversation.
            </p>
          </div>

          <div className="mt-10 lg:grid lg:grid-cols-[26px_1fr] lg:gap-8">
            <div className="relative hidden lg:block">
              <div className="sticky top-36 h-[70vh]">
                <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 rounded-full bg-[#d7e2d8]" />
                <MotionDiv
                  style={{ scaleY: progressScale }}
                  className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 origin-top rounded-full bg-[#5b8969]"
                />
              </div>
            </div>

            <div className="space-y-8 md:space-y-10">
              {appWalkthrough.map((item, index) => {
              const shift = index % 2 === 0 ? yLayerOne : yLayerTwo;
              const reverse = index % 2 === 1;

              return (
                <MotionArticle
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  className="grid gap-6 rounded-3xl border border-[#dbe5dc] bg-white/80 p-6 shadow-[0_24px_70px_-45px_rgba(29,58,38,0.85)] backdrop-blur-sm md:grid-cols-2 md:items-center md:p-8"
                >
                  <div className={reverse ? "md:order-2" : ""}>
                    <p className="text-xs font-semibold uppercase tracking-[0.19em] text-[#5b7664]">{item.subtitle}</p>
                    <h4 className="mt-2 text-2xl font-semibold tracking-tight text-[#203126] md:text-[1.9rem]">
                      {item.title}
                    </h4>
                    <p className="mt-4 text-[#567062]">{item.description}</p>
                    <ul className="mt-5 space-y-2.5">
                      {item.highlights.map((line) => (
                        <li key={line} className="text-sm text-[#3f5b4a] md:text-[0.95rem]">
                          • {line}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={reverse ? "md:order-1" : ""}>
                    <MotionDiv
                      style={{ y: shift }}
                      className="relative mx-auto w-full max-w-[280px] rounded-[2rem] border border-white/75 bg-gradient-to-b from-[#f2f6f2] to-[#e8f1ea] p-3 shadow-[0_30px_70px_-40px_rgba(27,51,34,0.9)]"
                    >
                      <MotionImg
                        src={item.image}
                        alt={`${item.title} screen`}
                        className="w-full rounded-[1.5rem]"
                      />
                    </MotionDiv>
                  </div>
                </MotionArticle>
              );
            })}
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="px-6 py-16 md:py-24"
      >
        <div className="mx-auto max-w-6xl rounded-3xl border border-[#dce5dc] bg-gradient-to-br from-[#edf4ef] to-[#e4f0e7] p-7 shadow-[0_26px_75px_-45px_rgba(31,63,41,0.85)] md:p-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#587260]">What Makes It Special</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[#1f2c23] md:text-4xl">
              Built as a complete emotional wellness ecosystem
            </h3>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.Icon;

              return (
                <MotionDiv
                  key={pillar.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
                  className="rounded-2xl border border-[#d6e1d7] bg-white/75 p-5"
                >
                  <div className="mb-3 inline-flex rounded-lg bg-[#edf4ef] p-2 text-[#446749]">
                    <IconComponent size={18} />
                  </div>
                  <h4 className="text-base font-semibold capitalize text-[#22382b]">{pillar.title}</h4>
                  <p className="mt-2 text-sm text-[#536a5b]">{pillar.detail}</p>
                </MotionDiv>
              );
            })}
          </div>
        </div>
      </MotionSection>

      <MotionSection
        id="privacy"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="px-6 pb-10"
      >
        <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-[#dce5dc] bg-white/85 p-6 shadow-[0_16px_45px_-35px_rgba(29,51,36,0.8)]">
            <h4 className="text-xl font-semibold text-[#1f2c23]">Privacy-first by design</h4>
            <p className="mt-3 text-[#547061]">
              Users can turn conversation history on or off, use incognito mode for zero persistence, and stay in control
              of how their wellness data is handled.
            </p>
          </div>
          <div id="support" className="rounded-2xl border border-[#dce5dc] bg-white/85 p-6 shadow-[0_16px_45px_-35px_rgba(29,51,36,0.8)]">
            <h4 className="text-xl font-semibold text-[#1f2c23]">Consistent daily support</h4>
            <p className="mt-3 text-[#547061]">
              Reminder systems, mood check-ins, and one-tap coping tools help users build practical wellness habits that
              remain accessible during stressful moments.
            </p>
          </div>
        </div>
      </MotionSection>

      <MotionSection
        id="safety"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="px-6 py-16 md:py-20"
      >
        <div className="mx-auto max-w-6xl rounded-3xl border border-[#d6e0d7] bg-[#f4f8f4] p-8 md:p-11">
          <h3 className="text-2xl font-semibold tracking-tight text-[#1f2c23] md:text-3xl">Responsible use and safety</h3>
          <p className="mt-4 max-w-4xl text-[#53705f]">
            InnerCircle is designed as supportive wellness technology, not a replacement for licensed mental health
            treatment. It includes safety checks and crisis pathways, and should be paired with professional care when
            emotional distress is persistent or urgent.
          </p>
        </div>
      </MotionSection>
    </>
  );
}