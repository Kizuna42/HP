export function SolutionsSection() {
  const solutions = [
    {
      image: "/powerTX02.jpg",
      title: "オフィスビル",
      subtitle: "ビルの消費電力の8割が空調・照明関連",
      description: "AirPlug™は空調・照明連携により、ビルユーザーの快適性を維持しながら、ビルの電気代削減・CO2削減を実現。また、バッテリー交換コストを無くします。",
      benefits: [
        "電気代削減効果",
        "CO2排出量削減", 
        "バッテリー交換コスト削減",
        "ユーザー快適性維持"
      ],
      bgColor: "from-slate-900 to-blue-900"
    },
    {
      image: "/sensor03.jpg",
      title: "物流倉庫",
      subtitle: "デジタルでもリアルでも重要なサプライチェーンの結節点",
      description: "あらゆるロボットが駆け回り、倉庫管理を無人で複数管理する未来の物流倉庫。ワイヤレス給電AirPlug™はそんな未来の倉庫で、分散化された貨物IDを取得。リアル情報をデジタルに再現するセンサーシステムを駆動します。",
      benefits: [
        "無人倉庫管理対応",
        "貨物ID自動取得",
        "リアルタイム在庫管理",
        "ロボット連携最適化"
      ],
      bgColor: "from-slate-900 to-blue-900"
    },
    {
      image: "/sensor06.jpg",
      title: "商業施設",
      subtitle: "お客様の動線がよりクリアに予測される施設",
      description: "ワイヤレス給電AirPlug™が入った商業施設では、お客様の動線がよりクリアに予測され、より自然にレコメンドが実施されます。AirPlug™対応のダイナミックプライシングタグが、その時時に必要なお客様の属性情報、商品を理解し、適正価格を提示します。",
      benefits: [
        "顧客動線予測精度向上",
        "自然なレコメンド実施",
        "ダイナミックプライシング",
        "持続可能な経済活動支援"
      ],
      bgColor: "from-slate-900 to-blue-900"
    },
    {
      image: "/sensor04.jpg",
      title: "ホスピタリティ施設",
      subtitle: "入居者様が健やかに自分らしく安心して暮らす",
      description: "長距離ワイヤレス給電AirPlug™によりワイヤレスで給電された、体内に装着されたバイオメディカルインプラントによるバイタルチェックを、ワイヤレスで確認することができ、しかも施設管理メンテナンスレスで実現することが可能です。",
      benefits: [
        "バイタルチェック自動化",
        "メンテナンスフリー運用",
        "入居者負担ゼロ",
        "健康状態リアルタイム監視"
      ],
      bgColor: "from-slate-900 to-blue-900"
    }
  ]

  return (
    <section id="solutions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            SOLUTION
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            あらゆる空間を無制限に。リアル空間をデジタル化する AirPlug™
          </p>
        </div>

        {/* Hero Message */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            WIRELESS IS MORE
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            ビルのデジタル化の要となるのは、リアル空間の情報をオンラインで常時センシングするセンサーです。<br />
            空間伝送型ワイヤレス給電ソリューションAirPlug™は、あらゆるデジタル信号を処理するセンサーをワイヤレスで駆動。<br />
            今までの制約を飛び越えて、リアル空間とデジタル世界の真の常時接続を実現します。
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <div key={index} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
              {/* Solution Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={solution.image} 
                  alt={solution.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${solution.bgColor} opacity-85`}></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-bold mb-2">{solution.title}</h3>
                  <p className="text-lg opacity-90">{solution.subtitle}</p>
                </div>
              </div>

              {/* Solution Content */}
              <div className="p-8">
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">{solution.description}</p>
                
                {/* Benefits List */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">主な効果・メリット</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-300">
                  {solution.title}の詳細を見る
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* System Configuration */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">AirPlug™システム構成</h3>
            <p className="text-lg text-gray-600">
              AirPlugシステムはSumit™により、IoTセンシングデータ（AirPlug™ Sense）を集約し、<br />
              クラウドまたはゲートウェイを通じてお客様のビル管理システムに連携します。
            </p>
          </div>

          {/* System Diagram */}
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-5xl mx-auto border border-gray-100">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Sensing Layer */}
              <div className="text-center">
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-200">
                  <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">センシング層</h4>
                <p className="text-sm text-gray-600">AirPlug™ Sense各種センサーがリアル空間の情報を収集</p>
              </div>

              {/* Aggregation Layer */}
              <div className="text-center">
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-200">
                  <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">集約・処理層</h4>
                <p className="text-sm text-gray-600">Sumit™がデータを集約・処理してクラウドに送信</p>
              </div>

              {/* Management Layer */}
              <div className="text-center">
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-200">
                  <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">管理・制御層</h4>
                <p className="text-sm text-gray-600">ビル管理システムと連携してスマート制御を実現</p>
              </div>
            </div>

            {/* Flow Arrows */}
            <div className="hidden md:block">
              <div className="flex justify-center items-center mt-8 space-x-8">
                <div className="flex-1 h-0.5 bg-blue-600"></div>
                <div className="text-blue-600 text-xl">→</div>
                <div className="flex-1 h-0.5 bg-blue-600"></div>
                <div className="text-blue-600 text-xl">→</div>
                <div className="w-16"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
