import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectGallery from "@/components/ProjectGallery";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        image="/images/8.jpeg"
        title="MA Architects"
        subtitle="Crafting Spaces, Defining Elegance"
        showScrollIndicator
      />

      {/* Marquee Strip */}
      <div className="overflow-hidden bg-bg-primary py-5">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <span
              key={i}
              className="mx-4 font-serif text-sm uppercase tracking-[0.4em] text-gold/70"
            >
              MA Architects &nbsp;&mdash;&nbsp; Architecture
              &nbsp;&mdash;&nbsp; Interior Design &nbsp;&mdash;&nbsp;
              Consultation &nbsp;&mdash;&nbsp; Alexandria, Egypt
              &nbsp;&mdash;&nbsp; MA Architects &nbsp;&mdash;&nbsp;
              Architecture &nbsp;&mdash;&nbsp; Interior Design
              &nbsp;&mdash;&nbsp; Consultation &nbsp;&mdash;&nbsp;
              Alexandria, Egypt &nbsp;&mdash;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* About Preview Section */}
      <section className="bg-bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center md:px-10 lg:py-32">
          <ScrollReveal>
            <span className="text-xs uppercase tracking-[0.3em] text-text-muted">
              Who We Are
            </span>
            <h2 className="mt-4 font-serif text-4xl font-normal uppercase tracking-[0.1em] text-foreground md:text-5xl">
              Designing{" "}
              <span className="text-gold">Tomorrow&apos;s</span> Spaces
            </h2>
            <p className="mt-6 text-base leading-relaxed text-text-muted">
              At MA Architects, we believe that architecture is more than
              buildings — it is the art of shaping how people experience the
              world. Based in Alexandria, Egypt, our studio merges timeless
              elegance with contemporary innovation, creating spaces that
              resonate with purpose and beauty.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-block border border-foreground px-8 py-3 text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:border-gold hover:text-gold"
            >
              Learn More &rarr;
            </Link>
          </ScrollReveal>
          <ScrollReveal delay="delay-200">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/4.jpeg"
                alt="MA Architects interior design"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-bg-primary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <ScrollReveal>
            <span className="text-xs uppercase tracking-[0.3em] text-gold">
              What We Do
            </span>
            <h2 className="mt-4 font-serif text-4xl font-normal uppercase tracking-[0.1em] text-white md:text-5xl">
              Our Services
            </h2>
          </ScrollReveal>
          <div className="mt-16 grid gap-0 divide-y divide-white/10">
            {[
              {
                num: "01",
                title: "Architecture Design",
                desc: "From concept to completion, we design structures that stand as testaments to innovation and craftsmanship.",
              },
              {
                num: "02",
                title: "Interior Design",
                desc: "We transform interiors into immersive experiences — balancing luxury, comfort, and functionality.",
              },
              {
                num:"03",
                title:"Construction Works",
                desc: "We provide comprehensive construction services, from design to completion, ensuring the highest quality of workmanship and materials."
              },
              {
                num:"04",
                title:"Finishing Works",
                desc:"Complete finishing solutions that bring your architectural vision to life."
              },
              {
                num: "05",
                title: "Consultation",
                desc: "Expert guidance through every phase of your project, ensuring vision aligns with execution.",
              },
              {
                num: "06",
                title: "Project Management",
                desc: "End-to-end oversight that delivers excellence on time and within scope.",
              },
            ].map((service) => (
              <ScrollReveal key={service.num}>
                <div className="group flex flex-col gap-4 py-10 md:flex-row md:items-center md:gap-12">
                  <span className="font-serif text-sm text-gold/60">
                    /{service.num}
                  </span>
                  <h3 className="font-serif text-2xl font-normal uppercase tracking-[0.15em] text-white transition-colors group-hover:text-gold md:w-64 md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="max-w-lg text-sm leading-relaxed text-white/50">
                    {service.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="bg-bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <span className="text-xs uppercase tracking-[0.3em] text-text-muted">
                Portfolio
              </span>
              <h2 className="mt-4 font-serif text-4xl font-normal uppercase tracking-[0.1em] text-foreground md:text-5xl">
                Our <span className="text-gold">Work</span>
              </h2>
            </div>
          </ScrollReveal>
          <ProjectGallery />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-bg-primary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-16 md:grid-cols-2">
            <ScrollReveal>
              <span className="text-xs uppercase tracking-[0.3em] text-gold">
                Contact
              </span>
              <h2 className="mt-4 font-serif text-4xl font-normal uppercase tracking-[0.1em] text-white md:text-5xl">
                Get In Touch
              </h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-white/50">
                Ready to bring your vision to life? We would love to hear from
                you. Reach out and let&apos;s create something extraordinary
                together.
              </p>
            </ScrollReveal>
            <ScrollReveal delay="delay-200">
              <div className="flex flex-col gap-10">
                <div>
                  <h3 className="text-xs uppercase tracking-[0.3em] text-white/40">
                    Address
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-white/80">
                    Tag Al-Ru&apos;asa Street, Al Saraya Buildings,
                    <br />
                    Saba Basha, Alexandria
                  </p>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-[0.3em] text-white/40">
                    Email
                  </h3>
                  <a
                    href="mailto:ma.architects.eg@gmail.com"
                    className="mt-3 block font-serif text-xl tracking-wide text-gold transition-colors hover:text-gold-light"
                  >
                    ma.architects.eg@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-[0.3em] text-white/40">
                    Phone / WhatsApp
                  </h3>
                  <a
                    href="https://wa.me/201044881944"
                    className="mt-3 block font-serif text-xl tracking-wide text-gold transition-colors hover:text-gold-light"
                  >
                    01044881944
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
