import React, { useState, useEffect } from 'react';

// Simuler une fonction d'observation pour détecter quand les éléments entrent dans le viewport
const useInView = (ref) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, { threshold: 0.1 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return inView;
};

const Home = () => {
  const refFeature = React.useRef(null);
  const isInViewFeature = useInView(refFeature);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-center p-10">
        <h1 className="text-4xl font-bold mb-4">Bienvenue sur FactuFlex</h1>
        <p className="mb-8">La solution tout-en-un pour votre gestion de factures et dinventaire.</p>
      </div>
      
      <div ref={refFeature} className={`transition-opacity duration-1000 ${isInViewFeature ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-2xl font-semibold mb-2">Fonctionnalités Clés</h2>
        <p>Gérez vos factures, devis et inventaires en quelques clics.</p>
      </div>
      
      {/* Ajoutez d'autres sections avec useRef et useInView pour des animations similaires */}
      
      <button className="mt-10 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-300">
        Commencez dès maintenant
      </button>
    </div>
  );
};

export default Home;
