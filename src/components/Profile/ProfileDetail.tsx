import { useEffect } from 'react';
import styles from './ProfileDetail.module.css';
import profileImg01 from './images/profile01.jpg'; 
import cargImg01 from './images/card01.png';
import cargImg02 from './images/card02.png';
import cargImg03 from './images/card03.png';
import { SkillsDetail } from './SkillsDetail';
export type CardType = 'CAREER' | 'SKILLS' | 'HOBBY';

interface ProfileDetailProps {
  activeType: CardType;
  onSelectCard: (type: CardType) => void;
  onBackToTop: () => void;
}

interface SectionDetail {
  title: string;
  image?: string;
  texts: {
    heading?: string;
    body: string;
  }[];
}

const DETAIL_DATA: Record<CardType, SectionDetail> = {
  CAREER: {
    title: 'CAREER',
    image: profileImg01,
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
        body: 'Webコーダーとして、大手メディアポータルサイトの運営をはじめ、Webサイト・Webツールの実装、サイトの制作・保守を担当。REST APIやGASを活用したツール開発・データ連携にも対応。',
      },
    ],
  },
  SKILLS: {
    title: 'SKILLS',
    texts: [
      {
        heading: '',
        body: '',
      },
    ],
  },
  HOBBY: {
    title: 'HOBBY',
    texts: [
      {
        heading: 'Web制作・個人開発',
        body: '新しい技術に触れたり、インタラクティブなUIを作成するのが好きです。',
      },
      {
        heading: '英語の勉強',
        body: '夢である「英検一級合格」に向けて日々単語を中心に勉強に励んでいます。',
      },
      {
        heading: 'バレエ',
        body: '幼少期にモダンバレエを習っていたことがきっかけで、2024年に15年ぶりにバレエを再開しました。今の目標は、トゥシューズを履いて踊ることです。',
      },
      {
        heading: '麻雀',
        body: '2026年8月に木村拓哉さんのYoutubeチャンネルを見たことがきっかけで麻雀を始めました。今は雀荘の麻雀教室にも通いながら、フリーで打てる日を目指し、楽しくプレイしています。',
      },
    ],
  },
};

const CARD_THUMBNAILS: Record<CardType, { title: string; img: string }> = {
  CAREER: { title: 'CAREER', img: cargImg01 },
  SKILLS: { title: 'SKILLS', img: cargImg02 },
  HOBBY: { title: 'HOBBY', img: cargImg03 },
};

export function ProfileDetail({ activeType, onSelectCard, onBackToTop }: ProfileDetailProps) {
  const currentData = DETAIL_DATA[activeType];

  const otherTypes = (['CAREER', 'SKILLS', 'HOBBY'] as CardType[]).filter(
    (type) => type !== activeType
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeType])

  return (
    <div className={styles.detailContainer}>
  
      {activeType === 'SKILLS' ? (
        <SkillsDetail />
      ) : (
        <section className={styles.mainContent}>
          <h2 className={styles.title}>{currentData.title}</h2>
  
          <div className={styles.contentBody}>
            {currentData.image && (
              <div className={styles.imageWrapper}>
                <img
                  src={currentData.image}
                  alt={currentData.title}
                  className={styles.profileImg}
                  loading='eager'
                />
              </div>
            )}
  
            <div className={styles.textsWrapper}>
              {currentData.texts.map((item, index) => (
                <div key={index} className={styles.textBlock}>
                  {item.heading && (
                    <h3 className={styles.heading}>{item.heading}</h3>
                  )}
                  <p className={styles.bodyText}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
  
      <nav className={styles.otherCardsSection}>
        <div className={styles.otherCardsGrid}>
          {otherTypes.map((type) => (
            <div
              key={type}
              className={styles.subCard}
              onClick={() => onSelectCard(type)}
            >
              <img src={CARD_THUMBNAILS[type].img} alt={type} />
            </div>
          ))}
        </div>
      </nav>
  
      <div className={styles.backButtonArea}>
        <button className={styles.backButton} onClick={onBackToTop}>
          profile TOPへもどる
        </button>
      </div>
  
    </div>
  );
}