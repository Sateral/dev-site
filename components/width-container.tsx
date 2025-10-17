import React from 'react';

interface WidthContainerProps {
  children: React.ReactNode;
}

const WidthContainer = ({ children }: WidthContainerProps) => {
  return <div className="max-w-3xl m-auto w-full">{children}</div>;
};

export default WidthContainer;
