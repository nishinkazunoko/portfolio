import { useState, useEffect } from 'react';
import styles from './Loading.module.css';

function Loading() {
  // const [loading, setLoading] = useState(true);
  const [loading, setLoading] = useState(() => {
    const hasVisited = sessionStorage.getItem('hasVisitedLoading');
    return !hasVisited; 
  });


  const handleAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>) => {
    // 最後に実行される curtainUp アニメーションが終わった時だけ非表示にする
    if (e.animationName.includes('curtainUp')) {
      setLoading(false);
      sessionStorage.setItem('hasVisitedLoading', 'true');
    }
  };

  if (!loading) return null;

  return (
    <div
      id="loading"
      className={styles.loading}
      aria-label="読み込み中"
    >
      <div className={styles.redBg} />

      <div
        className={styles.content}
        onAnimationEnd={handleAnimationEnd}
      >
        <div className={styles.text}>
          <p>
            <b>
              技術で当たり前を創る。
              <br />
              すべての人へ届く、妥協しないWeb体験。
            </b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Loading;