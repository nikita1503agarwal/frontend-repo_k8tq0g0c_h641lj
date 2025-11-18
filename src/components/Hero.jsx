import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:py-36">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-300/80">Curated Performance</p>
          <h1 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
            HOLY'S LUXURY AUTOS
          </h1>
          <p className="mt-5 text-lg md:text-xl text-slate-200/90">
            A private collection of handpicked exotics and flagship grand tourers. Experience discreet acquisition, white‑glove delivery, and impeccable provenance.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#fleet" className="inline-flex items-center justify-center rounded-xl bg-red-600 px-6 py-3 text-white font-medium hover:bg-red-500 transition shadow-lg shadow-red-600/25">Explore the fleet</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-white font-medium hover:bg-white/10 transition">Private viewing</a>
          </div>
        </div>
      </div>
    </section>
  );
}
