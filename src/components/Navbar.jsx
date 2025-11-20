import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon, Github, Linkedin, Instagram } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(true)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-white/70 dark:bg-slate-900/60 shadow-sm' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-400 shadow-lg"></div>
            <span className="font-semibold tracking-tight text-slate-900 dark:text-white">Alin Dobrea</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button aria-label="Toggle theme" onClick={() => setDark((d) => !d)} className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              {dark ? <Sun size={18} className="text-amber-400"/> : <Moon size={18} className="text-slate-700"/>}
            </button>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hidden sm:inline-flex p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"><Github size={18} /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hidden sm:inline-flex p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"><Linkedin size={18} /></a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="hidden sm:inline-flex p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"><Instagram size={18} /></a>
            <button onClick={() => setOpen((o) => !o)} className="md:hidden p-2 rounded-lg border border-slate-200 dark:border-slate-700">
              {open ? <X size={18}/> : <Menu size={18}/>}        
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden pb-4 grid gap-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-2 py-2 rounded-lg text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800">
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
