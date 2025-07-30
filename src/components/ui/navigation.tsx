import { Link } from "react-router";
import Button from "../button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links: { name: string; path: string }[] = [
    { name: "Home", path: "/" },
    { name: "Our Love Story", path: "#our-love-story" },
    { name: "Gallery", path: "#our-gallery" },
    { name: "Event Details", path: "/order-of-events" },
    { name: "RSVP", path: "/rsvp" },
    { name: "The Squad", path: "/squad" },
    { name: "Gift Registry", path: "/gift-registry" },
    { name: "Upload", path: "/guest-gallery" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="w-full">
      <div className="max-w-web-max mx-auto w-mobile-max py-4 px-3 hidden lg:flex justify-between items-center">
        <div className="flex items-center gap-4">
          {links.map(({ name, path }, idx) => (
            <a
              href={path}
              key={idx}
              className="text-base font-cairo font-normal cursor-pointer"
            >
              {name}
            </a>
          ))}
        </div>
        <Link to="/rsvp">
          <Button text={"Get Access"} variants={"primary"} />
        </Link>
      </div>

      {/* Mobile Navigation Button */}
      <div className="lg:hidden flex justify-between items-center px-4 py-2">
        <p className="text-primary font-lovers-quarrel text-3xl">
          #JayyAndTimy EverAfter
        </p>
        <button
          onClick={toggleMenu}
          className="flex items-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
        >
          {isMenuOpen ? (
            <X className="block h-6 w-6" />
          ) : (
            <Menu className="block h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Overlay background */}
        <div
          className="absolute inset-0 bg-black bg-opacity-25"
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Menu panel */}
        <div
          className={`absolute right-0 top-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="px-4 py-2 space-y-3">
            {links.map(({ name, path }, idx) => (
              <a
                href={path}
                key={idx}
                className="block py-2 text-base font-cairo font-normal text-gray-700 hover:text-gray-900 border-b border-gray-100 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                {name}
              </a>
            ))}
            <div className="py-4 w-full">
              <Link to="/rsvp">
                <Button
                  text={"Get Access"}
                  variants={"primary"}
                  className="w-full"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
