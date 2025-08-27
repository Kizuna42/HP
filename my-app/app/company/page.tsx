import { Header } from "@/components/header"
import { Icon } from '@iconify/react'

export default function CompanyPage() {
  const executives = [
    {
      name: "岩佐 琢磨",
      role: "代表取締役CEO",
      image: "/team/iwasa.jpg", // プレースホルダー
      message: "ワイヤレス給電技術で、配線のない未来を創造します。私たちの技術が、世界中の人々の生活をより豊かで持続可能なものにすることを確信しています。",
      background: "スタンフォード大学博士課程修了。10年間のワイヤレス給電研究を経て、AETERLINKを設立。"
    },
    {
      name: "田邊 聡",
      role: "取締役CTO",
      image: "/team/tanabe.jpg", // プレースホルダー
      message: "革新的な技術と実用性を両立させることで、真に社会に貢献できる製品を開発しています。技術の力で世界を変えていきましょう。",
      background: "東京大学博士課程修了。無線通信・電力エレクトロニクス分野の専門家として技術開発を牽引。"
    },
    {
      name: "白水 尚久",
      role: "取締役CFO",
      image: "/team/shiramizu.jpg", // プレースホルダー
      message: "持続可能な成長を支える強固な財務基盤を構築し、技術革新と事業成長の両立を実現しています。",
      background: "外資系投資銀行を経て、複数のスタートアップでCFOを歴任。資金調達・IPO支援の専門家。"
    }
  ]

  const teamStats = [
    { value: "66名", label: "グローバルチーム", description: "7ヶ国籍の多様性" },
    { value: "7カ国", label: "国籍数", description: "多様な文化・視点" },
    { value: "68億円", label: "累計資金調達額", description: "確実な事業基盤" },
    { value: "10年", label: "研究開発期間", description: "スタンフォード発" }
  ]

  const companyInfo = [
    { label: "会社名", value: "AETERLINK株式会社" },
    { label: "設立", value: "2018年" },
    { label: "本社", value: "東京都" },
    { label: "事業内容", value: "ワイヤレス給電システムの開発・製造・販売" },
    { label: "従業員数", value: "66名（2024年12月現在）" },
    { label: "資本金", value: "68億円（累計調達額）" }
  ]

  const faqs = [
    {
      question: "AETERLINKの技術の特徴は何ですか？",
      answer: "世界初の20m長距離ワイヤレス給電技術を実用化しており、角度に依存しない安定した電力伝送が可能です。また、100台同時給電にも対応しています。"
    },
    {
      question: "どのような業界での活用が想定されますか？",
      answer: "オフィスビル、物流倉庫、商業施設、医療分野など幅広い業界での活用を想定しています。特にIoTセンサーやメディカルインプラントへの給電で革新的な価値を提供します。"
    },
    {
      question: "安全性はどのように確保されていますか？",
      answer: "FCC・CE認証を取得済みで、国際安全基準をクリアしています。特に医療分野では、生体適合性を考慮した設計により、安全で効率的な体内給電を実現しています。"
    },
    {
      question: "今後の事業展開について教えてください。",
      answer: "2025年からグローバル展開を本格化し、世界各地でワイヤレス給電インフラの普及を進めます。特にアジア・北米・欧州市場での展開を計画しています。"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Company
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            技術革新で世界を変える、私たちのチームと企業情報
          </p>
        </div>
      </section>

      {/* Executive Messages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              経営陣メッセージ
            </h2>
            <p className="text-xl text-gray-600">
              リーダーシップチームからのメッセージ
            </p>
          </div>

          <div className="space-y-16">
            {executives.map((exec, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 max-w-6xl mx-auto`}>
                {/* Image */}
                <div className="lg:w-1/3">
                  <div className="w-64 h-64 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
                    <Icon icon="mdi:account" className="text-6xl text-gray-400" />
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:w-2/3 ${index % 2 === 0 ? 'lg:text-left' : 'lg:text-left'} text-center lg:text-left`}>
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{exec.name}</h3>
                    <p className="text-blue-600 font-medium text-lg">{exec.role}</p>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    "{exec.message}"
                  </p>
                  <p className="text-gray-600">
                    {exec.background}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              グローバルチーム
            </h2>
            <p className="text-xl text-gray-600">
              多様性と専門性を兼ね備えたチーム
            </p>
          </div>

          <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {teamStats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-blue-300">{stat.value}</div>
                  <div className="text-lg font-medium mb-1">{stat.label}</div>
                  <div className="text-sm opacity-80">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              会社概要
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="p-8">
                <table className="w-full">
                  <tbody>
                    {companyInfo.map((info, index) => (
                      <tr key={index} className="border-b border-gray-100 last:border-b-0">
                        <td className="py-4 pr-8 font-medium text-gray-700 w-1/3">{info.label}</td>
                        <td className="py-4 text-gray-900">{info.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              よくある質問
            </h2>
            <p className="text-xl text-gray-600">
              AETERLINKについてのよくある質問
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg border border-gray-100">
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                      Q
                    </span>
                    {faq.question}
                  </h3>
                  <div className="ml-9">
                    <p className="text-gray-700 leading-relaxed">
                      <span className="font-medium text-blue-600">A. </span>
                      {faq.answer}
                    </p>
                  </div>
                </div>
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
