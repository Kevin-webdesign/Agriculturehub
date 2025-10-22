import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter, Clock, Globe } from "lucide-react"

export function Contact() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl font-bold tracking-tight lg:text-5xl mb-4 text-balance text-primary">
            Contact Information
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Get in touch with us. We're here to help you grow and succeed in your agricultural journey.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mb-12">
          <div className="space-y-6">
            <div className="rounded-xl bg-gradient-to-br from-primary/5 to-accent/10 border-2 border-primary/20 p-8 lg:p-10 shadow-lg">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary shadow-lg">
                    <MapPin className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-xl mb-3 text-primary">Address</p>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {/* 123 Agricultural Way
                      <br /> */}
                      Remera , Gasabo , Kigali city , Rwanda
                      {/* <br />
                      P.O. Box 12345-00100 */}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary shadow-lg">
                    <Mail className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-xl mb-3 text-primary">Email</p>
                    <p className="text-muted-foreground text-base">
                      <a href="mailto:fredkaregeya1@gmail.com" className="hover:text-primary transition-colors">
                        fredkaregeya1@gmail.com
                      </a>
                      {/* <br />
                      <a href="mailto:support@agriconsulthub.com" className="hover:text-primary transition-colors">
                        support@agriconsulthub.com
                      </a> */}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary shadow-lg">
                    <Phone className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-xl mb-3 text-primary">Phone</p>
                    <p className="text-muted-foreground text-base">
                      <a href="tel:+250781096099" className="hover:text-primary transition-colors">
                        +250 781 096 099
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary shadow-lg">
                    <Clock className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-xl mb-3 text-primary">Business Hours</p>
                    <p className="text-muted-foreground text-base">
                      Monday - Friday: 8:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 2:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Google Map */}
          <div className="rounded-xl overflow-hidden border-4 border-primary/30 shadow-2xl h-[500px] lg:h-full min-h-[500px]">
            <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d730000!2d30.05885!3d-1.94995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x…!2sKigali,%20Rwanda!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AgriConsult Hub Office Location"
            />
          </div>
        </div>

        {/* Social Media Icons Row */}
        <div className="text-center bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-8 lg:p-12 border-2 border-primary/20">
          <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-primary">Connect With Us</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Follow us on social media for the latest updates, farming tips, and success stories from our community.
          </p>
          <div className="flex justify-center gap-4 lg:gap-6">
            <a
              href="#"
              className="flex h-14 w-14 lg:h-16 lg:w-16 items-center justify-center rounded-xl border-2 border-primary/30 bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-md hover:shadow-xl hover:scale-110"
            >
              <Facebook className="h-6 w-6 lg:h-7 lg:w-7" />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="#"
              className="flex h-14 w-14 lg:h-16 lg:w-16 items-center justify-center rounded-xl border-2 border-primary/30 bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-md hover:shadow-xl hover:scale-110"
            >
              <Instagram className="h-6 w-6 lg:h-7 lg:w-7" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="#"
              className="flex h-14 w-14 lg:h-16 lg:w-16 items-center justify-center rounded-xl border-2 border-primary/30 bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-md hover:shadow-xl hover:scale-110"
            >
              <Twitter className="h-6 w-6 lg:h-7 lg:w-7" />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="#"
              className="flex h-14 w-14 lg:h-16 lg:w-16 items-center justify-center rounded-xl border-2 border-primary/30 bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-md hover:shadow-xl hover:scale-110"
            >
              <Linkedin className="h-6 w-6 lg:h-7 lg:w-7" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
