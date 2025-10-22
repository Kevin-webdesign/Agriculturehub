import { Sprout, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 items-center justify-center rounded-xl bg-white  transition-shadow">
              <span className="text-base md:text-xl lg:text-2xl font-bold text-primary">R</span>
            </div>
              <span className="text-lg sm:text-xl font-bold">SEEDS CONSULTANTS</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Leading global agriculture consultancy dedicated to transforming farming practices through sustainable
              solutions and innovative technologies.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Youtube className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-white transition-colors text-sm">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/media" className="text-white/80 hover:text-white transition-colors text-sm">
                  Media Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/request" className="text-white/80 hover:text-white transition-colors text-sm">
                  Request Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-bold">Our Services</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/services" className="text-white/80 hover:text-white transition-colors text-sm">
                  Seed production and breeding
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-white transition-colors text-sm">
                  Support Activities for Crop Production
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-white transition-colors text-sm">
                 Post-Harvest Crop Activities
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-white transition-colors text-sm">
                  Research & Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-white transition-colors text-sm">
                  Warehousing & Storage
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-white transition-colors text-sm">
                  Transportation & Logistics
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-bold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                <span className="text-white/80">Remera , Gasabo , Kigali city , Rwanda</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
                <a href="tel:+250781096099" className="text-white/80 hover:text-white transition-colors">
                 +250 781 096 099
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 flex-shrink-0 text-accent" />
                <a
                  href="mailto:fredkaregeya1@gmail.com"
                  className="text-white/80 hover:text-white transition-colors break-all"
                >
                   fredkaregeya1@gmail.com
                </a>
              </li>
            </ul>

            <div className="pt-4 border-t border-white/10">
              <h4 className="text-sm font-semibold mb-2">Business Hours</h4>
              <p className="text-white/80 text-sm">Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p className="text-white/80 text-sm">Saturday: 9:00 AM - 4:00 PM</p>
              <p className="text-white/80 text-sm">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-white/70">
            <p className="text-center sm:text-left">© {currentYear} AgriConsult Hub. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
