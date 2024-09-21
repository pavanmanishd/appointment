'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useState, useEffect } from "react"
import axios from "axios"
import { Navbar } from "./navbar"

const API_URL = "http://localhost:5000"

interface Appointment {
  id: number
  date: string
  time: string
  service: string
  client: string
}

export function BeauticianAppointmentsComponent() {
  const [appointments, setAppointments] = useState<Appointment[]>([])
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}")
    const token = user.token

    axios.get(`${API_URL}/api/appointment`, {
      headers: {
        'x-auth-token': token
      }
    })
    .then(response => {
      setAppointments(response.data)
    })
    .catch(error => {
      console.error(error)
    })
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">My Appointments</h1>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Service</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {appointments.map((appointment) => (
                  <TableRow key={appointment.id}>
                    <TableCell>{new Date(appointment.date).toDateString()}</TableCell>
                    <TableCell>{appointment.time}</TableCell>
                    <TableCell>{appointment.service}</TableCell>
                    <TableCell>{appointment.client}</TableCell>
                    <TableCell>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">View Details</Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Appointment Details</DialogTitle>
                          </DialogHeader>
                          <div className="py-4">
                            <p>Date: {appointment.date}</p>
                            <p>Time: {appointment.time}</p>
                            <p>Service: {appointment.service}</p>
                            <p>Client: {appointment.client}</p>
                          </div>
                          <Button>Close</Button>
                        </DialogContent>
                      </Dialog>
                    </TableCell>
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