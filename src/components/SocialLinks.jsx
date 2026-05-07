import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const CONTACT_LINKS = [
  {
    name: "Email",
    displayName: "Email Me",
    subText: "yogeshparajuly@gmail.com",
    icon: Mail,
    url: "mailto:yogeshparajuly@gmail.com",
    color: "#a855f7",
    gradient: "from-[#6366f1] to-[#a855f7]",
    isPrimary: true,
  },
  {
    name: "Phone",
    displayName: "Call",
    subText: "9824066408 / 9844430480",
    icon: Phone,
    url: "tel:+9779824066408",
    color: "#22c55e",
    gradient: "from-[#16a34a] to-[#22c55e]",
  },
  {
    name: "Location",
    displayName: "Jhapa, Nepal",
    subText: "Available for remote work",
    icon: MapPin,
    url: "https://www.google.com/maps/search/?api=1&query=Jhapa%2C%20Nepal",
    color: "#60a5fa",
    gradient: "from-[#3b82f6] to-[#60a5fa]",
  },
];

const SocialLinks = () => {
  const primary = CONTACT_LINKS.find((link) => link.isPrimary) ?? CONTACT_LINKS[0];
  const others = CONTACT_LINKS.filter((link) => link !== primary);

  return (
    <div className="w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
        <span className="inline-block w-8 h-1 bg-indigo-500 rounded-full"></span>
        Contact
      </h3>

      <div className="flex flex-col gap-4">
        <a
          href={primary.url}
          target={primary.url.startsWith("http") ? "_blank" : undefined}
          rel={primary.url.startsWith("http") ? "noopener noreferrer" : undefined}
          className="group relative flex items-center justify-between p-4 rounded-lg 
                     bg-white/5 border border-white/10 overflow-hidden
                     hover:border-white/20 transition-all duration-500"
        >
          <div
            className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${primary.gradient}`}
          />

          <div className="relative flex items-center gap-4">
            <div className="relative flex items-center justify-center">
              <div
                className="absolute inset-0 opacity-20 rounded-md transition-all duration-500 group-hover:scale-110 group-hover:opacity-30"
                style={{ backgroundColor: primary.color }}
              />
              <div className="relative p-2 rounded-md">
                <primary.icon
                  className="w-6 h-6 transition-all duration-500 group-hover:scale-105"
                  style={{ color: primary.color }}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">
                {primary.displayName}
              </span>
              <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {primary.subText}
              </span>
            </div>
          </div>

          <ExternalLink
            className="relative w-5 h-5 text-gray-500 group-hover:text-white
                       opacity-0 group-hover:opacity-100 transition-all duration-300
                       transform group-hover:translate-x-0 -translate-x-1"
          />
        </a>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {others.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : undefined}
              rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group relative flex items-center gap-3 p-4 rounded-xl 
                         bg-white/5 border border-white/10 overflow-hidden
                         hover:border-white/20 transition-all duration-500"
            >
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${link.gradient}`}
              />

              <div className="relative flex items-center justify-center">
                <div
                  className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500 group-hover:scale-125 group-hover:opacity-30"
                  style={{ backgroundColor: link.color }}
                />
                <div className="relative p-2 rounded-lg">
                  <link.icon
                    className="w-5 h-5 transition-all duration-500 group-hover:scale-110"
                    style={{ color: link.color }}
                  />
                </div>
              </div>

              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                  {link.displayName}
                </span>
                <span className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
                  {link.subText}
                </span>
              </div>

              <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;

