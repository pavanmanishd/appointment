'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"

export function RegisterPageComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-10 shadow-md">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Create your account</h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <Label htmlFor="name" className="text-black">Full Name</Label>
              <Input id="name" name="name" type="text" autoComplete="name" required />
            </div>
            <div>
              <Label htmlFor="email-address" className="text-black">Email address</Label>
              <Input id="email-address" name="email" type="email" autoComplete="email" required />
            </div>
            <div>
              <Label htmlFor="password" className="text-black">Password</Label>
              <Input id="password" name="password" type="password" autoComplete="new-password" required />
            </div>
            <div>
              <Label htmlFor="user-type" className="text-black">User Type</Label>
              <Select name="user-type">
                <option value="client" className="text-black">Client</option>
                <option value="beautician" className="text-black">Beautician</option>
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