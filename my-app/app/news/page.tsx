"use client"

import { Header } from "@/components/header"
import { Icon } from '@iconify/react'
import { useState } from 'react'

// サンプルニュースデータ
const newsData = [
  {
    id: 1,
    title: "AETERLINK、シリーズC調達完了により68億円の累計資金調達を達成",
    category: "プレスリリース",
    date: "2024-12-15",
    year: 2024,
    excerpt: "スタンフォード大学発のワイヤレス給電技術で世界を変えるAETERLINKが、シリーズC調達を完了し、累計68億円の資金調達を達成しました。",
    image: "/news/press-2024-12.jpg",
    tags: ["資金調達", "シリーズC", "成長戦略"]
  },
  {
    id: 2,
    title: "AirPlug™システム、医療機器認証取得により医療分野への本格展開開始",
    category: "プレスリリース", 
    date: "2024-11-20",
    year: 2024,
    excerpt: "世界初の長距離ワイヤレス給電技術AirPlug™が医療機器認証を取得し、メディカルインプラント分野への本格的な事業展開を開始します。",
    image: "/news/medical-2024-11.jpg",
    tags: ["医療機器認証", "AirPlug", "メディカル"]
  },
  {
    id: 3,
    title: "日経新聞「次世代技術を牽引するスタートアップ50選」に選出",
    category: "メディア掲載",
    date: "2024-10-10",
    year: 2024,
    excerpt: "日本経済新聞が発表する「次世代技術を牽引するスタートアップ50選」にAETERLINKが選出されました。",
    image: "/news/media-nikkei-2024.jpg",
    tags: ["日経新聞", "スタートアップ", "認知度向上"]
  },
  {
    id: 4,
    title: "Nature Biomedical Engineering誌に体内給電技術の研究成果を発表",
    category: "特許・論文",
    date: "2024-09-05",
    year: 2024,
    excerpt: "医療インプラント向けワイヤレス給電技術の安全性に関する研究成果が、世界トップクラスの学術誌に掲載されました。",
    image: "/news/paper-nature-2024.jpg",
    tags: ["Nature", "論文発表", "学術成果"]
  },
  {
    id: 5,
    title: "AETERLINK、J-Startup IMPACT選定企業として政府支援プログラムに参加",
    category: "プレスリリース",
    date: "2023-12-01", 
    year: 2023,
    excerpt: "経済産業省が推進するJ-Startup IMPACTプログラムの選定企業として、政府からの本格的な支援を受けることが決定しました。",
    image: "/news/j-startup-2023.jpg",
    tags: ["J-Startup", "政府支援", "IMPACT"]
  },
  {
    id: 6,
    title: "IEEE Transactions誌でワイヤレス給電技術の基礎研究論文が高評価",
    category: "特許・論文",
    date: "2023-08-15",
    year: 2023,
    excerpt: "国際的に権威あるIEEE学会誌において、長距離ワイヤレス給電の基礎技術に関する論文が掲載され、高い評価を獲得しました。",
    image: "/news/ieee-paper-2023.jpg",
    tags: ["IEEE", "基礎研究", "国際評価"]
  }
]

const categories = ["全て", "プレスリリース", "メディア掲載", "特許・論文"]
const years = [2024, 2023, 2022, 2021]

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("全て")
  const [selectedYear, setSelectedYear] = useState<number | "全て">("全て")

  // フィルタリング
  const filteredNews = newsData.filter(news => {
    const categoryMatch = selectedCategory === "全て" || news.category === selectedCategory
    const yearMatch = selectedYear === "全て" || news.year === selectedYear
    return categoryMatch && yearMatch
  })

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            News
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            AETERLINKの最新情報、メディア掲載、研究成果をお届けします
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            
            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Icon icon="mdi:filter" className="text-gray-600" />
              <span className="text-gray-700 font-medium">カテゴリー:</span>
              <div className="flex space-x-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Year Filter */}
            <div className="flex items-center space-x-2">
              <Icon icon="mdi:calendar" className="text-gray-600" />
              <span className="text-gray-700 font-medium">年度:</span>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value === "全て" ? "全て" : parseInt(e.target.value))}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="全て">全て</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}年</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {filteredNews.length === 0 ? (
            <div className="text-center py-16">
              <Icon icon="mdi:newspaper-variant-outline" className="text-6xl text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">該当するニュースが見つかりませんでした。</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map(news => (
                <article key={news.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  
                  {/* News Image */}
                  <div className="relative h-48 bg-gray-200">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        news.category === 'プレスリリース' 
                          ? 'bg-blue-100 text-blue-800'
                          : news.category === 'メディア掲載'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-purple-100 text-purple-800'
                      }`}>
                        {news.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm opacity-90">{news.date}</p>
                    </div>
                  </div>

                  {/* News Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                      {news.excerpt}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {news.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More */}
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                      詳細を見る
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {filteredNews.length > 0 && (
            <div className="text-center mt-12">
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-medium transition-colors">
                さらに読み込む
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <Icon icon="mdi:email-newsletter" className="text-5xl text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              最新情報をお届け
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              AETERLINKの最新ニュース、技術情報、イベント情報を<br />
              いち早くお届けするニュースレターにご登録ください
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="メールアドレスを入力"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-r-lg font-medium transition-colors">
                登録
              </button>
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
