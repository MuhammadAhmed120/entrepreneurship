import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Gallery", href: "#gallery" },
    // { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF7F4]/98 backdrop-blur-sm border-b border-[#E8DDD0]">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="tracking-wide" style={{ fontSize: '1.5rem', fontWeight: '300', color: '#8B6F47' }}>
            Komfora
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="transition-colors duration-200"
                style={{ fontSize: '0.9375rem', color: '#7A6A5C' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#8B6F47'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#7A6A5C'}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            style={{ color: '#8B6F47' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="block py-3 transition-colors duration-200"
                style={{ fontSize: '0.9375rem', color: '#7A6A5C' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#8B6F47'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#7A6A5C'}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
