import { Menu, Phone } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const NavLinks = () => (
    <ul className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 text-sm font-medium">
      <li><a href="#fleet" className="text-slate-200 hover:text-white transition">Fleet</a></li>
      <li><a href="#experience" className="text-slate-200 hover:text-white transition">Experience</a></li>
      <li><a href="#services" className="text-slate-200 hover:text-white transition">Services</a></li>
      <li><a href="#contact" className="text-slate-200 hover:text-white transition">Contact</a></li>
    </ul>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-5 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md shadow-xl">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-red-600 to-rose-700 ring-2 ring-white/10" />
              <div className="leading-tight">
                <div className="text-white font-semibold tracking-wide">HOLY'S</div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Luxury Autos</div>
              </div>
            </a>

            <nav className="hidden md:block">
              <NavLinks />
            </nav>

            <div className="flex items-center gap-3">
              <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-600/20 px-4 py-2 text-red-100 hover:bg-red-600/30 transition">
                <Phone className="h-4 w-4" />
                Book a viewing
              </a>
              <button className="md:hidden inline-flex p-2 rounded-lg border border-white/10 text-slate-200" onClick={() => setOpen(v => !v)} aria-label="Menu">
                <Menu />
              </button>
            </div>
          </div>

          {open && (
            <div className="px-6 pb-6 md:hidden">
              <NavLinks />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
