import React, { useState, useEffect, useRef } from 'react';
import styles from './MagicWorld.module.css';
import Wand from '../Wand/Wand';

type GameState = 'TUTORIAL' | 'PLAYING' | 'CLEAR' | 'GAMEOVER';

interface Target {
  id: number;
  name: string;
  offsetX: number;
  offsetY: number; 
  radius: number;
}

const TARGET_LIST: Target[] = [
  { id: 1, name: '頭部', offsetX: 0, offsetY: -90, radius: 24 },
  { id: 2, name: '右腕', offsetX: -80, offsetY: -20, radius: 22 },
  { id: 3, name: '左腕', offsetX: 80, offsetY: -20, radius: 22 },
  { id: 4, name: '胸部', offsetX: 0, offsetY: -20, radius: 26 },
  { id: 5, name: '腹部', offsetX: 0, offsetY: 40, radius: 25 },
];

export const TrollBattleGame: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('TUTORIAL');
  const [timeLeft, setTimeLeft] = useState<number>(15);
  const [currentTargetIndex, setCurrentTargetIndex] = useState<number>(0);
  
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameId = useRef<number | null>(null);
  
  const swingAngleRef = useRef<number>(0);
  const particlesRef = useRef<Array<{ x: number; y: number; vx: number; vy: number; alpha: number; color: string }>>([]);

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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let startTime = performance.now();

    const render = (time: number) => {
      const elapsed = (time - startTime) / 1000;
      const swingX = Math.sin(elapsed * 2.5) * 45; 
      swingAngleRef.current = swingX;

      const centerX = canvas.width / 2 + swingX;
      const centerY = canvas.height / 2 + 20;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // ここからトロールのcanvas
      ctx.beginPath();
      ctx.ellipse(canvas.width / 2 + swingX * 0.3, centerY + 160, 90, 20, 0, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
      ctx.fill();

      // 胴体
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, 70, 90, 0, 0, Math.PI * 2);
      ctx.fillStyle = '#4a5d3e'; // トロールの色
      ctx.fill();
      ctx.strokeStyle = '#2d3b25';
      ctx.lineWidth = 4;
      ctx.stroke();

      // 頭
      ctx.beginPath();
      ctx.arc(centerX, centerY - 90, 50, 0, Math.PI * 2);
      ctx.fillStyle = '#556b47';
      ctx.fill();
      ctx.stroke();

      // 目（赤く光る）
      ctx.fillStyle = '#ff3333';
      ctx.beginPath();
      ctx.arc(centerX - 18, centerY - 100, 7, 0, Math.PI * 2);
      ctx.arc(centerX + 18, centerY - 100, 7, 0, Math.PI * 2);
      ctx.fill();

      // 牙
      ctx.fillStyle = '#fff8dc';
      ctx.beginPath();
      ctx.moveTo(centerX - 15, centerY - 75);
      ctx.lineTo(centerX - 10, centerY - 88);
      ctx.lineTo(centerX - 5, centerY - 75);
      ctx.moveTo(centerX + 5, centerY - 75);
      ctx.lineTo(centerX + 10, centerY - 88);
      ctx.lineTo(centerX + 15, centerY - 75);
      ctx.fill();

      // 腕（右・左）
      ctx.fillStyle = '#4a5d3e';
      ctx.beginPath(); // 左腕
      ctx.arc(centerX - 80, centerY - 20, 30, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      ctx.beginPath(); // 右腕
      ctx.arc(centerX + 80, centerY - 20, 30, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // まと
      if (gameState === 'PLAYING' && currentTargetIndex < TARGET_LIST.length) {
        const target = TARGET_LIST[currentTargetIndex];
        const targetX = centerX + target.offsetX;
        const targetY = centerY + target.offsetY;

        // 外側のえん
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

        // 中心
        ctx.beginPath();
        ctx.arc(targetX, targetY, target.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 50, 50, 0.35)';
        ctx.fill();
        ctx.strokeStyle = '#ff3333';
        ctx.lineWidth = 2;
        ctx.stroke();

        // じゅう字線
        ctx.beginPath();
        ctx.moveTo(targetX - target.radius - 4, targetY);
        ctx.lineTo(targetX + target.radius + 4, targetY);
        ctx.moveTo(targetX, targetY - target.radius - 4);
        ctx.lineTo(targetX, targetY + target.radius + 4);
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

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

    // 現在のトロール座標
    const swingX = swingAngleRef.current;
    const centerX = canvas.width / 2 + swingX;
    const centerY = canvas.height / 2 + 20;

    const target = TARGET_LIST[currentTargetIndex];
    const targetX = centerX + target.offsetX;
    const targetY = centerY + target.offsetY;

    // クリック位置とターゲット中心の距離計算
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

      // 次の的に移動
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

      {/* ゲームCanvas */}
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
            <h2>魔法界い迷い込んでしまったようだ......!</h2>
            <p className='mt-20'>あ！トロールに見つかってしまった！</p>
            <p>トロールを倒して魔法界から人間界へ戻ろう！</p>
            <div className={styles.ruleBox}>
              <p>⚡ 杖でトロールの体に現れる*5つの的*を狙い撃って！</p>
              <p>⏱ 制限時間: *15秒*</p>
            </div>
            <button onClick={startGame} className={styles.startButton}>
              戦闘開始！
            </button>
          </div>
        </div>
      )}

      {/* ゲームクリア */}
      {gameState === 'CLEAR' && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h2 className={styles.clearTitle}>VICTORY!</h2>
            <p>やったね！人間界へ戻るゲートが開いたよ！</p>
            <button onClick={() => window.location.href = '/'} className={styles.nextButton}>
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