'use client'
import { BeauticianServicesComponent } from "@/components/beautician-services";
import { useEffect, useState } from "react";
import { navigate } from "@/components/actions/navigate";

const API_URL = 'http://localhost:5000';

export default function BeauticianServices() {
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const user = JSON.parse(storedUser);
            setToken(user.token);
        } else {
            console.log('No user found, redirecting to login page');
            navigate('/');
        }
    }, []);

    if (!token) {
        return null;
    }
    return (
        <BeauticianServicesComponent />
    );
}

