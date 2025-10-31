"use client";
import Image from "next/image";
import logo from "../../public/logo.png";
import { IconUIComponent } from "../utilities/UI/icon.ui";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const menuItems = [
  { label: "Home", href: "/", slug: "/" },
  { label: "Offers", href: "/offers", slug: "offers" },
  { label: "About", href: "/about", slug: "about" },
  { label: "Contact", href: "/contact", slug: "contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // current path

  const path = pathname?.split("/")[1] || "/";
  console.log(pathname, path);

  const isActive = (slug: string) => path === slug;

  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Healthy Living Arena Logo"
            className="h-16 w-auto md:h-24"
            priority
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 font-medium">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`px-3 py-1 rounded-md transition ${
                isActive(item.slug)
                  ? "bg-[#0EA5A4] text-white"
                  : "text-[var(--text-dark)] hover:text-[var(--accent)]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[var(--text-dark)] focus:outline-none"
        >
          <IconUIComponent
            icon={menuOpen ? "ri-close-line" : "ri-menu-line"}
            className="text-2xl"
          />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 flex flex-col px-6 py-3 space-y-3 shadow-sm animate-fadeIn">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`px-3 py-1 rounded-md transition ${
                isActive(item.href)
                  ? "bg-[#0EA5A4] text-white"
                  : "text-[var(--text-dark)] hover:text-[var(--accent)]"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
