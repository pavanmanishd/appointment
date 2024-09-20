'use client'

import { ClientHomeComponent } from "@/components/client-home";
import { useEffect, useState } from "react";
import { navigate } from "@/components/actions/navigate";
import axios from 'axios';

const API_URL = 'http://localhost:5000';

export default function ClientHome() {
    const [token, setToken] = useState<string | null>(null);
    const [name, setName] = useState<string>('');

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        setToken(storedToken);

        if (!storedToken) {
            console.log('No token found, redirecting to login page');
            navigate('/');
        }

    }, []);

    useEffect(() => {
        if (token) {
            console.log('Token found, fetching user data');
            axios.get(`${API_URL}/api/user/me`, {
                headers: {
                    'x-auth-token': token
                }
            })
                .then(response => {
                    console.log(response.data);
                    if(response.data.error) {
                        console.log('Token is invalid, redirecting to login page');
                        localStorage.removeItem('token');
                        navigate('/');
                    } else if (response.data.role !== 'client') {
                        console.log('User is not a client, redirecting to login page');
                        localStorage.removeItem('token');
                        navigate('/');
                    } else {
                        console.log('User is a client');
                        setName(response.data.name);
                    }
                })
                .catch(error => {
                    console.error(error);
                    navigate('/');
                });
        }
    }, [token]);

    if (!token) {
        return null;
    }
    return (
        <ClientHomeComponent name={name} />
    );
}
