import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { HomeFeatures } from "@/components/home-features"
import { HomeStats } from "@/components/home-stats"
import { HomeProcess } from "@/components/home-process"
import { HomeCTA } from "@/components/home-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <HomeFeatures />
        <HomeStats />
        <HomeProcess />
        <HomeCTA />
      </main>
      <Footer />
    </div>
  )
}
