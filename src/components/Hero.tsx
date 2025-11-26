export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-background via-background to-card pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-primary/20 text-secondary rounded-full text-sm font-medium border border-secondary/30">
                Digital Transformation
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Your Vision,
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-accent to-secondary">
                  {" "}
                  Our Vajra
                </span>
              </h1>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Enterprise-grade solutions powered by innovation and precision. We transform ambitious visions into
              scalable, powerful digital realities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold text-center"
              >
                Start Your Transformation
              </a>
              <a
                href="#portfolio"
                className="px-8 py-4 border-2 border-secondary text-secondary rounded-lg hover:bg-secondary/10 transition-colors font-semibold text-center"
              >
                View Our Work
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-12 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-secondary">50+</p>
                <p className="text-muted-foreground text-sm">Projects Delivered</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary">100%</p>
                <p className="text-muted-foreground text-sm">Client Satisfaction</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary">15+</p>
                <p className="text-muted-foreground text-sm">Tech Experts</p>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Visual */}
          <div className="hidden md:flex flex-col gap-6">
            <div className="bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl p-12 border border-secondary/20 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent mb-4">
                  ⚡
                </div>
                <p className="text-foreground text-lg font-semibold">Digital Power</p>
                <p className="text-muted-foreground text-sm">Divine Precision</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
