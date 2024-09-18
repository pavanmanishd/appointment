'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function AdminReportsComponent() {
  const revenueData = [
    { month: "January", revenue: "$5,000" },
    { month: "February", revenue: "$5,500" },
    { month: "March", revenue: "$6,200" },
    { month: "April", revenue: "$5,800" },
    { month: "May", revenue: "$6,500" },
  ]

  const topServices = [
    { service: "Haircut", bookings: 150 },
    { service: "Manicure", bookings: 120 },
    { service: "Facial", bookings: 100 },
    { service: "Pedicure", bookings: 80 },
    { service: "Hair Coloring", bookings: 70 },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Reports</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Month</TableHead>
                  <TableHead>Revenue</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {revenueData.map((item) => (
                  <TableRow key={item.month}>
                    <TableCell>{item.month}</TableCell>
                    <TableCell>{item.revenue}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Top Services</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Service</TableHead>
                  <TableHead>Bookings</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topServices.map((item) => (
                  <TableRow key={item.service}>
                    <TableCell>{item.service}</TableCell>
                    <TableCell>{item.bookings}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}