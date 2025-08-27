import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-8">
        <div className="flex items-center space-x-3">
          {/* Logo */}
          <div className="flex space-x-1">
            <div className="w-3 h-8 bg-white rounded-sm"></div>
            <div className="w-3 h-8 bg-white rounded-sm"></div>
            <div className="w-3 h-8 bg-white rounded-sm"></div>
          </div>
          <div className="text-white">
            <div className="text-sm font-semibold tracking-wide">MUSÉE</div>
            <div className="text-sm font-semibold tracking-wide">DE LA</div>
            <div className="text-sm font-semibold tracking-wide">PLAISANCE</div>
            <div className="text-xs tracking-widest opacity-80 mt-1">BENETEAU FOUNDATION</div>
          </div>
        </div>

        {/* Language Selector */}
        <div className="flex items-center space-x-2 text-sm">
          <span className="font-medium">EN</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col justify-center min-h-[calc(100vh-120px)] px-8 max-w-2xl">
        <div className="space-y-8">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif leading-tight">
            <span className="block">Discover</span>
            <span className="block">boating</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl leading-relaxed max-w-md opacity-90">
            Navigate the history of French boating from the 1950s to the present day
          </p>

          {/* Enter Button */}
          <div className="pt-4">
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900 rounded-full px-8 py-3 text-sm font-medium tracking-wide transition-all duration-300"
            >
              → ENTER
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
