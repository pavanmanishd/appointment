'use client'

import { Loader2 } from "lucide-react"

export function LoadingPageComponent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <Loader2 className="h-16 w-16 animate-spin text-primary" />
      <h1 className="mt-4 text-2xl font-semibold text-foreground">Loading...</h1>
      <p className="mt-2 text-muted-foreground">Please wait while we fetch your content.</p>
    </div>
  )
}