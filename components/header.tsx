"use client"

import { useState } from "react"
import { Sprout, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Media", href: "/media" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-primary/20 bg-background/98 backdrop-blur-md supports-[backdrop-filter]:bg-background/95 shadow-md">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 md:h-20 lg:h-24 items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 md:gap-3 lg:gap-4 hover:opacity-90 transition-opacity group flex-shrink-0"
          >
            <div className="flex h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 items-center justify-center rounded-xl bg-primary shadow-lg group-hover:shadow-xl transition-shadow">
              <span className="text-base md:text-xl lg:text-2xl font-bold text-white">R</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base md:text-xl lg:text-2xl font-bold text-foreground leading-tight">
                SEEDS CONSULTANTS
              </span>
              <span className="text-[10px] md:text-xs lg:text-sm text-muted-foreground font-medium hidden sm:block">
                Cultivating Excellence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                asChild
                className="text-sm xl:text-base font-semibold hover:text-primary hover:bg-primary/10 transition-all px-3 xl:px-4 py-2"
              >
                <Link href={item.href}>{item.name}</Link>
              </Button>
            ))}
            <Button
              asChild
              className="ml-2 bg-accent hover:bg-accent/90 text-white font-bold text-sm xl:text-base px-4 xl:px-6 shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="/request">Request Service</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors flex-shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 md:h-7 md:w-7 text-primary" />
            ) : (
              <Menu className="h-6 w-6 md:h-7 md:w-7 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border/40">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  asChild
                  onClick={() => setMobileMenuOpen(false)}
                  className="justify-start text-base font-semibold hover:text-primary hover:bg-primary/10 transition-all"
                >
                  <Link href={item.href}>{item.name}</Link>
                </Button>
              ))}
              <Button
                asChild
                onClick={() => setMobileMenuOpen(false)}
                className="justify-start bg-accent hover:bg-accent/90 text-white font-bold text-base mt-2"
              >
                <Link href="/request">Request Service</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
