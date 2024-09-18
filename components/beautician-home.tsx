'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function BeauticianHomeComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <span className="sr-only">Parlour Appointment System</span>
          <span className="h-6 w-6 text-2xl">💅</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            My Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Appointments
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Profile
          </Link>
          <Button variant="outline">Logout</Button>
        </nav>
      </header>
      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-6">Welcome, [Beautician Name]</h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Manage Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Add, edit, or remove your offered services.</p>
                <Button className="mt-4">Manage Services</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Appointments</CardTitle>
              </CardHeader>
              <CardContent>
                <p>You have 5 appointments scheduled.</p>
                <Button className="mt-4">View Schedule</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <p>View your ratings and feedback.</p>
                <Button className="mt-4">View Stats</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 Parlour Appointment System. All rights reserved.</p>
      </footer>
    </div>
  )
}