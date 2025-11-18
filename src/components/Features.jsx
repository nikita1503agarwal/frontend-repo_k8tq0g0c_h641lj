import { ShieldCheck, Gauge, Sparkles } from 'lucide-react';

export default function Features() {
  const items = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-red-400" />,
      title: "Verified provenance",
      desc: "Comprehensive service history, expert inspections, and transparent documentation on every vehicle.",
    },
    {
      icon: <Gauge className="h-6 w-6 text-red-400" />,
      title: "Performance curated",
      desc: "From track‑ready supercars to effortless grand tourers — each chosen for character and condition.",
    },
    {
      icon: <Sparkles className="h-6 w-6 text-red-400" />,
      title: "White‑glove delivery",
      desc: "Covered transport, meticulous detailing, and a seamless handover tailored to your schedule.",
    },
  ];

  return (
    <section id="experience" className="relative py-20 md:py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.15),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">An elevated buying experience</h2>
          <p className="mt-3 text-slate-300">Discretion, detail, and genuine automotive passion — without compromise.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/30">
              <div className="h-12 w-12 rounded-xl bg-red-600/15 ring-1 ring-red-500/30 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-white font-semibold text-lg">{item.title}</h3>
              <p className="text-slate-300 mt-2 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
