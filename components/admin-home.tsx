'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "./navbar"

export function AdminHomeComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Manage clients and beauticians.</p>
                <Button className="mt-4">Manage Users</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Service Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p>View and manage all services offered.</p>
                <Button className="mt-4">View Services</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Appointment Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p>View appointment statistics and reports.</p>
                <Button className="mt-4">View Reports</Button>
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