'use client';

import { useState, useRef, useEffect } from 'react';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import NetworkWifi3BarOutlinedIcon from '@mui/icons-material/NetworkWifi3BarOutlined';
import BikeScooterOutlinedIcon from '@mui/icons-material/BikeScooterOutlined';

interface ChartData {
  category: string;
  value: number;
  color: string;
  icon: React.ReactNode;
  iconHover: React.ReactNode;
  total: number;
}

const data: ChartData[] = [
  {
    category: 'Jedzenie',
    value: 300,
    color: '#3b82f6',
    icon: <FastfoodOutlinedIcon className='h-4 w-4 text-white' />,
    iconHover: (
      <FastfoodOutlinedIcon
        className='h-6 w-6 rounded-full bg-white p-1'
        style={{ color: '#3b82f6' }}
      />
    ),
    total: 350,
  },
  {
    category: 'Transport',
    value: 600,
    color: '#22c55e',
    icon: <BikeScooterOutlinedIcon className='h-4 w-4 text-white' />,
    iconHover: (
      <BikeScooterOutlinedIcon
        className='h-6 w-6 rounded-full bg-white p-1'
        style={{ color: '#22c55e' }}
      />
    ),
    total: 750,
  },
  {
    category: 'Internet',
    value: 100,
    color: '#ef4444',
    icon: <NetworkWifi3BarOutlinedIcon className='h-4 w-4 text-white' />,
    iconHover: (
      <NetworkWifi3BarOutlinedIcon
        className='h-6 w-6 rounded-full bg-white p-1'
        style={{ color: '#ef4444' }}
      />
    ),
    total: 150,
  },
];
const easeInOutQuad = (t: number): number => {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
};

export default function Component() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const [animationProgress, setAnimationProgress] = useState(0);
  const chartRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const animationDuration = 1200; // 1.2 seconds
    const startTime = Date.now();

    const animateChart = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const rawProgress = Math.min(elapsed / animationDuration, 1);
      const easedProgress = easeInOutQuad(rawProgress);
      setAnimationProgress(easedProgress);

      if (rawProgress < 1) {
        requestAnimationFrame(animateChart);
      }
    };

    requestAnimationFrame(animateChart);
  }, []);

  const handleMouseMove = (
    e: React.MouseEvent<SVGCircleElement>,
    category: string,
  ) => {
    if (chartRef.current) {
      const rect = chartRef.current.getBoundingClientRect();
      setHoverPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setHoveredCategory(category);
    }
  };

  const getDimmerColor = (color: string) => {
    const rgb = parseInt(color.slice(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;
    return `rgba(${r}, ${g}, ${b}, 0.2)`;
  };

  return (
    <div className='mx-auto w-full max-w-md p-6'>
      <div className='relative mx-auto h-64 w-64'>
        <svg ref={chartRef} viewBox='0 0 100 100' className='h-full w-full'>
          {data.map((item, index) => {
            const strokeWidth = 8;
            const radius = 50 - strokeWidth * (index + 1) - index * 2;
            const circumference = 2 * Math.PI * radius;
            const strokeDasharray =
              (item.value / item.total) * circumference * animationProgress;
            const strokeDashoffset = circumference - strokeDasharray;
            return (
              <g key={item.category}>
                {/* Track (background) circle */}
                <circle
                  cx='50'
                  cy='50'
                  r={radius}
                  fill='none'
                  stroke={getDimmerColor(item.color)}
                  strokeWidth={strokeWidth}
                  strokeLinecap='round'
                />
                {/* Data circle */}
                <circle
                  cx='50'
                  cy='50'
                  r={radius}
                  fill='none'
                  stroke={item.color}
                  strokeWidth={strokeWidth}
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap='round'
                  onMouseEnter={() => setHoveredCategory(item.category)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  onMouseMove={(e) => handleMouseMove(e, item.category)}
                  className='cursor-pointer transition-all duration-300 ease-in-out'
                />
              </g>
            );
          })}
        </svg>
        {hoveredCategory && (
          <div
            className='pointer-events-none absolute'
            style={{
              left: `${hoverPosition.x}px`,
              top: `${hoverPosition.y}px`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div
              className='flex items-center space-x-2 rounded-full px-3 py-1 text-sm font-semibold text-white'
              style={{
                backgroundColor: data.find(
                  (item) => item.category === hoveredCategory,
                )?.color,
              }}
            >
              {
                data.find((item) => item.category === hoveredCategory)
                  ?.iconHover
              }
              <span className='text-xs'>
                {hoveredCategory}{' '}
                <span className='text-xl font-extrabold'>
                  {Math.round(
                    (data.find((item) => item.category === hoveredCategory)
                      ?.value ?? 0) * animationProgress,
                  )}
                  g
                </span>
              </span>
            </div>
          </div>
        )}
      </div>
      <div className='mt-6 flex justify-evenly space-x-4 rounded-full bg-gray-100 p-3'>
        {data.map((item) => (
          <div key={item.category} className='flex items-center space-x-2'>
            <div
              className='flex h-8 w-8 items-center justify-center rounded-full'
              style={{ backgroundColor: item.color }}
            >
              {item.icon}
            </div>
            <span className='text-sm font-normal'>
              {Math.round(item.value * animationProgress)}g
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
