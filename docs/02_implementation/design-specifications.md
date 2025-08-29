# Aeterlink デザイン仕様書

## 🎨 **デザインシステム基本方針**

### **デザイン原則**
- **ミニマル × ダイナミック** - 情報の階層化と視覚的インパクト
- **Hero : Sustainable比率** - 65:35の視覚的バランス
- **ファーストビュー最重要** - 3秒以内での印象形成
- **技術的信頼性** - 精密さと革新性の両立表現

## 🎯 **ブランドアーキタイプの視覚表現**

### **Hero要素（65%）の表現**
- **力強い数値表示**: 20m、100台、68億円の巨大テキスト
- **ダイナミックなアニメーション**: データの流れ、技術の動き
- **技術的精密さ**: 回路図、フローチャート、システム構成図
- **実績の可視化**: 成長グラフ、実装事例、導入効果

### **Sustainable要素（35%）の表現**
- **安定感のあるレイアウト**: グリッドシステム、適切な余白
- **信頼性の色彩**: ディープブルー、落ち着いたトーン
- **長期視点の表現**: タイムライン、ロードマップ、継続性
- **環境配慮**: ライムグリーンの効果的使用

## 🎨 **カラーシステム**

### **プライマリカラー**
```css
:root {
  /* ブランドカラー */
  --primary-blue: #1B365D;      /* ディープブルー - 信頼性・技術力 */
  --electric-blue: #0084FF;     /* エレクトリックブルー - 革新性・先進性 */
  --lime-green: #00D564;        /* ライムグリーン - 持続可能性・成長 */
  
  /* ニュートラルカラー */
  --text-primary: #333333;      /* メインテキスト */
  --text-secondary: #666666;    /* サブテキスト */
  --text-light: #999999;        /* 補助テキスト */
  --background: #ffffff;        /* ベース背景 */
  --background-light: #f8f9fa;  /* セクション背景 */
  
  /* システムカラー */
  --success: #28a745;           /* 成功・完了 */
  --warning: #ffc107;           /* 注意・警告 */
  --error: #dc3545;             /* エラー・危険 */
  --info: #17a2b8;              /* 情報・ヒント */
}
```

### **色彩の使用ルール**
- **プライマリブルー**: 見出し、重要なUI要素、ナビゲーション
- **エレクトリックブルー**: CTA、リンク、アクセント
- **ライムグリーン**: 成功状態、環境・持続可能性関連、補助CTA
- **60-30-10ルール**: プライマリ60% + セカンダリ30% + アクセント10%

## 📝 **タイポグラフィシステム**

### **フォントファミリー**
```css
/* 日本語最適化フォント */
--font-primary: "Noto Sans JP", "Hiragino Sans", 
                "Hiragino Kaku Gothic ProN", "Yu Gothic Medium", 
                "Meiryo", sans-serif;

/* 見出し用フォント */
--font-heading: "Noto Sans JP", "Helvetica Neue", Arial, sans-serif;

/* 数値・データ用フォント */
--font-mono: "Roboto Mono", "Courier New", monospace;

/* 英語フォント */
--font-en: "Helvetica Neue", Arial, sans-serif;
```

### **タイポグラフィスケール**
```css
/* 見出し階層 */
.text-6xl { font-size: 3.75rem; line-height: 1; }      /* H1 - ヒーロータイトル */
.text-5xl { font-size: 3rem; line-height: 1; }        /* H1 - ページタイトル */
.text-4xl { font-size: 2.25rem; line-height: 2.5rem; } /* H2 - セクションタイトル */
.text-3xl { font-size: 1.875rem; line-height: 2.25rem; } /* H3 - サブセクション */
.text-2xl { font-size: 1.5rem; line-height: 2rem; }    /* H4 - 小見出し */
.text-xl { font-size: 1.25rem; line-height: 1.75rem; } /* H5 - キャプション */

/* 本文階層 */
.text-lg { font-size: 1.125rem; line-height: 1.75rem; } /* リード文 */
.text-base { font-size: 1rem; line-height: 1.5rem; }   /* 標準本文 */
.text-sm { font-size: 0.875rem; line-height: 1.25rem; } /* 補助テキスト */
.text-xs { font-size: 0.75rem; line-height: 1rem; }    /* キャプション */
```

### **フォントウェイト**
- **300 (Light)**: 大きな数値、装飾的見出し
- **400 (Regular)**: 標準本文、説明文
- **500 (Medium)**: 強調テキスト、ナビゲーション
- **700 (Bold)**: 見出し、重要情報
- **900 (Black)**: ヒーローコピー、インパクト数値

