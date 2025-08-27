import { Header } from "@/components/header"
import { Icon } from '@iconify/react'

export default function BusinessFieldPage() {
  const businessFields = [
    {
      id: "medical",
      icon: "mdi:heart-pulse",
      title: "メディカルインプラント",
      subtitle: "医療の未来を変える体内給電技術",
      description: "体内に埋め込まれたメディカルインプラントへの長距離ワイヤレス給電により、患者の負担を大幅に軽減し、医療の質を向上させます。",
      features: [
        "20cm深部への安全な給電",
        "生体適合性を考慮した設計",
        "バッテリー交換手術の不要化",
        "24時間継続的な電力供給"
      ],
      benefits: [
        "患者の身体的負担軽減",
        "医療費の大幅削減",
        "治療効果の向上",
        "QOL（生活の質）の改善"
      ],
      applications: [
        "心臓ペースメーカー",
        "除細動器（ICD）",
        "脳深部刺激装置（DBS）",
        "人工内耳"
      ],
      image: "/sensor04.jpg"
    },
    {
      id: "building",
      icon: "mdi:office-building",
      title: "ビルマネジメント",
      subtitle: "スマートビルディングの実現",
      description: "オフィスビルでのIoTセンサーへのワイヤレス給電により、完全メンテナンスフリーのスマートビル環境を構築します。",
      features: [
        "100台同時給電対応",
        "20m長距離伝送",
        "メンテナンスフリー運用",
        "リアルタイム環境監視"
      ],
      benefits: [
        "運用コスト削減",
        "エネルギー効率向上",
        "快適な労働環境の実現",
        "持続可能な建物運用"
      ],
      applications: [
        "温湿度センサー",
        "CO2濃度センサー",
        "人感センサー",
        "照明制御システム"
      ],
      image: "/sensor02.jpg"
    },
    {
      id: "factory",
      icon: "mdi:factory",
      title: "Factory Automation",
      subtitle: "製造業のDX推進",
      description: "工場内の多数のIoTデバイスやロボットへのワイヤレス給電により、柔軟で効率的な生産ラインを実現します。",
      features: [
        "過酷な環境での安定動作",
        "移動ロボットへの給電",
        "大規模センサーネットワーク",
        "予知保全システム連携"
      ],
      benefits: [
        "生産効率の向上",
        "ダウンタイムの削減",
        "品質管理の高度化",
        "作業安全性の向上"
      ],
      applications: [
        "AGV（無人搬送車）",
        "産業用ロボット",
        "製造ラインセンサー",
        "在庫管理システム"
      ],
      image: "/sensor03.jpg"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Business Field
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            3つの重要領域でワイヤレス給電技術の革新的活用を推進
          </p>
        </div>
      </section>

      {/* Business Fields Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              事業領域概要
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AETERLINKは、医療、建設、製造業の3つの重要な分野で<br />
              ワイヤレス給電技術による革新的ソリューションを提供しています
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {businessFields.map((field, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition-shadow">
                <Icon icon={field.icon} className="text-5xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{field.title}</h3>
                <p className="text-blue-600 font-medium mb-3">{field.subtitle}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{field.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Business Fields */}
      {businessFields.map((field, index) => (
        <section key={field.id} className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4">
            <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 max-w-7xl mx-auto`}>
              
              {/* Image */}
              <div className="lg:w-1/2">
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src={field.image} 
                    alt={field.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <Icon icon={field.icon} className="text-4xl mb-2" />
                    <h3 className="text-2xl font-bold">{field.title}</h3>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{field.title}</h3>
                  <p className="text-xl text-blue-600 font-medium mb-4">{field.subtitle}</p>
                  <p className="text-gray-700 text-lg leading-relaxed">{field.description}</p>
                </div>

                {/* Features & Benefits */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Technical Features */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4">技術特徴</h4>
                    <ul className="space-y-2">
                      {field.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Icon icon="mdi:check-circle" className="text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4">導入効果</h4>
                    <ul className="space-y-2">
                      {field.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <Icon icon="mdi:trending-up" className="text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Applications */}
                <div className="mt-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">適用分野</h4>
                  <div className="flex flex-wrap gap-2">
                    {field.applications.map((app, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            あなたの事業でもワイヤレス給電を始めませんか？
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            AETERLINKの技術があなたの業界にどのような革新をもたらすか、<br />
            専門スタッフがご相談に応じます
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              技術相談を申し込む
            </a>
            <a 
              href="/technology" 
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              技術詳細を見る
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
