import { useState, useEffect } from 'react'
import { Star } from 'lucide-react'

const data = [
  { name: 'Alex P.', avatar: 'https://i.pravatar.cc/100?img=5', quote: 'Alin transformed our website into a high‑performing asset. Conversions went up immediately.', rating: 5 },
  { name: 'Mira D.', avatar: 'https://i.pravatar.cc/100?img=15', quote: 'Clean design, fast delivery, and a super smooth process. Highly recommend!', rating: 5 },
  { name: 'Jonas R.', avatar: 'https://i.pravatar.cc/100?img=25', quote: 'The new landing page is stunning and performs brilliantly. Great attention to detail.', rating: 5 },
]

export default function Testimonials(){
  const [index, setIndex] = useState(0)
  useEffect(() => { const t = setInterval(() => setIndex((i) => (i + 1) % data.length), 4000); return () => clearInterval(t) }, [])

  const item = data[index]
  return (
    <section id="testimonials" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Testimonials</h2>
        <div className="mt-10 mx-auto max-w-3xl rounded-3xl border border-slate-200 dark:border-slate-800 p-10 bg-white/60 dark:bg-slate-900/60 backdrop-blur">
          <img src={item.avatar} alt={item.name} className="mx-auto h-16 w-16 rounded-full object-cover" />
          <p className="mt-6 text-lg text-slate-700 dark:text-slate-300">“{item.quote}”</p>
          <div className="mt-4 flex items-center justify-center gap-1 text-amber-400">
            {Array.from({ length: item.rating }).map((_, i) => (<Star key={i} size={18} fill="currentColor" />))}
          </div>
          <div className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">{item.name}</div>
        </div>
      </div>
    </section>
  )
}
