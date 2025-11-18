export default function Fleet() {
  const cars = [
    { name: 'Ferrari 296 GTB', meta: 'Rosso Corsa • 2023 • 1,200 mi', img: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Lamborghini Huracán STO', meta: 'Verde Citrea • 2022 • 2,100 mi', img: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1f?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Porsche 911 GT3', meta: 'Shark Blue • 2022 • 4,300 mi', img: 'https://images.unsplash.com/photo-1577083753695-6c9c184b84de?q=80&w=1200&auto=format&fit=crop' },
  ];

  return (
    <section id="fleet" className="relative py-20 md:py-28 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Featured inventory</h2>
            <p className="mt-3 text-slate-300">A glimpse of what’s currently available. Full list upon request.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-white hover:bg-white/10">Request full catalog</a>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {cars.map((car, i) => (
            <div key={i} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={car.img} alt={car.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold">{car.name}</h3>
                <p className="text-slate-300 text-sm mt-1">{car.meta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
