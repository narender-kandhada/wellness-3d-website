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
  ArrowRight,
  Trash2,
  Lock,
  EyeOff,
  Shield,
  Wind
} from 'lucide-react';
import { cn } from './lib/utils';

// Import images from assets folder
import chatImage from './assets/chat.png';
import dashboardImage from './assets/dashboard.png';
import insightsImage from './assets/insights.png';
import supporImage from './assets/support.png';

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
            <a href="#download" className="hidden sm:block bg-primary text-surface px-6 py-2.5 rounded-full font-medium text-sm hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
              Get Started
            </a>
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
              <a href="#download" className="w-full bg-primary text-surface py-4 rounded-full font-bold text-center block">
                Get Started
              </a>
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
                src={dashboardImage} 
                alt="InnerCircle App Interface"
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
                  src={dashboardImage} 
                  alt="Mood Analytics Dashboard"
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
                  src={chatImage} 
                  alt="AI Chat Interface"
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

              {/* Meditation Exercises */}
              <div className="bg-tertiary-container rounded-3xl p-8 flex flex-col justify-between hover:shadow-md transition-all">
                <div className="space-y-4">
                  <Wind className="text-on-tertiary-container w-10 h-10" />
                  <h3 className="text-2xl font-bold text-on-tertiary-container">Meditation Exercises</h3>
                  <p className="text-on-tertiary-container/80 text-sm">Guided meditations to calm your mind and find inner peace throughout your day.</p>
                </div>
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
                src={insightsImage} 
                alt="Progress Tracking"
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
        <section id="support" className="py-24 px-6 bg-surface-container-low overflow-hidden">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              viewport={{ once: true }}
              className="bg-surface-container-highest rounded-3xl p-8 flex items-center justify-center min-h-[500px] overflow-hidden order-2 md:order-1"
            >
              <img 
                className="w-full max-w-sm transform hover:scale-105 transition-transform duration-700" 
                src={supporImage} 
                alt="Support and Well-being Resources"
              />
            </motion.div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">You don't have to go through this alone</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                If you're going through a difficult time, reaching out is a sign of strength. Our supportive community and resources are here to help you find your way.
              </p>
              <div className="space-y-6 pt-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-container rounded-2xl flex items-center justify-center">
                    <HeartPulse className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Weekly Check-ins</h4>
                    <p className="text-sm text-on-surface-variant">Regular touchpoints to support your emotional well-being journey.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-tertiary-container rounded-2xl flex items-center justify-center">
                    <BrainCircuit className="text-tertiary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Personalized Support</h4>
                    <p className="text-sm text-on-surface-variant">Resources tailored to your unique challenges and goals.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy & Trust */}
        <section id="privacy" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 space-y-4">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-primary" />
                <h2 className="text-4xl md:text-5xl font-bold">Privacy & Trust</h2>
              </div>
              <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">Your safety and privacy matter to us</p>
            </div>

            {/* Privacy Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-surface rounded-3xl p-8 shadow-sm border border-surface-container-high hover:shadow-md transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center flex-shrink-0">
                    <Lock className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Your data belongs to you</h3>
                  </div>
                </div>
                <p className="text-on-surface-variant leading-relaxed">Everything you share stays on your device. We never sell or share your personal information with anyone.</p>
              </div>

              <div className="bg-surface rounded-3xl p-8 shadow-sm border border-surface-container-high hover:shadow-md transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center flex-shrink-0">
                    <Trash2 className="text-secondary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Delete anytime</h3>
                  </div>
                </div>
                <p className="text-on-surface-variant leading-relaxed">Full control. Delete individual messages or entire conversations whenever you want.</p>
              </div>

              <div className="bg-surface rounded-3xl p-8 shadow-sm border border-surface-container-high hover:shadow-md transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-tertiary-container flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="text-tertiary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">No sharing without consent</h3>
                  </div>
                </div>
                <p className="text-on-surface-variant leading-relaxed">Your conversations are private. Never shared with third parties without your explicit permission.</p>
              </div>

              <div className="bg-surface rounded-3xl p-8 shadow-sm border border-surface-container-high hover:shadow-md transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center flex-shrink-0">
                    <EyeOff className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Anonymous by design</h3>
                  </div>
                </div>
                <p className="text-on-surface-variant leading-relaxed">No email, no phone number, no tracking. Complete anonymity while you use InnerCircle.</p>
              </div>
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
                <a 
                  href="https://github.com/narender-kandhada/wellness-3d-website/releases/latest/download/InnerCircle.apk" 
                  download="InnerCircle.apk"
                  className="bg-primary text-surface px-10 py-5 rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-primary/40 transition-all flex items-center justify-center gap-3 group"
                >
                  <Download className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
                  Download APK
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Download Procedure Steps */}
        <section className="py-24 px-6 bg-surface-container-low">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl font-bold">Installation Steps</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">Follow these simple steps to get InnerCircle on your device</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1: Download */}
              <div className="bg-surface rounded-3xl p-8 shadow-sm border border-surface-container-high hover:shadow-md transition-all">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-container mb-6">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Download</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Tap the "Download APK" button above to download the InnerCircle application file to your device.
                </p>
              </div>

              {/* Step 2: Enable Unknown Sources */}
              <div className="bg-surface rounded-3xl p-8 shadow-sm border border-surface-container-high hover:shadow-md transition-all">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary-container mb-6">
                  <span className="text-2xl font-bold text-secondary">2</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Enable Unknown Sources</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Go to Settings → Security → Unknown Sources and enable it to allow installation of apps from outside the Play Store.
                </p>
              </div>

              {/* Step 3: Install APK */}
              <div className="bg-surface rounded-3xl p-8 shadow-sm border border-surface-container-high hover:shadow-md transition-all">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-tertiary-container mb-6">
                  <span className="text-2xl font-bold text-tertiary">3</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Install APK</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Open the downloaded file and tap "Install" to complete the setup. Once installed, you can start your wellness journey!
                </p>
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
