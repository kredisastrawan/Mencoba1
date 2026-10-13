import React from 'react';

interface PaperPlaneProps {
  className?: string;
  withTrajectory?: boolean;
}

export const PaperPlaneVector: React.FC<PaperPlaneProps> = ({
  className = 'w-10 h-10 text-white',
  withTrajectory = true,
}) => {
  return (
    <div className={`relative inline-block ${className}`} aria-hidden="true">
      {withTrajectory && (
        <svg
          className="absolute -bottom-8 -left-12 w-20 h-16 text-white/60 pointer-events-none"
          viewBox="0 0 100 80"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        >
          <path d="M10 70 Q 40 60 65 30 T 90 10" />
        </svg>
      )}
      <svg
        viewBox="0 0 64 64"
        fill="currentColor"
        className="w-full h-full drop-shadow-md transform -rotate-12 hover:scale-105 transition-transform"
      >
        {/* Origami Paper Plane Polygon */}
        <polygon points="4,32 58,10 40,56 32,38" fill="rgba(255,255,255,0.95)" />
        <polygon points="58,10 32,38 24,48" fill="rgba(224,242,254,0.9)" />
        <polygon points="58,10 4,32 32,38" fill="rgba(255,255,255,0.8)" />
      </svg>
    </div>
  );
};
