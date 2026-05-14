# fnct-news

このプロジェクトは、[福井工業高等専門学校](https://www.fukui-nct.ac.jp/)のウェブサイトからニュースをスクレイピングし、オープンなCSVデータセットとして公開するものです。

## 🌐 ライブデモ

データセットを検索・ソート可能なライブビューは、GitHub Pagesで公開されています。

➡️ **[https://code4fukui.github.io/fnct-news/](https://code4fukui.github.io/fnct-news/)**

## 📊 データセット

データセットは、スクレイピングされたすべてのニュース記事を含むCSVファイルであり、自動的に更新されます。

- **ファイル:** [`fnct-news.csv`](fnct-news.csv)
- **取得元:** [福井工業高等専門学校 ニュース](https://www.fukui-nct.ac.jp/news/)
- **更新頻度:** 1時間ごと

### データフィールド
- `url`: ニュース記事のURL
- `date`: 公開日 (YYYY.MM.DD)
- `category`: ニュースのカテゴリ
- `title`: ニュース記事のタイトル

## ✨ 特徴

- **データスクレイピング**: 福井工業高等専門学校のウェブサイトからニュースを取得します。
- **永続的な保存**: 既存のCSVに新しい記事のみを自動的に追加し、過去のデータを保持します。
- **自動化**: GitHub Actionsを使用して、データセットを1時間ごとに自動更新します。
- **CI/CD**: コード品質を保つためのLintおよびテストのワークフローが含まれています。

## 🚀 開発

このプロジェクトでは、すべてのスクリプトに[Deno](https://deno.land/)を使用しています。

### 要件
- [Deno](https://deno.land/) v1.x

### スクレイパーのローカル実行
スクレイピングと更新のプロセス全体を実行するには、以下のコマンドを使用します。
```sh
deno run -A fetchNewsAll.js
```

### テストの実行
リポジトリにはスクレイピングロジックのテストが含まれています。
```sh
deno test -A --unstable
```

## 🙏 クレジット
- データ処理: [Code for FUKUI](https://code4fukui.github.io/)
- Webアプリケーション (`index.html`) は、[福野泰介](https://fukuno.jig.jp/3333) による CC BY ライセンスです。

## 📄 ライセンス
MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
