export function ProductsSection() {
  // 送電機 (PowerTx)
  const powerTransmitters = [
    {
      image: "/powerTX01.jpg",
      modelNumber: "01",
      title: "AirPlug™ PowerTx-C",
      subtitle: "天井埋め込み型送電機",
      description: "システム天井や一般天井に細いスリットをあけ、天井に埋め込んで設置するタイプの送電機です。空間内に最適な間隔で、高効率のワイヤレス給電空間を実現します。",
      colors: ["White", "Black"],
      bgColor: "from-slate-900 to-blue-900"
    },
    {
      image: "/powerTX03.jpg",
      modelNumber: "02", 
      title: "AirPlug™ PowerTx-D",
      subtitle: "ダクトレール型送電機",
      description: "照明用ダクトレールに工事不要で簡単に設置できる送電機モデルです。施設リノベーションの際の既存オフィスへの導入やお試し導入で、手軽にご使用頂けます。",
      colors: ["White", "Black"],
      bgColor: "from-slate-900 to-blue-900"
    }
  ]

  // 受電機 (Receiving Devices)
  const receivingDevices = [
    {
      image: "/sensor01.jpg",
      modelNumber: "03",
      title: "AirPlug™ Beacon",
      subtitle: "位置情報受電機",
      description: "透明なアクリル製の構造を有しており、給電空間内で、位置情報を瞬時に把握。脱着式のクリップでスマートに身に着けることができます。",
      colors: ["White", "Gray", "Black"],
      bgColor: "from-slate-900 to-blue-900"
    },
    {
      image: "/sensor05.jpg",
      modelNumber: "04",
      title: "AirPlug™ Sense-T",
      subtitle: "温度・湿度センサー",
      description: "机の各席ごとに設置されます。さらに上部のボタンから、各席の個人の「暑い」「寒い」といった「体感」を空調システムに伝えることができます。",
      colors: ["White", "Black"],
      bgColor: "from-slate-900 to-blue-900"
    },
    {
      image: "/sensor07.jpg",
      modelNumber: "05",
      title: "AirPlug™ Sense-M",
      subtitle: "人感センサー",
      description: "各席ごとに机の裏や椅子に設置され、着座センサーとして利用可能です。家具が増えても安心です。パーソナライズに必要な着座センサーのスケーラビリティを約束します。",
      colors: ["White", "Black"],
      bgColor: "from-slate-900 to-blue-900"
    },
    {
      image: "/sensor08.jpg",
      modelNumber: "06",
      title: "AirPlug™ Sense-C",
      subtitle: "CO2センサー",
      description: "部屋ごとに設置され、部屋のCO2濃度センサーとして利用可能です。換気量の監視に役立つCO2センサーの最適配置を実現します。",
      colors: ["White", "Black"],
      bgColor: "from-slate-900 to-blue-900"
    }
  ]

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            PRODUCTS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AirPlug™システム製品ラインナップ
          </p>
        </div>

        {/* PowerTx Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">AirPlug™ PowerTx</h3>
            <p className="text-lg text-gray-600">送電機 - ワイヤレス給電の送信側システム</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {powerTransmitters.map((product, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${product.bgColor} opacity-80`}></div>
                  <div className="absolute top-4 left-4 text-white">
                    <div className="text-4xl font-bold opacity-50">_{product.modelNumber}_</div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium opacity-90">{product.subtitle}</div>
                    <div className="text-2xl font-bold">{product.title}</div>
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-6">
                  <p className="text-gray-700 mb-4 leading-relaxed">{product.description}</p>
                  
                  {/* Color Options */}
                  <div className="mb-6">
                    <div className="text-sm font-medium text-gray-700 mb-2">カラーバリエーション:</div>
                    <div className="flex space-x-2">
                      {product.colors.map((color, colorIndex) => (
                        <span key={colorIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300">
                    詳細を見る
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Receiving Devices Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Receiving Devices</h3>
            <p className="text-lg text-gray-600">受電機 - ワイヤレス給電を受信するデバイス群</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {receivingDevices.map((device, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                {/* Device Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={device.image} 
                    alt={device.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${device.bgColor} opacity-80`}></div>
                  <div className="absolute top-4 left-4 text-white">
                    <div className="text-3xl font-bold opacity-50">_{device.modelNumber}_</div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium opacity-90">{device.subtitle}</div>
                    <div className="text-xl font-bold">{device.title}</div>
                  </div>
                </div>

                {/* Device Content */}
                <div className="p-5">
                  <p className="text-gray-700 mb-4 leading-relaxed text-sm">{device.description}</p>
                  
                  {/* Color Options */}
                  <div className="mb-4">
                    <div className="text-xs font-medium text-gray-700 mb-2">カラー:</div>
                    <div className="flex space-x-2">
                      {device.colors.map((color, colorIndex) => (
                        <span key={colorIndex} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300 text-sm">
                    詳細を見る
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Areas */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">適用領域</h3>
            <p className="text-lg text-gray-600">AirPlug™が革新をもたらす分野</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="text-3xl mb-3">🏭</div>
              <div className="font-semibold text-gray-900">Factory Automation</div>
              <div className="text-sm text-gray-600 mt-1">製造業・工場自動化</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="text-3xl mb-3">🏢</div>
              <div className="font-semibold text-gray-900">Smart Building</div>
              <div className="text-sm text-gray-600 mt-1">スマートビル管理</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="text-3xl mb-3">🏥</div>
              <div className="font-semibold text-gray-900">Medical Device</div>
              <div className="text-sm text-gray-600 mt-1">医療機器・インプラント</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="text-3xl mb-3">🚗</div>
              <div className="font-semibold text-gray-900">Electric Vehicle</div>
              <div className="text-sm text-gray-600 mt-1">電気自動車充電</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="text-3xl mb-3">🌐</div>
              <div className="font-semibold text-gray-900">IoT Infrastructure</div>
              <div className="text-sm text-gray-600 mt-1">IoTインフラ基盤</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="text-3xl mb-3">🏘️</div>
              <div className="font-semibold text-gray-900">Smart City</div>
              <div className="text-sm text-gray-600 mt-1">スマートシティ基盤</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
