import React, { useEffect, useRef, useState, useCallback } from 'react';

interface AnimatedPaperPlaneHeroProps {
  heroRef: React.RefObject<HTMLElement | null>;
  titleRef: React.RefObject<HTMLElement | null>;
  cardRef: React.RefObject<HTMLElement | null>;
}

export const AnimatedPaperPlaneHero: React.FC<AnimatedPaperPlaneHeroProps> = ({
  heroRef,
  titleRef,
  cardRef,
}) => {
  const pathRef = useRef<SVGPathElement | null>(null);
  const planeGroupRef = useRef<SVGGElement | null>(null);
  const animFrameIdRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const [pathD, setPathD] = useState<string>('');

  // 1. Hitung lintasan penerbangan yang presisi dan mulus
  const updateFlightPath = useCallback(() => {
    if (!heroRef.current || !titleRef.current || !cardRef.current) return;

    const heroRect = heroRef.current.getBoundingClientRect();
    const titleRect = titleRef.current.getBoundingClientRect();
    const cardRect = cardRef.current.getBoundingClientRect();

    const W = heroRect.width;

    // Target 1: Teks "Bali Youth Evolution"
    const cx1 = titleRect.left - heroRect.left + titleRect.width / 2;
    const cy1 = titleRect.top - heroRect.top + titleRect.height / 2;
    const rx1 = Math.max(140, titleRect.width / 2 + 45);
    const ry1 = Math.max(90, titleRect.height / 2 + 40);

    // Target 2: Gambar / Card "#EMPOWERINGYOUTH"
    const cx2 = cardRect.left - heroRect.left + cardRect.width / 2;
    const cy2 = cardRect.top - heroRect.top + cardRect.height / 2;
    const rx2 = Math.max(160, cardRect.width / 2 + 45);
    const ry2 = Math.max(120, cardRect.height / 2 + 40);

    // Faktor Bezier standar untuk kelengkungan elips
    const KAPPA = 0.55228475;
    const kx1 = rx1 * KAPPA;
    const ky1 = ry1 * KAPPA;
    const kx2 = rx2 * KAPPA;
    const ky2 = ry2 * KAPPA;

    // Titik awal di luar layar kiri
    const startX = -100;
    const startY = Math.max(80, cy1 - 20);

    let d = `M ${startX} ${startY}`;

    // STAGE 1: Masuk dari kiri ke Loop Teks ("Bali Youth Evolution")
    d += ` C ${startX + (cx1 - rx1 - startX) * 0.5} ${startY}, ${cx1 - rx1} ${cy1 + ry1 * 0.8}, ${cx1 - rx1} ${cy1}`;

    // Loop 360 Derajat Memutari Teks (Searah Jarum Jam)
    d += ` C ${cx1 - rx1} ${cy1 - ky1}, ${cx1 - kx1} ${cy1 - ry1}, ${cx1} ${cy1 - ry1}`;
    d += ` C ${cx1 + kx1} ${cy1 - ry1}, ${cx1 + rx1} ${cy1 - ky1}, ${cx1 + rx1} ${cy1}`;
    d += ` C ${cx1 + rx1} ${cy1 + ky1}, ${cx1 + kx1} ${cy1 + ry1}, ${cx1} ${cy1 + ry1}`;
    d += ` C ${cx1 - kx1} ${cy1 + ry1}, ${cx1 - rx1} ${cy1 + ky1}, ${cx1 - rx1} ${cy1}`;

    // STAGE 2: Transisi dari Teks ke Gambar ("#EMPOWERINGYOUTH")
    const midX = (cx1 + cx2) / 2;
    const midY = (cy1 + cy2) / 2 + 20;

    d += ` C ${cx1 - rx1} ${cy1 - ry1 * 0.8}, ${midX - (midX - cx1) * 0.5} ${midY}, ${midX} ${midY}`;
    d += ` C ${midX + (cx2 - midX) * 0.5} ${midY}, ${cx2 - rx2} ${cy2 + ry2 * 0.8}, ${cx2 - rx2} ${cy2}`;

    // Loop 360 Derajat Memutari Gambar/Card (Searah Jarum Jam)
    d += ` C ${cx2 - rx2} ${cy2 - ky2}, ${cx2 - kx2} ${cy2 - ry2}, ${cx2} ${cy2 - ry2}`;
    d += ` C ${cx2 + kx2} ${cy2 - ry2}, ${cx2 + rx2} ${cy2 - ky2}, ${cx2 + rx2} ${cy2}`;
    d += ` C ${cx2 + rx2} ${cy2 + ky2}, ${cx2 + kx2} ${cy2 + ry2}, ${cx2} ${cy2 + ry2}`;
    d += ` C ${cx2 - kx2} ${cy2 + ry2}, ${cx2 - rx2} ${cy2 + ky2}, ${cx2 - rx2} ${cy2}`;

    // STAGE 3: Terbang keluar ke kanan layar
    const exitX = W + 150;
    const exitY = cy2 - 10;

    d += ` C ${cx2 - rx2} ${cy2 - ry2 * 0.8}, ${cx2 + (exitX - cx2) * 0.35} ${exitY}, ${exitX} ${exitY}`;

    setPathD(d);
  }, [heroRef, titleRef, cardRef]);

  // Recalculate saat mount, resize, dan perubahan elemen
  useEffect(() => {
    updateFlightPath();
    const handleResize = () => updateFlightPath();
    window.addEventListener('resize', handleResize);

    const resizeObserver = new ResizeObserver(() => {
      updateFlightPath();
    });

    if (heroRef.current) resizeObserver.observe(heroRef.current);
    if (titleRef.current) resizeObserver.observe(titleRef.current);
    if (cardRef.current) resizeObserver.observe(cardRef.current);

    return () => {
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
    };
  }, [updateFlightPath, heroRef, titleRef, cardRef]);

  // 2. Loop Animasi Performance Tinggi (25 Detik Terbang + 3 Detik Jeda)
  useEffect(() => {
    const FLIGHT_DURATION = 25000; // 25 detik terlihat terbang
    const PAUSE_DURATION = 3000;  // 3 detik jeda tak terlihat
    const TOTAL_CYCLE = FLIGHT_DURATION + PAUSE_DURATION; // Total 28 detik per siklus

    const pathElement = pathRef.current;
    const planeGroup = planeGroupRef.current;

    if (!pathElement || !planeGroup || !pathD) return;

    let totalLength = 0;
    try {
      totalLength = pathElement.getTotalLength();
    } catch {
      return;
    }

    if (!totalLength || totalLength <= 0) return;

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const cycleTime = elapsed % TOTAL_CYCLE;

      if (cycleTime < FLIGHT_DURATION) {
        // Fase Terbang Terlihat (0s sampai 5s)
        const progress = cycleTime / FLIGHT_DURATION;
        const currentDistance = progress * totalLength;

        // Perhitungan rotasi otomatis mengikuti arah vektor lintasan
        const delta = 2.0;
        const prevDist = Math.max(0, currentDistance - delta);
        const nextDist = Math.min(totalLength, currentDistance + delta);

        const pCurrent = pathElement.getPointAtLength(currentDistance);
        const pPrev = pathElement.getPointAtLength(prevDist);
        const pNext = pathElement.getPointAtLength(nextDist);

        const dx = pNext.x - pPrev.x;
        const dy = pNext.y - pPrev.y;
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);

        planeGroup.setAttribute(
          'transform',
          `translate(${pCurrent.x.toFixed(2)}, ${pCurrent.y.toFixed(2)}) rotate(${angle.toFixed(2)})`
        );
        planeGroup.style.opacity = '1';
        planeGroup.style.visibility = 'visible';
      } else {
        // Fase Jeda Sembunyi (5s sampai 8s)
        planeGroup.style.opacity = '0';
        planeGroup.style.visibility = 'hidden';
      }

      animFrameIdRef.current = requestAnimationFrame(animate);
    };

    animFrameIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameIdRef.current !== null) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [pathD]);

  return (
    <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden" aria-hidden="true">
      <svg className="w-full h-full overflow-visible" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="paperPlaneShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="3" stdDeviation="3.5" floodColor="#000000" floodOpacity="0.22" />
          </filter>
        </defs>

        {/* Path tersembunyi untuk kalkulasi posisi */}
        {pathD && (
          <path
            ref={pathRef}
            d={pathD}
            fill="none"
            stroke="none"
            className="opacity-0"
          />
        )}

        {/* Ikon Pesawat Kertas SVG Murni */}
        <g
          ref={planeGroupRef}
          style={{ opacity: 0, visibility: 'hidden' }}
          className="transition-opacity duration-200"
          filter="url(#paperPlaneShadow)"
        >
          {/* Sayap Atas */}
          <polygon
            points="-16,-17 32,0 0,0"
            fill="#ffffff"
          />
          {/* Sayap Bawah */}
          <polygon
            points="32,0 -7,17 0,0"
            fill="rgba(255, 255, 255, 0.92)"
          />
          {/* Lipatan Bawah / Keel */}
          <polygon
            points="32,0 0,0 -12,3"
            fill="rgba(224, 242, 254, 0.95)"
          />
          {/* Garis Lipatan Tengah */}
          <line
            x1="0"
            y1="0"
            x2="32"
            y2="0"
            stroke="rgba(224, 242, 254, 0.8)"
            strokeWidth="0.75"
          />
        </g>
      </svg>
    </div>
  );
};