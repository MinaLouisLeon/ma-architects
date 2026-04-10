import type { Metadata } from "next";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about MA Architects — a premier architecture and interior design studio in Alexandria, Egypt, dedicated to crafting luxurious spaces.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        image="/images/9.jpeg"
        title="About Us"
        subtitle="The Story Behind Our Designs"
      />

      {/* Story Section */}
      <section className="bg-bg-secondary py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:items-center md:px-10">
          <ScrollReveal>
            <span className="text-xs uppercase tracking-[0.3em] text-text-muted">
              Our Story
            </span>
            <h2 className="mt-4 font-serif text-4xl font-normal uppercase tracking-[0.1em] text-foreground md:text-5xl">
              Building <span className="text-gold">Dreams</span> Into Reality
            </h2>
            <p className="mt-8 text-base leading-relaxed text-text-muted">
              MA Architects was founded with a singular vision: to redefine the
              architectural landscape of Egypt and the region. What began as a
              passion for creating meaningful spaces has grown into a
              distinguished studio known for its commitment to excellence and
              innovation.
            </p>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              Our team of architects and designers brings together diverse
              expertise — from residential havens to commercial landmarks — all
              united by an unwavering dedication to quality. Every project we
              undertake is a collaboration, a dialogue between our creative
              vision and our client&apos;s aspirations.
            </p>
          </ScrollReveal>
          <ScrollReveal delay="delay-200">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/10.jpeg"
                alt="MA Architects studio work"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-bg-primary py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <ScrollReveal>
            <span className="text-xs uppercase tracking-[0.3em] text-gold">
              Our Philosophy
            </span>
            <blockquote className="mt-10 font-serif text-3xl font-normal leading-relaxed tracking-wide text-white md:text-4xl lg:text-5xl">
              &ldquo;Architecture should speak of its time and place, but yearn
              for timelessness.&rdquo;
            </blockquote>
            <p className="mt-8 text-sm leading-relaxed text-white/50">
              We approach every project with a deep respect for context — the
              culture, the environment, and the people who will inhabit the
              space. Our designs are not imposed; they emerge from a thoughtful
              understanding of what each space needs to become. The result is
              architecture that feels both inevitable and inspired.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <span className="text-xs uppercase tracking-[0.3em] text-text-muted">
                Expertise
              </span>
              <h2 className="mt-4 font-serif text-4xl font-normal uppercase tracking-[0.1em] text-foreground md:text-5xl">
                Scope of <span className="text-gold">work</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                image: "/images/7.jpeg",
                title: "Residential",
                desc: "Creating homes that are sanctuaries of comfort and elegance, tailored to the unique lifestyle of each client.",
              },
              {
                image: "/images/12.jpeg",
                title: "Commercial",
                desc: "We design and build commercial spaces that are functional, efficient, and aesthetically pleasing.",
              },
              {
                image: "/images/11.jpeg",
                title: "Administrative",
                desc: "Delivering turnkey finishing solutions for modern office spaces and administrative hubs.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={`delay-${(i + 1) * 100}`}>
                <div className="group">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <h3 className="mt-6 font-serif text-xl uppercase tracking-[0.1em] text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values Section */}
      <section className="bg-bg-primary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <span className="text-xs uppercase tracking-[0.3em] text-gold">
                Our Values
              </span>
              <h2 className="mt-4 font-serif text-4xl font-normal uppercase tracking-[0.1em] text-white md:text-5xl">
                What Drives Us
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                num: "01",
                title: "Excellence",
                desc: "Uncompromising standards in every detail, from concept sketches to final finishes.",
              },
              {
                num: "02",
                title: "Innovation",
                desc: "Pushing creative boundaries while respecting the principles of timeless design.",
              },
              {
                num: "03",
                title: "Integrity",
                desc: "Transparent relationships built on trust, honesty, and mutual respect.",
              },
              {
                num: "04",
                title: "Collaboration",
                desc: "Every great space is born from a genuine partnership between architect and client.",
              },
            ].map((value) => (
              <ScrollReveal key={value.num}>
                <div className="text-center">
                  <span className="font-serif text-4xl font-normal text-gold/30">
                    {value.num}
                  </span>
                  <h3 className="mt-4 font-serif text-lg uppercase tracking-[0.15em] text-white">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/50">
                    {value.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
