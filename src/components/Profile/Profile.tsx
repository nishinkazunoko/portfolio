import { useState } from 'react';
import styles from './Profile.module.css';
import cargImg01 from './images/card01.png';
import cargImg02 from './images/card02.png';
import cargImg03 from './images/card03.png';
import { ProfileDetail, type CardType } from './ProfileDetail';
function Profile() {
  // 表示中の詳細画面タイプ
  const [selectedCard, setSelectedCard] = useState<CardType | null>(null);
  // 回転アニメーション中のカードタイプ
  const [rotatingCard, setRotatingCard] = useState<CardType | null>(null);

  // カードがクリックされたときの処理
  const handleCardClick = (type: CardType) => {
    // 1. 回転アニメーション用のクラスを付与
    setRotatingCard(type);

    // 2. アニメーション完了（0.8秒後）に詳細ページを表示
    setTimeout(() => {
      setSelectedCard(type);
      setRotatingCard(null); // 回転状態をリセット
    }, 800);
  };

  // 詳細ページを表示中の場合
  if (selectedCard) {
    return (
      <ProfileDetail
        activeType={selectedCard}
        onSelectCard={(type) => setSelectedCard(type)}
        onBackToTop={() => setSelectedCard(null)}
      />
    );
  }

  // 初期一覧画面
  return (
    <div className={styles.profile}>
      <ul className={styles['profile__cards']}>

        {/* CARD 1: CAREER */}
        <li
          className={`
            ${styles['profile__card']}
            ${rotatingCard === 'CAREER' ? styles['is-rotating'] : ''}
          `}
          onClick={() => handleCardClick('CAREER')}
        >
          <div className={styles['profile__front']}>
            <img src={cargImg01} alt="CAREER" />
          </div>
        </li>

        {/* CARD 2: SKILLS */}
        <li
          className={`
            ${styles['profile__card']}
            ${rotatingCard === 'SKILLS' ? styles['is-rotating'] : ''}
          `}
          onClick={() => handleCardClick('SKILLS')}
        >
          <div className={styles['profile__front']}>
            <img src={cargImg02} alt="SKILLS" />
          </div>
        </li>

        {/* CARD 3: HOBBY */}
        <li
          className={`
            ${styles['profile__card']}
            ${rotatingCard === 'HOBBY' ? styles['is-rotating'] : ''}
          `}
          onClick={() => handleCardClick('HOBBY')}
        >
          <div className={styles['profile__front']}>
            <img src={cargImg03} alt="HOBBY" />
          </div>
        </li>

      </ul>
    </div>
  );
}

export default Profile;