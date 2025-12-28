import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeStars = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
    camera.position.z = 60;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.inset = '0';
    renderer.domElement.style.mixBlendMode = 'screen';
    renderer.domElement.style.opacity = '0.7';
    container.appendChild(renderer.domElement);

    const starCount = 1800;
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i += 1) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 220;
      positions[i3 + 1] = (Math.random() - 0.5) * 140;
      positions[i3 + 2] = (Math.random() - 0.5) * 200;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const starCanvas = document.createElement('canvas');
    starCanvas.width = 64;
    starCanvas.height = 64;
    const starContext = starCanvas.getContext('2d');
    if (starContext) {
      const gradient = starContext.createRadialGradient(32, 32, 2, 32, 32, 28);
      gradient.addColorStop(0, 'rgba(246, 231, 178, 0.95)');
      gradient.addColorStop(0.4, 'rgba(212, 175, 55, 0.55)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      starContext.fillStyle = gradient;
      starContext.fillRect(0, 0, 64, 64);
    }

    const starTexture = new THREE.CanvasTexture(starCanvas);

    const material = new THREE.PointsMaterial({
      color: new THREE.Color('#f6e7b2'),
      size: 1.6,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      map: starTexture,
      alphaTest: 0.02
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let animationFrame = 0;
    const clock = new THREE.Clock();

    const handleResize = () => {
      const { innerWidth, innerHeight } = window;
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
    };

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      points.rotation.y = elapsed * 0.05;
      points.rotation.x = elapsed * 0.02;
      renderer.render(scene, camera);
      animationFrame = window.requestAnimationFrame(animate);
    };

    handleResize();
    animate();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.cancelAnimationFrame(animationFrame);
      geometry.dispose();
      material.dispose();
      starTexture.dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement) {
        renderer.domElement.parentElement.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-20 pointer-events-none mix-blend-screen"
      aria-hidden="true"
    />
  );
};

export default ThreeStars;
