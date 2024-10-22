'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react";

export function Navbar() {
    const handleLogout = () => {
        localStorage.removeItem('user');
        window.location.href = '/';
    }
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setIsLoggedIn(true);
        }
    }, []);
            

    return (
        <header className="px-4 lg:px-6 h-14 flex items-center">
            <Link className="flex items-center justify-center" href="#">
                <span className="sr-only">Parlour Appointment System</span>
                <span className="h-6 w-6 text-2xl">💅</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                {isLoggedIn && 
                <Button variant="outline" onClick={handleLogout}>Logout</Button>}
            </nav>
        </header>
    )
}