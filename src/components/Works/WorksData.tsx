import workImg01 from './images/1.webp'
import workImg02 from './images/2.webp'
import workImg03 from './images/3.webp'
import workImg04 from './images/4.webp'
import mockImg01 from './images/mock01.png'
import mockImg02 from './images/mock02.png'
import mockImg03 from './images/mock03.png'


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
    title: '先発医薬品の選定療養 差額算定ツールの開発 GASを活用したデータ軽量化と、業務効率を高める高速表示の実装', 
    inCharge:' システム設計・データ構造最適化・フロントエンド実装',
    skills:'HTML5, CSS, JavaScript, JSON, GAS',
    task:'2024年10月の医療制度改定（後発医薬品が存在する先発医薬品を希望した際の特別料金導入）に伴い、患者への説明や現場での事前計算を円滑に行うための算定ツールの開発を担当。業務フローを止めない迅速な表示と正確性が求められました。約1,000件規模に及ぶ医薬品・価格データの保持管理において、非エンジニアの運用担当者が更新しやすく、かつブラウザ上で遅延なく高速表示・検索できるデータ構造と連携フローの構築を課題として設定しました。',
    workOn: [
      '・運用コストを抑えるマスターデータ設計： 現場のステークホルダーが日常的に扱いやすいGoogleスプレッドシートをデータ管理基盤として採用。',
      '・GAS（Google Apps Script）による自動最適化パイプライン構築： スプレッドシートの生データからツールに必要な最小限のデータ項目のみを抽出し、データサイズを削減した最適化JSONを自動生成・出力するスクリプトを実装。'
    ],
    result: '不要なデータを削ぎ落とした結果、初期ロード時の通信量と描画パフォーマンスが大幅に改善。実務現場（調剤・受付業務等）においてストレスなく瞬時に検索・計算ができる高ユーザビリティなシステムを提供しました。', 
    img:workImg02,
    mockImg:mockImg02,
    link:'',
  },
  {
    id: 3, 
    title: '先発医薬品の選定療養 差額算定ツールの開発 GASを活用したデータ軽量化と、業務効率を高める高速表示の実装', 
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
    title: '先発医薬品の選定療養 差額算定ツールの開発 GASを活用したデータ軽量化と、業務効率を高める高速表示の実装', 
    inCharge:' 要件定義・UI/UXデザイン・フロントエンド開発・構造化データ設計/SEO実装（個人制作 / 制作許可取得済み）',
    skills:', Cursor (Vibe Coding), Node.js, JavaScript',
    task:'Webサイトの表示速度向上（Core Web Vitals対策）において次世代画像（WebP / AVIF）への変換は必須である一方、既存ツールではフォルダ構造を保った一括変換が手間であり、「欲しいツールをアイデア段階からアイデアのスピードのまま即座に形にしたい」という欲求があったこと。',
    workOn: [
      '・Cursorを活用したVibe Coding（AI協調開発）： AIコードエディタ Cursor との対話を重ね、自然言語による指示とフィードバックのサイクル（Vibe Coding）によってアイデアから爆速でツールを組み上げ。',
      '・一括変換パイプラインの実装： 高速画像処理ライブラリ（Sharp等）をベースに、指定ディレクトリ内の画像をフォルダ構造を維持したまままとめてWebP / AVIFへ相互変換・自動圧縮する処理を効率的に実装。'
    ],
    result: 'アイデアから実装・公開までの開発スピードを劇的に短縮し、日常の画像軽量化作業を完全に自動化。制作現場における画像最適化の工数を大幅削減し、WebサイトのCore Web Vitals（表示速度パフォーマンス）向上に貢献。', 
    img:workImg04,
    mockImg:'',
    link:'https://github.com/nishinkazunoko/webp-avif-converter',
  },
]
