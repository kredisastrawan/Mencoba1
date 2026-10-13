import React from 'react';

interface BaliCloudMotifProps {
  className?: string;
  variant?: 'single' | 'cluster' | 'corner';
  opacity?: number;
}

export const BaliCloudMotif: React.FC<BaliCloudMotifProps> = ({
  className = "w-16 h-10 text-blue-500",
  variant = 'single',
}) => {
  if (variant === 'corner') {
    return (
      <svg
        viewBox="0 0 160 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M10 65C10 50 25 40 45 42C50 25 72 15 95 24C108 12 128 14 138 28C152 28 160 38 160 52C160 68 146 78 130 76C124 88 108 94 92 88C80 96 62 94 50 82C36 86 18 82 10 65Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="currentColor"
          fillOpacity="0.08"
        />
        {/* Balinese spiral flourishes inside the cloud */}
        <path
          d="M38 58C38 52 44 48 50 51C55 53 56 60 51 63C46 66 40 61 44 55"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M86 44C86 36 94 32 102 36C109 39 110 49 103 54C96 58 88 51 94 43"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M118 52C122 47 130 48 133 53C136 58 132 64 126 63"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 120 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 44C7 34 18 26 31 28C35 16 50 9 66 15C75 7 89 8 96 18C106 18 112 25 112 35C112 46 102 53 91 51C87 59 75 63 64 59C56 64 43 63 35 55C25 58 13 55 8 44Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.07"
      />
      {/* Balinese traditional spiral detail */}
      <path
        d="M26 40C26 35 31 32 35 34C39 36 39 41 36 43C32 45 28 42 31 37"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M62 30C62 24 68 21 74 24C79 26 80 33 75 37C70 40 64 35 68 29"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M86 36C89 32 95 33 97 37C99 41 96 45 92 44"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
