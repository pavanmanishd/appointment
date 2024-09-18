'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export function ClientBookingComponent() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  const services = [
    { id: 1, name: "Haircut", duration: "30 min", price: "$30" },
    { id: 2, name: "Manicure", duration: "45 min", price: "$25" },
    { id: 3, name: "Facial", duration: "60 min", price: "$50" },
  ]

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Book an Appointment</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Select a Service</CardTitle>
          </CardHeader>
          <CardContent>
            <Select>
              <option value="">Choose a service</option>
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.name} - {service.duration} - {service.price}
                </option>
              ))}
            </Select>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Select a Date</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Select a Time</CardTitle>
          </CardHeader>
          <CardContent>
            <Select>
              <option value="">Choose a time slot</option>
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </Select>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Confirm Booking</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Booking Confirmation</DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <p>Your appointment has been booked successfully!</p>
              <p>Date: {selectedDate?.toDateString()}</p>
              <p>Time: [Selected Time]</p>
              <p>Service: [Selected Service]</p>
            </div>
            <Button>Close</Button>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}