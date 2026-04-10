import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  image: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  showScrollIndicator?: boolean;
}

export default function HeroSection({
  image,
  title,
  subtitle,
  ctaText,
  ctaHref,
  showScrollIndicator = false,
}: HeroSectionProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="font-serif text-5xl font-normal uppercase tracking-[0.2em] text-white md:text-7xl lg:text-8xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg font-light tracking-[0.15em] text-white/80 md:text-xl">
            {subtitle}
          </p>
        )}
        {ctaText && ctaHref && (
          <Link
            href={ctaHref}
            className="mt-10 border border-gold px-10 py-4 text-sm uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-bg-primary"
          >
            {ctaText} &rarr;
          </Link>
        )}
        {showScrollIndicator && (
          <div className="absolute bottom-10 flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-[0.3em] text-white/60">
              Scroll
            </span>
            <div className="animate-scroll-down h-8 w-[1px] bg-white/40" />
          </div>
        )}
      </div>
    </section>
  );
}
