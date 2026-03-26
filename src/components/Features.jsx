import { motion } from "framer-motion";
import { BrainCircuit, LineChart, Flower2 } from "lucide-react";

const MotionDiv = motion.div;
const MotionArticle = motion.article;

const featureItems = [
  {
    title: "AI Chat",
    description: "Talk freely. Be heard without judgment.",
    Icon: BrainCircuit,
  },
  {
    title: "Mood Tracking",
    description: "Understand how you feel over time.",
    Icon: LineChart,
  },
  {
    title: "Meditation",
    description: "Calm your mind with guided exercises.",
    Icon: Flower2,
  },
];

export default function Features() {
  return (
    <section id="features" className="px-6 py-16 md:py-24">
      <MotionDiv
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="mx-auto max-w-6xl"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[#1f2c23] md:text-4xl">
            Simple tools to help you reset
          </h2>
          <p className="mt-4 text-[#567062]">
            Built for calmer days with a gentle, private, and supportive experience.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-7">
          {featureItems.map((featureItem) => {
            const IconComponent = featureItem.Icon;

            return (
              <MotionArticle
                key={featureItem.title}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 280, damping: 24 }}
                className="rounded-2xl border border-[#dbe5db] bg-white/80 p-7 backdrop-blur-sm shadow-[0_14px_40px_-30px_rgba(20,43,29,0.9)]"
              >
                <div className="mb-5 inline-flex rounded-xl border border-[#d7e4da] bg-[#edf4ef] p-2.5 text-[#446749]">
                  <IconComponent size={20} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-[#25372a]">{featureItem.title}</h3>
                <p className="text-sm leading-relaxed text-[#5a7060]">{featureItem.description}</p>
              </MotionArticle>
            );
          })}
        </div>
      </MotionDiv>
    </section>
  );
}