/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Download, 
  Menu, 
  X, 
  Smile, 
  BarChart3, 
  Check, 
  Moon, 
  PenLine, 
  ShieldCheck, 
  BrainCircuit, 
  HeartPulse,
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import { cn } from './lib/utils';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <header 
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
          isScrolled ? "glass-header shadow-sm" : "bg-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-primary tracking-tight font-headline">
            InnerCircle
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {['Features', 'Support', 'Privacy', 'Download'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-secondary hover:text-primary transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block bg-primary text-surface px-6 py-2.5 rounded-full font-medium text-sm hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
              Get Started
            </button>
            <button 
              className="md:hidden p-2 text-on-surface"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-surface shadow-xl p-6 md:hidden flex flex-col gap-4"
            >
              {['Features', 'Support', 'Privacy', 'Download'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-medium text-on-surface"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="w-full bg-primary text-surface py-4 rounded-full font-bold">
                Get Started
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 hero-gradient overflow-hidden">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-container text-on-primary-container text-xs font-bold tracking-widest uppercase">
                AI Wellness Companion
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-on-surface">
                Calm your mind.<br />Track your mood.<br />
                <span className="text-primary">Feel better.</span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant max-w-lg leading-relaxed">
                A gentle space designed for your emotional well-being. Using mindful AI to help you navigate life's ups and downs.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-primary text-surface px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all flex items-center gap-2 group">
                  <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                  Download App
                </button>
                <button className="bg-surface-container-high text-on-surface px-8 py-4 rounded-full text-lg font-semibold hover:bg-surface-container-highest transition-all">
                  Learn More
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-[100px]" />
              <img 
                className="relative z-10 w-full max-w-[320px] drop-shadow-2xl" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUjHKQ-Bzsl-OD0Ws2pHRmdBRNoPtNfXTtAY-Z8BuPz-_9XoIuqYn5objXsPNJ4frMd5BSnQa8tTRsIj0a46Nor-MR3tya2nGFS89hj7lQe5bjuoGxQ05bKWzPQCEqAudXo0YWdOfhsyPkEaJAziFZUpiWa7bxTT_lWHrg1bEVlj1SwkvhEvQpMGlA1s90Xx7EJk4MVDYiYkN2yq_TLv5c2R_ymT4VfvoEhv6L4waUIaZrKCPRlrQMAPj-370Syro2VkfXKu31hSgx" 
                alt="InnerCircle App Interface"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </section>

        {/* Mood Section */}
        <section id="features" className="py-24 px-6 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-5 flex flex-col justify-center space-y-6">
                <h2 className="text-4xl font-bold leading-tight">Understand how you feel in seconds.</h2>
                <p className="text-lg text-on-surface-variant leading-relaxed">
                  Our intuitive interface makes mood logging a moment of reflection, not a chore. Visualize your emotional landscape with beautiful, data-driven insights.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-surface rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <Smile className="text-primary mb-2 w-6 h-6" />
                    <div className="font-bold">Fast Check-ins</div>
                    <div className="text-sm text-secondary">Quick 10-second updates</div>
                  </div>
                  <div className="p-6 bg-surface rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <BarChart3 className="text-tertiary mb-2 w-6 h-6" />
                    <div className="font-bold">Deep Patterns</div>
                    <div className="text-sm text-secondary">Find your triggers</div>
                  </div>
                </div>
              </div>
              <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                viewport={{ once: true }}
                className="md:col-span-7 bg-surface-container-highest rounded-3xl p-8 flex items-center justify-center min-h-[500px] overflow-hidden"
              >
                <img 
                  className="w-full max-w-sm transform hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbgAi56z2QGcvhctEqe6CanYKHdvI6k53t1hTjaeUIr8IOvq43zmVi4p1qt-_EjGHbv_opYpxic7A4935VSMAY5t5E9ZAnwIYTyd0xMbdUnJrw_-F-jZPBZFdUOTGl1MSm68DWjuGA2EFzTUaVJxxS2CmrE1GiZhDhM1TVSygamDsY8iv5d1wU5aJGYyZULaT--5UoyhgSaFmPUt4dAvFn6rKWhvAxwHILxLRGBVNvmQjQCNyirPfr9Sje2FKDmxzFm5dvNkF3MAeR" 
                  alt="Mood Analytics Dashboard"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Chat Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto bg-surface rounded-3xl p-8 md:p-16 flex flex-col md:flex-row gap-16 items-center shadow-sm border border-surface-container-high">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-bold leading-tight">Talk freely. Be heard without judgment.</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                Our AI companion is trained in compassionate communication. Whether you're stressed, anxious, or just need to vent, we're here 24/7 to listen and support.
              </p>
              <ul className="space-y-4">
                {[
                  "Safe space for difficult conversations",
                  "Evidence-based CBT techniques"
                ].map((text) => (
                  <li key={text} className="flex gap-4 items-start">
                    <div className="bg-primary-container p-1 rounded-full">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium text-on-surface">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full max-w-md">
              <motion.div 
                whileHover={{ y: -10 }}
                className="relative bg-secondary-container rounded-3xl p-1 overflow-hidden shadow-2xl"
              >
                <img 
                  className="w-full h-auto" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfkmmT5VSCP6qn3g8_zT0shn50QnZw7Elbf40D-3epL2B6WhN5sZS2eNQVsDm5J35cj49UQ9EdFbvgHSY9HHp3_bgKBoDxmGillus7CbRTKt7O4-HH8IlycW4646EKEMND3met5bWNLO8csagJbFFxf1DFzJWMLkXV0GGv4m_jERIR-GStc-ST2kPBQ2SXc3zvSrokI3igSglm7KvumDgatbs04Mn6NWjZPhOQfX0OKx5WxztEdwMS0bFlxBw59IrvbyRQB4iwfDBT" 
                  alt="AI Chat Interface"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tools Bento Grid */}
        <section className="py-24 px-6 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl font-bold">Simple tools to help you reset anytime.</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">Micro-interventions designed to fit into your busy life.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Breathing Tool */}
              <div className="md:col-span-2 bg-surface rounded-3xl p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center hover:shadow-md transition-all group">
                <div className="flex-1 space-y-4">
                  <div className="text-xs font-bold text-primary tracking-widest uppercase">Breathing</div>
                  <h3 className="text-2xl font-bold">Guided Breathwork</h3>
                  <p className="text-on-surface-variant text-sm">Sync your breath with our rhythmic animations to lower your heart rate instantly.</p>
                  <button className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Try Breathing Exercise <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex-1 flex justify-center">
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-32 h-32 rounded-full border-8 border-primary-container border-t-primary" 
                  />
                </div>
              </div>

              {/* Sleep Sounds */}
              <div className="bg-tertiary-container rounded-3xl p-8 flex flex-col justify-between hover:shadow-md transition-all">
                <div className="space-y-4">
                  <Moon className="text-on-tertiary-container w-10 h-10" />
                  <h3 className="text-2xl font-bold text-on-tertiary-container">Sleep Sounds</h3>
                  <p className="text-on-tertiary-container/80 text-sm">Curated soundscapes to help you drift off into restorative rest.</p>
                </div>
                <img 
                  className="mt-4 rounded-2xl h-32 object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQBsl31UOt-nNwfuleTr_v5Az-z478kJDgHIM51AcWRaRufTgmTUWsPECapL4B8dRCm2WPQ6SBbw4CbinHxdjUT7iMymF91KFU0IXA4cHSkhhLbIP_3bdA3gZwQpQWykDjvPmAZM5jzlROPnUlT0jR1KJVdaBakhH9KG9XfyfDNAJMtmIJdU-P3Z3KyffgxGWywMFp17sjsy6fMR7gMXQg4OSLxFgta9iPHc0YqFLnJ066n1QfHLEF2T7IfVSX1VS92ba4nGmNuTwy" 
                  alt="Soothing Sleep Sounds"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Journaling */}
              <div className="bg-secondary-container rounded-3xl p-8 flex flex-col justify-between hover:shadow-md transition-all">
                <div className="space-y-4">
                  <PenLine className="text-on-secondary-container w-10 h-10" />
                  <h3 className="text-2xl font-bold text-on-secondary-container">Journaling</h3>
                  <p className="text-on-secondary-container/80 text-sm">Guided prompts to help you unpack complex thoughts and emotions.</p>
                </div>
                <div className="mt-4 h-1 w-full bg-white/30 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "60%" }}
                    className="h-full bg-on-secondary-container" 
                  />
                </div>
              </div>

              {/* Privacy */}
              <div className="md:col-span-2 bg-surface rounded-3xl p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center hover:shadow-md transition-all">
                <div className="flex-1 flex justify-center order-2 md:order-1">
                  <ShieldCheck className="w-32 h-32 text-secondary opacity-20" />
                </div>
                <div className="flex-1 space-y-4 order-1 md:order-2">
                  <div className="text-xs font-bold text-secondary tracking-widest uppercase">Privacy</div>
                  <h3 className="text-2xl font-bold">Your data belongs to you. Always.</h3>
                  <p className="text-on-surface-variant text-sm">End-to-end encryption means even we can't read your journals. Your sanctuary is private.</p>
                  <button className="text-secondary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                    Read Our Security Pledge <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Insights Section */}
        <section className="py-24 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute -left-20 top-0 w-96 h-96 bg-tertiary-container rounded-full blur-[120px] opacity-40" />
              <motion.img 
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                viewport={{ once: true }}
                className="relative z-10 w-full max-w-md drop-shadow-xl mx-auto" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq9Kspn1uM7omP1mylAaASkyJNRpF9HF3OyXH1NMkMzFsMm8MUBu7ui_6mNVtZJSnB6pE9nT_lwZ6Jmdj4gDEDb2d8Ai1y4bgYYTTGlXPeFFaD7Kp9cW6PIFpCPKepL5KxzXewxAiMkR13YZMZcrKAozni1xyLQF9OYqd3nCjvv1hz9zjDOc6mfc_I8hoUqd0fsdvCVu0vL7mSDmHk-tpVnSFmdpx0pb4tfz5dqNmPUaiyKOAQ4dvqncdTM2Nm3wdrlK5yW0rX3snU" 
                alt="Progress Tracking"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">Track your emotional journey over time.</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                Identify patterns you never knew existed. See how your sleep, activity, and interactions correlate with your overall well-being.
              </p>
              <div className="space-y-6 pt-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-container rounded-2xl flex items-center justify-center">
                    <HeartPulse className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Weekly Summaries</h4>
                    <p className="text-sm text-on-surface-variant">A bird's eye view of your wellness metrics.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-tertiary-container rounded-2xl flex items-center justify-center">
                    <BrainCircuit className="text-tertiary" />
                  </div>
                  <div>
                    <h4 className="font-bold">AI Insights</h4>
                    <p className="text-sm text-on-surface-variant">Intelligent observations about your mood triggers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Crisis Support */}
        <section id="support" className="py-24 px-6 bg-error-container/10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-error-container text-white mb-4 shadow-lg shadow-error/20">
              <AlertCircle className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold">Help is always within reach.</h2>
            <p className="text-lg text-on-surface-variant">
              If you are experiencing a mental health emergency, our app provides immediate one-tap access to local helplines and crisis support services. You are never alone.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <button className="bg-error text-on-error px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-error/30 transition-all active:scale-95">
                Get Immediate Help
              </button>
              <button className="bg-surface text-on-surface px-8 py-4 rounded-full font-bold shadow-sm hover:bg-surface-container-high transition-all">
                Find a Therapist
              </button>
            </div>
          </div>
        </section>

        {/* Final Download Section */}
        <section id="download" className="py-32 px-6 hero-gradient">
          <div className="max-w-5xl mx-auto bg-surface rounded-3xl p-12 md:p-24 text-center shadow-xl shadow-primary/5">
            <div className="space-y-6 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface">Start your wellness journey today</h2>
              <p className="text-xl text-on-surface-variant">No pressure. Just support. Join thousands who have found their breathing space.</p>
              <div className="pt-8 flex flex-col sm:flex-row justify-center gap-6 items-center">
                <button className="bg-primary text-surface px-10 py-5 rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-primary/40 transition-all flex items-center justify-center gap-3 group">
                  <Download className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
                  Download APK
                </button>
                <div className="flex items-center gap-4 text-secondary font-medium">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <img 
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-surface" 
                        src={`https://picsum.photos/seed/user${i}/100/100`} 
                        alt="User"
                        referrerPolicy="no-referrer"
                      />
                    ))}
                  </div>
                  <span>50k+ Happy Users</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-low px-12 py-16 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="text-xl font-bold text-primary">InnerCircle</div>
            <p className="text-xs text-on-surface-variant max-w-xs text-center md:text-left">
              © 2024 InnerCircle. Your breathing space for digital wellness.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {['Instagram', 'Twitter', 'LinkedIn', 'Privacy Policy', 'Terms of Service'].map((link) => (
              <a 
                key={link}
                href="#" 
                className="text-xs text-secondary hover:text-primary underline underline-offset-4 transition-all"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
