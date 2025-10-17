import type { ReactNode } from "react"

interface PageHeroProps {
  title: string
  description: string
  backgroundImage: string
  badge?: string
  children?: ReactNode
}

export function PageHero({ title, description, backgroundImage, badge, children }: PageHeroProps) {
  return (
    <section className="relative min-h-[350px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={backgroundImage || "/placeholder.svg"} alt={title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/70 to-accent/75" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-14 md:py-16">
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {badge && (
            <div className="inline-block px-4 sm:px-5 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-1 sm:mb-2">
              <p className="text-white font-semibold text-xs sm:text-sm lg:text-base">{badge}</p>
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-balance leading-tight drop-shadow-lg px-4">
            {title}
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 text-pretty max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-md px-4">
            {description}
          </p>

          {children && <div className="pt-2 sm:pt-4 px-4">{children}</div>}
        </div>
      </div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
