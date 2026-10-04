import workImg01 from './images/1.webp'
import workImg02 from './images/2.webp'
import workImg03 from './images/3.webp'
import workImg04 from './images/4.webp'
import workImg05 from './images/5.webp'
import workImg06 from './images/6.webp'
import workImg07 from './images/7.webp'

import mockImg01 from './images/mock01.webp'
import mockImg02 from './images/mock02.webp'
import mockImg03 from './images/mock03.webp'
import mockImg04 from './images/mock04.webp'
import mockImg05 from './images/mock05.webp'
import mockImg06 from './images/mock06.webp'
import mockImg07 from './images/mock07.webp'


interface WorkItem{
  id:number,
  title:string,
  inCharge:string,
  skills:string,
  task:string,
  workOn:string[],
  result:string,
  img:string,
  mockImg:string,
  link:string,
}
export const worksData: WorkItem[] = [
  {
    id: 1, 
    title: '自作Web単語学習ツール「Tango」の開発。\n課題解決型プロダクトの開発で英検準1級合格を達成', 
    inCharge: '企画・設計・UI/UXデザイン・フロントエンド開発・運用改善',
    skills: 'HTML5, CSS, JavaScript',
    task: '【状況・課題】紙の単語帳特有の「掲載順で記憶してしまう問題」を解消し、効率的に語彙を定着させる学習環境が必要でした。「苦手な単語」をリアルタイムに抽出し、ストレスなく反復学習できるデータ管理機能の実装を課題として設定しました。',
    workOn: [
      '①苦手克服機能の実装: つまずいた単語を「苦手リスト」へ登録・削除できる機能を構築。\n',
      '②LocalStorageによるデータ保持: サーバーレス環境でも次回アクセス時にシームレスに重点復習ができるローカルデータ管理サイクルを整備。'
    ],
    result: '自ら設計・開発したツールを約半年にわたり学習に使用。苦手分野を効率的に潰し込み、目標であった「英検準1級合格」という成果を達成しました。', 
    img: workImg01,
    mockImg: mockImg01,
    link: 'https://nishinkazunoko.github.io/tango/',
  },
  {
    id: 2, 
    title: '愛知県の天候が即座にわかるWebアプリケーション（個人開発）', 
    inCharge: '設計・フロントエンド実装',
    skills: 'React, TypeScript, CSS',
    task: '【状況・課題】Reactでの実践的なコンポーネント設計スキルの習得を目的に開発に着手。再利用性・拡張性を考慮したディレクトリ構成の確立と、適切なHooks活用による効率的な状態管理を課題として設定しました。',
    workOn: [
      '①コンポーネント指向の設計: ディレクトリ構成やコンポーネントの粒度を適切に分離し、保守性と可読性の高いコードベースを構築。\n',
      '②状態管理の最適化: useStateをはじめとするHooksを活用し、データの単一方向フローとレンダリングの効率化を意識して実装。'
    ],
    result: '直感的なUI/UXでストレスなく天候情報を取得できるアプリを完成させました。保守性を意識したコード設計を実践し、モダンフロントエンド開発の基礎〜応用スキルを確立しました。', 
    img: workImg02,
    mockImg: mockImg02,
    link: 'https://moving-budget-dusky.vercel.app/',
  },
  {
    id: 3, 
    title: '【SEO・検索1位獲得】豊橋市のニューボーンフォトスタジオ Webサイト制作', 
    inCharge: '要件定義・UI/UXデザイン・フロントエンド開発・構造化データ設計/SEO実装',
    skills: 'HTML5, PHP, CSS, JavaScript, JSON-LD',
    task: '【状況・課題】競合が多数存在する豊橋エリアにおいて、有料広告に頼らず「豊橋 ニューボーンフォト」等の重要地域キーワードで上位表示を獲得し、直接のWeb予約へつなげる集客構造の構築が課題でした。',
    workOn: [
      '①構造化データ（JSON-LD）の実装: LocalBusiness や Service などの Schema.org を定義し、店舗情報や撮影プランをGoogleクローラーへ正確に伝える構造化マークアップを実施。\n',
      '②セマンティックなHTML設計: 検索エンジンがコンテンツの意味を正しく解釈できるよう、セマンティックなタグ構造を徹底。'
    ],
    result: '狙ったメイン地域キーワード（「豊橋 ニューボーンフォト」等）にて検索順位1位を獲得。MEO（Googleビジネスプロフィール）対策との相乗効果により、上位を長期キープし安定的な集客に貢献しています。', 
    img: workImg03,
    mockImg: mockImg03,
    link: 'https://moln-toyohashi.com/',
  },
  {
    id: 4, 
    title: 'スプレッドシート更新対応 スライダー付き特集ページ', 
    inCharge: '要件定義・UI/UXデザイン・フロントエンド開発・データ連携構築',
    skills: 'JavaScript, GAS (Google Apps Script), HTML5, CSS',
    task: '【状況・課題】非エンジニアの運用担当者がコードをいじらずにコンテンツを更新できる仕組みの構築が課題でした。静的サイトの高速表示パフォーマンスを保持しつつ、運用ミスを防ぐ自動化基盤とアクセシビリティの確保を目指しました。',
    workOn: [
      '①GASを活用したデータ生成パイプライン: Googleスプレッドシートの入力データをGASで自動整形し、最適化された軽量JSONを出力する基盤を構築。<a href="https://docs.google.com/spreadsheets/d/1-cPg8OKw0QyiSoNO1LStnzd3HXNEeOm9FzLO_ls192g/edit?usp=sharing" target="_blank" style="display:inline;text-decoration:underline;">使用したスプレッドシートはこちら</a>\n',
      '②JSON駆動スライダー＆アクセシビリティ配慮: 出力データから描画するスライダーを設計。ライブラリ「spilde」を使用し、どんなユーザーでも扱いやすいスライダーを実装しました。'
    ],
    result: 'JSONデータをスプレッドシート上のワンクリックで生成できるようになり、運用側も更新がしやすくなりました。動的サーバーを挟まない静的JSON運用により、高い表示パフォーマンスとアクセシビリティを両立したUIを実現しました。', 
    img: workImg04,
    mockImg: mockImg04,
    link: 'https://nishinkazunoko.github.io/perth/',
  },
  {
    id: 5, 
    title: '【SEO最適化・CMS設計】家庭教師ポータル・プロフィールサイト', 
    inCharge: '要件定義・UI/UXデザイン・WordPress構築・フロントエンド開発・SEO実装',
    skills: 'WordPress, PHP, HTML5, CSS, JavaScript',
    task: '【状況・課題】信頼感が求められるプロフィール紹介に加え、将来的なブログ運用を見据えた拡張性の高いCMS基盤の構築と、ターゲット層（保護者・生徒）へ確実にアプローチするための内部SEO対策が課題でした。',
    workOn: [
      '①拡張性を見越したWordPress設計: カスタム投稿タイプやカテゴリー構造を最適化し、将来のコンテンツ追加・更新がスムーズに行える設計を実施。\n',
      '②SEO内部対策・CVR改善: 構造化マークアップ、メタタグ最適化、表示速度改善を徹底。ユーザーの信頼を高める口コミコンテンツを配置。'
    ],
    result: '運用者が容易に管理できるCMS環境を構築。徹底した内部SEO対策とCVR（コンバージョン率）を意識した導線設計により、集客とブランディングに直接寄与するWebサイトを納品しました。', 
    img: workImg05,
    mockImg: mockImg05,
    link: 'https://tutor-prodigy.com',
  },
  {
    id: 6, 
    title: '手動検証によるWebアクセシビリティ改善・品質管理', 
    inCharge: 'アクセシビリティ診断（自動・手動）・リファクタリング',
    skills: 'axe DevTools, WAI-ARIA, WCAG',
    task: '【状況・課題】各案件において、多様なユーザー環境への対応およびJIS X 8341-3（AAレベル）準拠が求められる中、開発プロセスにおけるアクセシビリティの検証体制と品質の標準化が課題でした。',
    workOn: [
      '①自動・手動を組み合わせたハイブリッド検証: ブラウザ拡張機能「axe DevTools」で機械的なエラーを早期検出・解消した上で、「SmartHR アクセシビリティチェックリスト」をベースにした手動チェックを実施。\n',
      '②具体的なUI改善・コード修正: キーボードのフォーカスリング制御、コントラスト比の確保、セマンティックなHTML構造への見直し、必要に応じたWAI-ARIAの適切な付与を実装。'
    ],
    result: 'チェックシート運用による開発・レビューフローを確立。機械チェックと手動チェックの二段階で品質を担保し、主要ページにおけるアクセシビリティ上の課題を大幅に解消・標準化しました。\n※守秘義務配慮のため、サイト名等一部をマスキングしています。', 
    img: workImg06,
    mockImg: mockImg06,
    link: 'https://docs.google.com/spreadsheets/d/14Mmo_H6o_4WiOCShTfABuJYPC11xvG7ErXqoouWpc9c/edit?usp=sharing',
  },
  {
    id: 7, 
    title: '【Vite + React】ポートフォリオサイト', 
    inCharge: '企画・UI/UXデザイン・フロントエンド開発・コンポーネント設計・Viteによる開発環境構築',
    skills: 'React, Vite, TypeScript, HTML, CSS',
    task: '【状況・課題】開発にあたって、保守性の高いコンポーネント設計、状態管理（Hooks）の最適化、CRUD操作を見据えたデータ構造など、Reactの標準的な設計パターンを徹底して反映させることが課題でした。',
    workOn: [
      '①書籍・動画で定石をキャッチアップ: 技術書『りあくと！』や動画教材を通じて、コンポーネントの責務分離、状態管理（Hooks）、Viteによるモダンな開発環境の選定などを学習し実践。\n',
      '②コンポーネントベース・データ構造の設計: 再利用性を意識したUIパーツのモジュール化と、将来的なCRUD処理（データ操作・追加・更新）を見据えたデータ構造・状態設計を実施。'
    ],
    result: '自己学習によりモダンReactの基本思想を短期間で習得し、実装・設計の両面からフロントエンドエンジニアとしての基礎体力を提示できるプロダクトを構築しました。', 
    img: workImg07,
    mockImg: mockImg07,
    link: 'https://portfolio-puce-eight-nitc2s9yhc.vercel.app/',
  },
];