  "use client";

  import { useState, useEffect } from "react";
  import Image from "next/image";
  import Link from "next/link";
  import { usePathname } from "next/navigation";

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About us" },
    { href: "/vision", label: "Our Vision" },
  ];

  export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 50);
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
      setMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
      document.body.style.overflow = menuOpen ? "hidden" : "";
      return () => {
        document.body.style.overflow = "";
      };
    }, [menuOpen]);

    return (
      <>
        <nav
          className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
            scrolled || menuOpen
              ? "bg-bg-primary/95 backdrop-blur-sm"
              : "bg-transparent"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
            <Link href="/" className="relative z-50 flex items-center gap-3">
              <Image
                src="/logo/gold-logo.png"
                alt="M A Architects"
                width={100}
                height={100}
                className="h-16 w-16 shrink-0 object-contain md:h-24 md:w-24"
              />
              <span className="font-serif text-lg tracking-[0.15em] text-white">
                M A ARCHITECTS
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-10 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative text-sm uppercase tracking-[0.2em] transition-colors ${
                    pathname === link.href
                      ? "text-gold"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-[1px] bg-gold transition-all duration-300 ${
                      pathname === link.href
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
              <Link
                href="/#contact"
                className="border border-gold/50 px-6 py-2 text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-bg-primary"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <span
                className={`h-[1px] w-6 bg-white transition-all duration-300 ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[1px] w-6 bg-white transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-[1px] w-6 bg-white transition-all duration-300 ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </nav>

        {/* Mobile Full-Screen Menu */}
        <div
          className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-bg-primary transition-all duration-500 ${
            menuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-serif text-3xl uppercase tracking-[0.2em] transition-colors ${
                  pathname === link.href
                    ? "text-gold"
                    : "text-white/80 hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="mt-4 border border-gold/50 px-8 py-3 text-sm uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-bg-primary"
            >
              Contact
            </Link>
          </div>
          <div className="mt-16 text-center text-sm text-white/40">
            <p>ma.architects.eg@gmail.com</p>
            <p className="mt-2">01044881944</p>
          </div>
        </div>
      </>
    );
  }
