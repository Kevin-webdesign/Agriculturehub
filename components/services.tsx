"use client"

import { Button } from "@/components/ui/button"
import { Sprout, GraduationCap, FlaskConical, TrendingUp, Package, Lightbulb, Tractor, Droplets } from "lucide-react"
import Link from "next/link"

export function Services() {
  const services = [
    {
      icon: Sprout,
      title: "Seed production and breeding",
      description:
        "Well scientific research-based field seed production .",
      image: "/agricultural-consultant-advising-farmer-in-green-c.jpg",
    },
    {
      icon: GraduationCap,
      title: "Seed Processing for Propagation",
      description:
        "Specialized in processing high-quality seeds to ensure optimal germination rates and resilience.",
      image: "/farmers-attending-agricultural-training-workshop-o.jpg",
    },
    {
      icon: FlaskConical,
      title: "Support Activities for Crop Production",
      description:
        "Providing technical assistance, research, and advisory services to farmers and agribusinesses.",
      image: "/soil-scientist-testing-soil-samples-in-modern-labo.jpg",
    },
    {
      icon: TrendingUp,
      title: "Post-Harvest Crop Activities",
      description:
        "Enhancing value addition and storage solutions for processed seeds.",
      image: "/business-meeting-discussing-agricultural-growth-ch.jpg",
    },
    {
      icon: Package,
      title: "Research & Development",
      description:
        "Engaging experimental research on natural sciences and engineering to advance agricultural methodologies.",
      image: "/agricultural-supplies-seeds-fertilizers-and-farmin.jpg",
    },
    {
      icon: Lightbulb,
      title: "Warehousing & Storage",
      description:
        "Offering secure storage facilities to maintain seed viability and quality.",
      image: "/modern-agricultural-technology-drone-and-sensors-i.jpg",
    },
    {
      icon: Tractor,
      title: "Transportation & Logistics",
      description:
        "Ensuring efficient distribution of seeds across Rwanda.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl font-bold tracking-tight lg:text-5xl mb-4 text-balance text-primary">
            Products and Services
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Comprehensive agricultural solutions designed to meet the diverse needs of modern farmers and
            agribusinesses. From consultation to implementation, we're with you every step of the way.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-xl bg-card border-2 border-primary/20 overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:border-primary/40"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-xl">
                  <service.icon className="h-7 w-7" />
                </div>
              </div>

              <div className="p-6 lg:p-8">
                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold mb-3 text-primary">{service.title}</h3>

                {/* Description */}
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed mb-6">{service.description}</p>

                <Button
                  asChild
                  variant="default"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-md"
                >
                  <Link href="/request">Request Service</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 lg:mt-24 text-center bg-gradient-to-br from-primary to-accent rounded-2xl p-8 lg:p-12 text-white shadow-2xl">
          <h3 className="text-2xl lg:text-4xl font-bold mb-4">Ready to Transform Your Farm?</h3>
          <p className="text-lg lg:text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Let our experts help you achieve higher yields, better sustainability, and increased profitability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-white text-primary hover:bg-white/90 text-base lg:text-lg px-8 py-6 shadow-xl font-bold"
            >
              <Link href="/request">Get Started Today</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-base lg:text-lg px-8 py-6 font-bold"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
