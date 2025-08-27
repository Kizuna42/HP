"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null)
    }
    
    if (activeDropdown) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [activeDropdown])

  const navItems = [
    { 
      label: "TOP", 
      href: "/",
      type: "simple"
    },
    { 
      label: "Who we are", 
      href: "/who-we-are",
      type: "dropdown",
      submenu: [
        { label: "ブランドコンセプト", href: "/who-we-are#brand-concept" },
        { label: "VMV", href: "/who-we-are#vmv" },
        { label: "ブランドヒストリー", href: "/who-we-are#brand-history" }
      ]
    },
    { 
      label: "Company", 
      href: "/company",
      type: "dropdown",
      submenu: [
        { label: "経営陣メッセージ", href: "/company#executives" },
        { label: "チーム紹介", href: "/company#team" },
        { label: "会社概要", href: "/company#overview" },
        { label: "FAQ", href: "/company#faq" }
      ]
    },
    { 
      label: "Business Field", 
      href: "/business-field",
      type: "dropdown",
      submenu: [
        { label: "メディカルインプラント", href: "/business-field#medical" },
        { label: "ビルマネジメント", href: "/business-field#building" },
        { label: "Factory Automation", href: "/business-field#factory" },
        { label: "事業一覧", href: "/business-field#overview" }
      ]
    },
    { 
      label: "Technology", 
      href: "/technology",
      type: "dropdown",
      submenu: [
        { label: "コア技術", href: "/technology#core-tech" },
        { label: "特許・論文", href: "/technology#patents" },
        { label: "研究パートナー", href: "/technology#partners" }
      ]
    },
    { 
      label: "News", 
      href: "/news",
      type: "dropdown",
      submenu: [
        { label: "プレスリリース", href: "/news?category=プレスリリース" },
        { label: "メディア掲載", href: "/news?category=メディア掲載" },
        { label: "特許・論文", href: "/news?category=特許・論文" }
      ]
    },
    { 
      label: "Career", 
      href: "/career",
      type: "dropdown",
      submenu: [
        { label: "採用コンセプト", href: "/career#concept" },
        { label: "採用フロー", href: "/career#flow" },
        { label: "福利厚生", href: "/career#benefits" },
        { label: "FAQ", href: "/career#faq" },
        { label: "募集要項", href: "https://herp.careers/v1/aeterlink", external: true },
        { label: "公式note", href: "https://note.com/aeterlink", external: true }
      ]
    },
    { 
      label: "Contact", 
      href: "/contact",
      type: "dropdown",
      submenu: [
        { label: "技術相談", href: "/contact#tech-consultation" },
        { label: "デモ予約", href: "/contact#demo" },
        { label: "資料ダウンロード", href: "/contact#materials" },
        { label: "会社概要", href: "/contact#company-info" }
      ]
    }
  ]

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label)
  }

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
          <nav className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-1 text-sm">
              <button className="text-cyan-400 hover:text-cyan-300 transition-colors">JP</button>
              <span className="text-slate-500">|</span>
              <button className="text-slate-400 hover:text-cyan-300 transition-colors">EN</button>
            </div>

                        {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.type === "simple" ? (
                  <a
                    href={item.href}
                    className="text-slate-300 hover:text-blue-400 transition-colors text-sm font-medium tracking-wide"
                  >
                    {item.label}
                  </a>
                ) : (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleDropdownToggle(item.label)
                      }}
                      className="flex items-center space-x-1 text-slate-300 hover:text-blue-400 transition-colors text-sm font-medium tracking-wide"
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={14} className={`transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {activeDropdown === item.label && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {item.submenu?.map((subItem, index) => (
                          <a
                            key={index}
                            href={subItem.href}
                            target={subItem.external ? "_blank" : undefined}
                            rel={subItem.external ? "noopener noreferrer" : undefined}
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 text-sm transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {subItem.label}
                            {subItem.external && (
                              <span className="ml-1 text-xs text-gray-400">↗</span>
                            )}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-slate-300 hover:text-cyan-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-slate-800">
            <div className="flex items-center space-x-4 mt-4 mb-4">
              <button className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">JP</button>
              <span className="text-slate-500">|</span>
              <button className="text-slate-400 hover:text-cyan-300 transition-colors text-sm">EN</button>
            </div>

            {navItems.map((item) => (
              <div key={item.label} className="mb-3">
                {item.type === "simple" ? (
                  <a
                    href={item.href}
                    className="block py-2 text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium tracking-wide"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(item.label)}
                      className="flex items-center justify-between w-full py-2 text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium tracking-wide"
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={14} className={`transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Mobile Submenu */}
                    {activeDropdown === item.label && item.submenu && (
                      <div className="mt-2 ml-4 space-y-1">
                        {item.submenu.map((subItem, index) => (
                          <a
                            key={index}
                            href={subItem.href}
                            target={subItem.external ? "_blank" : undefined}
                            rel={subItem.external ? "noopener noreferrer" : undefined}
                            className="block py-2 text-slate-400 hover:text-cyan-300 transition-colors text-xs"
                            onClick={() => {
                              setActiveDropdown(null)
                              setIsMenuOpen(false)
                            }}
                          >
                            {subItem.label}
                            {subItem.external && (
                              <span className="ml-1 text-xs">↗</span>
                            )}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
