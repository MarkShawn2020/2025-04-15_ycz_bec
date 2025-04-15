"use client";

import type React from 'react';

interface StatItemProps {
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center text-center px-4 py-6">
      <div className="text-sya-red text-5xl md:text-6xl lg:text-7xl font-bebas mb-2">{value}</div>
      <div className="text-sya-blue text-sm md:text-base max-w-[150px] leading-tight">{label}</div>
    </div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <StatItem value="1964" label="Founded" />
          <StatItem value="40%" label="Students receive financial aid" />
          <StatItem value="9000+" label="SYA Alumni" />
          <StatItem value="90%" label="Alumni that consider themselves fluent" />
          <StatItem value="10+" label="Scholarships" />
          <StatItem value="93%" label="Alumni continued to study a foreign language" />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
