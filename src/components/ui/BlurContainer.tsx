
import React from 'react';
import { cn } from '@/lib/utils';

interface BlurContainerProps {
  children: React.ReactNode;
  className?: string;
}

const BlurContainer = ({ children, className }: BlurContainerProps) => {
  return (
    <div className={cn(
      'bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 p-6',
      className
    )}>
      {children}
    </div>
  );
};

export default BlurContainer;
