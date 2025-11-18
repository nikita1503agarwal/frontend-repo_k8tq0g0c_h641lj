export default function CTA() {
  return (
    <section id="contact" className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 md:py-28">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_right,rgba(239,68,68,0.15),transparent_55%)]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">Arrange a private viewing</h2>
        <p className="mt-3 text-slate-300">Leave your details and your dedicated specialist will reach out discreetly.</p>

        <form className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3">
          <input placeholder="Full name" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/50" />
          <input placeholder="Email" type="email" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/50" />
          <input placeholder="Phone" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/50" />
          <textarea placeholder="What are you looking for?" className="md:col-span-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/50" rows="4" />
          <button className="md:col-span-3 inline-flex justify-center rounded-xl bg-red-600 px-6 py-3 text-white font-medium hover:bg-red-500 transition shadow-lg shadow-red-600/25">Request callback</button>
        </form>

        <p className="mt-4 text-xs text-slate-400">By submitting, you agree to be contacted regarding availability and terms.</p>
      </div>
    </section>
  );
}
