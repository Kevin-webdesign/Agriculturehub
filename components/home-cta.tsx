import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

export function HomeCTA() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-10">
        <img src="/agricultural-field-sunset.jpg" alt="Agricultural field" className="h-full w-full object-cover" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <div className="inline-block px-3 sm:px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full mb-2 sm:mb-4">
            <span className="text-white font-semibold text-xs sm:text-sm">Get Started Today</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-balance leading-tight px-4">
            Ready to Transform Your Agricultural Operations?
          </h2>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 text-pretty max-w-3xl mx-auto leading-relaxed px-4">
            Join hundreds of successful farms worldwide. Let our experts help you achieve sustainable growth and
            increased productivity.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 sm:pt-6 px-4">
            <Button
              size="lg"
              asChild
              className="bg-white text-primary hover:bg-white/90 text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-5 sm:py-6 lg:py-7 shadow-2xl hover:shadow-xl transition-all font-bold w-full sm:w-auto"
            >
              <Link href="/request">
                Request Consultation
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-5 sm:py-6 lg:py-7 shadow-2xl transition-all font-bold w-full sm:w-auto"
            >
              <Link href="/contact">
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Contact Us
              </Link>
            </Button>
          </div>

          <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-white/90 px-4">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium">Free Initial Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium">No Obligation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium">Expert Guidance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
