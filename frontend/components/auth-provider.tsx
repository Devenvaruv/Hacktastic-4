"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"
import { getUserByEmail, saveUser, type User as StoreUser } from "@/lib/user-store"

type User = {
  id: string
  name: string
  email: string
  isAdmin?: boolean
  isDeliveryPartner?: boolean
  phone?: string
  deliveryPartnerDetails?: {
    status: "available" | "busy" | "offline"
    totalDeliveries: number
    totalEarnings: number
    rating: number
    vehicleType?: "walking" | "bicycle" | "scooter" | "car"
    currentLocation?: string
    bankInfo?: string
  }
}

type AuthContextType = {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
  resetPassword: (email: string) => Promise<void>
  updateUserState: (updatedUser: User) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const { toast } = useToast()

  // Check if user is logged in on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  // Function to update user state
  const updateUserState = (updatedUser: User) => {
    setUser(updatedUser)
    localStorage.setItem("user", JSON.stringify(updatedUser))
  }

  // Mock login function - in a real app, this would call an API
  const login = async (email: string, password: string) => {
    setLoading(true)
    try {
      // Get user from store
      const user = getUserByEmail(email)

      if (!user || user.password !== password) {
        throw new Error("Invalid credentials")
      }

      // Create user object without password
      const userWithoutPassword = {
        id: user.id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        isDeliveryPartner: user.isDeliveryPartner,
        phone: user.phone,
        deliveryPartnerDetails: user.deliveryPartnerDetails,
      }

      setUser(userWithoutPassword)
      localStorage.setItem("user", JSON.stringify(userWithoutPassword))

      toast({
        title: "Login successful",
        description: `Welcome back to USFCA Food Ordering${user.isAdmin ? " Admin" : ""}!`,
      })

      // Redirect admins to admin dashboard, regular users to menu
      router.push(user.isAdmin ? "/admin" : "/menu")
    } catch (error) {
      toast({
        title: "Login failed",
        description: error instanceof Error ? error.message : "An error occurred",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  // Mock register function
  const register = async (name: string, email: string, password: string) => {
    setLoading(true)
    try {
      // Check if user already exists
      const existingUser = getUserByEmail(email)
      if (existingUser) {
        throw new Error("A user with this email already exists")
      }

      // Create new user
      const newUser: StoreUser = {
        id: Date.now().toString(),
        name,
        email,
        password,
        isAdmin: false,
        createdAt: new Date().toISOString(),
      }

      // Save user to store
      saveUser(newUser)

      // Create user object without password
      const userWithoutPassword = {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        isAdmin: newUser.isAdmin,
      }

      setUser(userWithoutPassword)
      localStorage.setItem("user", JSON.stringify(userWithoutPassword))

      toast({
        title: "Registration successful",
        description: "Welcome to USFCA Food Ordering!",
      })
      router.push("/menu")
    } catch (error) {
      toast({
        title: "Registration failed",
        description: error instanceof Error ? error.message : "An error occurred",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  // Logout function
  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
    localStorage.removeItem("cart")
    router.push("/")
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    })
  }

  // Mock password reset function
  const resetPassword = async (email: string) => {
    setLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Password reset email sent",
        description: "Check your email for instructions to reset your password.",
      })
    } catch (error) {
      toast({
        title: "Password reset failed",
        description: error instanceof Error ? error.message : "An error occurred",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, resetPassword, updateUserState }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

