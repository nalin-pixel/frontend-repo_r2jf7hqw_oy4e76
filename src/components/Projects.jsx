import { motion } from 'framer-motion'

const projects = [
  { title: 'SaaS Dashboard', desc: 'Analytics-first SaaS dashboard with real-time charts.', tools: 'React, Tailwind, Recharts', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Creative Portfolio', desc: 'Minimal portfolio with smooth scroll and parallax.', tools: 'Framer, GSAP', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop' },
  { title: 'E‑commerce', desc: 'Conversion-focused storefront with blazing performance.', tools: 'Next.js, Stripe', img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Landing Page', desc: 'High-impact marketing page with A/B tested sections.', tools: 'React, Framer Motion', img: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Agency Site', desc: 'Bold site for a creative agency with CMS.', tools: 'Framer, Headless CMS', img: 'https://images.unsplash.com/photo-1547658719-5c0b05f3d590?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Automation Suite', desc: 'No-code automations for operations & growth.', tools: 'Zapier, Make.com', img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop' },
]

export default function Projects(){
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Projects</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur">
              <div className="relative h-44 overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"/>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-slate-900 dark:text-white">{p.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{p.desc}</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-slate-500">{p.tools}</p>
                <div className="mt-4 flex gap-3">
                  <a href="#" className="inline-flex items-center rounded-lg bg-slate-900 text-white px-3 py-2 text-xs font-semibold hover:opacity-90">View Live</a>
                  <a href="#" className="inline-flex items-center rounded-lg border border-slate-300 dark:border-slate-700 px-3 py-2 text-xs font-semibold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800">Case Study</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
