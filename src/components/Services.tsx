const services = [
  {
    icon: "🌐",
    title: "Web Development",
    description:
      "Full-stack web applications built with cutting-edge technologies for performance, scalability, and user experience.",
  },
  {
    icon: "☁️",
    title: "Cloud Architecture",
    description: "Design and deployment of robust, secure cloud infrastructure that scales with your business needs.",
  },
  {
    icon: "🤖",
    title: "AI/ML Integration",
    description: "Intelligent solutions that leverage machine learning to automate processes and drive insights.",
  },
  {
    icon: "🔧",
    title: "DevOps & CI/CD",
    description: "Streamlined deployment pipelines and infrastructure automation for continuous delivery.",
  },
  {
    icon: "📱",
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
  },
  {
    icon: "🔐",
    title: "Security & Compliance",
    description: "Enterprise-grade security practices ensuring your data and systems remain protected.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital transformation services tailored to your enterprise needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl p-8 hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/10 transition-all duration-300 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
