import { useEffect, useRef } from 'react';

const ParallaxBackground = () => {
  const layer1Ref = useRef<HTMLDivElement | null>(null);
  const layer2Ref = useRef<HTMLDivElement | null>(null);
  const layer3Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let rafId = 0;
    const handleScroll = () => {
      const scrollY = window.scrollY || 0;
      if (layer1Ref.current) {
        layer1Ref.current.style.transform = `translate3d(0, ${scrollY * 0.08}px, 0)`;
      }
      if (layer2Ref.current) {
        layer2Ref.current.style.transform = `translate3d(0, ${scrollY * 0.05}px, 0)`;
      }
      if (layer3Ref.current) {
        layer3Ref.current.style.transform = `translate3d(0, ${scrollY * 0.03}px, 0)`;
      }
    };

    const onScroll = () => {
      window.cancelAnimationFrame(rafId);
      rafId = window.requestAnimationFrame(handleScroll);
    };

    handleScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="parallax-scene">
      <div ref={layer1Ref} className="parallax-layer parallax-scroll layer-1"></div>
      <div ref={layer2Ref} className="parallax-layer parallax-scroll layer-2 parallax-glow"></div>
      <div ref={layer3Ref} className="parallax-layer parallax-scroll layer-3"></div>
      <div className="parallax-vignette"></div>
    </div>
  );
};

export default ParallaxBackground;
