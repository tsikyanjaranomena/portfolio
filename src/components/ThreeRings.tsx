import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeRings = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
    camera.position.z = 40;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.inset = '0';
    renderer.domElement.style.opacity = '1';
    renderer.domElement.style.mixBlendMode = 'screen';
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xcfe7ff, 0.45);
    scene.add(ambientLight);

    const keyLight = new THREE.PointLight(0xf0d18a, 1.4, 220);
    keyLight.position.set(30, 20, 40);
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(0x8ecbff, 1.1, 220);
    rimLight.position.set(-40, -20, 30);
    scene.add(rimLight);

    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#f0d18a'),
      metalness: 0.95,
      roughness: 0.1,
      emissive: new THREE.Color('#7fbff0'),
      emissiveIntensity: 0.35
    });

    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(24, 0.7, 20, 260), material);
    ring1.rotation.x = Math.PI / 2.4;
    ring1.rotation.z = Math.PI / 6;

    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(17, 0.55, 18, 220), material);
    ring2.rotation.x = Math.PI / 3.1;
    ring2.rotation.y = Math.PI / 3.4;

    const ring3 = new THREE.Mesh(new THREE.TorusGeometry(11.5, 0.45, 16, 180), material);
    ring3.rotation.x = Math.PI / 2.2;
    ring3.rotation.z = -Math.PI / 4.2;

    scene.add(ring1, ring2, ring3);

    const handleResize = () => {
      const { innerWidth, innerHeight } = window;
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
    };

    let animationFrame = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      ring1.rotation.z = elapsed * 0.25;
      ring1.rotation.y = elapsed * 0.15;
      ring2.rotation.z = -elapsed * 0.18;
      ring2.rotation.x = elapsed * 0.12;
      ring3.rotation.y = elapsed * 0.22;
      ring3.rotation.x = -elapsed * 0.1;
      renderer.render(scene, camera);
      animationFrame = window.requestAnimationFrame(animate);
    };

    handleResize();
    animate();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.cancelAnimationFrame(animationFrame);
      ring1.geometry.dispose();
      ring2.geometry.dispose();
      ring3.geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement) {
        renderer.domElement.parentElement.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 z-20 pointer-events-none" aria-hidden="true" />;
};

export default ThreeRings;
