import { Target, Eye, Heart, CheckCircle2, Users, Award, TrendingUp, Leaf } from "lucide-react"

export function About() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "Providing quality seed that empower farmers with the optimize yields for ensure food security in sustainable model.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To become a leading force in agricultural transformation through innovative seed production, processing, research, and sustainable agribusiness practices.",
    }
  ]

   const corevalues = [
    {
      title: "Quality",
      description:
        " Commitment to the highest standards in seed processing and agricultural consultancy.",
    },
    {
      title: "Innovation",
      description:
        " Embracing new technologies and research for sustainable agriculture.",
    },
    {
      title: "Integrity",
      description:
        " Conducting business with transparency, trust, and professionalism.",
    },
     {
      title: "Partnerships",
      description:
        "  Collaborating with farmers, research institutions, and agricultural stakeholders.",
    },
      {
      title: "Sustainability",
      description:
        "  Promoting environmentally friendly and resource-efficient agricultural practices.",
    },
  ]
  const milestones = [
    {
      year: "2012",
      title: "Company Founded",
      description: "AgriConsult Hub established to support smallholder farmers with expert agricultural guidance.",
    },
    {
      year: "2015",
      title: "Regional Expansion",
      description: "Expanded consultancy services to multiple regions, partnering with agricultural cooperatives.",
    },
    {
      year: "2019",
      title: "Digital Advisory Tools",
      description: "Introduced mobile and web platforms for remote consultations and precision farming services.",
    },
    {
      year: "2024",
      title: "International Partnerships",
      description: "Partnered with international agricultural organizations to bring global best practices locally.",
    },
  ]

  const team = [
    {
      name: "Dr. Sarah Omondi",
      title: "Chief Agricultural Consultant",
      bio: "PhD in Agronomy with 15+ years of experience in sustainable farming practices and crop optimization.",
      image: "/professional-african-woman-agronomist-in-field.jpg",
    },
    {
      name: "James Kimani",
      title: "Head of Training & Development",
      bio: "Former extension officer with a passion for farmer education. Has trained over 3,000 farmers.",
      image: "/professional-african-man-agricultural-trainer-with.jpg",
    },
    {
      name: "Dr. Grace Mwangi",
      title: "Soil Science Specialist",
      bio: "Leading expert in soil health and fertility management. Oversees laboratory operations.",
      image: "/professional-african-woman-soil-scientist-in-labor.jpg",
    },
  ]

  const stats = [
    { icon: Users, value: "5,000+", label: "Farmers Served" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: TrendingUp, value: "40%", label: "Avg. Yield Increase" },
    { icon: Leaf, value: "100%", label: "Sustainable Practices" },
  ]

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 lg:mb-32">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 lg:p-8 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 hover:shadow-lg transition-shadow"
            >
              <stat.icon className="h-10 w-10 lg:h-12 lg:w-12 text-primary mx-auto mb-4" />
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm lg:text-base text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* About Section - Two Column Layout */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center mb-20 lg:mb-32 bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-6 lg:p-12 border border-primary/10">
          {/* Left: Photo */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border-4 border-white">
              <img src="/agricultural-team-working-together-in-green-farm-f.jpg" alt="AgriConsult Hub team" className="h-full w-full object-cover" />
            </div>
          </div>

          {/* Right: Text */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight lg:text-5xl text-balance text-primary">
              About the Company
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-base lg:text-lg">
              <p>
               R SEEDS CONSULTANTS CO Ltd is a dynamic and forward-thinking company
                specializing in seed processing, agricultural research, and consultancy services.
                 With a commitment to enhancing agricultural productivity, the company focuses on delivering high-quality 
                 seed processing solutions and advisory services to farmers and agribusiness stakeholders across Rwanda.
              </p>
            </div>
             <div className="space-y-4 pt-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3 bg-card border-primary/20 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow hover:border-primary/40">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground mt-1 shadow-md">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-lg text-primary">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
           
          </div>
        </div>
         {/* Mission, Vision, Values with Icons */}
            <div className="space-y-4 pt-4 flex gap-6 lg:gap-8 mb-20 lg:mb-32 lg:grid lg:grid-cols-3 center-items">
              {corevalues.map((value, index) => (
                <div key={index} className="flex items-start gap-3 bg-card border-primary/20 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow hover:border-primary/40">
                  <div>
                    <h3 className="font-bold mb-1 text-lg text-primary">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
        {/* Company History Timeline */}
        <div className="mb-20 lg:mb-32">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl font-bold tracking-tight lg:text-5xl mb-4 text-balance text-primary">
              Company History
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Our journey from a small local consultancy to a regional leader in agricultural innovation.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line for desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary -translate-x-1/2 rounded-full" />

            <div className="space-y-8 lg:space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row gap-4 lg:gap-8 items-start ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Timeline circle */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-base shadow-xl border-4 border-background">
                    {milestone.year}
                  </div>

                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right lg:pr-20" : "lg:text-left lg:pl-20"}`}>
                    <div className="rounded-xl bg-card border-2 border-primary/20 p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all hover:border-primary/40">
                      <div className="flex items-start gap-3 lg:gap-4">
                        <CheckCircle2 className="h-6 w-6 lg:h-7 lg:w-7 text-primary shrink-0 mt-1 lg:hidden" />
                        <div className="flex-1">
                          <div className="lg:hidden text-base font-bold text-primary mb-2">{milestone.year}</div>
                          <h3 className="text-xl lg:text-2xl font-bold mb-3 text-primary">{milestone.title}</h3>
                          <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Team */}
        <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-6 lg:p-12 border border-primary/20">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl font-bold tracking-tight lg:text-5xl mb-4 text-balance text-primary">
              Meet Our Experts
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Meet the passionate professionals behind AgriConsult Hub's success and innovation.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <div
                key={index}
                className="group rounded-xl bg-card border-2 border-primary/20 overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:border-primary/40"
              >
                <div className="flex justify-center pt-8 pb-4">
                  <div className="relative h-40 w-40 lg:h-48 lg:w-48 rounded-full overflow-hidden bg-muted ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className="p-6 lg:p-8 text-center">
                  <h3 className="text-xl lg:text-2xl font-bold mb-2 text-primary">{member.name}</h3>
                  <p className="text-sm lg:text-base font-semibold text-accent mb-3 lg:mb-4">{member.title}</p>
                  <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
