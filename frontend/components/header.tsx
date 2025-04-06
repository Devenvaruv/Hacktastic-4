"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, ShoppingCart, User, LogOut, Bike } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/components/auth-provider"
import { useCart } from "@/hooks/use-cart"
import { ModeToggle } from "@/components/mode-toggle"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { user, logout } = useAuth()
  const [mounted, setMounted] = useState(false)
  const { items } = useCart()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
  ]

  // Force re-render when user state changes
  const isDeliveryPartner = user?.isDeliveryPartner === true

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
            <span className="text-xl font-bold text-primary">USFCA</span>
            <span className="text-xl font-bold">Food</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === item.href ? "text-primary" : "text-foreground/60"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/about"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/about" ? "text-primary" : "text-muted-foreground",
            )}
          >
            About
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {mounted && (
            <>
              <ModeToggle />

              {user ? (
                <>
                  <Link href="/cart">
                    <Button variant="ghost" size="icon" className="relative">
                      <ShoppingCart className="h-5 w-5" />
                      {items.length > 0 && (
                        <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0">
                          {items.length}
                        </Badge>
                      )}
                    </Button>
                  </Link>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <User className="h-5 w-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link href="/profile">Profile</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/orders">Orders</Link>
                      </DropdownMenuItem>
                      {isDeliveryPartner ? (
                        <DropdownMenuItem asChild>
                          <Link href="/delivery-dashboard">
                            <Bike className="mr-2 h-4 w-4" />
                            <span>Delivery Dashboard</span>
                          </Link>
                        </DropdownMenuItem>
                      ) : (
                        <DropdownMenuItem asChild>
                          <Link href="/become-delivery-partner">
                            <Bike className="mr-2 h-4 w-4" />
                            <span>Become Delivery Partner</span>
                          </Link>
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuItem onClick={logout}>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Logout</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              ) : (
                <div className="hidden md:flex items-center gap-2">
                  <Link href="/login">
                    <Button variant="ghost">Login</Button>
                  </Link>
                  <Link href="/register">
                    <Button>Sign Up</Button>
                  </Link>
                </div>
              )}
            </>
          )}

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.href ? "text-primary" : "text-foreground/60"
                }`}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}

            {user && isDeliveryPartner && (
              <Link
                href="/delivery-dashboard"
                className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-2"
                onClick={closeMenu}
              >
                <Bike className="h-4 w-4" />
                <span>Delivery Dashboard</span>
              </Link>
            )}

            {user && !isDeliveryPartner && (
              <Link
                href="/become-delivery-partner"
                className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-2"
                onClick={closeMenu}
              >
                <Bike className="h-4 w-4" />
                <span>Become Delivery Partner</span>
              </Link>
            )}

            {!user && (
              <div className="flex flex-col gap-2 pt-2 border-t">
                <Link href="/login" onClick={closeMenu}>
                  <Button variant="outline" className="w-full">
                    Login
                  </Button>
                </Link>
                <Link href="/register" onClick={closeMenu}>
                  <Button className="w-full">Sign Up</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

