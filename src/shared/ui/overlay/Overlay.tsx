import { useBlockBodyScroll } from '../../lib/useBlockBodyScroll';

import React, { useRef, useState } from 'react';
import { Backdrop } from './styled';

interface OverlayContentProps extends React.ComponentProps<'div'> {
  children?: React.ReactNode;
  isOpen: boolean;
  duration: number;
}

const OverlayContent: React.FC<OverlayContentProps> = ({
  children = null,
  isOpen,
  duration,
  ...props
}) => {
  useBlockBodyScroll(isOpen);
  return (
    <Backdrop $isOpen={isOpen} $duration={duration} {...props}>
      {children}
    </Backdrop>
  );
};

interface OvelayProps {
  isOpen: boolean;
  duration: number;
  children?: React.ReactNode;
}

export const Overlay: React.FC<OvelayProps> = ({
  children = null,
  ...props
}) => {
  const { isOpen, duration } = props;
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const state = {
    appear: !isVisible && isOpen,
    exit: !isOpen && isVisible,
    disapeared: !isVisible && !isOpen,
  };

  if (state.appear) {
    setIsVisible(true);
  }

  if (state.exit) {
    timeoutRef.current = setTimeout(() => setIsVisible(false), duration * 1000);
  }

  if (state.disapeared) {
    clearTimeout(timeoutRef.current as NodeJS.Timeout);
    return null;
  }

  return <OverlayContent {...props}>{children}</OverlayContent>;
};
