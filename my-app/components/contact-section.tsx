export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            CONTACT
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            未来のワイヤレス社会を、今から。<br />
            AirPlug™で、あなたのビジネスを次のステージへ
          </p>
        </div>

        {/* PRE-ORDER & INFO Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">PRE-ORDER & INFO</h3>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto mb-12">
            {/* PowerTx Products */}
            <div className="bg-white/5 backdrop-blur-sm border border-blue-500/30 rounded-lg p-4 text-center text-white hover:bg-white/10 transition-colors">
              <div className="text-lg font-bold mb-2">PowerTx-C</div>
              <div className="text-sm mb-3 opacity-90">AirPlug™ PowerTx-C</div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded text-sm w-full transition-colors">
                SEE MORE
              </button>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-blue-500/30 rounded-lg p-4 text-center text-white hover:bg-white/10 transition-colors">
              <div className="text-lg font-bold mb-2">PowerTx-D</div>
              <div className="text-sm mb-3 opacity-90">AirPlug™ PowerTx-D</div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded text-sm w-full transition-colors">
                SEE MORE
              </button>
            </div>

            {/* Receiving Devices */}
            <div className="bg-white/5 backdrop-blur-sm border border-blue-500/30 rounded-lg p-4 text-center text-white hover:bg-white/10 transition-colors">
              <div className="text-lg font-bold mb-2">Beacon</div>
              <div className="text-sm mb-3 opacity-90">AirPlug™ Beacon</div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded text-sm w-full transition-colors">
                SEE MORE
              </button>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-blue-500/30 rounded-lg p-4 text-center text-white hover:bg-white/10 transition-colors">
              <div className="text-lg font-bold mb-2">Sense-T</div>
              <div className="text-sm mb-3 opacity-90">AirPlug™ Sense-T</div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded text-sm w-full transition-colors">
                SEE MORE
              </button>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-blue-500/30 rounded-lg p-4 text-center text-white hover:bg-white/10 transition-colors">
              <div className="text-lg font-bold mb-2">Sense-M</div>
              <div className="text-sm mb-3 opacity-90">AirPlug™ Sense-M</div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded text-sm w-full transition-colors">
                SEE MORE
              </button>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-blue-500/30 rounded-lg p-4 text-center text-white hover:bg-white/10 transition-colors">
              <div className="text-lg font-bold mb-2">Sense-C</div>
              <div className="text-sm mb-3 opacity-90">AirPlug™ Sense-C</div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded text-sm w-full transition-colors">
                SEE MORE
              </button>
            </div>
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {/* Technical Consultation */}
          <div className="bg-white/5 backdrop-blur-sm border border-blue-500/30 rounded-xl p-8 text-center text-white hover:bg-white/10 transition-colors">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
            <h3 className="text-xl font-bold mb-3">技術相談</h3>
            <p className="text-sm opacity-90 mb-6">
              ワイヤレス給電技術の詳細や導入可能性について、技術専門スタッフがご相談に応じます。
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors w-full">
              技術相談を申し込む
            </button>
          </div>

          {/* Demo Request */}
          <div className="bg-white/5 backdrop-blur-sm border border-blue-500/30 rounded-xl p-8 text-center text-white hover:bg-white/10 transition-colors">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
            <h3 className="text-xl font-bold mb-3">デモンストレーション</h3>
            <p className="text-sm opacity-90 mb-6">
              実際のAirPlug™システムをご覧いただき、ワイヤレス給電技術の効果を体感してください。
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors w-full">
              デモを予約する
            </button>
          </div>

          {/* Document Download */}
          <div className="bg-white/5 backdrop-blur-sm border border-blue-500/30 rounded-xl p-8 text-center text-white hover:bg-white/10 transition-colors">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
            <h3 className="text-xl font-bold mb-3">資料ダウンロード</h3>
            <p className="text-sm opacity-90 mb-6">
              技術仕様書、導入事例、ROI試算などの詳細資料をダウンロードいただけます。
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors w-full">
              資料をダウンロード
            </button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">お問い合わせフォーム</h3>
            
            <form className="space-y-6">
              {/* Name & Company */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="山田太郎"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    会社名
                  </label>
                  <input 
                    type="text" 
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="株式会社◯◯"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="example@company.com"
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

              {/* Inquiry Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  お問い合わせ項目 <span className="text-red-500">*</span>
                </label>
                <select 
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  title="お問い合わせ項目を選択してください"
                >
                  <option value="">選択してください</option>
                  <option value="technical">技術相談について</option>
                  <option value="demo">デモンストレーションについて</option>
                  <option value="business">事業提携について</option>
                  <option value="investment">投資・資金調達について</option>
                  <option value="recruit">採用について</option>
                  <option value="other">その他</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea 
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="具体的なご相談内容をお聞かせください"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button 
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300"
                >
                  送信する
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Company Info */}
        <div className="mt-16 text-center text-white opacity-80">
          <div className="mb-4">
            <img src="/ALロゴ/white.png" alt="Aeterlink" className="h-8 mx-auto mb-2" />
            <div className="text-lg font-bold">エイターリンク株式会社</div>
          </div>
          <div className="text-sm space-y-1">
            <div>〒100-0000 東京都千代田区丸の内1-1-1</div>
            <div>TEL: 03-1234-5678 | Email: info@aeterlink.com</div>
          </div>
        </div>
      </div>
    </section>
  )
}
