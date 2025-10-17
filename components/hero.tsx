"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[650px] lg:min-h-[750px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/modern-agriculture-technology.jpg"
          alt="Modern sustainable agriculture"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-accent/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-16">
        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">
          <div className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-2 sm:mb-4">
            <p className="text-white font-semibold text-xs sm:text-sm lg:text-base">
              Transforming Agriculture. Empowering Ecosystems.
            </p>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white text-balance leading-tight drop-shadow-lg px-4">
            Cultivating Smarter Agriculture for a Sustainable Future
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/95 text-pretty max-w-4xl mx-auto leading-relaxed font-medium drop-shadow-md px-4">
            Expert agribusiness consulting for global impact and sustainability. Empowering farmers with innovative
            solutions and proven practices.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 sm:pt-6 px-4">
            <Button
              size="lg"
              asChild
              className="bg-white text-primary hover:bg-white/90 text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-5 sm:py-6 lg:py-7 shadow-2xl hover:shadow-xl transition-all font-bold w-full sm:w-auto"
            >
              <Link href="/services">
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-5 sm:py-6 lg:py-7 shadow-2xl transition-all font-bold w-full sm:w-auto"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
