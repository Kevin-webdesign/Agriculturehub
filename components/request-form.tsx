"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2 } from "lucide-react"

export function RequestForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", serviceType: "", message: "" })
    }, 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (isSubmitted) {
    return (
      <section id="request" className="py-16 lg:py-24 bg-gradient-to-br from-accent via-accent/90 to-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20">
                <CheckCircle2 className="h-10 w-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-white">Thank You!</h2>
            <p className="text-lg text-white/90">
              Your request has been received. Our team will contact you within 24 hours.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="request" className="py-16 lg:py-24 bg-gradient-to-br from-accent via-accent/90 to-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-3xl font-bold tracking-tight lg:text-5xl mb-4 text-balance text-white">
              Request Service
            </h2>
            <p className="text-base lg:text-lg text-white/90 text-pretty leading-relaxed">
              Fill out the form below and our team will get in touch with you shortly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="rounded-lg bg-white p-6 lg:p-8 shadow-xl space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+254 700 000 000"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="serviceType">Type of Service *</Label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="consultancy">Agricultural Consultancy</option>
                  <option value="training">Training & Capacity Building</option>
                  <option value="soil-analysis">Soil Analysis & Testing</option>
                  <option value="agribusiness">Agribusiness Planning</option>
                  <option value="farm-inputs">Farm Input Supply</option>
                  <option value="technology">Innovation & Technology</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your farming needs..."
                rows={5}
                required
              />
            </div>

            <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Send Request
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
