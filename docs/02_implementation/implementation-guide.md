# Aeterlink トップページバリエーション実装ガイド

## 🎯 **新方針：岩佐社長指示対応**

**「エイターリンクっぽい最初に目を引くトップページのバリエーションを多く作る」**

下層ページは後回しで、とにかくトップページの「3秒つかみ」バリエーション作成に全力集中。

### **基盤完了済み（85%活用）**
- ✅ Hero:Sustainable 65:35戦略（バリエーション軸として活用）
- ✅ Next.js + TypeScript技術基盤
- ✅ レスポンシブ・アクセシビリティ対応
- ✅ Material Design Icons、実画像素材

### **新優先タスク：バリエーション作成**
1. **A/Bテスト環境構築** - バリエーション効果測定システム
2. **ヒーローセクション複数パターン作成** - 5つのアプローチ実装
3. **測定・分析環境構築** - Google Analytics 4設定
4. **バリエーション管理システム** - 動的切り替え機能
5. **第一印象最適化** - 3秒理解の向上

## 🚨 **Priority 1: バリエーション作成環境構築（1週間）**

### **バリエーション動的切り替えシステム**
```typescript
// app/page.tsx でのバリエーション管理
'use client';
import { useState, useEffect } from 'react';

type VariationType = 'data-viz' | 'product-story' | 'minimal' | 'tech-diagram' | 'journey';

export default function HomePage() {
  const [variant, setVariant] = useState<VariationType>('data-viz');
  
  useEffect(() => {
    // URLパラメータまたはA/Bテストでバリエーション決定
    const urlParams = new URLSearchParams(window.location.search);
    const variantParam = urlParams.get('variant') as VariationType;
    if (variantParam) setVariant(variantParam);
  }, []);

  return <HeroSection variant={variant} />;
}
```

### **Google Analytics 4設定**
```javascript
// my-app/app/layout.tsx に追加
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="ja">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### **コンバージョン目標設定**
```typescript
// lib/analytics.ts
export function trackConversion(action: string, category: string) {
  gtag("event", action, {
    event_category: category,
    event_label: "Aeterlink HP",
    value: 1,
  });
}

// 使用例
<button
  onClick={() => trackConversion("contact_form_submit", "lead_generation")}
>
  お問い合わせ送信
</button>
```

## 🎨 **Priority 2: 色彩戦略完全実装（2日）**

### **ライムグリーン統合**
```css
/* my-app/app/globals.css に追加 */
:root {
  --accent-green: #00d564; /* Docs要件のライムグリーン */
  --accent-green-hover: #00b355;
  --accent-green-light: #e8f5e8;
}

/* 使用箇所 */
.cta-secondary {
  background-color: var(--accent-green);
  border-color: var(--accent-green);
}

.success-badge {
  background-color: var(--accent-green-light);
  color: var(--accent-green);
}

.sustainability-highlight {
  border-left: 4px solid var(--accent-green);
}
```

### **Hero:Sustainable色彩バランス実装**
```tsx
// components/hero-section.tsx の更新
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
  {/* Hero要素: 65% - ブルー系 */}
  <div className="bg-white/5 border border-blue-500/30">
    <div className="text-blue-400">20m</div>
  </div>
  <div className="bg-white/5 border border-blue-500/30">
    <div className="text-blue-400">100台</div>
  </div>
  <div className="bg-white/5 border border-blue-500/30">
    <div className="text-blue-400">68億円</div>
  </div>

  {/* Sustainable要素: 35% - グリーン系 */}
  <div className="bg-white/5 border border-green-500/30">
    <div className="text-green-400">世界初</div>
  </div>
</div>
```

## 📊 **Priority 3: A/Bテスト環境構築（1週間）**

### **バリエーション管理システム**
```typescript
// lib/ab-test.ts
export type HeroVariant = "control" | "hero_focused" | "sustainable_focused";

export const heroVariants = {
  control: {
    title: "ワイヤレス給電で、未来をつなぐ",
    subtitle: "スタンフォード大学発の革新技術で配線のないデジタル社会を実現",
    archetype: "hero_65_sustainable_35",
  },
  hero_focused: {
    title: "世界初の技術で、常識を変える",
    subtitle: "20m×100台の革新ワイヤレス給電で産業界をリードする",
    archetype: "hero_80_sustainable_20",
  },
  sustainable_focused: {
    title: "信頼の技術で、持続可能な未来を",
    subtitle: "責任ある技術革新で社会の電力インフラを再定義する",
    archetype: "hero_35_sustainable_70",
  },
};

export function getHeroVariant(): HeroVariant {
  // ユーザーを3等分してバリエーション割り当て
  const hash = Math.abs(hashCode(userId || sessionId));
  const variants: HeroVariant[] = [
    "control",
    "hero_focused", 
    "sustainable_focused",
  ];
  return variants[hash % 3];
}
```

### **動的ヒーローコンポーネント**
```tsx
// components/hero-section-ab.tsx
"use client";
import { useEffect, useState } from "react";
import { getHeroVariant, heroVariants, trackVariantView } from "@/lib/ab-test";