## 📐 **レイアウトシステム**

### **グリッドシステム**
```css
/* コンテナサイズ */
.container-sm { max-width: 640px; }   /* 小コンテンツ */
.container-md { max-width: 768px; }   /* 標準コンテンツ */
.container-lg { max-width: 1024px; }  /* 大コンテンツ */
.container-xl { max-width: 1280px; }  /* 最大コンテンツ */

/* グリッド */
.grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
.grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
```

### **スペーシングシステム**
```css
/* 基本スペーシング（8pxベース） */
.space-1 { margin: 0.25rem; }    /* 4px */
.space-2 { margin: 0.5rem; }     /* 8px */
.space-4 { margin: 1rem; }       /* 16px */
.space-6 { margin: 1.5rem; }     /* 24px */
.space-8 { margin: 2rem; }       /* 32px */
.space-12 { margin: 3rem; }      /* 48px */
.space-16 { margin: 4rem; }      /* 64px */
.space-20 { margin: 5rem; }      /* 80px */
.space-24 { margin: 6rem; }      /* 96px */
```

## 🎭 **コンポーネント設計**

### **ボタンシステム**
```css
/* プライマリボタン */
.btn-primary {
  background-color: var(--electric-blue);
  color: white;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background-color: #0066cc;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 132, 255, 0.3);
}

/* セカンダリボタン */
.btn-secondary {
  background-color: var(--lime-green);
  color: white;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 500;
}

/* アウトラインボタン */
.btn-outline {
  background-color: transparent;
  color: var(--primary-blue);
  border: 2px solid var(--primary-blue);
  padding: 10px 22px;
  border-radius: 6px;
}
```

### **カードシステム**
```css
.card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 24px;
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.card-tech {
  border-left: 4px solid var(--electric-blue);
}

.card-sustainable {
  border-left: 4px solid var(--lime-green);
}
```

## 🎬 **アニメーション仕様**

### **マイクロインタラクション**
```css
/* ホバーエフェクト */
.hover-lift {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* フェードイン */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* データ表示アニメーション */
@keyframes countUp {
  from { transform: scale(0.8); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
```

### **ページ遷移**
- **ローディング**: スケルトンUI、プログレッシブ表示
- **スクロール**: パララックス効果（控えめ）
- **セクション表示**: Intersection Observerによる段階表示

## 📱 **レスポンシブデザイン詳細**

### **ブレークポイント**
```css
/* カスタムブレークポイント */
@media (max-width: 1279px) { /* Desktop Large */ }
@media (max-width: 1023px) { /* Desktop */ }
@media (max-width: 767px)  { /* Tablet */ }
@media (max-width: 639px)  { /* Mobile Large */ }
@media (max-width: 479px)  { /* Mobile */ }
@media (max-width: 359px)  { /* Mobile Small */ }
```

### **レスポンシブタイポグラフィ**
```css
/* クランプ関数使用 */
.hero-title {
  font-size: clamp(2rem, 8vw, 6rem);
  line-height: clamp(2.2rem, 8.5vw, 6.5rem);
}

.section-title {
  font-size: clamp(1.5rem, 4vw, 3rem);
  line-height: clamp(1.8rem, 4.5vw, 3.5rem);
}
```

## 🎯 **UI/UXガイドライン**

### **インタラクション原則**
- **フィードバック**: すべてのアクションに即座の視覚的反応
- **直感性**: 一般的なWebパターンに準拠
- **アクセシビリティ**: キーボード操作、スクリーンリーダー対応
- **パフォーマンス**: 60fps維持、GPU加速活用

### **ユーザビリティ**
- **タップターゲット**: 最小44px × 44px
- **コントラスト比**: WCAG AA準拠（4.5:1以上）
- **ローディング**: 3秒以内表示、プログレス表示
- **エラーハンドリング**: 分かりやすいエラーメッセージ

### **情報設計**
- **視覚階層**: 明確な情報の重要度順序
- **スキャナビリティ**: 流し読みしやすいレイアウト
- **チャンク化**: 情報の適切なグループ化
- **CTA配置**: 自然な行動導線

---

**重要**: このデザイン仕様により、Hero : Sustainable 65:35アーキタイプを視覚的に完全表現し、「最初のインプレッションに命をかける」戦略目標を実現する。全デザインはこの仕様に厳密に準拠すること。

