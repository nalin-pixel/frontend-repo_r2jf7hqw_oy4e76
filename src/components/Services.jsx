import { motion } from 'framer-motion'
import { Globe, Briefcase, Layers, Redo2, Cpu } from 'lucide-react'

const services = [
  { title: 'Web Design & Development', icon: Globe, desc: 'Modern, responsive and fast websites built for results.' },
  { title: 'Portfolio Websites', icon: Briefcase, desc: 'Elegant personal brands and portfolios that stand out.' },
  { title: 'Business Websites', icon: Layers, desc: 'High‑converting sites for products and services.' },
  { title: 'Landing Pages', icon: Redo2, desc: 'Focused pages built for campaigns and launches.' },
  { title: 'Automation Consulting', icon: Cpu, desc: 'No‑code workflows to save hours every week.' },
]

export default function Services(){
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Services</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, desc, icon: Icon }) => (
            <motion.div key={title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="group rounded-2xl border border-slate-200 dark:border-slate-800 p-6 bg-white/60 dark:bg-slate-900/60 backdrop-blur hover:shadow-xl hover:-translate-y-0.5 transition-all">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-400 text-white flex items-center justify-center shadow-lg">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">{title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
