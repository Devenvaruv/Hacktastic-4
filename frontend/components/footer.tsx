import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-bold">USFCA Food Ordering</h3>
            <p className="text-sm text-muted-foreground">Order food from USFCA campus dining options for pickup.</p>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-sm text-muted-foreground hover:text-foreground">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Account</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/login" className="text-sm text-muted-foreground hover:text-foreground">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-sm text-muted-foreground hover:text-foreground">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link href="/profile" className="text-sm text-muted-foreground hover:text-foreground">
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Contact</h4>
            <address className="not-italic text-sm text-muted-foreground">
              <p>University of San Francisco</p>
              <p>2130 Fulton Street</p>
              <p>San Francisco, CA 94117</p>
              <p className="mt-2">
                <a href="mailto:dining@usfca.edu" className="hover:text-foreground">
                  dining@usfca.edu
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} USFCA Food Ordering. All rights reserved.</p>
          <p className="mt-1">
            <Link href="/terms" className="hover:text-foreground">
              Terms
            </Link>
            {" • "}
            <Link href="/privacy" className="hover:text-foreground">
              Privacy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

