'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center">
            <Link className="flex items-center justify-center" href="#">
                <span className="sr-only">Parlour Appointment System</span>
                <span className="h-6 w-6 text-2xl">💅</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                    Book Appointment
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                    My Appointments
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                    Profile
                </Link>
                <Button variant="outline">Logout</Button>
            </nav>
        </header>
    )
}