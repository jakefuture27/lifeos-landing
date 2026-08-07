"use client";

const links = [
  { name: "About", href: "#" },
  { name: "Privacy", href: "#privacy" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Contact", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#06070B] border-t border-white/5 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-semibold text-sm text-white tracking-tight">
          LifeOS
        </span>

        <nav className="flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <span className="text-xs text-slate-600">
          © {new Date().getFullYear()} LifeOS
        </span>
      </div>
    </footer>
  );
}
