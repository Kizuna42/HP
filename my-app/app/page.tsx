import { Header } from "@/components/header"
import { Icon } from '@iconify/react'

export default function Home() {
  const applicationAreas = [
    {
      icon: "mdi:heart-pulse",
      title: "Medical",
      subtitle: "メディカルインプラント",
      description: "体内給電による革新的医療"
    },
    {
      icon: "mdi:office-building",
      title: "Building",
      subtitle: "スマートビルディング",
      description: "IoTセンサー完全給電"
    },
    {
      icon: "mdi:factory",
      title: "Factory",
      subtitle: "ファクトリーオートメーション",
      description: "製造業DX推進"
    }
  ]

  const keyStats = [
    { value: "20m", label: "無線給電距離" },
    { value: "100台", label: "同時給電可能" },
    { value: "68億円", label: "累計調達額" },
    { value: "世界初", label: "実用化技術" }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/airplug-hero-video.mp4" type="video/mp4" />
        </video>
        
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-slate-900/60"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Brand Name */}
          <div className="text-2xl md:text-3xl font-light text-white mb-4 tracking-wide">
            AirPlug™
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block text-balance">ワイヤレス給電で、</span>
            <span className="block text-blue-400 text-balance">未来をつなぐ</span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-3xl mx-auto text-balance leading-relaxed">
            スタンフォード大学発の革新技術で<br />
            配線のないデジタル社会を実現
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            {keyStats.map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-blue-500/30 rounded-lg p-4">
                <div className="text-2xl md:text-3xl font-bold text-blue-400">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Application Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              適用領域
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              3つの重要分野でワイヤレス給電技術の革新を推進
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {applicationAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100 hover:shadow-xl transition-shadow">
                <Icon icon={area.icon} className="text-5xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{area.title}</h3>
                <p className="text-blue-600 font-medium mb-3">{area.subtitle}</p>
                <p className="text-gray-600 text-sm">{area.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/business-field"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              詳細を見る
              <Icon icon="mdi:arrow-right" className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Content */}
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  About AETERLINK
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  私たちは、スタンフォード大学での10年間の研究開発を経て設立された、ワイヤレス給電技術のリーディングカンパニーです。
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  世界初の長距離ワイヤレス給電技術「AirPlug™」により、医療、建設、製造業の各分野で革新的ソリューションを提供し、配線のないデジタル社会の実現を目指しています。
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">66名</div>
                    <div className="text-gray-600 text-sm">グローバルチーム</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">7ヶ国</div>
                    <div className="text-gray-600 text-sm">多様な国籍</div>
                  </div>
                </div>

                <a
                  href="/company"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  会社情報を見る
                  <Icon icon="mdi:arrow-right" className="ml-2" />
                </a>
              </div>

              {/* Visual */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <img src="/ALロゴ/symbol-blue.png" alt="Aeterlink Symbol" className="h-24 w-24 mx-auto mb-4" />
                    <p className="text-gray-500 font-medium">企業紹介動画</p>
                    <p className="text-sm text-gray-400">準備中</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest News
            </h2>
            <p className="text-xl text-gray-600">
              最新のお知らせ・メディア掲載情報
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  プレスリリース
                </span>
                <span className="text-gray-500 text-sm">2024.12.15</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                シリーズC調達完了により68億円の累計資金調達を達成
              </h3>
              <p className="text-gray-600 mb-4">
                スタンフォード大学発のワイヤレス給電技術で世界を変えるAETERLINKが、シリーズC調達を完了し、累計68億円の資金調達を達成しました。
              </p>
              <a href="/news/1" className="text-blue-600 hover:text-blue-700 font-medium">
                詳細を見る →
              </a>
            </div>

            <div className="text-center">
              <a
                href="/news"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                すべてのニュース
                <Icon icon="mdi:arrow-right" className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              
              {/* Company Info */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <img src="/ALロゴ/symbol-white.png" alt="Aeterlink" className="h-8 w-8" />
                  <div className="text-xl font-bold">AETERLINK</div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  ワイヤレス給電技術で<br />
                  配線のない未来を創造
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-bold mb-4">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/who-we-are" className="text-slate-400 hover:text-white transition-colors">Who we are</a></li>
                  <li><a href="/company" className="text-slate-400 hover:text-white transition-colors">Company</a></li>
                  <li><a href="/news" className="text-slate-400 hover:text-white transition-colors">News</a></li>
                  <li><a href="/career" className="text-slate-400 hover:text-white transition-colors">Career</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4">Business</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/business-field" className="text-slate-400 hover:text-white transition-colors">Business Field</a></li>
                  <li><a href="/technology" className="text-slate-400 hover:text-white transition-colors">Technology</a></li>
                  <li><a href="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>

              {/* External Links */}
              <div>
                <h4 className="font-bold mb-4">Follow Us</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="https://note.com/aeterlink_corp" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                      公式note
                    </a>
                  </li>
                  <li>
                    <a href="https://herp.careers/v1/aeterlink" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                      採用情報
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-8 text-center">
              <p className="text-slate-400 text-sm">
                © 2025 AETERLINK Inc. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
