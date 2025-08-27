import { Header } from "@/components/header"
import { Icon } from '@iconify/react'

export default function ContactPage() {
  const contactMethods = [
    {
      icon: "mdi:flask",
      title: "技術相談",
      description: "ワイヤレス給電技術の詳細や導入可能性について、技術専門スタッフがご相談に応じます。",
      action: "技術相談を申し込む",
      color: "blue"
    },
    {
      icon: "mdi:monitor-dashboard",
      title: "デモンストレーション",
      description: "実際のAirPlug™システムをご覧いただき、ワイヤレス給電技術の効果を体感してください。",
      action: "デモを予約する",
      color: "blue"
    },
    {
      icon: "mdi:file-document",
      title: "資料ダウンロード",
      description: "技術仕様書、導入事例、ROI試算などの詳細資料をダウンロードいただけます。",
      action: "資料をダウンロード",
      color: "blue"
    }
  ]

  const whitepapers = [
    {
      title: "ワイヤレス給電技術の基礎と応用",
      description: "AirPlug™の技術原理から実用化まで、包括的に解説した技術資料",
      pages: "24ページ",
      format: "PDF",
      icon: "mdi:file-pdf-box"
    },
    {
      title: "医療分野でのワイヤレス給電活用ガイド",
      description: "メディカルインプラント向け給電システムの安全性と有効性",
      pages: "16ページ",
      format: "PDF", 
      icon: "mdi:file-pdf-box"
    },
    {
      title: "スマートビルディング実装事例集",
      description: "オフィスビル、商業施設での導入事例とROI分析",
      pages: "20ページ",
      format: "PDF",
      icon: "mdi:file-pdf-box"
    },
    {
      title: "Factory Automation向けソリューション",
      description: "製造業での生産性向上と効率化を実現するワイヤレス給電",
      pages: "18ページ",
      format: "PDF",
      icon: "mdi:file-pdf-box"
    }
  ]

  const companyInfo = [
    { label: "会社名", value: "AETERLINK株式会社" },
    { label: "代表取締役", value: "岩佐 琢磨" },
    { label: "設立", value: "2018年" },
    { label: "本社", value: "〒100-0000 東京都千代田区XXX" },
    { label: "従業員数", value: "66名（2024年12月現在）" },
    { label: "事業内容", value: "ワイヤレス給電システムの開発・製造・販売" },
    { label: "累計資金調達額", value: "68億円" },
    { label: "主要技術", value: "長距離ワイヤレス給電、マルチデバイス同時給電、AI制御システム" }
  ]

  const officeLocations = [
    {
      name: "東京本社",
      address: "〒100-0000 東京都千代田区XXX",
      phone: "03-XXXX-XXXX",
      email: "info@aeterlink.co.jp",
      access: "JR東京駅から徒歩5分"
    },
    {
      name: "研究開発センター",
      address: "〒XXX-XXXX 神奈川県横浜市XXX",
      phone: "045-XXXX-XXXX", 
      email: "rd@aeterlink.co.jp",
      access: "みなとみらい線XXX駅から徒歩3分"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Contact
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            お気軽にお問い合わせください。専門スタッフが対応いたします
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              お問い合わせ方法
            </h2>
            <p className="text-xl text-gray-600">
              目的に応じて最適なお問い合わせ方法をお選びください
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon icon={method.icon} className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{method.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{method.description}</p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors">
                  {method.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Whitepaper Download */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ホワイトペーパー・資料ダウンロード
            </h2>
            <p className="text-xl text-gray-600">
              技術詳細、導入事例、ROI分析などの詳細資料を無料でダウンロード
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {whitepapers.map((paper, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="flex items-start space-x-4">
                  <Icon icon={paper.icon} className="text-3xl text-red-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{paper.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{paper.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span>{paper.pages}</span>
                        <span>{paper.format}</span>
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        ダウンロード
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                お問い合わせフォーム
              </h2>
              <p className="text-lg text-gray-600">
                下記フォームからお気軽にお問い合わせください
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="山田 太郎"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      会社名 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="株式会社○○○"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="contact@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      電話番号
                    </label>
                    <input
                      type="tel"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="03-1234-5678"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    お問い合わせ項目 <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    title="お問い合わせ項目を選択してください"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">選択してください</option>
                    <option value="tech">技術相談</option>
                    <option value="demo">デモンストレーション依頼</option>
                    <option value="materials">資料請求</option>
                    <option value="partnership">パートナーシップ</option>
                    <option value="investment">投資関連</option>
                    <option value="media">メディア取材</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    お問い合わせ内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="具体的なご相談内容をお聞かせください"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                  >
                    送信する
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              会社概要
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8">
              <table className="w-full">
                <tbody>
                  {companyInfo.map((info, index) => (
                    <tr key={index} className="border-b border-gray-200 last:border-b-0">
                      <td className="py-4 pr-8 font-medium text-gray-700 w-1/3">{info.label}</td>
                      <td className="py-4 text-gray-900">{info.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              オフィス所在地
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {officeLocations.map((office, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{office.name}</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon icon="mdi:map-marker" className="text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700">{office.address}</p>
                      <p className="text-gray-500 text-sm mt-1">{office.access}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon icon="mdi:phone" className="text-blue-600 flex-shrink-0" />
                    <p className="text-gray-700">{office.phone}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon icon="mdi:email" className="text-blue-600 flex-shrink-0" />
                    <p className="text-gray-700">{office.email}</p>
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
