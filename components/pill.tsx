import { ReactNode } from 'react';

interface PillProps {
  children: ReactNode;
  className?: string;
}

export function Pill({ children, className = '' }: PillProps) {
  return (
    <span
      className={`h-10 p-2.5 rounded-full py-2.5 px-xs flex items-center justify-center bg-neutral-100 ${className}`}
    >
      {children}
    </span>
  );
}
