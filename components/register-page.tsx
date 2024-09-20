'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { useState } from "react"
import { navigate } from "./actions/navigate"
import axios from 'axios'

const API_URL = 'http://localhost:5000'

export function RegisterPageComponent() {
  const [role, setRole] = useState<string | null>(null);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleRoleChange = (value: string) => {
    setRole(value);
  }
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ role, name, email, password });
    axios.post(`${API_URL}/api/auth/register`, { role, name, email, password })
      .then(response => {
        console.log(response.data.token);
        localStorage.setItem('token', response.data.token);
        navigate('/');
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-10 shadow-md">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Create your account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit} >
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <Label htmlFor="name" className="text-black">Full Name</Label>
              <Input id="name" name="name" type="text" autoComplete="name" value={name} onChange={handleNameChange} required />
            </div>
            <div>
              <Label htmlFor="email-address" className="text-black">Email address</Label>
              <Input id="email-address" name="email" type="email" autoComplete="email" value={email} onChange={handleEmailChange} required />
            </div>
            <div>
              <Label htmlFor="password" className="text-black">Password</Label>
              <Input id="password" name="password" type="password" autoComplete="new-password" value={password} onChange={handlePasswordChange} required />
            </div>
            <div>
              <Label htmlFor="user-type" className="text-black">User Type</Label>
              <Select onValueChange={handleRoleChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select user type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="client">Client</SelectItem>
                  <SelectItem value="beautician">Beautician</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <Button className="w-full" type="submit">
              Register
            </Button>
          </div>
        </form>
        <div className="text-center">
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?{" "}
            <Link className="font-medium text-blue-600 hover:text-blue-500" href="/login">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}