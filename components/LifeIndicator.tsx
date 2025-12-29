import React from 'react';

interface LifeIndicatorProps {
  lives: number;
  maxLives?: number;
}

export default function LifeIndicator({ lives, maxLives = 3 }: LifeIndicatorProps) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: maxLives }).map((_, index) => (
        <span
          key={index}
          className={`text-2xl transition-opacity duration-300 ${
            index < lives ? 'opacity-100' : 'opacity-30'
          }`}
        >
          ❤️
        </span>
      ))}
    </div>
  );
}
