'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { navigate } from './actions/navigate'
import axios from 'axios'
import { Navbar } from './navbar'

const API_URL = 'http://localhost:5000'

interface Service {
  id: number;
  name: string;
  duration: number;
  price: number;
}

export function BeauticianServicesComponent() {
  const [services, setServices] = useState<Service[]>([])
  const [newService, setNewService] = useState({ name: '', duration: 0, price: 0 })

  useEffect(() => { 
    const user = localStorage.getItem('user');
    if(user){
      axios.get(`${API_URL}/api/service/me`, {
        headers: {
          'x-auth-token': JSON.parse(user).token
        }
        }).then((response) => {
          console.log(response.data)
          setServices(response.data)
        }
      )
    }
  }, []);

  const handleAddService = () => {
    if(newService.name == '') return;
    const user = localStorage.getItem('user');
    if (!user) {
      navigate('/')
      return
    }

    const beauticianEmail = JSON.parse(user).email;

    axios.post(`${API_URL}/api/service/new`, {
      name: newService.name,
      duration: newService.duration,
      price: newService.price,
      beauticianEmail
    })
    setServices([...services, { id: services.length + 1, ...newService }])
    setNewService({ name: '', duration: 0, price: 0 })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Manage Services</h1>
        <Card>
          <CardHeader>
            <CardTitle>Your Services</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Service Name</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {services.map((service) => (
                  <TableRow key={service.id}>
                    <TableCell>{service.name}</TableCell>
                    <TableCell>{service.duration} min</TableCell>
                    <TableCell>${service.price}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="outline" size="sm" className="ml-2">Delete</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Add New Service</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div>
                <Label htmlFor="name">Service Name</Label>
                <Input
                  id="name"
                  value={newService.name}
                  onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="duration">Duration</Label>
                <Input
                  id="duration"
                  value={newService.duration}
                  onChange={(e) => setNewService({ ...newService, duration: Number(e.target.value) })}
                  type='number'
                />
              </div>
              <div>
                <Label htmlFor="price">Price</Label>
                <Input
                  id="price"
                  value={newService.price}
                  onChange={(e) => setNewService({ ...newService, price: Number(e.target.value) })}
                  type='number'
                />
              </div>
              <Button onClick={handleAddService}>Add Service</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}