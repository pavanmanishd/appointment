'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Our Story</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Founded in 2023, our Parlour Appointment System aims to revolutionize the way people book and manage their beauty appointments. We believe in making self-care accessible and convenient for everyone.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Our mission is to connect clients with skilled beauticians, streamline the booking process, and enhance the overall beauty service experience through technology and innovation.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { name: "Jane Doe", role: "Founder & CEO" },
            { name: "John Smith", role: "CTO" },
            { name: "Alice Johnson", role: "Head of Customer Relations" }
          ].map((member) => (
            <Card key={member.name}>
              <CardHeader>
                <CardTitle>{member.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="mt-8 text-center">
        <Link href="/contact">
          <Button>Contact Us</Button>
        </Link>
      </div>
    </div>
  )
}