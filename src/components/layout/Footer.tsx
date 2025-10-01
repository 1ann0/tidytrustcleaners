import { Sparkles } from "lucide-react";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";
export const Footer = () => {
  return (
    <footer className="bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 pr-8">
            <a href="#" className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-8 w-8 text-primary-blue" />
              <span className="text-2xl font-bold text-brand-text">
                TidyTrust
              </span>
            </a>
            <p className="text-gray-600 max-w-sm">
              Your Home, Impeccably Clean. Your Trust, Perfectly Kept. Professional cleaning services in Kenya.
            </p>
            <div className="flex space-x-4 mt-6">
              {SOCIAL_LINKS.map((social, index) => (
                <a
                  key={`${social.href}-${index}`}
                  href={social.href}
                  className="text-gray-500 hover:text-primary-blue transition-colors"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-brand-text mb-4">Company</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-600 hover:text-primary-blue transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-brand-text mb-4">Services</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-600 hover:text-primary-blue transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-brand-text mb-4">Support</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-600 hover:text-primary-blue transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} TidyTrust Cleaners. All rights reserved.</p>
          <p className="text-sm mt-2">Built with ❤️ at Cloudflare</p>
        </div>
      </div>
    </footer>
  );
};