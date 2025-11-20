import { useState } from 'react'

export default function Contact(){
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Contact</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <p className="text-slate-700 dark:text-slate-300 max-w-xl">Let’s build something amazing together.</p>
            <div className="mt-6 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 bg-white/60 dark:bg-slate-900/60 backdrop-blur">
              <form onSubmit={onSubmit} className="grid gap-4">
                <div>
                  <label className="text-sm text-slate-600 dark:text-slate-400">Name</label>
                  <input required value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} className="mt-1 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="text-sm text-slate-600 dark:text-slate-400">Email</label>
                  <input type="email" required value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} className="mt-1 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="text-sm text-slate-600 dark:text-slate-400">Message</label>
                  <textarea required rows="5" value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} className="mt-1 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <button className="inline-flex items-center rounded-xl bg-slate-900 text-white px-6 py-3 text-sm font-semibold shadow-lg shadow-slate-900/10 hover:opacity-90 transition w-fit">Send Message</button>
                {sent && <p className="text-green-600 text-sm">Thanks! I’ll get back to you shortly.</p>}
              </form>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 p-8 bg-gradient-to-br from-indigo-500/10 via-blue-500/5 to-cyan-400/10">
            <div className="grid gap-4 text-slate-700 dark:text-slate-300">
              <div>
                <div className="text-xs uppercase tracking-widest text-slate-500">Email</div>
                <div className="font-semibold">hello@alindobrea.com</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-slate-500">Location</div>
                <div className="font-semibold">Remote • Europe</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
