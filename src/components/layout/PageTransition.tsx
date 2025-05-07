
import React from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  
  return (
    <div 
      key={location.pathname}
      className="w-full animate-fade-in"
      style={{ 
        animationDuration: '0.5s', 
        animationFillMode: 'both',
        animationTimingFunction: 'ease-out'
      }}
    >
      {children}
    </div>
  );
};

export default PageTransition;
