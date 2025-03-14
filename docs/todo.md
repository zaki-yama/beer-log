# 実装タスク一覧

## 1. プロジェクトの初期セットアップ

### 1.1 Next.jsプロジェクトのセットアップ
- [x] Next.jsプロジェクトの作成
- [x] TypeScriptの設定
- [x] ESLint, Prettierの設定
- [x] VSCode設定（推奨拡張機能等）
- [x] GitHub Actionsの設定

### 1.2 UIライブラリのセットアップ
- [x] Tailwind CSSのインストールと設定
- [x] shadcn/uiのセットアップ
- [x] 基本的なレイアウトの作成
- [ ] モバイルファーストのレスポンシブデザイン対応

### 1.3 開発環境の整備
- [x] @supabase/supabase-js のインストール
- [x] Supabaseクライアントの設定
- [x] データベース型定義の作成
- [x] テーブル作成用SQLの作成
- [x] Supabaseプロジェクトの作成
  - [x] プロジェクトの作成
  - [x] API keyの発行
  - [x] テーブルの作成
  - [x] RLSポリシーの設定
- [ ] Cloudinaryプロジェクトの作成
  - [ ] プロジェクトの作成
  - [ ] API keyの発行
  - [ ] アップロード設定
- [x] 環境変数の設定
- [ ] デプロイパイプラインの構築（Cloudflare Pages）

## 2. 認証機能の実装

### 2.1 認証基盤
- [x] NextAuth.jsのセットアップ
  - [x] NextAuth.jsのインストールと初期設定
  - [x] Google認証プロバイダーの設定
    - [x] Google Cloud Consoleでの設定
    - [x] 環境変数の設定
  - [x] セッション設定
    - [x] セッション有効期限の設定（30日）
    - [x] セッションストレージの設定（JWT）
- [x] 認証状態の管理
  - [x] 認証状態のグローバル管理
    - [x] ユーザー情報の型定義
    - [x] プロフィール画像の取得と表示
  - [ ] 認証ガードの実装
    - [ ] 未認証時のリダイレクト処理
    - [ ] 認証状態の永続化
- [ ] エラーハンドリング
  - [ ] 認証エラーの処理
    - [ ] ログイン失敗時のエラーメッセージ
    - [ ] セッション切れ時の処理
  - [ ] エラーページの作成
    - [ ] 404ページ
    - [ ] エラーページ

### 2.2 認証UI
- [x] ログインページの実装
  - [x] モバイルファーストのレスポンシブデザイン
  - [x] Googleログインボタンの実装
  - [ ] ローディング状態の表示
  - [ ] エラーメッセージの表示
- [x] ログアウト機能の実装
  - [x] ログアウトボタンの配置
  - [x] ログアウト処理の実装
- [ ] テスト
  - [ ] 認証機能のテスト
    - [ ] ログイン/ログアウトのテスト
    - [ ] 認証ガードのテスト
    - [ ] エラーハンドリングのテスト

## 3. ビール記録機能の実装

### 3.1 データモデリング
- [ ] Supabaseスキーマの設計
- [ ] マイグレーションの作成
- [ ] シードデータの作成

### 3.2 画像関連機能
- [ ] Cloudinaryとの連携実装
- [ ] カメラ撮影機能の実装
- [ ] 画像アップロード機能の実装
- [ ] 画像の最適化処理

### 3.3 ビール記録機能
- [ ] 記録フォームの作成（React Hook Form + Zod）
- [ ] 一覧表示ページの実装
- [ ] 詳細表示ページの実装
- [ ] 編集・削除機能の実装

### 3.4 追加機能
- [ ] バーコードリーダー機能の実装
- [ ] 検索機能の実装
- [ ] フィルタリング機能の実装
- [ ] ソート機能の実装

## 4. PWA対応

### 4.1 Service Worker
- [ ] Workboxのセットアップ
- [ ] キャッシュ戦略の実装
- [ ] オフライン対応の実装

### 4.2 PWA最適化
- [ ] マニフェストファイルの作成
- [ ] アイコン類の用意
- [ ] インストール促進の実装
- [ ] オフライン時のUX改善

## 5. パフォーマンスとUX改善

### 5.1 パフォーマンス最適化
- [ ] 画像の遅延読み込み実装
- [ ] バンドルサイズの最適化
- [ ] キャッシュ戦略の最適化
- [ ] パフォーマンスモニタリングの設定

### 5.2 UX改善
- [ ] ローディング状態の改善
- [ ] エラーハンドリングの改善
- [ ] アニメーションの追加
- [ ] フィードバックの収集と改善

## 6. テスト実装

### 6.1 テスト環境
- [ ] Vitestのセットアップ
- [ ] テストユーティリティの実装
- [ ] CI/CDでのテスト実行設定
- [ ] テストカバレッジの設定

### 6.2 テストケース
- [ ] コンポーネントテストの実装
- [ ] 統合テストの実装
- [ ] E2Eテストの実装（必要に応じて）
