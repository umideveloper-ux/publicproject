import React from 'react';
import { useResponsiveLayout } from '../../utils/hooks';

export default function Container({ children, className = '' }) {
  const layout = useResponsiveLayout();

  const containerStyle = {
    width: layout.getContainerWidth(),
    margin: '0 auto',
    padding: `0 ${layout.getSpacing(16)}px`
  };

  return (
    <div style={containerStyle} className={className}>
      {children}
    </div>
  );
}
