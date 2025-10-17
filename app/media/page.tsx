import { Header } from "@/components/header"
import { PageHero } from "@/components/page-hero"
import { Media } from "@/components/media"
import { Footer } from "@/components/footer"

export default function MediaPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero
          title="Media Gallery"
          description="Witness the impact of our work through photos and videos from the field. Real stories, real results, real transformation."
          backgroundImage="/farmers-celebrating-successful-harvest-in-agricult.jpg"
          badge="Our Impact"
        />
        <Media />
      </main>
      <Footer />
    </div>
  )
}
