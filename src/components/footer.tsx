import { ArrowUpRight } from "lucide-react";

const quickLinks = ["Home", "Destinations", "My Bookings", "My Profile"];
const supportLinks = ["Help Center", "Terms of Service", "Privacy Policy"];

const listCls =
  "flex flex-col gap-2.5 text-lg leading-[1.55] text-[#b6b6b6] transition-colors hover:text-white";

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0c0b0b] text-white">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-20 lg:px-0 lg:py-[120px]">
        <h2 className="font-display text-[clamp(3rem,7.2vw,6.5rem)] leading-none tracking-[-0.02em]">
          Wanderlast
        </h2>
        <p className="mt-4 text-xl text-[#b6b6b6]">
          Your gateway to extraordinary travel experiences around the world!
        </p>
        <div className="mt-[60px] grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-[400px_233px_233px_233px] md:gap-[60px]">
          <div>
            <h3 className="font-display text-xl leading-none">Newsletter</h3>
            <p className="mt-2 text-sm text-[#b6b6b6]">
              Subscribe for exclusive travel deals and inspiration.
            </p>
            <form className="mt-4 flex h-12 w-full max-w-[320px] items-center bg-[#373737] pl-4 pr-2">
              <input
                type="email"
                placeholder="Enter email"
                aria-label="Enter email"
                className="h-full w-full bg-transparent text-lg text-white placeholder:text-[#b6b6b6] focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-8 w-8 items-center justify-center text-white transition-colors hover:text-[#15a1bf]"
              >
                <ArrowUpRight size={20} strokeWidth={2} />
              </button>
            </form>
          </div>
          <nav>
            <h3 className="font-display text-xl uppercase leading-none">
              Quick Links
            </h3>
            <ul className={`mt-4 ${listCls}`}>
              {quickLinks.map((label) => (
                <li key={label}>
                  <a href="#">{label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <nav>
            <h3 className="font-display text-xl uppercase leading-none">
              Support
            </h3>
            <ul className={`mt-4 ${listCls}`}>
              {supportLinks.map((label) => (
                <li key={label}>
                  <a href="#">{label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h3 className="font-display text-xl uppercase leading-none">
              Contact Us
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-lg leading-[1.55] text-[#b6b6b6]">
              <li>
                <a href="tel:7869011622" className="transition-colors hover:text-white">
                  786 901 1622
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@wandarland.com"
                  className="transition-colors hover:text-white"
                >
                  info@wandarland.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-24 border-t border-white/20 pt-6" />
        <div className="flex items-center justify-between pt-6">
          <p className="text-sm text-[#b6b6b6]">
            © 2026 Wanderlust. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" aria-label="X" className="transition-colors hover:text-[#15a1bf]">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="h-6 w-6"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="transition-colors hover:text-[#15a1bf]"
            >
              <LinkedinIcon />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="transition-colors hover:text-[#15a1bf]"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
