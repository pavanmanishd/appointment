'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useState, useEffect } from "react"
import axios from "axios"

const API_URL = "http://localhost:5000"

interface Appointment {
  id: number
  date: string
  time: string
  service: string
  beautician: string
}

export function ClientAppointmentsComponent() {
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
                <TableHead>Beautician</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {appointments.map((appointment) => (
                <TableRow key={appointment.id}>
                  <TableCell>{new Date(appointment.date).toDateString()}</TableCell>
                  <TableCell>{appointment.time}</TableCell>
                  <TableCell>{appointment.service}</TableCell>
                  <TableCell>{appointment.beautician}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">Reschedule</Button>
                    <Button variant="outline" size="sm" className="ml-2">Cancel</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}