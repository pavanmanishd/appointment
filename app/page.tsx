"use client";
import { LandingPageComponent } from "@/components/landing-page"; 
import { useState, useEffect } from "react";

export default function Home() {
  const [role, setRole] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      const { role, token } = JSON.parse(user);
      setRole(role);
      setToken(token);
    }
  }, []);

  useEffect(() => {
    if (role === 'admin') {
      window.location.href = '/admin';
    } else if (role === 'beautician') {
      window.location.href = '/beautician';
    } else if (role === 'client') {
      window.location.href = '/client';
    }
  }, [role]);

  return <LandingPageComponent />;
}
