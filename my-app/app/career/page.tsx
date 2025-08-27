import { Header } from "@/components/header"
import { Icon } from '@iconify/react'

export default function CareerPage() {
  const careerValues = [
    {
      icon: "mdi:lightbulb-on",
      title: "Vision",
      subtitle: "技術で世界を変える",
      description: "ワイヤレス給電技術で配線のないデジタル社会を実現し、人々の生活をより豊かで持続可能なものにする。"
    },
    {
      icon: "mdi:target",
      title: "Mission", 
      subtitle: "革新を日常に",
      description: "10年の研究開発により確立した技術を社会実装し、医療、建設、製造業で新しい価値を創造する。"
    },
    {
      icon: "mdi:heart",
      title: "Values",
      subtitle: "多様性と協働",
      description: "7ヶ国66名のグローバルチームで、技術革新、持続可能性、協働の価値観を共有する。"
    }
  ]

  const careerFlow = [
    {
      step: "01",
      title: "書類選考",
      description: "履歴書・職務経歴書による書類審査",
      duration: "1週間程度",
      tips: "技術力だけでなく、AETERLINKの価値観への共感を重視します"
    },
    {
      step: "02", 
      title: "一次面接",
      description: "人事・現場メンバーとの面接",
      duration: "1時間程度",
      tips: "これまでの経験と今後のキャリアビジョンについてお聞かせください"
    },
    {
      step: "03",
      title: "技術面接",
      description: "技術責任者との技術的な深掘り面接",
      duration: "1-2時間程度", 
      tips: "実務経験や技術的な課題解決能力を評価します"
    },
    {
      step: "04",
      title: "最終面接",
      description: "経営陣との面接・カルチャーフィット確認",
      duration: "1時間程度",
      tips: "AETERLINKでの成長イメージと相互理解を深めます"
    },
    {
      step: "05",
      title: "内定・入社",
      description: "条件調整後、正式入社",
      duration: "調整後決定",
      tips: "入社後は充実したオンボーディングプログラムをご用意"
    }
  ]

  const benefits = [
    {
      icon: "mdi:school",
      title: "スキルアップ支援",
      description: "学会参加費、技術書購入費、資格取得支援"
    },
    {
      icon: "mdi:clock-time-four",
      title: "柔軟な働き方",
      description: "フレックスタイム、リモートワーク、副業OK"
    },
    {
      icon: "mdi:heart-pulse",
      title: "健康サポート",
      description: "健康診断、メンタルヘルスケア、ジム利用補助"
    },
    {
      icon: "mdi:currency-jpy",
      title: "競争力ある報酬",
      description: "業界トップクラスの給与水準、ストックオプション"
    },
    {
      icon: "mdi:earth",
      title: "グローバル環境",
      description: "7ヶ国籍のチーム、英語学習支援、海外研修"
    },
    {
      icon: "mdi:rocket-launch",
      title: "成長機会",
      description: "裁量権の大きい業務、新技術挑戦、キャリア支援"
    }
  ]

  const faqs = [
    {
      question: "未経験からでも応募できますか？",
      answer: "ポジションによっては未経験からの応募も歓迎しています。特に新卒採用では、技術的な基礎知識と学習意欲を重視しており、入社後の研修プログラムで実務レベルまでサポートします。"
    },
    {
      question: "リモートワークは可能ですか？",
      answer: "基本的にハイブリッドワークを採用しており、週2-3日のオフィス出社を推奨しています。ただし、業務内容や個人の状況に応じて、フルリモートでの勤務も相談可能です。"
    },
    {
      question: "技術的な成長支援はありますか？",
      answer: "年間50万円までの学習支援予算があり、学会参加、技術書購入、オンライン講座受講などに利用できます。また、社内勉強会や技術共有会も定期的に開催しています。"
    },
    {
      question: "国際的な環境で働けますか？",
      answer: "チームメンバーは7ヶ国籍で構成されており、日常的に英語でのコミュニケーションが発生します。海外の研究機関との連携プロジェクトや、国際学会での発表機会もあります。"
    },
    {
      question: "副業は可能ですか？",
      answer: "会社の業務に支障がなく、利益相反がない範囲で副業を認めています。事前申請制で、技術ブログ執筆、講演活動、コンサルティングなど様々な活動が可能です。"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Career
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            世界を変える技術の最前線で、あなたの才能を発揮しませんか
          </p>
          <a
            href="https://herp.careers/v1/aeterlink"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors text-lg"
          >
            <Icon icon="mdi:briefcase" className="mr-2" />
            募集要項を見る
          </a>
        </div>
      </section>

      {/* Adoption Concept */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              採用コンセプト
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              技術で世界を変える。その挑戦を、私たちと一緒に。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {careerValues.map((value, index) => (
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

      {/* Pitch Slide Embed */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              採用ピッチスライド
            </h2>
            <p className="text-lg text-gray-600">
              AETERLINKのビジョン、技術、カルチャーを詳しくご紹介
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-100 rounded-xl p-12 text-center">
              <Icon icon="mdi:presentation" className="text-8xl text-gray-300 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-600 mb-4">採用ピッチスライド</h3>
              <p className="text-gray-500 mb-6">
                AETERLINKの詳細なビジョン、技術、働く環境について<br />
                分かりやすく説明したスライドをご覧いただけます
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                スライドを見る
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              働く環境・福利厚生
            </h2>
            <p className="text-xl text-gray-600">
              メンバーが最高のパフォーマンスを発揮できる環境を整備
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                <Icon icon={benefit.icon} className="text-4xl text-blue-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Flow */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              採用フロー
            </h2>
            <p className="text-xl text-gray-600">
              応募から入社まで、透明で公正な選考プロセス
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {careerFlow.map((flow, index) => (
              <div key={index} className="relative flex items-start mb-12 last:mb-0">
                {/* Timeline Line */}
                {index < careerFlow.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-16 bg-blue-600"></div>
                )}
                
                {/* Step Circle */}
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                  {flow.step}
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{flow.title}</h3>
                    <span className="text-blue-600 text-sm font-medium">{flow.duration}</span>
                  </div>
                  <p className="text-gray-700 mb-3">{flow.description}</p>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-blue-800 text-sm">
                      <Icon icon="mdi:lightbulb" className="inline mr-1" />
                      {flow.tips}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              よくある質問
            </h2>
            <p className="text-xl text-gray-600">
              採用・働く環境についてのよくある質問
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            世界を変える技術の最前線で働きませんか？
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            AETERLINKで、あなたの技術力と情熱を活かし、<br />
            配線のない未来を一緒に創造しましょう
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://herp.careers/v1/aeterlink"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              募集要項を見る
            </a>
            <a
              href="https://note.com/aeterlink_corp"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              カルチャーを知る
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
