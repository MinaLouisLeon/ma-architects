import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bg-primary text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Logo & Tagline */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/logo/gold-logo.png"
                alt="MA Architects"
                width={56}
                height={56}
                className="h-14 w-14 object-contain"
              />
            </Link>
            <p className="mt-6 font-serif text-xl tracking-[0.1em] text-white/90">
              MA Architects
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/50">
              Crafting spaces that define elegance and inspire living.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-gold">
              Navigation
            </h3>
            <nav className="mt-6 flex flex-col gap-4">
              <Link
                href="/"
                className="text-sm text-white/60 transition-colors hover:text-gold"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm text-white/60 transition-colors hover:text-gold"
              >
                About
              </Link>
              <Link
                href="/vision"
                className="text-sm text-white/60 transition-colors hover:text-gold"
              >
                Our Vision
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-gold">
              Get In Touch
            </h3>
            <div className="mt-6 flex flex-col gap-4 text-sm text-white/60">
              <p className="leading-relaxed">
                Tag Al-Ru&apos;asa Street, Al Saraya Buildings,
                <br />
                Saba Basha, Alexandria
              </p>
              <a
                href="mailto:ma.architects.eg@gmail.com"
                className="transition-colors hover:text-gold"
              >
                ma.architects.eg@gmail.com
              </a>
              <a
                href="https://wa.me/201044881944"
                className="transition-colors hover:text-gold"
              >
                01044881944
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} MA Architects. All rights
            reserved.
          </p>
          <p className="text-xs text-white/30">
            Designed with passion in Alexandria
          </p>
        </div>
      </div>
    </footer>
  );
}
