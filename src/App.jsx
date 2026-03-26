import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ScrollScene from "./components/ScrollScene";

const MotionSection = motion.section;

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f6f3] text-[#1f2c23]">
      <Navbar />

      <main className="pt-24 md:pt-28">
        <Hero />
        <ScrollScene />

        <MotionSection
          id="download"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="px-6 pb-16 md:pb-24"
        >
          <div className="mx-auto max-w-5xl rounded-3xl border border-[#dce4da] bg-gradient-to-br from-[#eaf4ee] via-[#e4f1e8] to-[#def0e3] p-8 text-center shadow-[0_20px_70px_-40px_rgba(68,103,73,0.55)] md:p-14">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Start your wellness journey today
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-[#4a5f50] md:text-lg">
              No pressure. Just support.
            </p>
            <button className="mt-8 rounded-full bg-[#446749] px-8 py-4 text-sm font-medium text-white shadow-[0_12px_35px_-18px_rgba(68,103,73,0.95)] transition hover:-translate-y-0.5 hover:bg-[#3c5d41]">
              Download APK
            </button>
          </div>
        </MotionSection>
      </main>
    </div>
  );
}