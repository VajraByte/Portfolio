"use client"

import type React from "react"
import { useState } from "react"

export default function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        console.log("Form submitted successfully")
        alert("Thank you! We will contact you soon.")
        setFormData({ name: "", email: "", company: "", phone: "", message: "" })
      } else {
        const errorData = await response.json()
        console.error("Form submission error:", errorData)
        alert(`Something went wrong: ${errorData.message || "Please try again."}`)
      }
    } catch (error) {
      console.error("There was an error submitting the form:", error)
      alert("There was an error submitting the form. Please check the console.")
    }
  }

  return (
    <section id="contact" className="py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-primary/20 to-secondary/20 border border-secondary/30 rounded-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg text-muted-foreground">Let's discuss your digital transformation journey</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                placeholder="Your phone number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                placeholder="Your company name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Project Details</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-secondary to-accent text-secondary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold text-lg"
            >
              Submit
            </button>
          </form>

          <div className="grid md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
            <div>
              <p className="text-2xl font-bold text-secondary mb-2">📧</p>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="text-foreground font-semibold">vajrabyte@gmail.com</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-secondary mb-2">📱</p>
              <p className="text-sm text-muted-foreground">Phone</p>
              <p className="text-foreground font-semibold">+91 9967154210</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-secondary mb-2">📍</p>
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="text-foreground font-semibold">Pune , Maharashtra</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
