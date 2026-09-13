import { useEffect, useRef, useState } from 'react'
import wandImg from './images/wand.png'
import styles from './Wand.module.css'
interface ParticleData {
  tx: string;
  ty: string;
  size: string;
}

interface Sparkle {
  id: number;
  x: number;
  y: number;
  color: string;
  spell: string;
  particles: ParticleData[];
}

const spells = [
  "Lumos!", 
  "Expecto Patronum!", 
  "Wingardium Leviosa!",
  "Expelliarmus!", 
  "Alohomora!", 
  "Accio!", 
  "Stupefy!"
];

const magicColors = [
  "#ffe066",
  "#ffb300",
  "#ff7600",
  "#d4af37",
  "#ff4d4d",
];

function Wands() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const wandRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleClick = (e: MouseEvent) => {
      const randomColor = magicColors[Math.floor(Math.random() * magicColors.length)];
      const randomSpell = spells[Math.floor(Math.random() * spells.length)];

      const particleCount =  12 + Math.floor(Math.random() * 5);
      const generatedParticles: ParticleData[] = [];

      for(let i = 0; i < particleCount; i++){
        const angle = Math.random() * Math.PI * 2;
        const velocity = 40 + Math.random() * 80;
        generatedParticles.push({
          tx: `${Math.cos(angle) * velocity}px`,
          ty: `${Math.sin(angle) * velocity}px`,
          size: `${3 + Math.random() * 4}px`
        });
      }
       
      const newSparkle: Sparkle = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        color: randomColor,
        spell: randomSpell,
        particles: generatedParticles
      };

      setSparkles((prev) => [...prev, newSparkle]);

      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id));
      }, 1200);
    };

    let animationFrameId: number;
    const updateWandPosition = () => {
      if (wandRef.current) {
        wandRef.current.style.top = `${mouseRef.current.y}px`;
        wandRef.current.style.left = `${mouseRef.current.x}px`;
      }
      animationFrameId = requestAnimationFrame(updateWandPosition);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    animationFrameId = requestAnimationFrame(updateWandPosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div className={styles['wands']}>
        <img
          ref={wandRef}
          src={wandImg}
          alt="wand"
          width={50}
          height={50}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '50px',
            transform: 'translate(-10%, -20%)',
            pointerEvents: 'none',
            zIndex: 9999,
            imageRendering: 'pixelated',
          }}
        />
      </div>

      {sparkles.map((sparkle) => (
        <div
        key={sparkle.id}
        className="magic-effect"
        style={{
          position: 'fixed',
          left: sparkle.x,
          top: sparkle.y,
          zIndex: 9998,
          ['--magic-color' as any]: sparkle.color, 
        }}
      >
        <div className={styles['spark']} />
          {sparkle.particles.map((p, idx) => (
            <div
              key={idx}
              className="particle"
              style={{
                ['--tx' as any]: p.tx,
                ['--ty' as any]: p.ty,
                ['--size' as any]: p.size,
              }}
            />
          ))}

          <div className={styles['spell-text']}>
            {sparkle.spell}
          </div>
        </div>
        
      ))}
    </>
  );
}

export default Wands;
