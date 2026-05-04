"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", label: "About" },
  { href: "/experience", label: "Resume" },
  { href: "/projects", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function TabNav() {
  const pathname = usePathname();

  return (
    <nav className="bg-surface rounded-2xl border border-border p-1.5 mb-5">
      <ul className="flex gap-1 overflow-x-auto" role="list">
        {tabs.map(({ href, label }) => {
          const isActive =
            href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <li key={href} className="flex-shrink-0">
              <Link
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={`block px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                    : "text-text-muted hover:text-text-primary hover:bg-surface-raised"
                }`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
