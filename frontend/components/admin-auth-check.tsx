"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-provider"

// Mock admin users - in a real app, this would come from a database
const ADMIN_EMAILS = ["admin@usfca.edu", "dining@usfca.edu"]

export default function AdminAuthCheck({ children }: { children: React.ReactNode }) {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in and is an admin
    if (!user) {
      router.push("/login?redirect=/admin")
      return
    }

    // Check if the user has admin privileges
    if (!user.isAdmin) {
      router.push("/")
      return
    }
  }, [user, router])

  // Don't render children until we've verified the user is an admin
  if (!user || !user.isAdmin) {
    return null
  }

  return <>{children}</>
}

