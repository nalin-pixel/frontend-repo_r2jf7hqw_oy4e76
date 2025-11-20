import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 opacity-90">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80 dark:from-slate-950/80 dark:via-slate-950/30 dark:to-slate-950/90 pointer-events-none"/>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <p className="mb-4 inline-flex items-center rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-4 py-1 text-xs font-semibold tracking-widest uppercase">Available for freelance</p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Alin Dobrea — Web Developer & Designer
          </h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-4 text-lg sm:text-xl text-slate-700 dark:text-slate-300 max-w-2xl">
            I build fast, modern & conversion-focused websites.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#projects" className="inline-flex items-center rounded-xl bg-slate-900 text-white px-6 py-3 text-sm font-semibold shadow-lg shadow-slate-900/10 hover:opacity-90 transition">
              View My Work
            </a>
            <a href="#contact" className="inline-flex items-center rounded-xl border border-slate-300 dark:border-slate-700 px-6 py-3 text-sm font-semibold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition">
              Hire Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
