import { Header } from "@/components/header"
import { Icon } from '@iconify/react'

export default function WhoWeArePage() {
  const brandValues = [
    {
      icon: "mdi:lightbulb-on",
      title: "Vision",
      subtitle: "私たちが目指す世界",
      description: "ワイヤレス給電技術で、配線のないデジタル社会を実現し、人々の生活をより豊かで持続可能なものにする。"
    },
    {
      icon: "mdi:target",
      title: "Mission", 
      subtitle: "私たちの使命",
      description: "スタンフォード大学発の革新技術AirPlug™を通じて、あらゆる空間をワイヤレス給電で満たし、新しいインフラを創造する。"
    },
    {
      icon: "mdi:heart",
      title: "Values",
      subtitle: "私たちの価値観",
      description: "技術革新、持続可能性、グローバル協働を核として、世界を変える製品とサービスを提供し続ける。"
    }
  ]

  const milestones = [
    {
      year: "2014",
      title: "研究開始",
      description: "スタンフォード大学でワイヤレス給電の基礎研究を開始"
    },
    {
      year: "2018",
      title: "AETERLINK設立",
      description: "株式会社AETERLINKを設立、本格的な事業化へ"
    },
    {
      year: "2020",
      title: "シリーズA調達",
      description: "大規模資金調達により研究開発を加速"
    },
    {
      year: "2022",
      title: "AirPlug™実用化",
      description: "世界初の長距離ワイヤレス給電システムの実用化達成"
    },
    {
      year: "2024",
      title: "黒字化達成",
      description: "持続可能な事業モデルの確立と黒字化を実現"
    },
    {
      year: "2025",
      title: "グローバル展開",
      description: "世界市場への本格展開、未来インフラの礎を築く"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Who we are
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            私たちは、ワイヤレス給電技術で世界を変える<br />
            スタンフォード大学発のDeepTechスタートアップです
          </p>
        </div>
      </section>

      {/* Brand Concept */}
      <section id="brand-concept" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ブランドコンセプト
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AETERLINKは、ワイヤレス給電で未来をつなぎ、<br />
              配線のない持続可能なデジタル社会を実現します
            </p>
          </div>

          <div id="vmv" className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {brandValues.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100">
                <Icon icon={value.icon} className="text-5xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-blue-600 font-medium mb-4">{value.subtitle}</p>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand History */}
      <section id="brand-history" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ブランドヒストリー
            </h2>
            <p className="text-xl text-gray-600">
              スタンフォード大学の研究室から、世界を変える企業への軌跡
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-blue-600"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  {/* Content Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Note Link Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              さらに詳しく知る
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              AETERLINKの日常、技術開発の裏側、チームメンバーの想いを<br />
              公式noteで詳しくご紹介しています
            </p>
            <a
              href="https://note.com/aeterlink"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors"
            >
              <Icon icon="mdi:note-text" className="text-xl mr-2" />
              公式noteを見る
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img src="/ALロゴ/symbol-white.png" alt="Aeterlink" className="h-8 w-8" />
            <div className="text-xl font-bold">AETERLINK</div>
          </div>
          <p className="text-slate-400">
            © 2025 AETERLINK Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
