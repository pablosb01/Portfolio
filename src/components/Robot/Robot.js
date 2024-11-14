import dynamic from 'next/dynamic';
import { useRef, useState, useEffect } from 'react';

// Cargamos Spline de forma dinámica
const Spline = dynamic(() => import('@splinetool/react-spline/next'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Dev() {
  const [isInViewport, setIsInViewport] = useState(false);
  const splineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInViewport(true);
            observer.unobserve(entry.target); // Deja de observar después de cargar
          }
        });
      },
      { threshold: 0.1 } // Ajusta el porcentaje de visibilidad necesario para activar la carga
    );

    if (splineRef.current) {
      observer.observe(splineRef.current);
    }

    return () => {
      if (splineRef.current) observer.unobserve(splineRef.current);
    };
  }, []);

  return (
    <div className="h-[200px] w-full justify-center items-center" ref={splineRef}>
      {isInViewport && (
        <Spline scene="https://prod.spline.design/eEfiI6MyxGekbWNU/scene.splinecode" />
      )}
    </div>
  );
}
