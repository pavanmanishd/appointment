'use client'

import { BeauticianHomeComponent } from "@/components/beautician-home";
import { useEffect, useState } from "react";
import { navigate } from "@/components/actions/navigate";

const API_URL = 'http://localhost:5000';

export default function BeauticianHome() {
    const [token, setToken] = useState<string | null>(null);
    const [name, setName] = useState<string>('');

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const user = JSON.parse(storedUser);
            console.log(user);
            setToken(user.token);
            setName(user.name);
        } else {
            console.log('No user found, redirecting to login page');
            navigate('/');
        }
    }, []);

    if (!token) {
        return null;
    }
    return (
        <BeauticianHomeComponent name={name} />
    );
}