import { motion } from 'framer-motion'
import { Code2, Layout, Palette, Rocket, Sparkles, Workflow } from 'lucide-react'

const skills = [
  { title: 'Web Design', icon: Layout },
  { title: 'Framer / No-Code', icon: Rocket },
  { title: 'HTML / CSS / JavaScript', icon: Code2 },
  { title: 'UI/UX Design', icon: Palette },
  { title: 'Branding', icon: Sparkles },
  { title: 'Automation & AI-Assisted Dev', icon: Workflow },
]

export default function Skills(){
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Skills</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(({ title, icon: Icon }) => (
            <motion.div key={title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="group rounded-2xl border border-slate-200 dark:border-slate-800 p-6 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md hover:shadow-xl hover:-translate-y-0.5 transition-all">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-400 text-white flex items-center justify-center shadow-lg">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">{title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Expertise in {title} with a focus on performance and polish.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
