import { Users, Globe, Award, TrendingUp } from "lucide-react"

export function HomeStats() {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Farms Transformed",
      description: "Successful agricultural transformations",
    },
    {
      icon: Globe,
      value: "30+",
      label: "Countries Served",
      description: "Global agricultural impact",
    },
    {
      icon: Award,
      value: "25+",
      label: "Years Experience",
      description: "Industry expertise and knowledge",
    },
    {
      icon: TrendingUp,
      value: "40%",
      label: "Avg. Yield Increase",
      description: "Improved productivity for clients",
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "url('/agricultural-pattern.jpg')", backgroundSize: "100px 100px" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-block px-3 sm:px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full mb-3 sm:mb-4">
            <span className="text-white font-semibold text-xs sm:text-sm">Our Impact</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-balance px-4">
            Driving Agricultural Excellence Worldwide
          </h2>
          <p className="text-base sm:text-lg text-white/80 text-pretty px-4">
            Our commitment to sustainable agriculture has created measurable impact across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2 sm:space-y-3">
              <div className="inline-flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm mb-1 sm:mb-2">
                <stat.icon className="h-7 w-7 sm:h-8 sm:w-8 text-accent" />
              </div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">{stat.value}</div>
              <div className="text-lg sm:text-xl font-semibold text-white">{stat.label}</div>
              <p className="text-xs sm:text-sm text-white/70 px-2">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
