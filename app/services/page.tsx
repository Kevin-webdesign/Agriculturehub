import { Header } from "@/components/header"
import { PageHero } from "@/components/page-hero"
import { Services } from "@/components/services"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero
          title="Our Services"
          description="Comprehensive agricultural solutions designed to maximize productivity, sustainability, and profitability for modern farmers and agribusinesses."
          backgroundImage="/modern-agricultural-technology-and-farming-equipme.jpg"
          badge="What We Offer"
        >
          <Button
            size="lg"
            asChild
            className="bg-white text-primary hover:bg-white/90 text-base lg:text-lg px-8 py-6 shadow-2xl font-bold"
          >
            <Link href="/request">
              Request a Service
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </PageHero>
        <Services />
      </main>
      <Footer />
    </div>
  )
}
