import { useEffect, useRef, useState } from 'react'
import wandImg from '../assets/images/wand.png'

interface Sparkle {
  id: number;
  x: number;
  y: number;
}

function Wands() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const wandRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleClick = (e: MouseEvent) => {
      const newSparkle: Sparkle = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      setSparkles((prev) => [...prev, newSparkle]);

      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id));
      }, 800);
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
      <div className='wands'>
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
            transform: 'translate(-10%, -90%)',
            pointerEvents: 'none',
            zIndex: 9999,
            imageRendering: 'pixelated',
          }}
        />
      </div>

      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="wand-soarkle"
          style={{
            position: 'fixed',
            top: sparkle.y,
            left: sparkle.x,
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            fontSize: '28px',
            zIndex: 9998,
          }}
        >
          ⭐️
        </div>
      ))}
    </>
  );
}

export default Wands;
