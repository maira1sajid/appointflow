const brands = [
  "Glow Beauty",
  "Peak Physio",
  "Nair Consulting",
  "Urban Dental",
  "FlexFit Studio",
  "Zenith Spa",
  "Harbor Wellness",
];

const track = [...brands, ...brands];

export default function TrustedMarquee() {
  return (
    <div className="group relative border-t border-white/10 bg-black/10 py-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-brand-900 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-brand-900 to-transparent" />

      <p className="mb-6 text-center text-xs font-semibold tracking-[0.25em] text-white/40">
        TRUSTED BY 1,200+ BUSINESSES, INCLUDING
      </p>

      <div className="overflow-hidden">
        <div className="animate-marquee flex w-max items-center">
          {track.map((brand, i) => (
            <div key={`${brand}-${i}`} className="flex items-center">
              <span className="whitespace-nowrap px-8 text-xl font-bold tracking-tight text-white/35 transition-colors duration-200 hover:text-white">
                {brand}
              </span>
              <span className="h-5 w-px bg-white/10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
