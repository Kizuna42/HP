# Aeterlink 技術要件仕様書

## 🛠 **基本技術スタック**

### **推奨技術環境**
- **フレームワーク**: Next.js + TypeScript（実装済み）
- **スタイリング**: Tailwind CSS（実装済み）
- **アイコン**: Material Design Icons（実装済み）
- **パフォーマンス**: 3秒以内初期表示、Core Web Vitals最適化
- **レスポンシブ**: モバイルファースト、768px/480pxブレークポイント

### **品質要件**
- **アクセシビリティ**: WCAG2.1 AA準拠、セマンティックHTML
- **SEO最適化**: 構造化データ、メタタグ最適化
- **ブラウザ対応**: Chrome, Firefox, Safari, Edge（最新2バージョン）
- **デバイステスト**: iPhone, Android, iPad, デスクトップ

## 📊 **パフォーマンス基準**

### **Core Web Vitals目標値**
```
Desktop:  LCP < 1.2s, CLS < 0.05, FID < 100ms
Tablet:   LCP < 1.4s, CLS < 0.06, FID < 100ms  
Mobile:   LCP < 1.8s, CLS < 0.04, FID < 100ms
```

### **Lighthouse スコア目標**
- **パフォーマンス**: 90点以上
- **アクセシビリティ**: 95点以上
- **ベストプラクティス**: 90点以上
- **SEO**: 100点

## 🎨 **CSS設計仕様**

### **色彩設計（確定）**
```css
:root {
  --primary-color: #1b365d;     /* ディープブルー */
  --secondary-color: #0084ff;   /* エレクトリックブルー */
  --accent-color: #00d564;      /* ライムグリーン */
  --text-primary: #333333;      /* メインテキスト */
  --text-secondary: #666666;    /* サブテキスト */
  --background: #ffffff;        /* ベース背景 */
}
```

### **日本語フォント仕様**
```css
/* 基本フォント設定 */
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700;900&display=swap");

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

### **レスポンシブ設計**
```css
/* ブレークポイント */
@media (max-width: 768px)  { /* タブレット */ }
@media (max-width: 480px)  { /* モバイル */ }
@media (max-width: 320px)  { /* スモールモバイル */ }

/* レスポンシブタイポグラフィ */
.responsive-heading {
  font-size: clamp(1.5rem, 4vw, 3rem);
}
```

## ⚡ **アニメーション仕様**

### **パフォーマンス最適化**
```css
/* GPU加速アニメーション */
@keyframes optimizedFloat {
  0%, 100% { 
    transform: translate3d(0, 0px, 0);
    will-change: transform;
  }
  50% { 
    transform: translate3d(0, -10px, 0);
  }
}

/* motion設定尊重 */
@media (prefers-reduced-motion: reduce) {
  .hero-content, .hero-visual { 
    animation: none;
    transition: none;
  }
}
```

### **インタラクション設計**
- **ホバー効果**: 0.2s ease-out トランジション
- **スクロールアニメーション**: Intersection Observer使用
- **ローディング**: プログレッシブ表示、スケルトンUI

## 📱 **レスポンシブ設計詳細**

### **デバイス別レイアウト**

#### **デスクトップ（1200px以上）**
- ヒーローセクション: フルビューポート
- 3カラムレイアウト可能
- ドロップダウンナビゲーション

#### **タブレット（768px-1199px）**
- 2カラムレイアウト
- タッチフレンドリーなUI
- 画像最適化

#### **モバイル（480px-767px）**
- 1カラムレイアウト
- ハンバーガーメニュー
- 大きなタップターゲット（44px以上）

#### **スモールモバイル（320px-479px）**
- 最小限の情報表示
- 縦持ち最適化
- 読み込み速度最優先

## 🔧 **開発環境要件**

### **必須ツール**
- **Node.js**: v18以上
- **パッケージマネージャー**: npm または pnpm
- **開発サーバー**: Next.js dev server
- **ビルド**: Next.js production build

### **推奨ツール**
- **エディタ**: Visual Studio Code
- **デバッグ**: React Developer Tools
- **テスト**: Jest + React Testing Library
- **リンター**: ESLint + Prettier

## 📊 **分析・測定環境**

### **Google Analytics 4設定**
```javascript
// app/layout.tsx
import Script from "next/script";

export default function RootLayout({ children }) {
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

### **コンバージョン追跡**
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

## 🛡 **セキュリティ要件**

### **基本セキュリティ**
- **HTTPS**: 必須、SSL証明書設定
- **Content Security Policy**: XSS対策
- **CORS設定**: 適切なオリジン制限
- **入力検証**: フォーム送信時の検証

### **プライバシー**
- **Cookie同意**: GDPR対応
- **個人情報保護**: 適切なデータ処理
- **アクセス解析**: 匿名化設定

## 🚀 **デプロイ・運用要件**

### **ホスティング要件**
- **CDN**: 世界中からの高速アクセス
- **自動デプロイ**: Git push時の自動反映
- **バックアップ**: 定期的なデータバックアップ
- **監視**: アップタイム監視、エラー通知

### **SEO技術要件**
```html
<!-- 基本メタタグ -->
<meta name="description" content="ワイヤレス給電技術のリーディングカンパニー" />
<meta name="keywords" content="ワイヤレス給電,AirPlug,エイターリンク" />

<!-- OGP設定 -->
<meta property="og:title" content="Aeterlink株式会社" />
<meta property="og:description" content="ワイヤレス給電で未来をつなぐ" />
<meta property="og:image" content="/og-image.jpg" />

<!-- 構造化データ -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Aeterlink株式会社",
  "url": "https://aeterlink.co.jp"
}
</script>
```

---

**重要**: この技術要件により、Hero : Sustainable 65:35アーキタイプを技術的に完全表現し、「最初のインプレッションに命をかける」戦略目標を達成する。実装時は本要件に厳密に準拠すること。

