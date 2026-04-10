import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Our Vision",
  description:
    "Discover the mission, vision, and goals that drive MA Architects to create exceptional architectural experiences.",
};

export default function VisionPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        image="/images/5.jpeg"
        title="Our Vision"
        subtitle="Mission, Vision & Goals"
      />

      {/* Mission Section */}
      <section className="bg-bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <ScrollReveal>
            <div className="text-center">
              <span className="text-xs uppercase tracking-[0.3em] text-text-muted">
                /01
              </span>
              <h2 className="mt-4 font-serif text-4xl font-normal uppercase tracking-[0.1em] text-foreground md:text-5xl lg:text-6xl">
                Our <span className="text-gold">Mission</span>
              </h2>
            </div>
            <div className="mt-12 border-l-2 border-gold pl-8 md:pl-12">
              <p className="text-lg leading-relaxed text-foreground md:text-xl">
                To deliver exceptional architectural and interior design
                solutions that elevate the quality of living and working spaces
                across Egypt and the region.
              </p>
              <p className="mt-6 text-base leading-relaxed text-text-muted">
                We are committed to understanding the unique needs of every
                client and translating their aspirations into tangible,
                beautifully crafted environments. Through innovative design
                thinking, meticulous craftsmanship, and an unwavering commitment
                to quality, we create spaces that are not just functional — they
                are transformative.
              </p>
              <p className="mt-4 text-base leading-relaxed text-text-muted">
                Our mission extends beyond individual projects. We aim to
                contribute meaningfully to the architectural identity of our
                community, setting new standards for design excellence that
                inspire future generations of architects and designers.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-bg-primary py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <ScrollReveal>
            <span className="text-xs uppercase tracking-[0.3em] text-gold">
              /02
            </span>
            <h2 className="mt-4 font-serif text-4xl font-normal uppercase tracking-[0.1em] text-white md:text-5xl lg:text-6xl">
              Our Vision
            </h2>
            <div className="mt-12">
              <blockquote className="font-serif text-2xl font-normal leading-relaxed tracking-wide text-white/90 md:text-3xl lg:text-4xl">
                &ldquo;To be the foremost architecture and design studio in
                Egypt — recognized for shaping spaces that define how people
                live, work, and dream.&rdquo;
              </blockquote>
              <p className="mt-10 text-base leading-relaxed text-white/50">
                We envision a future where thoughtful, human-centered design is
                the standard — not the exception. A future where every space
                tells a story, where architecture bridges the gap between
                tradition and modernity, and where the built environment enriches
                the lives of all who interact with it. MA Architects strives to
                be at the forefront of this transformation.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Goals Section */}
      <section className="bg-bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <span className="text-xs uppercase tracking-[0.3em] text-text-muted">
                /03
              </span>
              <h2 className="mt-4 font-serif text-4xl font-normal uppercase tracking-[0.1em] text-foreground md:text-5xl lg:text-6xl">
                Our <span className="text-gold">Goals</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid gap-0 divide-y divide-foreground/10">
            {[
              {
                num: "01",
                title: "Design Excellence",
                desc: "To consistently deliver architecture and interiors of the highest caliber — spaces that win awards, exceed expectations, and stand the test of time.",
              },
              {
                num: "02",
                title: "Innovation & Growth",
                desc: "To embrace new technologies, materials, and methodologies that push the boundaries of what is possible in architectural design.",
              },
              {
                num: "03",
                title: "Client Satisfaction",
                desc: "To build lasting relationships founded on trust, transparency, and a deep commitment to realizing each client's unique vision.",
              },
              {
                num: "04",
                title: "Sustainable Practice",
                desc: "To integrate environmentally responsible principles into every project, creating spaces that respect and enhance the natural world.",
              },
              {
                num: "05",
                title: "Community Impact",
                desc: "To contribute positively to the built environment of Alexandria and Egypt, enriching communities through thoughtful, purposeful design.",
              },
              {
                num: "06",
                title: "Team Development",
                desc: "To cultivate a team of passionate, skilled professionals who share our commitment to excellence and continually raise the bar.",
              },
            ].map((goal) => (
              <ScrollReveal key={goal.num}>
                <div className="group flex flex-col gap-4 py-10 md:flex-row md:items-center md:gap-12">
                  <span className="font-serif text-3xl font-normal text-gold/40 transition-colors group-hover:text-gold md:w-20">
                    {goal.num}
                  </span>
                  <h3 className="font-serif text-xl font-normal uppercase tracking-[0.15em] text-foreground transition-colors group-hover:text-gold md:w-64 md:text-2xl">
                    {goal.title}
                  </h3>
                  <p className="max-w-xl text-sm leading-relaxed text-text-muted">
                    {goal.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="bg-bg-primary py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <ScrollReveal>
            <h2 className="font-serif text-3xl font-normal leading-relaxed tracking-wide text-white md:text-4xl">
              Every space we design is a step toward the future we
              envision — where architecture{" "}
              <span className="text-gold">inspires</span>,{" "}
              <span className="text-gold">transforms</span>, and{" "}
              <span className="text-gold">endures</span>.
            </h2>
            <a
              href="/#contact"
              className="mt-12 inline-block border border-gold px-10 py-4 text-sm uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-bg-primary"
            >
              Start Your Project &rarr;
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
