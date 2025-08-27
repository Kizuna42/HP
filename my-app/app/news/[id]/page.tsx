import { Header } from "@/components/header"
import { Icon } from '@iconify/react'

// サンプルニュース詳細データ
const newsDetail = {
  id: 1,
  title: "AETERLINK、シリーズC調達完了により68億円の累計資金調達を達成",
  category: "プレスリリース",
  date: "2024-12-15",
  author: "AETERLINK 広報部",
  image: "/news/press-2024-12.jpg",
  tags: ["資金調達", "シリーズC", "成長戦略", "グローバル展開"],
  content: `
スタンフォード大学発のワイヤレス給電技術で世界を変えるAETERLINK株式会社（本社：東京都、代表取締役CEO：岩佐琢磨）は、本日、シリーズC調達を完了し、累計68億円の資金調達を達成したことを発表いたします。

## 調達の背景と目的

今回の資金調達は、世界初の長距離ワイヤレス給電技術「AirPlug™」の本格的な商用化とグローバル展開を加速するために実施いたしました。特に以下の分野での事業拡大を予定しています：

### 1. 医療分野での事業拡大
- メディカルインプラント向けワイヤレス給電システムの量産体制構築
- 医療機器認証の取得とグローバル医療機関との連携強化
- 患者負担軽減と医療費削減を実現する革新的ソリューションの提供

### 2. スマートビル市場への本格参入
- オフィスビル、商業施設、ホテル等でのIoTセンサー給電システム導入拡大
- 建設・不動産業界との戦略的パートナーシップ構築
- メンテナンスフリーなスマートビルディング実現

### 3. 製造業DX支援の強化
- Factory Automation分野でのワイヤレス給電ソリューション展開
- 製造ラインの柔軟性向上と効率化支援
- 予知保全システムとの連携による生産性向上

## 代表取締役CEO 岩佐琢磨のコメント

「今回の資金調達により、AETERLINKは次の成長ステージに向けた強固な基盤を構築することができました。10年間の研究開発により確立したワイヤレス給電技術を、医療、建設、製造業の各分野で社会実装し、人々の生活をより豊かで持続可能なものにしてまいります。

特に医療分野では、体内インプラントへの給電により患者様の負担を大幅に軽減できる技術の実用化が目前に迫っており、世界中の患者様に新しい価値を提供できることを確信しています。」

## 今後の展開

AETERLINKは今回調達した資金を活用し、以下の取り組みを加速してまいります：

- **研究開発体制の強化**: エンジニア採用を加速し、次世代技術の開発を推進
- **量産体制の構築**: 製造パートナーとの連携により大規模生産体制を確立
- **グローバル展開**: アジア、北米、欧州市場での事業展開を本格化
- **戦略的パートナーシップ**: 各業界のリーディングカンパニーとの連携強化

## AETERLINKについて

AETERLINK株式会社は、スタンフォード大学での10年間の研究開発を経て2018年に設立された、ワイヤレス給電技術のリーディングカンパニーです。世界初の20m長距離ワイヤレス給電技術「AirPlug™」により、配線のないデジタル社会の実現を目指しています。

- **設立**: 2018年
- **本社**: 東京都
- **従業員数**: 66名（7ヶ国籍）
- **累計資金調達額**: 68億円
- **主要技術**: 長距離ワイヤレス給電、マルチデバイス同時給電、AI制御システム

## 本件に関するお問い合わせ

AETERLINK株式会社 広報部  
Email: press@aeterlink.co.jp  
Tel: 03-xxxx-xxxx

※本プレスリリースに記載された情報は発表日現在のものです。その後予告なしに変更されることがありますので、あらかじめご了承ください。
  `
}

const relatedNews = [
  {
    id: 2,
    title: "AirPlug™システム、医療機器認証取得により医療分野への本格展開開始",
    category: "プレスリリース",
    date: "2024-11-20",
    image: "/news/medical-2024-11.jpg"
  },
  {
    id: 5,
    title: "AETERLINK、J-Startup IMPACT選定企業として政府支援プログラムに参加",
    category: "プレスリリース", 
    date: "2023-12-01",
    image: "/news/j-startup-2023.jpg"
  }
]

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Breadcrumb */}
      <section className="pt-24 pb-4 bg-gray-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <a href="/" className="hover:text-blue-600">トップ</a>
            <Icon icon="mdi:chevron-right" className="text-gray-400" />
            <a href="/news" className="hover:text-blue-600">ニュース</a>
            <Icon icon="mdi:chevron-right" className="text-gray-400" />
            <span className="text-gray-900">詳細</span>
          </nav>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {newsDetail.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {newsDetail.title}
            </h1>
            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <Icon icon="mdi:calendar" className="text-gray-400" />
                <span>{newsDetail.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon icon="mdi:account" className="text-gray-400" />
                <span>{newsDetail.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Featured Image */}
            <div className="mb-8">
              <div className="w-full h-64 md:h-96 bg-gray-200 rounded-xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-50 to-slate-50 flex items-center justify-center">
                  <div className="text-center">
                    <Icon icon="mdi:image" className="text-6xl text-gray-300 mb-2" />
                    <p className="text-gray-400">ニュース画像</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed space-y-6">
                {newsDetail.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    )
                  } else if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={index} className="text-xl font-bold text-gray-900 mt-6 mb-3">
                        {paragraph.replace('### ', '')}
                      </h3>
                    )
                  } else if (paragraph.startsWith('- **')) {
                    return (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg my-4">
                        <p className="text-gray-700">{paragraph}</p>
                      </div>
                    )
                  } else {
                    return (
                      <p key={index} className="text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    )
                  }
                })}
              </div>
            </div>

            {/* Tags */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="text-lg font-bold text-gray-900 mb-4">タグ</h4>
              <div className="flex flex-wrap gap-2">
                {newsDetail.tags.map(tag => (
                  <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share Buttons */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="text-lg font-bold text-gray-900 mb-4">シェア</h4>
              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <Icon icon="mdi:twitter" />
                  <span>Twitter</span>
                </button>
                <button className="flex items-center space-x-2 bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors">
                  <Icon icon="mdi:facebook" />
                  <span>Facebook</span>
                </button>
                <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  <Icon icon="mdi:linkedin" />
                  <span>LinkedIn</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related News */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              関連ニュース
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedNews.map(news => (
                <a
                  key={news.id}
                  href={`/news/${news.id}`}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                        {news.category}
                      </span>
                      <span className="text-gray-500 text-sm">{news.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 line-clamp-2">
                      {news.title}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <a
                href="/news"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <Icon icon="mdi:arrow-left" className="mr-2" />
                ニュース一覧に戻る
              </a>
            </div>
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
