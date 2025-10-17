import { Header } from "@/components/header"
import { PageHero } from "@/components/page-hero"
import { RequestForm } from "@/components/request-form"
import { Footer } from "@/components/footer"

export default function RequestPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero
          title="Request a Service"
          description="Fill out the form below and our team will get back to you within 24 hours to discuss your agricultural needs."
          backgroundImage="/agricultural-consultant-with-tablet-in-modern-farm.jpg"
          badge="Get Started"
        />
        <RequestForm />
      </main>
      <Footer />
    </div>
  )
}
