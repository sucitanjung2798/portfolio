"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import Container from "@/components/Container";
import { navigation } from "@/constants/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("#hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.4,
      },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Header */}
      <header
        className={`fixed inset-x-0 top-0 z-60 transition-all duration-300 ${
          isMenuOpen ? "bg-transparent" : "bg-[#EDF4FF]/90 backdrop-blur-md"
        }`}
      >
        <Container
          className={`flex h-16 items-center ${
            isMenuOpen ? "justify-end" : "justify-between"
          }`}
        >
          {!isMenuOpen && (
            <Link
              href="/"
              className="relative z-[60] text-lg font-bold text-slate-900"
            >
              SRT.
            </Link>
          )}

          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className={`relative z-[60] flex h-10 w-10 items-center justify-center cursor-pointer ${
              isMenuOpen ? "text-white" : "text-slate-900"
            }`}
          >
            <Menu
              className={`absolute transition-all duration-300 ${
                isMenuOpen
                  ? "rotate-90 scale-75 opacity-0"
                  : "rotate-0 scale-100 opacity-100"
              }`}
            />

            <X
              className={`absolute transition-all duration-300 ${
                isMenuOpen
                  ? "rotate-0 scale-100 opacity-100"
                  : "-rotate-90 scale-75 opacity-0"
              }`}
            />
          </button>
        </Container>
      </header>

      {/* Fullscreen Menu */}
      <div
        className={`fixed inset-0 z-55 bg-blue-600 transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]
        ${
          isMenuOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-full opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => {
                setActiveSection(item.href);
                setIsMenuOpen(false);
              }}
              className={`text-5xl font-bold transition-all duration-300 hover:scale-105 ${
                activeSection === item.href
                  ? "text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
