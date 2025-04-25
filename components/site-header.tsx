"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "./navigation"
import { X, Menu } from "lucide-react"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="w-full py-3 px-4 md:px-6 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 left-0 right-0 z-50 border-b border-gray-100">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-t9xVCLE1ALaEOVUgFWf00VNut8yuxB.png"
            alt="Robin Health Logo"
            width={400}
            height={140}
            className="h-20 w-auto rounded-2xl"
          />
        </Link>
      </div>
      <div className="hidden md:block">
        <Navigation color="dark" />
      </div>
      <button
        className="md:hidden text-gray-700 focus:outline-none p-2 rounded-md hover:bg-gray-100"
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-[76px] left-0 right-0 bg-white shadow-lg md:hidden z-50 border-t border-gray-100">
          <div className="py-4 px-6">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-800 hover:text-blue-600 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-800 hover:text-blue-600 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/faq"
                className="text-gray-800 hover:text-blue-600 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
