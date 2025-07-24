import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-glass border border-glass-border rounded-2xl p-6 shadow-glass flex flex-col gap-3 min-h-[220px] relative">
      <div className="flex items-center gap-2 mb-2">
        <span className="bg-primary/20 p-2 rounded-full">
          <Icon className="w-6 h-6 text-primary" />
        </span>
        <span className="ml-auto text-xs bg-green-900/60 text-green-400 px-3 py-1 rounded-full font-bold">Active</span>
      </div>
      <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
      <div className="text-gray-300 text-sm leading-relaxed">{description}</div>
    </div>
  );
};

export default FeatureCard; 