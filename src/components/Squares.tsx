import React, { useRef, useEffect } from 'react';

interface SquaresProps {
  speed?: number;
  squareSize?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'diagonal';
  borderColor?: string;
  hoverFillColor?: string;
}

const getDirection = (direction: string, speed: number) => {
  switch (direction) {
    case 'up': return { x: 0, y: -speed };
    case 'down': return { x: 0, y: speed };
    case 'left': return { x: -speed, y: 0 };
    case 'right': return { x: speed, y: 0 };
    case 'diagonal': return { x: speed, y: speed };
    default: return { x: 0, y: speed };
  }
};

const Squares: React.FC<SquaresProps> = ({
  speed = 0.5,
  squareSize = 40,
  direction = 'diagonal',
  borderColor = '#fff',
  hoverFillColor = '#222',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    let offset = 0;
    const { x: dx, y: dy } = getDirection(direction, speed);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (let y = 0; y < height; y += squareSize) {
        for (let x = 0; x < width; x += squareSize) {
          ctx.save();
          ctx.strokeStyle = borderColor;
          ctx.lineWidth = 1.5;
          ctx.strokeRect(x + offset * dx, y + offset * dy, squareSize, squareSize);
          ctx.restore();
        }
      }
      offset += 1;
      if (Math.abs(offset * dx) > squareSize) offset = 0;
      if (Math.abs(offset * dy) > squareSize) offset = 0;
      animationRef.current = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animationRef.current!);
  }, [speed, squareSize, direction, borderColor]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default Squares; 