"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const projects = [
  { src: "/images/8.jpeg", label: "Luxury Living" },
  { src: "/images/1.jpeg", label: "Classic Lounge" },
  { src: "/images/2.jpeg", label: "Modern Kitchen" },
  { src: "/images/4.jpeg", label: "Elegant Living Room" },
  { src: "/images/5.jpeg", label: "Master Bedroom" },
  { src: "/images/6.jpeg", label: "Bedroom Suite" },
  { src: "/images/7.jpeg", label: "Marble Bathroom" },
  { src: "/images/3.jpeg", label: "Entertainment Room" },
  { src: "/images/9.jpeg", label: "Grand Lobby" },
  { src: "/images/10.jpeg", label: "Dining Space" },
];

export default function ProjectGallery() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = el.querySelectorAll(".gallery-item");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={gridRef}
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project, i) => (
        <div
          key={project.src}
          className={`gallery-item scroll-reveal group relative aspect-[4/3] overflow-hidden ${
            i === 0 ? "sm:col-span-2 sm:row-span-2 sm:aspect-auto" : ""
          }`}
          style={{ transitionDelay: `${(i % 6) * 0.1}s` }}
        >
          <Image
            src={project.src}
            alt={project.label}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes={
              i === 0
                ? "(max-width: 640px) 100vw, 66vw"
                : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            }
          />
          <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/40" />
          <div className="absolute inset-0 flex items-end p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <span className="font-serif text-lg tracking-[0.1em] text-white">
              {project.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
