import { Icon } from '@iconify/react'

export function TechnologySection() {
  const technologies = [
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
      ]
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
      ]
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
      ]
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
      ]
    }
  ]

  return (
    <section id="technology" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            TECHNOLOGY
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            世界をリードする4つのコア技術で、ワイヤレス給電の新時代を切り拓く
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
              {/* Card Header */}
              <div className="bg-gradient-to-r from-slate-900 to-blue-900 p-6 text-white">
                <div className="flex items-center space-x-4">
                  <Icon icon={tech.icon} className="text-4xl text-blue-300" />
                  <div>
                    <h3 className="text-xl font-bold">{tech.title}</h3>
                    <p className="text-slate-300">{tech.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">{tech.description}</p>
                
                {/* Specs List */}
                <div className="space-y-2">
                  {tech.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 text-white">
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
  )
}
