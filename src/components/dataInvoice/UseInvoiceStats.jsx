import { useState, useEffect } from 'react';

const useInvoiceStats = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/invoice/stats');
        if (!response.ok) {
          // Gérer les réponses non-OK
          console.error('Erreur lors de la récupération des statistiques:', response.statusText);
          return;
        }
        const data = await response.json();
        if (data.success) {
          setStats(data.data);
        } else {
          console.error('Erreur dans les données reçues:', data);
        }
      } catch (error) {
        console.error('Erreur lors du fetch des statistiques:', error);
      }
    };

    fetchStats();
  }, []); // Tableau de dépendances vide pour exécuter une fois au montage

  return stats;
};

export default useInvoiceStats;
