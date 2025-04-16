'use client';

import { useState, useEffect } from 'react';

// Define the stats interface with all possible properties
interface Stat {
  id: number;
  label: string;
  value: number;
  startValue: number;
  prefix?: string;
  suffix?: string;
}

// Define the stats to display
const stats: Stat[] = [
  { id: 1, label: 'Founded', value: 2018, startValue: new Date().getFullYear() },
  { id: 2, label: 'Alumni', value: 1000, startValue: 0, suffix: '+' },
  { id: 3, label: "24'-25' Enrollment ", value: 98, startValue: 0 },
  { id: 4, label: 'Countries', value: 5, startValue: 0 },
  { id: 5, label: 'Cities', value: 10, startValue: 0, suffix: '+' },
  { id: 6, label: 'Schools', value: 29, startValue: 0 }
];

export default function Stats() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isCountingUp, setIsCountingUp] = useState(false);
  const [displayValue, setDisplayValue] = useState(0);

  // Function to animate counting up to the target value
  useEffect(() => {
    const stat = stats[activeIndex];
    if (!stat) return;

    setIsCountingUp(true);
    setDisplayValue(stat.startValue);

    const duration = 1500; // Animation duration in milliseconds
    const valueChange = stat.value - stat.startValue;
    const increment = valueChange / (duration / 16); // 60fps
    let currentValue = stat.startValue;

    const timer = setInterval(() => {
      currentValue += increment;
      if ((increment >= 0 && currentValue >= stat.value) || 
          (increment < 0 && currentValue <= stat.value)) {
        clearInterval(timer);
        setDisplayValue(stat.value);
        setIsCountingUp(false);
      } else {
        setDisplayValue(Math.floor(currentValue));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [activeIndex]);

  // Auto rotate through stats
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stats.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Format the display value with prefix/suffix
  const formatValue = (stat: Stat, value: number) => {
    return `${stat.prefix || ''}${value}${stat.suffix || ''}`;
  };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`flex flex-col items-center ${index === activeIndex ? 'scale-110 transition-transform duration-300' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="mb-2">
                <span className={`text-4xl md:text-5xl font-bebas ${index === activeIndex ? 'text-sya-red' : 'text-sya-blue'}`}>
                  {index === activeIndex
                    ? formatValue(stat, displayValue)
                    : formatValue(stat, stat.value)
                  }
                </span>
              </div>
              <div className="text-sm text-gray-600 max-w-[200px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
