import { useEffect } from 'react';

export const useBlockBodyScroll = (isBlock: boolean = true) => {
  const bodyStyle = document.body.style;

  useEffect(() => {
    bodyStyle.overflow = isBlock ? 'hidden' : 'auto';

    return () => {
      bodyStyle.overflow = 'auto';
    };
  }, [isBlock]);
};
