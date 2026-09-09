import { useEffect, useRef, useState } from 'react'

interface WorkItem{
  id:number,
  title:string,
  desc:string,
  link:string,
  skills:string,

}
// モットー：デジタル庁が作成したウェブアクセシビリティPDFを参考に誰もが平等にアクセスできるサイトを作る
export const worksData :WorkItem[] =[
  {
    id: 1, 
    title: '先発医薬品の加算額シミュレーターページの制作', 
    desc: '2024年10月1日より後発品（ジェネリック薬）がある先発医薬品を患者が希望した場合に料金が加算されるようになったため、従来の料金とどれぐらい差額が出るのかを計算するツールを作成しました。', 
    link: 'https://www.chunichi.co.jp/feature_pages/sentei', 
    skills:'HTML、CSS、vanilla.js、GAS（JSONファイルの作成）'
  },
  {
    id: 2, 
    title: '140周年記念　中日新聞コーポレートページの制コーディング', 
    desc: '', 
    link: 'https://www.chunichi.co.jp/info', 
    skills:'HTML、CSS（Sass）、vanilla.js、GAS（JSONファイルの作成）'
  },
  {
  id: 3, 
  title: 'あいちスポーツイノベーションコンソーシアム AiSIAのコーディング', 
  desc: '愛知県様より、アクセシビリティに考慮してほしいとのご依頼でセマンティックなコーディングを意識しました。', 
  link: 'https://sports-aisia.jp', 
  skills:'PHP、CSS（Sass）、vanilla.js、wordpress（カスタム構築＆一部の機能のみをページに出力）'
  },
  {
    id: 4, 
    title: 'photostudio moln様の公式サイト制作', 
    desc: '「豊橋　ニューボーンフォト」で検索時に上位に表示されるよう構造化データや、セマンティックコーディングを意識し、常時検索結果で上位を取得することができています。', 
    link: 'https://moln-toyohashi.com', 
    skills:'PHP、CSS（Sass）、vanilla.js'
  },
  {
    id: 5, 
    title: '各LPのコーディング（1）', 
    desc: '中日ドラゴンズ×読売ジャイアンツ LEGENDS MATCH 2026', 
    link: 'https://static.chunichi.co.jp/chunichi/pages/event/legendsmatch/', 
    skills:'HTML、CSS（Sass）、vanilla.js'
  },
  {
    id: 6, 
    title: '【個人開発】　英検準一級の単語学習ツールの制作', 
    desc: '', 
    link: 'https://tango-black.vercel.app/index.html', 
    skills:'HTML、CSS（Sass）、vanilla.js'
  },
]
