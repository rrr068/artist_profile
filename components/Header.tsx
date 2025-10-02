"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
// import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => pathname === path

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
      style={{ backgroundColor: "transparent" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link
            href="/"
            className="font-serif text-xl sm:text-xl font-semibold text-foreground hover:text-muted-foreground transition-colors"
          >
            Rina Hurukawa
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/gallery"
              className={`text-sm font-medium transition-colors ${
                isActive("/gallery") ? "text-foreground" : "text-foreground/70 hover:text-foreground"
              }`}
            >
              Gallery
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors ${
                isActive("/about") ? "text-foreground" : "text-foreground/70 hover:text-foreground"
              }`}
            >
              Profile
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive("/contact") ? "text-foreground" : "text-foreground/70 hover:text-foreground"
              }`}
            >
              Contect
            </Link>
            <Link
                href="/online store"
                className={`text-sm font-medium transition-colors ${
                  isActive("/online store") ? "text-foreground" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                online store
              </Link>
          </nav>

          {/* Mobile Menu Button */}
          {/* <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button> */}
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="/gallery"
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium transition-colors text-left ${
                  isActive("/gallery") ? "text-foreground" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                Gallery
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium transition-colors text-left ${
                  isActive("/about") ? "text-foreground" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                Profile
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium transition-colors text-left ${
                  isActive("/contact") ? "text-foreground" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                Contact
              </Link>
              <Link
                href="/online store"
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium transition-colors text-left ${
                  isActive("/online store") ? "text-foreground" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                online store
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
