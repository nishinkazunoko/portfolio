import styles from './ProfileDetail.module.css';
import profileImg01 from './images/profile01.jpg'; // CAREER用画像
import cargImg01 from './images/card01.png';
import cargImg02 from './images/card02.png';
import cargImg03 from './images/card03.png';
import type { CardType } from './ProfileDetail';

export type CardType = 'CAREER' | 'SKILLS' | 'HOBBY';

interface ProfileDetailProps {
  activeType: CardType;
  onSelectCard: (type: CardType) => void;
  onBackToTop: () => void;
}

// 1. 各カードの詳細データをまとめて管理
interface SectionDetail {
  title: string;
  image?: string; // 画像はあってもなくてもOK（optional）
  texts: {
    heading?: string;
    body: string;
  }[];
}

const DETAIL_DATA: Record<CardType, SectionDetail> = {
  CAREER: {
    title: 'CAREER',
    image: profileImg01, // CAREERのみ画像をセット
    texts: [
      {
        heading: '2019年 〜 医療法人るぷてぃらぱん（医療事務・広報）',
        body: '医療事務に従事する傍ら、WordPressを用いたサイト更新・広報業務を担当。現場での運用経験を通じてWeb制作の可能性に魅了され、Web業界への挑戦を決意し退職。',
      },
      {
        heading: '2021年 〜 株式会社流行発信（Webコーダー）',
        body: '約1年間、Webコーダーとして実務経験を積む。基礎的なマークアップからモダンなコーディング手法まで幅広く修得。',
      },
      {
        heading: '2022年10月〜現在 〜 株式会社ブレストメディアサポート（Webエンジニア / コーダー）',
        body: '大手メディアポータルサイトの運営をはじめ、LPやコーポレートサイトなど多数のWebサイト制作・運用を担当。',
      },
    ],
  },
  SKILLS: {
    title: 'SKILLS',
    // image は指定しない（画像なし）
    texts: [
      {
        heading: 'HTML / CSS / Sass / JavaScript',
        body: 'セマンティックなマークアップ、レスポンシブ対応、CSS/SCSS設計、JavaScriptによる動きのあるUI実装。',
      },
      {
        heading: 'React / TypeScript / Next.js',
        body: 'コンポーネント設計、状態管理、モダンなフロントエンド開発。',
      },
    ],
  },
  HOBBY: {
    title: 'HOBBY',
    // image は指定しない（画像なし）
    texts: [
      {
        heading: 'Web制作・個人開発',
        body: '新しい技術に触れたり、インタラクティブなUIを作成するのが好きです。',
      },
    ],
  },
};

// サムネイルカード用のデータ
const CARD_THUMBNAILS: Record<CardType, { title: string; img: string }> = {
  CAREER: { title: 'CAREER', img: cargImg01 },
  SKILLS: { title: 'SKILLS', img: cargImg02 },
  HOBBY: { title: 'HOBBY', img: cargImg03 },
};

export function ProfileDetail({ activeType, onSelectCard, onBackToTop }: ProfileDetailProps) {
  const currentData = DETAIL_DATA[activeType];

  // 表示中以外の2つのタイプを抽出
  const otherTypes = (['CAREER', 'SKILLS', 'HOBBY'] as CardType[]).filter(
    (type) => type !== activeType
  );

  return (
    <div className={styles.detailContainer}>
      {/* メイン詳細エリア */}
      <section className={styles.mainContent}>
        <h2 className={styles.title}>{currentData.title}</h2>

        <div className={styles.contentBody}>
          {/* ★ 画像が存在する場合のみ表示する（オプショナルレンダリング） */}
          {currentData.image && (
            <div className={styles.imageWrapper}>
              <img
                src={currentData.image}
                alt={currentData.title}
                className={styles.profileImg}
              />
            </div>
          )}

          {/* テキスト表示部分（共通フォーマット） */}
          <div className={styles.textsWrapper}>
            {currentData.texts.map((item, index) => (
              <div key={index} className={styles.textBlock}>
                {item.heading && <h3 className={styles.heading}>{item.heading}</h3>}
                <p className={styles.bodyText}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 下部の他の2枚のカード */}
      <nav className={styles.otherCardsSection}>
        <p className={styles.subTitle}>OTHER CARDS</p>
        <div className={styles.otherCardsGrid}>
          {otherTypes.map((type) => (
            <div
              key={type}
              className={styles.subCard}
              onClick={() => onSelectCard(type)}
            >
              <img src={CARD_THUMBNAILS[type].img} alt={type} />
              <span>{CARD_THUMBNAILS[type].title}</span>
            </div>
          ))}
        </div>
      </nav>

      {/* 最下部：TOPへ戻る */}
      <div className={styles.backButtonArea}>
        <button className={styles.backButton} onClick={onBackToTop}>
          profile TOPへもどる
        </button>
      </div>
    </div>
  );
}