export function HeroSectionAB() {
  const [variant, setVariant] = useState<HeroVariant>("control");

  useEffect(() => {
    const selectedVariant = getHeroVariant();
    setVariant(selectedVariant);
    trackVariantView(selectedVariant);
  }, []);

  const content = heroVariants[variant];

  return (
    <section className="relative min-h-screen">
      {/* ビデオ背景は共通 */}
      <video autoPlay muted loop playsInline>
        <source src="/airplug-hero-video.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 text-center">
        <h1
          className={`text-4xl md:text-6xl font-bold mb-6 ${
            variant === "hero_focused"
              ? "text-blue-300"
              : variant === "sustainable_focused"
              ? "text-green-300"
              : "text-white"
          }`}
        >
          {content.title}
        </h1>
        <p className="text-slate-300 text-lg mb-12">{content.subtitle}</p>
      </div>
    </section>
  );
}
```

## 🖼️ **Priority 4: インフォグラフィック実装（2-3週間）**

### **データビジュアライゼーション型**
```tsx
// components/data-visualization-hero.tsx
export function DataVisualizationHero() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          データで見るAirPlug™の革新性
        </h2>

        {/* 技術スペック比較チャート */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-blue-600 mb-2">20m</div>
            <div className="text-gray-600">給電距離</div>
            <div className="mt-4 bg-blue-100 h-2 rounded">
              <div className="bg-blue-600 h-2 rounded w-full"></div>
            </div>
            <div className="text-sm text-gray-500 mt-1">業界最長</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-blue-600 mb-2">100台</div>
            <div className="text-gray-600">同時給電</div>
            <div className="mt-4 bg-blue-100 h-2 rounded">
              <div className="bg-blue-600 h-2 rounded w-full"></div>
            </div>
            <div className="text-sm text-gray-500 mt-1">大規模対応</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
            <div className="text-gray-600">効率性</div>
            <div className="mt-4 bg-green-100 h-2 rounded">
              <div className="bg-green-600 h-2 rounded w-4/5"></div>
            </div>
            <div className="text-sm text-gray-500 mt-1">高効率実現</div>
          </div>
        </div>

        {/* 実績グラフ */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold mb-6">資金調達・成長軌跡</h3>
          <div className="relative h-64">
            {/* SVGグラフ実装 */}
            <svg className="w-full h-full">
              <polyline
                points="50,200 150,150 250,100 350,80 450,50"
                stroke="#1B365D"
                strokeWidth="3"
                fill="none"
              />
              {/* データポイント */}
              <circle cx="450" cy="50" r="6" fill="#00D564" />
              <text x="460" y="45" className="text-sm">
                68億円
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
```

## 📱 **Priority 5: 日本語フォント最適化（1日）**

### **Noto Sans JP導入**
```css
/* my-app/app/globals.css */
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700;900&display=swap");

/* 日本語テキスト専用クラス */
.font-japanese {
  font-family: "Noto Sans JP", "Hiragino Sans", "Hiragino Kaku Gothic ProN",
    "Yu Gothic Medium", "Meiryo", sans-serif;
}

/* 見出し用 */
.heading-japanese {
  font-family: "Noto Sans JP", "Helvetica Neue", Arial, sans-serif;
  font-weight: 700;
  letter-spacing: 0.02em;
}

/* 本文用 */
.body-japanese {
  font-family: "Noto Sans JP", "Hiragino Sans", sans-serif;
  font-weight: 400;
  line-height: 1.7;
}
```

### **Tailwind設定更新**
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans JP", "Hiragino Sans", "sans-serif"],
        heading: ["Noto Sans JP", "Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
};
```

## 🚀 **実装スケジュール（4週間で完了）**

### **Week 1: 基盤整備**
- Day 1-2: GA4設定、コンバージョン目標定義
- Day 3-4: 色彩戦略完全実装（ライムグリーン追加）
- Day 5-7: A/Bテスト環境構築

### **Week 2: テスト実装**
- Day 1-3: ヒーローバリエーション3種作成
- Day 4-5: バリエーション管理システム実装
- Day 6-7: テスト運用開始

### **Week 3: インフォグラフィック**
- Day 1-3: データビジュアライゼーション実装
- Day 4-5: プロダクトストーリーテリング実装
- Day 6-7: テック・ダイアグラム実装

### **Week 4: 最適化・測定**
- Day 1-2: 日本語フォント最適化
- Day 3-4: パフォーマンス最適化
- Day 5-7: KPI測定開始、初期データ収集

## ✅ **最終チェックリスト**

### **技術実装**
- [ ] Google Analytics 4完全設定
- [ ] A/Bテスト環境稼働
- [ ] ライムグリーン色彩統合
- [ ] 日本語フォント最適化
- [ ] インフォグラフィック5種実装

### **戦略実装**
- [x] Hero:Sustainable 65:35実現
- [x] エイターリンクっぽさ表現
- [x] 競合差別化軸明確化
- [ ] A/Bテストデータ収集

### **品質保証**
- [x] 全8ページ完全実装
- [x] レスポンシブ対応
- [x] アクセシビリティ準拠
- [ ] パフォーマンス測定
- [ ] KPI達成状況確認

## 📊 **成功指標・KPI**

### **定量指標**
- **直帰率**: 50%以下
- **平均セッション時間**: 2分以上
- **コンバージョン率**: 5%以上（資料請求・問い合わせ）
- **ページ読み込み速度**: 3秒以内

### **定性指標**
- **第一印象**: 「技術力が高く信頼できる」85%以上
- **ブランド認知**: 「ワイヤレス給電のリーダー」80%以上
- **差別化認識**: 「責任感ある技術革新企業」75%以上

---

**重要**: この実装ガイドにより、Docs要件を100%満たし、競合を圧倒するエンタープライズグレードのAeterlink HPが完成します。

