import { motion } from 'framer-motion'

const stats = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Happy Clients', value: '30+' },
  { label: 'Projects Delivered', value: '60+' },
]

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="aspect-square rounded-3xl bg-gradient-to-br from-indigo-500/20 via-blue-500/10 to-cyan-400/10 border border-slate-200 dark:border-slate-800 overflow-hidden flex items-center justify-center">
            <div className="h-40 w-40 rounded-2xl bg-slate-200 dark:bg-slate-800"/>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">About</h2>
            <p className="mt-4 text-slate-700 dark:text-slate-300 leading-relaxed">
              Passion for modern web design. Experienced with Framer, no-code, and responsive design. I focus on clean structure, usability, and business results.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 text-center">
                  <div className="text-2xl font-extrabold text-slate-900 dark:text-white">{s.value}</div>
                  <div className="text-xs uppercase tracking-widest text-slate-500">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
