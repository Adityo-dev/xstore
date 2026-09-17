import React, { ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = "" }: ContainerProps): React.JSX.Element {
  return (
    <div className={`container mx-auto px-2.5 sm:px-4 ${className}`}>
      {children}
    </div>
  );
}
