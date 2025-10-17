import { Header } from "@/components/header"
import { PageHero } from "@/components/page-hero"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero
          title="Get In Touch"
          description="Ready to transform your agricultural operations? Contact our team of experts today and let's grow together."
          backgroundImage="/agricultural-consultant-meeting-with-farmers-in-fi.jpg"
          badge="Contact Us"
        />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
