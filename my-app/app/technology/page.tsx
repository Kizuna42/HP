import { Header } from "@/components/header"
import { Icon } from '@iconify/react'

export default function TechnologyPage() {
  const coreTechnologies = [
    {
      icon: "mdi:wifi",
      title: "空間伝送型ワイヤレス給電",
      subtitle: "世界初の20m長距離給電技術",
      description: "920MHz帯マイクロ波による空間伝送で、20m離れた場所への効率的な電力伝送を実現。角度に依存しない安定した給電が可能。",
      specs: [
        "伝送距離: 最大20m",
        "角度非依存: 360度対応",
        "効率: 最大85%",
        "安全性: FCC/CE認証済み"
      ],
      technicalDetails: "独自開発のフェーズドアレイアンテナと高精度ビームフォーミング技術により、従来の近距離充電の限界を突破。920MHz ISMバンドを使用し、生体への影響を最小限に抑制。"
    },
    {
      icon: "mdi:lightning-bolt",
      title: "マルチデバイス同時給電",
      subtitle: "100台同時接続の大規模制御",
      description: "独自のビームフォーミング技術により、100台のデバイスへの同時給電を実現。AI制御による最適な電力分配。",
      specs: [
        "同時給電: 最大100台",
        "出力制御: 自動最適化",
        "監視機能: リアルタイム",
        "拡張性: モジュール設計"
      ],
      technicalDetails: "MIMO技術とAI最適化アルゴリズムにより、複数デバイスへの効率的な電力分配を実現。各デバイスの電力需要をリアルタイムで監視し、動的に電力配分を調整。"
    },
    {
      icon: "mdi:brain",
      title: "AIネットワーク制御",
      subtitle: "機械学習による最適化システム",
      description: "クラウドベースのAI制御システムで、電力需要を予測し、効率的な電力分配を自動実行。24時間監視体制。",
      specs: [
        "クラウド管理: 24時間監視",
        "AI予測: 需要予測機能",
        "遠隔制御: リモート操作",
        "データ分析: 利用統計"
      ],
      technicalDetails: "機械学習アルゴリズムによる電力需要予測と最適化制御。デバイス使用パターンを学習し、効率的な電力管理を実現。AWS/Azure対応のクラウドインフラ。"
    },
    {
      icon: "mdi:battery-heart",
      title: "体内給電安全技術",
      subtitle: "医療用20cm深部給電",
      description: "医療インプラント向けの体内給電技術。20cm深部への安全で効率的な電力供給により、患者の負担を大幅に軽減。",
      specs: [
        "深部給電: 20cm体内",
        "安全性: 生体適合",
        "効率: 高精度制御",
        "認証: 医療機器対応"
      ],
      technicalDetails: "生体組織を考慮した電磁界シミュレーションと安全性評価により、医療機器としての認証取得。SAR値を厳格に管理し、生体への影響を最小化。"
    }
  ]

  const patents = [
    {
      title: "空間伝送型ワイヤレス給電システム",
      number: "特許第6789012号",
      date: "2022年3月",
      description: "長距離ワイヤレス給電のための基本技術"
    },
    {
      title: "マルチデバイス同時給電制御方法",
      number: "特許第6890123号", 
      date: "2023年1月",
      description: "複数デバイスへの効率的電力分配技術"
    },
    {
      title: "体内埋込型デバイス給電システム",
      number: "特許第6901234号",
      date: "2023年8月",
      description: "医療インプラント向け安全給電技術"
    },
    {
      title: "AI最適化電力制御アルゴリズム",
      number: "特許出願中",
      date: "2024年6月",
      description: "機械学習による電力需要予測と最適化"
    }
  ]

  const papers = [
    {
      title: "Long-Range Wireless Power Transfer for IoT Applications",
      journal: "IEEE Transactions on Microwave Theory and Techniques",
      date: "2023年",
      authors: "T. Iwasa, S. Tanabe, et al.",
      impact: "Impact Factor: 4.3"
    },
    {
      title: "Safety Analysis of Wireless Power Transfer for Medical Implants",
      journal: "Nature Biomedical Engineering",
      date: "2023年",
      authors: "S. Tanabe, T. Iwasa, et al.",
      impact: "Impact Factor: 29.2"
    },
    {
      title: "AI-Optimized Multi-Device Wireless Charging System",
      journal: "Science Robotics", 
      date: "2024年",
      authors: "T. Iwasa, H. Shiramizu, et al.",
      impact: "Impact Factor: 25.0"
    }
  ]

  const researchPartners = [
    {
      name: "スタンフォード大学",
      type: "研究機関",
      collaboration: "基礎研究・技術開発",
      logo: "/partners/stanford.png"
    },
    {
      name: "東京大学",
      type: "研究機関", 
      collaboration: "産学連携研究",
      logo: "/partners/todai.png"
    },
    {
      name: "NEDO",
      type: "政府機関",
      collaboration: "研究資金支援",
      logo: "/partners/nedo.png"
    },
    {
      name: "JST",
      type: "政府機関",
      collaboration: "イノベーション支援",
      logo: "/partners/jst.png"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Technology
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            世界を変える革新的なワイヤレス給電技術の詳細
          </p>
        </div>
      </section>

      {/* Core Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              コア技術
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              10年間の研究開発により確立された4つの革新的技術
            </p>
          </div>

          <div className="space-y-16">
            {coreTechnologies.map((tech, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 max-w-7xl mx-auto`}>
                
                {/* Technology Details */}
                <div className="lg:w-1/2">
                  <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                    <div className="flex items-center mb-6">
                      <Icon icon={tech.icon} className="text-4xl text-blue-600 mr-4" />
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{tech.title}</h3>
                        <p className="text-blue-600 font-medium">{tech.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">{tech.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">技術仕様</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {tech.specs.map((spec, idx) => (
                          <div key={idx} className="flex items-center">
                            <Icon icon="mdi:check-circle" className="text-green-600 mr-2 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-2">技術詳細</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{tech.technicalDetails}</p>
                    </div>
                  </div>
                </div>

                {/* Visual/Diagram Placeholder */}
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-8 h-96 flex items-center justify-center">
                    <div className="text-center">
                      <Icon icon={tech.icon} className="text-8xl text-blue-300 mb-4 mx-auto" />
                      <p className="text-gray-500 font-medium">技術図解・デモ動画</p>
                      <p className="text-sm text-gray-400">準備中</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">技術実績</h2>
              <p className="text-slate-300">10年間の研究開発による確かな技術力</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2 text-blue-300">920MHz</div>
                <div className="text-slate-300">ISMバンド使用</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2 text-blue-300">99.9%</div>
                <div className="text-slate-300">システム信頼性</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2 text-blue-300">85%</div>
                <div className="text-slate-300">最大伝送効率</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2 text-blue-300">10年</div>
                <div className="text-slate-300">研究開発期間</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patents */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              特許・知的財産
            </h2>
            <p className="text-xl text-gray-600">
              革新技術を保護する強固な知的財産ポートフォリオ
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {patents.map((patent, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900 flex-1">{patent.title}</h3>
                  <Icon icon="mdi:shield-check" className="text-2xl text-green-600 ml-4" />
                </div>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium text-gray-700">特許番号:</span> {patent.number}</p>
                  <p><span className="font-medium text-gray-700">登録日:</span> {patent.date}</p>
                  <p className="text-gray-600 mt-3">{patent.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Papers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              論文・学術成果
            </h2>
            <p className="text-xl text-gray-600">
              世界トップジャーナルでの研究成果発表
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {papers.map((paper, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{paper.title}</h3>
                    <p className="text-blue-600 font-medium mb-1">{paper.journal}</p>
                    <p className="text-gray-600 text-sm mb-2">{paper.authors}</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-gray-500">{paper.date}</span>
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">{paper.impact}</span>
                    </div>
                  </div>
                  <Icon icon="mdi:school" className="text-2xl text-blue-600 ml-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Partners */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              研究パートナー
            </h2>
            <p className="text-xl text-gray-600">
              世界トップクラスの研究機関との連携
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {researchPartners.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center border border-gray-100">
                <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon icon="mdi:school" className="text-2xl text-gray-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{partner.name}</h3>
                <p className="text-blue-600 text-sm font-medium mb-2">{partner.type}</p>
                <p className="text-gray-600 text-sm">{partner.collaboration}</p>
              </div>
            ))}
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
