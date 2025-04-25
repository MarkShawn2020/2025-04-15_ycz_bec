'use client';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

type EmailLinkProps = {
  variant?: 'default' | 'prominent' | 'flat';
  className?: string;
  showIcon?: boolean;
};

export function EmailLink({ 
  variant = 'default', 
  className = '',
  showIcon = false
}: EmailLinkProps) {
  const emailAddress = 'lina@bostonedu.online';
  
  // 不同的按钮样式和文本
  let linkContent;
  
  if (variant === 'flat') {
    // 扁平样式，用于菜单和页脚
    linkContent = (
      <span className={className}>
        Contact Us
        {showIcon && <ExternalLink className="ml-1 h-3 w-3 opacity-70 group-hover:opacity-100 transition-opacity inline-block" />}
      </span>
    );
  } else {
    // 按钮样式
    const buttonClasses = variant === 'prominent' 
      ? "bg-sya-red hover:bg-sya-red/90 text-white font-bold py-3 px-6 rounded-lg shadow-lg text-lg transition-all hover:shadow-xl transform hover:scale-105 " + className
      : "bg-sya-blue text-white hover:bg-sya-blue/90 " + className;

    linkContent = (
      <Button className={buttonClasses}>
        Contact Us
      </Button>
    );
  }

  return (
    <a href={`mailto:${emailAddress}`} className="no-underline">
      {linkContent}
    </a>
  );
} 