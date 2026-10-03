import styles from './Skills.module.css';
import skillImg01 from './images/icon-html.png';
import skillImg02 from './images/icon-css.png';
import skillImg03 from './images/icon-js.png';
import skillImg04 from './images/icon-php.png';
import skillImg05 from './images/icon-wp.png';
import skillImg06 from './images/icon-nextJs.png';
import skillImg07 from './images/icon-react.png';

const SKILLS_DATA = [
  {
    name: 'HTML',
    icon: skillImg01,
    experience: '実務経験: 5年以上',
    detail: 'アクセシビリティやSEO構造を意識したセマンティックなマークアップ。ポータルサイトや大規模メディアでの保守・制作経験。',
  },
  {
    name: 'CSS / Sass',
    icon: skillImg02,
    experience: '実務経験: 5年以上',
    detail: 'BEM設計に基づいた保守性の高いスタイル管理。レスポンシブ対応、Sass(SCSS)によるモジュール設計。',
  },
  {
    name: 'JavaScript',
    icon:skillImg03,
    experience: '実務経験: 5年以上',
    detail: 'DOM操作、非同期処理(Fetch/Async)、REST API連携、GASを活用した社内業務効率化ツールの開発・データ連携実績。',
  },
  {
    name: 'PHP',
    icon: skillImg04,
    experience: '実務経験: 4年以上',
    detail: 'WordPressオリジナルテーマ構築、includeによるコンポーネント共通化、日時指定のコンテンツ自動表示制御（タイマー公開）',
  },
  {
    name: 'Wordpress',
    icon: skillImg05,
    experience: '実務経験: 4年以上',
    detail: 'オリジナルテーマのゼロからの構築、カスタム投稿タイプ/カスタムフィールド設計、メディアポータルサイト等の保守・運用。',
  },
  {
    name: 'Next.js',
    icon: skillImg06,
    experience: '個人開発: 1年以上',
    detail: 'Hooks（useState/useEffect等）を用いたコンポーネント指向の開発。個人制作での便利ツールやWebアプリの実装経験。',
  },
  {
    name: 'React.js',
    icon: skillImg07,
    experience: '個人開発: 1年以上',
    detail: 'App Router / Pages Router を用いたポートフォリオやWebアプリの構築。Vercelへの自動デプロイ・ルーティング設定。',
  },
];

export function SkillsDetail() {
  return (
    <div className={styles.skill}>
       <h2>SKILLS</h2>
      <div className={styles.skillCards}>
        {SKILLS_DATA.map((skill) => (
          <div key={skill.name} className={styles.skillCard}>
            <img src={skill.icon} alt="" />
            <h3>{skill.name}</h3>
            <p>{skill.experience}</p>
            <p className={styles.detail}>{skill.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}