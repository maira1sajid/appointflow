import TestimonialCard from "@/components/ui/TestimonialCard";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  gradient: string;
};

export default function TestimonialsCarousel({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const track = [...testimonials, ...testimonials];

  return (
    <div className="group relative mt-14">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-28" />

      <div className="overflow-hidden">
        <div className="animate-marquee-slow flex w-max gap-6">
          {track.map((testimonial, i) => (
            <div key={`${testimonial.name}-${i}`} className="w-[85vw] max-w-sm shrink-0 sm:w-80">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
