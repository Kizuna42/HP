export function HeroSection() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900">
        {/* Tech Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-emerald-400 rounded-full blur-lg"></div>
          <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-blue-500 rounded-full blur-2xl"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Brand Name */}
        <div className="text-2xl md:text-3xl font-light text-white mb-4 tracking-wide">
          AirPlug™
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="block text-balance">空間伝送型</span>
          <span className="block text-blue-400 text-balance">ワイヤレス給電</span>
          <span className="block text-emerald-400 text-balance font-light italic">AirPlug™</span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-300 text-lg md:text-xl mb-8 max-w-3xl mx-auto text-balance leading-relaxed">
          それは、世界で唯一の長距離ワイヤレス給電ソリューション。<br />
          そして、次の世界の当たり前になる。
        </p>

        {/* Hero Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-blue-500/30 rounded-lg p-4">
            <div className="text-2xl md:text-3xl font-bold text-blue-400">20m</div>
            <div className="text-sm text-slate-400">無線給電距離</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-blue-500/30 rounded-lg p-4">
            <div className="text-2xl md:text-3xl font-bold text-blue-400">100台</div>
            <div className="text-sm text-slate-400">同時給電可能</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-blue-500/30 rounded-lg p-4">
            <div className="text-2xl md:text-3xl font-bold text-blue-400">68億円</div>
            <div className="text-sm text-slate-400">累計調達額</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-blue-500/30 rounded-lg p-4">
            <div className="text-2xl md:text-3xl font-bold text-blue-400">世界初</div>
            <div className="text-sm text-slate-400">実用化技術</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            技術詳細を見る
          </button>
          <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-3 rounded-lg font-medium transition-colors">
            資料請求
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
