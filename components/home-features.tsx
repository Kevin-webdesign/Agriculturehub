import { Leaf, TrendingUp, Users, Award, Globe, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function HomeFeatures() {
  const features = [
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description: "Implementing eco-friendly farming methods that protect the environment while maximizing yields.",
    },
    {
      icon: TrendingUp,
      title: "Increased Productivity",
      description: "Data-driven strategies to boost crop yields and optimize resource utilization for better profits.",
    },
    {
      icon: Users,
      title: "Expert Consultation",
      description: "Access to experienced agricultural consultants with decades of combined industry knowledge.",
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Track record of success with over 500+ farms transformed across 30+ countries worldwide.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "International expertise with local knowledge, serving agricultural communities across continents.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Cutting-edge agricultural technology and modern farming techniques for the future of agriculture.",
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-block px-3 sm:px-4 py-1.5 bg-accent/10 rounded-full mb-3 sm:mb-4">
            <span className="text-accent font-semibold text-xs sm:text-sm">Why Choose Us</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4 text-balance px-4">
            Transforming Agriculture Through Innovation
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-pretty px-4">
            We combine traditional farming wisdom with modern technology to deliver sustainable solutions that drive
            real results for farmers worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-2 hover:border-accent hover:shadow-lg transition-all duration-300 group"
            >
              <CardContent className="p-5 sm:p-6 lg:p-8">
                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-lg bg-accent/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 text-accent" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
