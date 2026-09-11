

interface WorkItem{
  id:number,
  title:string,
  inCharge:string,
  skills:string,
  task:string,
  workOn:string,
  result:string,
}
// モットー：デジタル庁が作成したウェブアクセシビリティPDFを参考に誰もが平等にアクセスできるサイトを作る
export const worksData :WorkItem[] =[
  {
    id: 1, 
    title: '自治体向けWebサイト構築（アクセシビリティ対応・CMS開発）', 
    inCharge:'実装 / WordPress（CMS）構築・カスタマイズ / アクセシビリティ設計',
    skills:'HTML5, CSS3, JavaScript, PHP, WordPress, WAI-ARIA',
    task:'地方自治体関連のWebサイト構築案件において、多様なユーザー（高齢者や障害者を含む）が問題なく閲覧・利用できるよう、JIS X 8341-3等のアクセシビリティ基準を満たす高水準なコーディングが求められました。',
    workOn:'アクセシビリティの徹底とセマンティックマークアップ：『ウェブアクセシビリティ導入ガイドブック』やW3Cドキュメントを精読し、基礎から要件を再定義。スクリーンリーダーなどの支援技術に対応するため、適切なHTML5タグの選定とWAI-ARIA属性の付与を行い、キーボード操作のみでも全機能が利用できるよう実装しました。<br>運用性を重視したWordPress管理画面の最適化：カスタム投稿タイプ（お知らせ・会員一覧等）を活用し、不要な管理機能を削ぎ落とすことで、専門知識のない担当者様でも迷わず更新できる入力画面・ブロックを設計しました。',
    result: 'アクセシビリティ基準のクリア：各種検証ツールおよびスクリーンリーダーでの実機テストをパスし、要求水準を満たした高品質なサイトを納品しました。', 
  },
  {
    id: 2, 
    title: '自治体公立高校の校則比較ツール開発（静的環境におけるデータ検索・運用最適化）', 
    inCharge:'フロントエンド実装 / データ管理システム（GAS）構築・運用フロー設計',
    skills:'HTML5, CSS3, JavaScript, Google Apps Script (GAS), Google Spreadsheet, Markdown',
    task:'受験生や保護者向けに、自治体内の公立高校の校則を横断的に比較・閲覧できるWebツールの開発を担当しました。サーバーサイド言語（PHP等）が利用できない静的サーバー環境の制約下で、大量の校則データに対する高速な検索機能を実現すること、および毎年発生する更新作業を非エンジニアの担当者様でも安全かつ容易に行えるデータ管理構造を確立することが課題でした。',
    workOn:'JavaScriptによるフロントエンド絞り込み検索：サーバーレス環境に対応するため、クライアントサイド（Array.prototype.filter 等）で高速に動作する動的フィルタリング・リアルタイム検索機能を実装しました。<br>GAS×スプレッドシートによるJSON自動変換フローの構築：マスターデータをGoogleスプレッドシートで一元管理し、Google Apps Script（GAS）を用いてワンクリックでフロントエンド用JSONへ変換・出力できる仕組みを構築。非エンジニアでも直感的にデータ更新ができる環境を整えました。<br>Markdownを活用したコンテンツ構造化：PDFや長文テキストの校則データを扱いやすくするため、スプレッドシート上にMarkdown形式で記述したテキストを、画面描画時に自動で適切なHTML構造へ変換・出力する設計を行いました。',
    result: 'クライアントサイド処理により、ユーザーが瞬時に複数の高校の校則をストレスなく比較・閲覧できるUI/UXを実現しました。', 
  },
  // {
  //   id: 2, 
  //   title: '140周年記念　中日新聞コーポレートページの制コーディング', 
  //   desc: '', 
  //   link: 'https://www.chunichi.co.jp/info', 
  //   skills:'HTML、CSS（Sass）、vanilla.js、GAS（JSONファイルの作成）',
  // },
  // {
  // id: 3, 
  // title: 'あいちスポーツイノベーションコンソーシアム AiSIAのコーディング', 
  // desc: '愛知県様より、アクセシビリティに考慮してほしいとのご依頼でセマンティックなコーディングを意識しました。', 
  // link: 'https://sports-aisia.jp', 
  // skills:'PHP、CSS（Sass）、vanilla.js、wordpress（カスタム構築＆一部の機能のみをページに出力）',
  // },
  // {
  //   id: 4, 
  //   title: 'photostudio moln様の公式サイト制作', 
  //   desc: '「豊橋　ニューボーンフォト」で検索時に上位に表示されるよう構造化データや、セマンティックコーディングを意識し、常時検索結果で上位を取得することができています。', 
  //   link: 'https://moln-toyohashi.com', 
  //   skills:'PHP、CSS（Sass）、vanilla.js',
  // },
  // {
  //   id: 5, 
  //   title: '各LPのコーディング（1）', 
  //   desc: '各地の美しい日本庭園を案内する特集「庭～THE GARDEN」', 
  //   link: 'https://www.chunichi.co.jp/feature_pages/Japanese_garden', 
  //   skills:'HTML、CSS（Sass）、vanilla.js',
  // },
  // {
  //   id: 6, 
  //   title: '【個人開発】　英検準一級の単語学習ツールの制作', 
  //   desc: '', 
  //   link: 'https://tango-black.vercel.app/index.html', 
  //   skills:'HTML、CSS（Sass）、vanilla.js',
  // },
]
