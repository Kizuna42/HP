import { Icon } from '@iconify/react'

export function CompanySection() {
  const advantages = [
    {
      number: "01",
      icon: "mdi:school",
      title: "スタンフォード発の技術力",
      description: "10年の研究開発により、世界初の実用レベル技術を確立。学術的裏付けと実証実験による確実性。"
    },
    {
      number: "02", 
      icon: "mdi:trophy",
      title: "実績による信頼性",
      description: "68億円の累計調達、J-Startup選定、黒字化達成。確実な事業基盤による長期パートナーシップ。"
    },
    {
      number: "03",
      icon: "mdi:domain", 
      title: "マルチドメイン展開",
      description: "FA、IoT、メディカルの3領域同時展開。業界横断の知見による最適ソリューション提供。"
    },
    {
      number: "04",
      icon: "mdi:flask",
      title: "継続的イノベーション", 
      description: "7ヶ国籍66名のグローバルチーム。継続的なR&Dによる技術的優位性の維持。"
    }
  ]

  const stats = [
    { value: "68億円", label: "累計資金調達額", description: "確実な事業基盤" },
    { value: "66名", label: "グローバルチーム", description: "7ヶ国籍の多様性" },
    { value: "10年", label: "研究開発期間", description: "スタンフォード大学発" },
    { value: "3領域", label: "事業展開分野", description: "FA・IoT・メディカル" }
  ]

  return (
    <section id="company" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            COMPANY
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            エイターリンクが選ばれる理由と企業としての信頼性
          </p>
        </div>

        {/* Company Overview */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <img src="/ALロゴ/blue.png" alt="Aeterlink Logo" className="h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">エイターリンク株式会社</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                スタンフォード大学発のワイヤレス給電技術により、配線のないデジタル社会「Zero-Wiring Society」の実現を目指しています。
                世界初の実用レベル技術AirPlug™で、産業革命レベルのインフラ変革を推進する技術カンパニーです。
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <h4 className="text-xl font-bold text-blue-900 mb-3">ミッション</h4>
                <p className="text-gray-700">ワイヤレス給電で配線のないデジタル世界を実現する</p>
              </div>
              <div className="text-center p-6 bg-emerald-50 rounded-lg">
                <h4 className="text-xl font-bold text-emerald-900 mb-3">ビジョン</h4>
                <p className="text-gray-700">人間中心の究極的デジタル社会にブレイクスルーを起こす</p>
              </div>
            </div>
          </div>
        </div>

        {/* Company Stats */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-blue-300">{stat.value}</div>
                  <div className="text-lg font-medium mb-1">{stat.label}</div>
                  <div className="text-sm opacity-80">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Competitive Advantages */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">競合優位性</h3>
            <p className="text-lg text-gray-600">エイターリンクが選ばれる4つの理由</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {advantages.map((advantage, index) => (
              <div key={index} className="relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Number Badge */}
                <div className="absolute top-4 right-4 text-6xl font-bold text-gray-100">
                  {advantage.number}
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <Icon icon={advantage.icon} className="text-4xl mb-4 text-blue-600" />
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h4>
                  <p className="text-gray-700 leading-relaxed">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Awards */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">認定・受賞歴</h3>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">J-Startup</div>
              <div className="text-sm text-gray-600">選定企業</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">知財功労賞</div>
              <div className="text-sm text-gray-600">特許庁長官表彰</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">FCC認証</div>
              <div className="text-sm text-gray-600">米国連邦通信委員会</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">CE認証</div>
              <div className="text-sm text-gray-600">欧州適合性評価</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
