const projects = [
  {
    title: "Enterprise SaaS Platform",
    category: "Web Development",
    image: "/enterprise-saas-platform-dashboard.jpg",
    description: "Full-stack SaaS platform with real-time analytics and multi-tenant architecture",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    title: "AI-Powered Analytics Engine",
    category: "AI/ML Integration",
    image: "/data-analytics-dashboard.jpg",
    description: "Machine learning pipeline for predictive analytics and business intelligence",
    technologies: ["Python", "TensorFlow", "React", "Kubernetes"],
  },
  {
    title: "Mobile Banking Application",
    category: "Mobile Development",
    image: "/mobile-banking-app.png",
    description: "Secure mobile banking app with real-time transactions and biometric authentication",
    technologies: ["React Native", "Node.js", "Firebase", "Stripe"],
  },
  {
    title: "Cloud Infrastructure Transformation",
    category: "Cloud Architecture",
    image: "/cloud-infrastructure-diagram.jpg",
    description: "Migrated legacy systems to cloud with 99.99% uptime and 60% cost reduction",
    technologies: ["AWS", "Docker", "Terraform", "Jenkins"],
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforming businesses with innovative digital solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group bg-background border border-border rounded-xl overflow-hidden hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10"
            >
              <div className="relative overflow-hidden h-64 bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, j) => (
                    <span
                      key={j}
                      className="text-xs font-medium text-secondary border border-secondary/30 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
