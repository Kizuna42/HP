"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
  { label: "TOP", href: "/" },
  { label: "Who we are", href: "/who-we-are" },
  { label: "Company", href: "/company" },
  { label: "Business Field", href: "/business-field" },
  { label: "Technology", href: "/technology" },
  { label: "News", href: "/news" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/ALロゴ/symbol-blue.png" alt="Aeterlink" className="h-8 w-8" />
            <div className="text-blue-400 text-xl font-bold tracking-wider">AETERLINK</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-1 text-sm">
              <button className="text-cyan-400 hover:text-cyan-300 transition-colors">JP</button>
              <span className="text-slate-500">|</span>
              <button className="text-slate-400 hover:text-cyan-300 transition-colors">EN</button>
            </div>

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-300 hover:text-blue-400 transition-colors text-sm font-medium tracking-wide"
              >
                {item.label}
              </a>
            ))}
            
            {/* External Links */}
            <div className="flex items-center space-x-4 ml-6 pl-6 border-l border-slate-700">
              <a
                href="https://note.com/aeterlink_corp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-blue-400 transition-colors text-sm font-medium"
              >
                note
              </a>
              <a
                href="https://herp.careers/v1/aeterlink"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                HERP Hire
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-slate-300 hover:text-cyan-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-slate-800">
            <div className="flex items-center space-x-4 mt-4 mb-4">
              <button className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">JP</button>
              <span className="text-slate-500">|</span>
              <button className="text-slate-400 hover:text-cyan-300 transition-colors text-sm">EN</button>
            </div>

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium tracking-wide"
              >
                {item.label}
              </a>
            ))}
            
            {/* Mobile External Links */}
            <div className="pt-4 mt-4 border-t border-slate-700">
              <a
                href="https://note.com/aeterlink_corp"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium"
              >
                note
              </a>
              <a
                href="https://herp.careers/v1/aeterlink"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
              >
                HERP Hire
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
