import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Avatar from "@/components/ui/Avatar";
import StatCard from "@/components/ui/StatCard";
import BookingCardMock from "@/components/ui/BookingCardMock";
import TrustedMarquee from "@/components/ui/TrustedMarquee";
import { CheckIcon, StarIcon } from "@/components/ui/icons";

const stats = [
  { end: 25, suffix: "K+", label: "Appointments booked" },
  { end: 1.2, decimals: 1, suffix: "K+", label: "Businesses onboard" },
  { end: 98, suffix: "%", label: "On-time show rate" },
  { end: 4.9, decimals: 1, suffix: "/5", label: "Average rating" },
];

const highlights = [
  "No-show reminders built in",
  "Sync with your calendar instantly",
];

const avatarStack = [
  {
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=100&q=80",
    alt: "Hair salon",
  },
  {
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=100&q=80",
    alt: "Dental clinic",
  },
  {
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=100&q=80",
    alt: "Fitness gym",
  },
  {
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=100&q=80",
    alt: "Consulting office",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_120%_90%_at_10%_-10%,_#7c5cf5_0%,_#5a34e8_35%,_#2a1670_75%,_#140b33_100%)]">
      <div className="bg-grid-dark absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-32 -right-16 h-[28rem] w-[28rem] rounded-full bg-accent-500/40 blur-[110px]" />
      <div className="pointer-events-none absolute top-1/3 -left-24 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-brand-400/30 blur-[100px]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-16 lg:grid-cols-2 lg:items-start lg:px-8 lg:pt-24">
        <div>
          <Badge>Smart scheduling, made simple</Badge>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.6rem]">
            Book appointments
            <br />
            <span className="text-gradient-accent">
              without the back-and-forth.
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-brand-50/90">
            AppointFlow gives your clients a beautiful booking page, fills
            your calendar automatically, and sends reminders so no one ever
            misses a visit again.
          </p>

          <ul className="mt-6 flex flex-col gap-2 sm:flex-row sm:gap-6">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm font-medium text-white"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent-500/20">
                  <CheckIcon className="h-3 w-3 text-accent-400" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/signup" variant="secondary" size="lg">
              Get Started — It&apos;s Free
              <span aria-hidden className="text-base">
                →
              </span>
            </Button>
            <Button href="#how-it-works" variant="outline-light" size="lg">
              See How It Works
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-3">
              {avatarStack.map((avatar, i) => (
                <Avatar
                  key={i}
                  image={avatar.image}
                  alt={avatar.alt}
                  size={36}
                  className="ring-2 ring-brand-700"
                />
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex gap-0.5 text-accent-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-3.5 w-3.5" />
                ))}
              </div>
              <p className="text-xs font-medium text-brand-50/80">
                Rated 4.9/5 by 1,200+ businesses
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-accent-400/30 via-transparent to-brand-400/20 blur-2xl" />

          <div className="rotate-3">
            <BookingCardMock />
          </div>

          <div className="absolute -left-6 -bottom-6 hidden items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-2xl backdrop-blur sm:-left-10 sm:flex">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <CheckIcon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-ink-900">
                Appointment Confirmed
              </p>
              <p className="text-xs text-ink-500">Today, 3:30 PM</p>
            </div>
          </div>

          <div className="absolute -right-4 top-6 hidden items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-2xl backdrop-blur sm:flex">
            <Avatar initials="JL" gradient="from-emerald-400 to-brand-500" size={36} />
            <div>
              <p className="text-sm font-bold text-ink-900">+248 today</p>
              <p className="text-xs text-ink-500">New bookings</p>
            </div>
          </div>

          <div className="absolute -bottom-6 right-6 hidden h-16 w-16 rotate-6 items-center justify-center rounded-2xl bg-accent-500 shadow-xl shadow-accent-500/40 sm:flex">
            <StarIcon className="h-7 w-7 text-white" />
          </div>
        </div>
      </div>

      <TrustedMarquee />
    </section>
  );
}
