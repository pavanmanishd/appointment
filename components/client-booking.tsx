'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import axios from 'axios'

const API_URL = 'http://localhost:5000'

interface Service {
  id: string;
  name: string;
  duration: number;
  price: number;
}

export function ClientBookingComponent() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [services, setServices] = useState<Service[]>([])
  const [selectedService, setSelectedService] = useState<Service | undefined>()
  const [selectedTime, setSelectedTime] = useState<string>("")

  useEffect(() => {
    axios.get(`${API_URL}/api/service/all`)
      .then((response) => {
        const services = response.data.map((service: any) => ({
          id: service._id,
          name: service.name,
          duration: service.duration,
          price: service.price
        }))
        setServices(services)
      })
      .catch((error) => {
        console.error('Error fetching services:', error)
      })
  }, [])
    
  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
  ]

  const handleServiceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const serviceId = event.target.value;
    const service = services.find(s => s.id === serviceId)
    setSelectedService(service)
  }

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTime(event.target.value)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Book an Appointment</h1>
      <div className="grid gap-6 md:grid-cols-2">
        
        {/* Select Service */}
        <Card>
          <CardHeader>
            <CardTitle>Select a Service</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              {services.map((service) => (
                <div key={service.id} className="flex items-center space-x-2">
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="service" 
                      value={service.id} 
                      checked={selectedService?.id == service.id}
                      onChange={handleServiceChange}
                      className="h-5 w-5"
                    />
                    <span className="ml-2">
                      {service.name} - {service.duration} min - ${service.price}
                    </span>
                  </label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* Select Date */}
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
        
        {/* Select Time */}
        <Card>
          <CardHeader>
            <CardTitle>Select a Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              {timeSlots.map((slot) => (
                <div key={slot} className="flex items-center space-x-2">
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="time" 
                      value={slot} 
                      checked={selectedTime === slot}
                      onChange={handleTimeChange}
                      className="h-5 w-5"
                    />
                    <span className="ml-2">{slot}</span>
                  </label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Confirm Booking */}
      <div className="mt-8">
        <Dialog>
          <DialogTrigger asChild>
            <Button disabled={!selectedService || !selectedDate || !selectedTime}>
              Confirm Booking
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Booking Confirmation</DialogTitle>
            </DialogHeader>
            <div className="py-4">
              {selectedService && (
                <>
                  <p className="mb-4">Your appointment has been booked successfully!</p>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-bold">Date:</span>
                    <span>{selectedDate?.toDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-bold">Time:</span>
                    <span>{selectedTime}</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-bold">Service:</span>
                    <span>{selectedService.name} - {selectedService.duration} min - ${selectedService.price}</span>
                  </div>
                </>
              )}
            </div>
            <Button>Close</Button>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
