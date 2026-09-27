import workImg01 from './images/1.webp'
import workImg02 from './images/2.webp'
import workImg03 from './images/3.webp'
import workImg04 from './images/4.webp'
import workImg05 from './images/5.webp'
import mockImg01 from './images/mock01.jpg'
import mockImg02 from './images/mock02.jpg'
import mockImg03 from './images/mock03.jpg'
import mockImg04 from './images/mock04.jpg'
import mockImg05 from './images/mock05.jpg'


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
export const worksData :WorkItem[] =[
  {
    id: 1, 
    title: '自作Web単語学習ツール「Tango」の開発 課題解決型プロダクト開発で英検準1級合格を達成', 
    inCharge:'企画・設計・UI/UXデザイン・フロントエンド開発・運用改善',
    skills:'HTML5, CSS, JavaScript',
    task:'自宅での効率的な単語学習と、紙の単語帳特有の「掲載順で暗記してしまう現象」を克服するため、自作Webアプリの開発に着手。どのような順番・状況で出題されても確実に記憶に定着できる環境を目指しました。膨大な単語の中から、自身の習熟度に合わせた「苦手な単語」をリアルタイムに抽出し、ストレスなく反復復習できるデータ管理機能の実装を課題として設定しました。',
    workOn: [
      '・苦手克服機能の実装： つまずいた単語をワンタップで「苦手リスト」へ登録・削除できる機能を構築。LocalStorageを活用したローカルデータ保持により、次回アクセス時もシームレスに重点復習ができるサイクルを整備しました。'
    ],
    result: '自ら設計・開発したツールをローカル環境で約半年にわたり日常の学習に運用。苦手分野の効率的な潰し込みを実現し、目標であった「英検準1級合格」という定量的成果を達成しました。', 
    img:workImg01,
    mockImg:mockImg01,
    link:'https://nishinkazunoko.github.io/tango/',
  },
  {
    id: 2, 
    title: '愛知県の天候が即座にわかるWebアプリケーション（個人開発）', 
    inCharge:'設計・フロントエンド実装',
    skills:'React, TypeScript, CSS',
    task:'Reactを用いたフロントエンド開発の基礎固めおよび実践的なコンポーネント設計スキルの習得を目的に、愛知県の天候情報を即座に確認できるWebアプリの開発に着手。useStateをはじめとする基本的なHooksの適切な活用と、再利用性・拡張性を考慮したデータ構造とコード設計の確立を課題として設定しました。',
    workOn: [
      '・コンポーネント指向を意識した設計： ディレクトリ構成やコンポーネントの粒度を適切に分離し、保守性と可読性の高いコードベースを構築。',
      '・状態管理の最適化： ReactのHooks（useState等）を活用し、データの単一方向フローとレンダリングの効率化を意識して実装。'
    ],
    result: 'ユーザーが直感的に操作できるUI/UXを実現し、迷わずストレスフリーに天候情報を取得できるアプリを完成させました。また、基礎的な開発手法から保守性を意識したコード設計までを実践し、フロントエンド開発のベーススキルを確固たるものにしました。', 
    img:workImg02,
    mockImg:mockImg02,
    link:'https://moving-budget-dusky.vercel.app/',
  },
  {
    id: 3, 
    title: '【SEO・検索1位獲得】豊橋市のニューボーンフォトスタジオ Webサイト制作', 
    inCharge:' 要件定義・UI/UXデザイン・フロントエンド開発・構造化データ設計/SEO実装（個人制作 / 制作許可取得済み）',
    skills:'HTML5, PHP, CSS, JavaScript,JSON-LD',
    task:'大手フォトスタジオや競合カメラマンが多数存在する「豊橋エリア」において、有料広告に過度に頼ることなく、「豊橋 ニューボーンフォト」などの重要地域キーワードで検索結果の上位を獲得し、安定した直接Web予約（問い合わせ）へつなげる集客構造を構築することが課題でした。',
    workOn: [
      '・構造化データ（JSON-LD）の緻密な実装： LocalBusiness や Service などの Schema.org を用いた構造化データを記述し、店舗情報・対応エリア・撮影プランをGoogleクローラーへ直接正しく伝えるマークアップを実施。',
      '・セマンティックなHTML設計： 検索エンジンがページ構造とコンテンツの意味を正確に解釈できるよう、セマンティックタグを用いた適切なHTML構造を徹底。'
    ],
    result: '構造化データの導入とローカルSEO施策により、狙ったメイン地域キーワード（「豊橋　ニューボーン」「豊橋　ニューボーンフォト」等）にて検索順位1位を獲得。その後もGoogle Businessの登録や口コミを寄せてもらうことで、検索順位上位をキープしている。', 
    img:workImg03,
    mockImg:mockImg03,
    link:'https://moln-toyohashi.com/',
  },
  {
    id: 4, 
    title: 'スプレッドシート更新対応 スライダー付き特集ページ', 
    inCharge:'要件定義・UI/UXデザイン・フロントエンド開発・データ連携構築',
    skills:'JavaScript, GAS (Google Apps Script), HTML5, CSS',
    task:'非エンジニアの運用担当者でもコードを直接編集せずにスライダーコンテンツを更新できる仕組みの構築が課題でした。静的ファイルの高速な表示パフォーマンスを維持しつつ、更新作業の手間を最小限に抑える運用フローの確立と、アクセシビリティを考慮したUI実装を目指しました。',
    workOn: [
      '・GASを活用した更新データ生成パイプライン： Googleスプレッドシートの入力データをGASで自動整形し、最小限のデータ量に最適化したJSONファイルを生成・出力する基盤を構築。',
      '・JSON駆動のスライダー実装とアクセシビリティ（a11y）配慮： 出力されたJSONデータを基にHTMLへ描画。キーボード操作やスクリーンリーダーへの配慮、スムーズなアニメーションなど、誰もが快適に操作できるコンポーネントを設計。'
    ],
    result: 'データの作成・整形の自動化により運用側の更新ミスや工数を削減。サーバサイドの動的処理を挟まない静的JSON運用としたことで、高い表示パフォーマンスと安定性を確保しながら、ユーザーアクセシビリティに優れたUIを実現しました。', 
    img:workImg04,
    mockImg:mockImg04,
    link:'https://nishinkazunoko.github.io/perth/',
  },
  {
    id: 5, 
    title: '【SEO最適化・CMS設計】家庭教師ポータル・プロフィールサイト', 
    inCharge:'要件定義・UI/UXデザイン・WordPress構築・フロントエンド開発・SEO実装',
    skills:'WordPress, PHP, HTML5, CSS, JavaScript',
    task:'信頼感が求められる家庭教師のプロフィール紹介に加え、将来的なブログ運用やコンテンツ追加を見据えた拡張性の高いWEB基盤の構築が課題でした。あわせて、ターゲット層（保護者・生徒）へ確実にアプローチできるよう、検索エンジンに評価されやすいSEO内部対策の徹底を目指しました。',
    workOn: [
      '・将来の拡張性を見越したWordPress構造設計： 今後のブログ展開や記事・お知らせ投稿をスムーズに行えるよう、カスタム投稿タイプやカテゴリー設計を最適化。',
      '・SEO内部対策とセマンティックなマークアップ： 適切なHTML構造化、メタタグの最適化、表示速度を意識した軽量なコーディングにより、検索エンジンへの最適化を徹底。また、口コミを掲載することでCV率アップに貢献しました。'
    ],
    result: 'コンテンツの追加・管理が容易なCMS環境を構築し、今後の運用拡張に対応できるサイト基盤を完成させました。また、徹底したSEO対策により検索視認性を高め、集客・ブランディングに寄与するWEBサイトを実現しました。', 
    img:workImg05,
    mockImg:mockImg05,
    link:'https://tutor-prodigy.com',
  },
]
