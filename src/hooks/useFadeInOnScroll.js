import { useEffect, useState, useRef } from 'react';

const useFadeInOnScroll = () => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      });
    });
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return [domRef, isVisible];
};

export default useFadeInOnScroll;
