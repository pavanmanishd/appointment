'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { navigate } from "./actions/navigate"
import { Navbar } from "./navbar"

export function ClientHomeComponent({ name }: { name: string }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-6">Welcome, {name}!</h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Book a New Appointment</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Browse services and book your next appointment.</p>
                <Button className="mt-4" onClick={() => navigate('/client/booking')}>Book Now</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Appointments</CardTitle>
              </CardHeader>
              <CardContent>
                <p>You have 2 upcoming appointments.</p>
                <Button className="mt-4" onClick={() => navigate('/client/appointments')}>View Appointments</Button>
              </CardContent>
            </Card>
            {/* <Card>
              <CardHeader>
                <CardTitle>Special Offers</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Check out our latest deals and promotions.</p>
                <Button className="mt-4">View Offers</Button>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 Parlour Appointment System. All rights reserved.</p>
      </footer>
    </div>
  )
}