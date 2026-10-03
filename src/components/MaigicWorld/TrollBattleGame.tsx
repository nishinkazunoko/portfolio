import React, { useState, useEffect, useRef } from 'react';
import styles from './MagicWorld.module.css';
import Wand from '../Wand/Wand';
import Monster from './images/monster.png'
type GameState = 'TUTORIAL' | 'PLAYING' | 'CLEAR' | 'GAMEOVER';

interface Target {
  id: number;
  name: string;
  offsetX: number;
  offsetY: number;
  radius: number;
}

const TARGET_LIST: Target[] = [
  { id: 1, name: '頭部', offsetX: 0, offsetY: -50, radius: 26 },    // 顔・鼻のあたり
  { id: 2, name: '右腕', offsetX: -95, offsetY: 10, radius: 24 },   // 右手のこんぼう
  { id: 3, name: '左腕', offsetX: 60, offsetY: 50, radius: 24 },    // 左手（向かって右下）
  { id: 4, name: '胸部', offsetX: 0, offsetY: 15, radius: 26 },     // 服の上部
  { id: 5, name: '腹部', offsetX: 0, offsetY: 65, radius: 24 },     // 服の下部・足元付近
];

// --- 1文字ずつタイピング表示するコンポーネント ---
interface TypewriterTextProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
  className?: string;
  isActive?: boolean;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 100,
  onComplete,
  className = '',
  isActive = true,
}) => {
  const [displayedText, setDisplayedText] = useState('');

  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    setDisplayedText('');
    let index = 0;

    const timer = setInterval(() => {
      index++;
      if (index <= text.length) {
        setDisplayedText(text.slice(0, index));
      } else {
        clearInterval(timer);
        if (onCompleteRef.current) {
          onCompleteRef.current();
        }
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <p
      className={`${styles.typewriterLine} ${
        isActive ? styles.activeCursor : ''
      } ${className}`}
    >
      {displayedText}
    </p>
  );
};

// --- メインコンポーネント ---
export const TrollBattleGame: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('TUTORIAL');
  const [timeLeft, setTimeLeft] = useState<number>(15);
  const [currentTargetIndex, setCurrentTargetIndex] = useState<number>(0);
  const [typingStep, setTypingStep] = useState<number>(0);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameId = useRef<number | null>(null);
  const trollImageRef = useRef<HTMLImageElement | null>(null);
  const isImageLoadedRef = useRef<boolean>(false);

  const swingAngleRef = useRef<number>(0);
  const particlesRef = useRef<
    Array<{ x: number; y: number; vx: number; vy: number; alpha: number; color: string }>
  >([]);

  useEffect(() => {
    const img = new Image();
    img.src = Monster;
    img.onload = () => {
      isImageLoadedRef.current = true;
    };
    trollImageRef.current = img;
  }, []);

  // 制限時間タイマー
  useEffect(() => {
    if (gameState !== 'PLAYING') return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setGameState('GAMEOVER');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState]);

  // Canvas描画ループ
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let startTime = performance.now();

    const render = (time: number) => {
      const elapsed = (time - startTime) / 1000;
      const swingX = Math.sin(elapsed * 2.5) * 40;
      swingAngleRef.current = swingX;

      const centerX = canvas.width / 2 + swingX;
      const centerY = canvas.height / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. 足元の影
      ctx.beginPath();
      ctx.ellipse(canvas.width / 2 + swingX * 0.3, centerY + 120, 80, 16, 0, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 0, 0, 0.35)';
      ctx.fill();

      // 2. PNGトロール画像の描画 (300px × 300px 正方形)
      const imgWidth = 300;
      const imgHeight = 300;

      if (isImageLoadedRef.current && trollImageRef.current) {
        ctx.drawImage(
          trollImageRef.current,
          centerX - imgWidth / 2,
          centerY - imgHeight / 2,
          imgWidth,
          imgHeight
        );
      } else {
        // 画像読み込み完了前のフォールバック表示
        ctx.fillStyle = '#6b8e23';
        ctx.beginPath();
        ctx.arc(centerX, centerY, 80, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3. ターゲット（的）の描画
      if (gameState === 'PLAYING' && currentTargetIndex < TARGET_LIST.length) {
        const target = TARGET_LIST[currentTargetIndex];
        const targetX = centerX + target.offsetX;
        const targetY = centerY + target.offsetY;

        ctx.save();
        ctx.translate(targetX, targetY);
        ctx.rotate(elapsed * 3);
        ctx.beginPath();
        ctx.arc(0, 0, target.radius + 6, 0, Math.PI * 2);
        ctx.setLineDash([8, 6]);
        ctx.strokeStyle = '#ffdd44';
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.restore();

        ctx.beginPath();
        ctx.arc(targetX, targetY, target.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 50, 50, 0.4)';
        ctx.fill();
        ctx.strokeStyle = '#ff3333';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(targetX - target.radius - 4, targetY);
        ctx.lineTo(targetX + target.radius + 4, targetY);
        ctx.moveTo(targetX, targetY - target.radius - 4);
        ctx.lineTo(targetX, targetY + target.radius + 4);
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // 4. 打撃パーティクルの描画
      particlesRef.current.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.03;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${Math.max(0, p.alpha)})`;
        ctx.fill();

        if (p.alpha <= 0) {
          particlesRef.current.splice(index, 1);
        }
      });

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [gameState, currentTargetIndex]);

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (gameState !== 'PLAYING' || currentTargetIndex >= TARGET_LIST.length) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const swingX = swingAngleRef.current;
    const centerX = canvas.width / 2 + swingX;
    const centerY = canvas.height / 2;

    const target = TARGET_LIST[currentTargetIndex];
    const targetX = centerX + target.offsetX;
    const targetY = centerY + target.offsetY;

    const dist = Math.hypot(clickX - targetX, clickY - targetY);

    if (dist <= target.radius + 10) {
      for (let i = 0; i < 20; i++) {
        particlesRef.current.push({
          x: targetX,
          y: targetY,
          vx: (Math.random() - 0.5) * 12,
          vy: (Math.random() - 0.5) * 12,
          alpha: 1,
          color: '255, 220, 50',
        });
      }

      if (currentTargetIndex + 1 >= TARGET_LIST.length) {
        setGameState('CLEAR');
      } else {
        setCurrentTargetIndex((prev) => prev + 1);
      }
    }
  };

  const startGame = () => {
    setCurrentTargetIndex(0);
    setTimeLeft(15);
    setGameState('PLAYING');
    setTypingStep(0);
  };

  return (
    <div className={styles.gameContainer}>
      <Wand />

      <div className={styles.uiHeader}>
        <div className={styles.timer}>TIMER: {timeLeft}s</div>
        <div className={styles.progress}>
          TARGET: {currentTargetIndex} / {TARGET_LIST.length}
        </div>
      </div>

      <canvas
        ref={canvasRef}
        width={700}
        height={500}
        onClick={handleCanvasClick}
        className={styles.canvas}
      />

      {/* チュートリアルモーダル */}
      {gameState === 'TUTORIAL' && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h2>魔法界へ迷い込んでしまったようだ......!</h2>

            <div className={styles.typewriterContainer}>
              <TypewriterText
                text="あ！トロールに見つかってしまった！"
                speed={100}
                isActive={typingStep === 0}
                onComplete={() => setTypingStep(1)}
              />

              {typingStep >= 1 && (
                <TypewriterText
                  text="トロールを倒して魔法界から人間界へ戻ろう！"
                  speed={100}
                  isActive={typingStep === 1}
                  onComplete={() => setTypingStep(2)}
                />
              )}
            </div>

            {typingStep >= 2 && (
              <>
                <div className={`${styles.ruleBox} ${styles.fadeIn}`}>
                  <p>⚡ 杖でトロールの体に現れる5つの的を狙い撃って！</p>
                  <p>⏱ 制限時間: 15秒</p>
                  <p>このゲームはcursorとのバイブコーディングで作成しました。</p>
                </div>
                <button onClick={startGame} className={`${styles.startButton} ${styles.fadeIn}`}>
                  戦闘開始！
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* ゲームクリア */}
      {gameState === 'CLEAR' && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h2 className={styles.clearTitle}>VICTORY!</h2>
            <p>やったね！人間界へ戻るゲートが開いたよ！</p>
            <button onClick={() => (window.location.href = '/')} className={styles.nextButton}>
              人間界へ戻る
            </button>
          </div>
        </div>
      )}

      {/* ゲームオーバー */}
      {gameState === 'GAMEOVER' && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h2 className={styles.overTitle}>GAME OVER</h2>
            <p>時間切れ！トロールの攻撃を受けてしまった…</p>
            <button onClick={startGame} className={styles.retryButton}>
              もう一度挑戦
            </button>
          </div>
        </div>
      )}
    </div>
  );
};