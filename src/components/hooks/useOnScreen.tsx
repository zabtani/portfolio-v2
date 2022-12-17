import { useEffect, useRef, useState } from 'react';

const useOnScrren = (ref: React.RefObject<Element>) => {
  const [isElementVisible, setIsElementVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const topPage = window.pageYOffset == 0;
      if (topPage) {
        setIsElementVisible(false);
        return;
      }
      const position = ref.current?.getBoundingClientRect();
      if (!position) return;
      if (position.top < window.innerHeight && position.bottom >= 0) {
        setIsElementVisible(true);
      } else {
        // if (isElementVisible) setIsElementVisible(false);
      }
    };

    window.addEventListener('touchmove', onScroll);
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('touchmove', onScroll);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return isElementVisible;
};

export default useOnScrren;
