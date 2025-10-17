import { Search, FileText, Users, CheckCircle } from "lucide-react"

export function HomeProcess() {
  const steps = [
    {
      icon: Search,
      title: "Assessment",
      description:
        "We analyze your farm's current state, soil health, crop performance, and identify opportunities for improvement.",
    },
    {
      icon: FileText,
      title: "Strategy Development",
      description: "Our experts create a customized action plan tailored to your specific needs, goals, and resources.",
    },
    {
      icon: Users,
      title: "Implementation",
      description:
        "We work alongside you to implement sustainable practices, new technologies, and proven methodologies.",
    },
    {
      icon: CheckCircle,
      title: "Ongoing Support",
      description:
        "Continuous monitoring, optimization, and support to ensure long-term success and sustainable growth.",
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-block px-3 sm:px-4 py-1.5 bg-accent/10 rounded-full mb-3 sm:mb-4">
            <span className="text-accent font-semibold text-xs sm:text-sm">Our Process</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4 text-balance px-4">
            How We Transform Your Farm
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-pretty px-4">
            A proven four-step methodology that delivers sustainable results and lasting agricultural success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 relative">
          {/* Connection Lines for Desktop */}
          <div
            className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-accent/20"
            style={{ width: "calc(100% - 8rem)", left: "4rem" }}
          />

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
                {/* Step Number */}
                <div className="relative">
                  <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-accent flex items-center justify-center shadow-lg relative z-10">
                    <step.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-primary text-white flex items-center justify-center text-xs sm:text-sm font-bold shadow-md">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-primary">{step.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed px-2">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
