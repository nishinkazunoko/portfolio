import { useState } from 'react';
import styles from './Profile.module.css';
import cargImg01 from './images/card01.png';
import cargImg02 from './images/card02.png';
import cargImg03 from './images/card03.png';
import { ProfileDetail, type CardType } from './ProfileDetail';
function Profile() {
  const [selectedCard, setSelectedCard] = useState<CardType | null>(null);
  const [rotatingCard, setRotatingCard] = useState<CardType | null>(null);

  const handleCardClick = (type: CardType) => {
    setRotatingCard(type);

    setTimeout(() => {
      setSelectedCard(type);
      setRotatingCard(null); 
    }, 800);
  };

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