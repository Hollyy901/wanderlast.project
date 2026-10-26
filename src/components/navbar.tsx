import Image from "next/image";
import { UserRound } from "lucide-react";

const links = [
  { label: "Home", href: "#" },
  { label: "Destinations", href: "#" },
  { label: "My Bookings", href: "#" },
  { label: "Admin", href: "#" },
];

const baseLink =
  "text-base font-medium text-[#0c0b0b] transition-colors hover:text-[#15a1bf]";

export function Navbar({ active = "Home" }: { active?: string }) {
  return (
    <header className="h-16 bg-white">
      <div className="grid h-full grid-cols-3 items-center px-10">
        <nav className="flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={
                link.label === active
                  ? "text-base font-medium text-[#15a1bf] underline underline-offset-4"
                  : baseLink
              }
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Image
          src="/images/Wanderlast.png"
          alt="Wanderlast"
          width={162}
          height={24}
          className="mx-auto h-6 w-auto"
        />
        <div className="flex items-center justify-end gap-8">
          <a href="#" className="flex items-center gap-2">
            <UserRound size={18} strokeWidth={1.8} />
            Profile
          </a>
          <a href="#">Login</a>
          <a href="#">Sign Up</a>
        </div>
      </div>
    </header>
  );
}
