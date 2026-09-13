import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Profile.module.css';
import profileImg01 from './images/profile01.jpg';
import profileImg02 from './images/profile02.jpg';
import profileImg03 from './images/profile03.jpg';

gsap.registerPlugin(ScrollTrigger);

function Profile() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = [
        { img: '#profileImg01', text: '#cont01' },
        { img: '#profileImg02', text: '#cont02' },
        { img: '#profileImg03', text: '#cont03' },
      ];

      const allImgs = containerRef.current.querySelectorAll(`.${styles['profile-img']}`);
      const firstImg = containerRef.current.querySelector(items[0].img);
      const firstText = containerRef.current.querySelector(items[0].text);

      gsap.set(allImgs, { opacity: 0, scale: 0.96 });
      gsap.set(firstImg, { opacity: 1, scale: 1 });
      firstText.classList.add(styles.active);

      items.forEach((item, index) => {
        const targetImg = containerRef.current.querySelector(item.img);
        const targetText = containerRef.current.querySelector(item.text);

        ScrollTrigger.create({
          trigger: targetText,
          start: 'top 85%',
          end: 'bottom 20%',
          onEnter: () => switchImage(allImgs, targetImg),
          onEnterBack: () => switchImage(allImgs, targetImg),
        });

        ScrollTrigger.create({
          trigger: targetText,
          start: 'top 75%',
          end: 'bottom 35%',
          toggleClass: {
            targets: targetText,
            className: styles.active,
          },
        });
      });

      function switchImage(allImgs, targetImg) {
        gsap.to(allImgs, {
          opacity: 0,
          scale: 0.96,
          duration: 0.5,
          ease: 'power2.out',
        });
        gsap.to(targetImg, {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: 'power2.out',
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.profile} ref={containerRef}>
      <div className={styles['profile-imgs']}>
        <img src={profileImg01} alt="" id="profileImg01" className={styles['profile-img']} />
        <img src={profileImg02} alt="" id="profileImg02" className={styles['profile-img']} />
        <img src={profileImg03} alt="" id="profileImg03" className={styles['profile-img']} />
      </div>

      <div className={styles['profile-texts']}>
        <p id="cont01" className={styles['profile-text']}>
          2019年 — 医療法人るぷてぃらぱん（医療事務・広報）<br />
          医療事務に従事する傍ら、WordPressを用いたサイト更新・広報業務を担当。現場での運用経験を通じてWeb制作の可能性に魅了され、Web業界への挑戦を決意し退職。
        </p>
        <p id="cont02" className={styles['profile-text']}>
          2021年 — 株式会社流行発信（Webコーダー）<br />
          約1年間、Webコーダーとして実務経験を積む。基礎的なマークアップからモダンなコーディング手法まで幅広く修得。
        </p>
        <p id="cont03" className={styles['profile-text']}>
          2022年10月〜現在 — 株式会社ブレストメディアサポート（Webエンジニア / コーダー）<br />
          大手メディアポータルサイトの運営をはじめ、LPやコーポレートサイトなど多数のWebサイト制作・運用を担当。<br />
          単に見た目を再現するだけでなく、アクセシビリティを考慮したセマンティックなHTML構造や、検索順位上位化を見据えたSEO設計を徹底し、クライアントの認知度・集客拡大に大きく貢献。<br /><br />
          さらに近年ではWebサイト制作にとどまらず、GAS（Google Apps Script）を活用した業務自動化ツールの開発や、Googleスプレッドシートと連携したWebサービスの構築まで対応。「クライアント側で管理・運用しやすい設計」を第一に考え、技術で業務課題を解決する制作スタイルを強みとしています。
        </p>
      </div>
    </div>
  );
}

export default Profile;