'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { navigate } from "./actions/navigate"
import axios from 'axios'

const API_URL = 'http://localhost:5000'

export function LoginPageComponent() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ email, password });
    axios.post(`${API_URL}/api/auth/login`, { email, password })
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
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Sign in to your account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit} >
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <Label htmlFor="email-address" className="text-black">Email address</Label>
              <Input id="email-address" name="email" type="email" autoComplete="email" value={email} onChange={handleEmailChange} required />
            </div>
            <div>
              <Label htmlFor="password" className="text-black">Password</Label>
              <Input id="password" name="password" type="password" autoComplete="current-password" value={password} onChange={handlePasswordChange} required />
            </div>
          </div>
          <div>
            <Button className="w-full" type="submit">
              Sign in
            </Button>
          </div>
        </form>
        <div className="text-center">
          <p className="mt-2 text-sm text-gray-600">
            Don't have an account?{" "}
            <Link className="font-medium text-blue-600 hover:text-blue-500" href="/register">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}