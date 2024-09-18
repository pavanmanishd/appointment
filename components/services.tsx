'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Services() {
  const services = [
    { id: 1, name: "Haircut", duration: "30 min", price: "$30", description: "Professional haircut tailored to your style." },
    { id: 2, name: "Manicure", duration: "45 min", price: "$25", description: "Relaxing manicure to beautify your nails." },
    { id: 3, name: "Facial", duration: "60 min", price: "$50", description: "Rejuvenating facial treatment for glowing skin." },
    { id: 4, name: "Hair Coloring", duration: "90 min", price: "$80", description: "Expert hair coloring to transform your look." },
    { id: 5, name: "Pedicure", duration: "60 min", price: "$35", description: "Pampering pedicure for healthy, beautiful feet." },
    { id: 6, name: "Massage", duration: "60 min", price: "$60", description: "Relaxing massage to relieve stress and tension." },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Our Services</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.id}>
            <CardHeader>
              <CardTitle>{service.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">{service.description}</p>
              <p className="font-semibold">Duration: {service.duration}</p>
              <p className="font-semibold">Price: {service.price}</p>
              <Link href="/client-booking" className="mt-4 inline-block">
                <Button>Book Now</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}