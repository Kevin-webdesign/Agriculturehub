import { Header } from "@/components/header"
import { PageHero } from "@/components/page-hero"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero
          title="About AgriConsult Hub"
          description="Pioneering agricultural excellence since 2012. Transforming farming communities through innovation, expertise, and sustainable practices."
          backgroundImage="/agricultural-team-working-together-in-green-farm-f.jpg"
          badge="Our Story"
        />
        <About />
      </main>
      <Footer />
    </div>
  )
}
