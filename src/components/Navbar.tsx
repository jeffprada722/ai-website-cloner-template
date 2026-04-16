import Image from "next/image";
import { ChevronDown, Menu } from "lucide-react";

const NAV_LINKS = [
  { label: "Services", hasDropdown: true },
  { label: "Software", hasDropdown: false },
  { label: "Industries", hasDropdown: true },
  { label: "Pricing", hasDropdown: false },
  { label: "Company", hasDropdown: true },
  { label: "Partner Program", hasDropdown: false },
] as const;

export function Navbar() {
  return (
    <nav
      className="fixed z-20 w-full bg-white"
      style={{ top: "47px", height: "80px" }}
    >
      <div
        className="flex h-full flex-row items-center justify-between"
        style={{
          maxWidth: "1280px",
          margin: "0 80px",
          padding: "0 32px",
          gap: "20px",
        }}
      >
        {/* Logo */}
        <a href="/" className="shrink-0">
          <Image
            src="/images/logos/bk360-cloud.svg"
            alt="Bookkeeper360 logo icon"
            width={160}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </a>

        {/* Nav Links (desktop) */}
        <div
          className="hidden flex-row items-center gap-5 md:flex"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href="#"
              className="flex items-center gap-1 transition-colors hover:opacity-80"
              style={{
                fontWeight: 600,
                fontSize: "14px",
                color: "#3C416E",
              }}
            >
              {link.label}
              {link.hasDropdown && (
                <ChevronDown className="h-3.5 w-3.5" />
              )}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex flex-row items-center gap-4">
          {/* Phone (desktop) */}
          <a
            href="tel:516-200-4793"
            className="hidden items-center md:flex"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 600,
              fontSize: "15px",
              color: "#3C416E",
            }}
          >
            (516) 200-4793
          </a>

          {/* Free Consultation button */}
          <a
            href="#"
            className="shrink-0 transition-all duration-200 hover:opacity-90"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              color: "#FFFFFF",
              backgroundColor: "#FC6A03",
              padding: "16px 21px",
              borderRadius: "8px",
              boxShadow:
                "rgba(50,50,93,0.26) 0px 4px 8px -1.5px, rgba(0,0,0,0.3) 0px 2.3px 4.7px -2.3px",
            }}
          >
            Free Consultation
          </a>

          {/* Login (desktop) */}
          <a
            href="#"
            className="hidden md:block"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 600,
              fontSize: "13px",
              color: "#3C416E",
            }}
          >
            Login
          </a>

          {/* Hamburger (mobile) */}
          <button
            className="flex items-center justify-center md:hidden"
            aria-label="Open menu"
            style={{ color: "#3C416E" }}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
