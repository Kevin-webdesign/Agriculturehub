import { Play, ImageIcon, Calendar } from "lucide-react"

export function Media() {
  const mediaItems = [
    {
      type: "image",
      title: "Training Farmers in Smart Irrigation",
      caption: "Training Farmers in Smart Irrigation — March 2024",
      description: "Over 200 farmers learned modern irrigation techniques to conserve water and improve crop yields.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      type: "image",
      title: "Soil Testing Workshop",
      caption: "Soil Testing Workshop — February 2024",
      description: "Hands-on laboratory training for understanding soil health and nutrient management.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      type: "video",
      title: "Sustainable Farming Practices",
      caption: "Documentary on Organic Farming Initiatives — January 2024",
      description: "A comprehensive look at our organic farming program and its impact on local communities.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      type: "image",
      title: "Record Harvest Success",
      caption: "Record Yields Through Precision Farming — December 2023",
      description: "Farmers achieved 45% yield increase using our precision farming recommendations.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      type: "image",
      title: "Community Outreach Program",
      caption: "Empowering Women in Agriculture — November 2023",
      description: "Special training program focused on empowering women farmers with modern techniques.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      type: "video",
      title: "Drone Technology Demo",
      caption: "Precision Agriculture with Drones — October 2023",
      description: "Demonstrating how drone technology helps farmers monitor crop health and optimize inputs.",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl font-bold tracking-tight lg:text-5xl mb-4 text-balance text-primary">
            Our Work in Action
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Explore our latest field activities, workshops, and success stories from farming communities we serve. Real
            impact, real results.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer bg-card border-2 border-primary/20 hover:border-primary/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-110"
                />

                {/* Video play button overlay */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-colors">
                    <div className="flex h-20 w-20 lg:h-24 lg:w-24 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl group-hover:scale-110 transition-transform">
                      <Play className="h-10 w-10 lg:h-12 lg:w-12 ml-1" />
                    </div>
                  </div>
                )}

                {/* Type badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                  {item.type === "video" ? <Play className="h-3 w-3" /> : <ImageIcon className="h-3 w-3" />}
                  {item.type.toUpperCase()}
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{item.caption}</span>
                </div>
                <h3 className="text-lg lg:text-xl font-bold mb-2 text-primary">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 lg:mt-24">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-3">Featured Impact Story</h3>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch how AgriConsult Hub is transforming lives and communities through sustainable agriculture.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/20 to-accent/20 border-4 border-primary/30">
              <div className="h-full w-full flex items-center justify-center bg-muted/50 backdrop-blur-sm">
                <div className="text-center space-y-6 p-8">
                  <div className="flex h-24 w-24 mx-auto items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl">
                    <Play className="h-12 w-12 ml-1" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-primary mb-2">AgriConsult Hub Impact Story 2024</p>
                    <p className="text-muted-foreground">Transforming Agriculture, Empowering Communities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
