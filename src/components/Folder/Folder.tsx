import {useState} from 'react';
import { Link } from 'react-router-dom';
import styles from './Folder.module.css';
import confetti from 'canvas-confetti';
import MagicWorldEnter from '../MaigicWorld/MagicWorld-enter';

function Folders() {
  // 初回かどうかの判定
  const [isFirstVisit] = useState(() => {
    return !sessionStorage.getItem('hasVisitedLoading');
  });

  const triggerMagicConfetti = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x =
      (rect.left + rect.width / 2) / window.innerWidth;

    const y =
      (rect.top + rect.height / 2.8) / window.innerHeight;

    confetti({
      particleCount: 200,
      spread: 100,
      startVelocity: 15,
      origin: { x, y },
      colors: ['#E36B2D', '#4242D1', '#FFE699', '#FFFFFF'],
      ticks: 100,
      gravity: 0.8,
      scalar: 0.7,
      shapes: ['circle', 'square'],
      disableForReducedMotion: true,
    });
  };

  return (
    <>
      {/* =========================
          Folders
      ========================= */}

      <div className={`${styles.folders} ${isFirstVisit ? styles['firstVisit'] : ''}`}>
        {/* Profile */}
        <Link
          to="/profile/"
          className={styles['icon-item']}
        >
          <div
            className={`${styles['present-container']} ${styles.col1}`}
            onMouseEnter={triggerMagicConfetti}
          >
            <div className={styles['present-box']}>

              {/* ---------- lid ---------- */}
              <div className={styles['present-lid']}>
                <div className={styles['ribbon-wrapper']}>
                  <div className={styles['loop-left']} />
                  <div className={styles['loop-right']} />
                  <div className={styles['center-knot']} />
                  <div className={styles['tail-left']} />
                  <div className={styles['tail-right']} />
                </div>

                <div className={styles['ribbon-vertical']} />
                <div className={styles['ribbon-horizontal']} />
              </div>

              {/* ---------- body ---------- */}
              <div className={styles['box-body']}>
                <div className={styles['ribbon-vertical']} />
              </div>

              {/* ---------- text ---------- */}
              <div className={styles['present-content']}>
                <p className="cinzel">
                  Go to Profile
                </p>
              </div>

            </div>
          </div>
        </Link>

        {/* Works */}
        <Link
          to="/works/"
          className={styles['icon-item']}
        >
          <div
            className={`${styles['present-container']} ${styles.col2}`}
            onMouseEnter={triggerMagicConfetti}
          >
            <div className={styles['present-box']}>

              {/* ---------- lid ---------- */}
              <div className={styles['present-lid']}>
                <div className={styles['ribbon-wrapper']}>
                  <div className={styles['loop-left']} />
                  <div className={styles['loop-right']} />
                  <div className={styles['center-knot']} />
                  <div className={styles['tail-left']} />
                  <div className={styles['tail-right']} />
                </div>

                <div className={styles['ribbon-vertical']} />
                <div className={styles['ribbon-horizontal']} />
              </div>

              {/* ---------- body ---------- */}
              <div className={styles['box-body']}>
                <div className={styles['ribbon-vertical']} />
              </div>

              {/* ---------- text ---------- */}
              <div className={styles['present-content']}>
                <p className="cinzel">
                  Go to Works
                </p>
              </div>

            </div>
          </div>
        </Link>
      </div>

      {/* =========================
          Magic World
      ========================= */}

      <MagicWorldEnter />
    </>
  );
}

export default Folders;