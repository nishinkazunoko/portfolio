import { useState } from 'react';
import styles from './Profile.module.css';
import profileImg01 from './images/profile01.jpg';
import cargImg01 from './images/card01.png';
import cargImg02 from './images/card02.png';
import cargImg03 from './images/card03.png';

function Profile() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleClick = (cardNumber: number) => {
    setActiveCard(
      activeCard === cardNumber ? null : cardNumber
    );
  };

  return (
    <div className="profile">
      <ul className={styles['profile__cards']}>

        {/* CARD 1 */}
        <li
          className={`
            ${styles['profile__card']}
            ${styles['profile__card01']}
            ${activeCard === 1 ? styles['is-clicked'] : ''}
          `}
          onClick={() => handleClick(1)}
        >
          <div className={styles['profile__front']} >
            <img src={cargImg01} alt="" />
          </div>
          <div className={styles['profile__black']}></div>
          <div className={styles['profile__back']}>
            <img
              src={profileImg01}
              alt=""
              width={300}
            />
            <div className="career__texts">
              <p className={styles['career__text']}>
                2019年 — 医療法人るぷてぃらぱん（医療事務・広報）
                <br />
                医療事務に従事する傍ら、WordPressを用いたサイト更新・広報業務を担当。
                現場での運用経験を通じてWeb制作の可能性に魅了され、Web業界への挑戦を決意し退職。
              </p>

              <p className={styles['career__text']}>
                2021年 — 株式会社流行発信（Webコーダー）
                <br />
                約1年間、Webコーダーとして実務経験を積む。
                基礎的なマークアップからモダンなコーディング手法まで幅広く修得。
              </p>

              <p className={styles['career__text']}>
                2022年10月〜現在 — 株式会社ブレストメディアサポート
                （Webエンジニア / コーダー）
                <br />
                大手メディアポータルサイトの運営をはじめ、
                LPやコーポレートサイトなど多数のWebサイト制作・運用を担当。
                <br />
                単に見た目を再現するだけでなく、
                アクセシビリティを考慮したセマンティックなHTML構造や、
                検索順位上位化を見据えたSEO設計を徹底し、
                クライアントの認知度・集客拡大に大きく貢献。
                <br />
                さらに近年ではWebサイト制作にとどまらず、
                GAS（Google Apps Script）を活用した業務自動化ツールの開発や、
                Googleスプレッドシートと連携したWebサービスの構築まで対応。
                「クライアント側で管理・運用しやすい設計」を第一に考え、
                技術で業務課題を解決する制作スタイルを強みとしています。
              </p>
            </div>
          </div>
        </li>

        {/* CARD 2 */}
        <li
          className={`
            ${styles['profile__card']}
            ${styles['profile__card01']}
            ${activeCard === 2 ? styles['is-clicked'] : ''}
          `}
          onClick={() => handleClick(2)}
        >
          <div className={styles['profile__front']}>
            <img src={cargImg02} alt="" />
          </div>
          <div className={styles['profile__black']}></div>
          <div className={styles['profile__back']}></div>
        </li>

        {/* CARD 3 */}
        <li
          className={`
            ${styles['profile__card']}
            ${styles['profile__card01']}
            ${activeCard === 3 ? styles['is-clicked'] : ''}
          `}
          onClick={() => handleClick(3)}
        >
          <div className={styles['profile__front']} >
            <img src={cargImg03} alt="" />
          </div>
          <div className={styles['profile__black']}></div>
          <div className={styles['profile__back']}></div>
        </li>

      </ul>
    </div>
  );
}

export default Profile;
