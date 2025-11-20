import { Github, Linkedin, Instagram } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-slate-600 dark:text-slate-400">© 2025 Alin Dobrea. All rights reserved.</p>
        <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
          <a href="https://github.com/" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg" aria-label="GitHub"><Github size={18}/></a>
          <a href="https://linkedin.com/" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg" aria-label="LinkedIn"><Linkedin size={18}/></a>
          <a href="https://instagram.com/" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg" aria-label="Instagram"><Instagram size={18}/></a>
        </div>
      </div>
    </footer>
  )
}
