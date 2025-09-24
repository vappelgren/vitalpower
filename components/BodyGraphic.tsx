import React from 'react';
import type { BodyArea } from '../types';

interface BodyGraphicProps {
  improvedAreas: BodyArea[];
}

const BodyGraphic: React.FC<BodyGraphicProps> = ({ improvedAreas }) => {
  const isAreaImproved = (area: BodyArea) => improvedAreas.includes(area);

  return (
    <div className="flex justify-center items-center p-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 150 300"
        className="w-40 h-80"
      >
        <title>Human Body Graphic</title>
        {/* Base Silhouette */}
        <path
          d="M75,30 A15,15 0 1,1 75,0 A15,15 0 1,1 75,30 M85,110 V180 H95 L110,290 H80 L75,200 L70,290 H40 L55,180 H65 V110 H55 L50,40 H100 L95,110 Z"
          className="fill-gray-700 stroke-gray-600 stroke-1"
        />

        {/* Highlightable Areas */}
        <circle cx="75" cy="15" r="14" className={`transition-all duration-300 ${isAreaImproved('brain') ? 'fill-[#cfa95c] opacity-80' : 'fill-transparent'}`} />
        <path d="M75,55 L65,80 L75,90 L85,80 Z" className={`transition-all duration-300 ${isAreaImproved('heart') ? 'fill-[#1f7fb5] opacity-80' : 'fill-transparent'}`} />
        <rect x="50" y="40" width="50" height="70" className={`transition-all duration-300 ${isAreaImproved('immune') ? 'fill-[#507328] opacity-20' : 'fill-transparent'}`} />
        <rect x="50" y="90" width="50" height="70" className={`transition-all duration-300 ${isAreaImproved('metabolism') ? 'fill-[#507328] opacity-50' : 'fill-transparent'}`} />
        <path d="M85,110 V180 H95 L110,290 H80 L75,200 L70,290 H40 L55,180 H65 V110 H55 L50,40 H100 L95,110 Z" className={`transition-all duration-300 ${isAreaImproved('body') ? 'fill-gray-500 opacity-20' : 'fill-transparent'}`} />
        
        {/* Cells and Longevity are represented by a glow effect on the whole body */}
        {(isAreaImproved('cells') || isAreaImproved('longevity')) && (
           <path d="M75,30 A15,15 0 1,1 75,0 A15,15 0 1,1 75,30 M85,110 V180 H95 L110,290 H80 L75,200 L70,290 H40 L55,180 H65 V110 H55 L50,40 H100 L95,110 Z"
            className="fill-[#cfa95c] opacity-30 animate-pulse"
          />
        )}
      </svg>
    </div>
  );
};

export default BodyGraphic;
