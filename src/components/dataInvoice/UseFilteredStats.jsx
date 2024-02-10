import { useState, useEffect } from 'react';

const UseFilteredStats = (filter) => {
  const [filteredStats, setFilteredStats] = useState(null);

  const apiUrl = import.meta.env.VITE_APP_API_BASE_URL;

  useEffect(() => {
    const fetchFilteredStats = async () => {
      try {
        
        const response = await fetch(`${apiUrl}/api/invoice/FilteredStats`);
        if (!response.ok) {
          // Gérer les réponses non-OK
          console.error('Erreur lors de la récupération des statistiques filtrées:', response.statusText);
          return;
        }
        const data = await response.json();
        if (data.success) {
          setFilteredStats(data.data);
        } else {
          console.error('Erreur dans les données reçues:', data);
        }
      } catch (error) {
        console.error('Erreur lors du fetch des statistiques filtrées:', error);
      }
    };

    fetchFilteredStats();
  }, [filter, apiUrl]); // Dépendance sur le filtre pour mettre à jour les données lorsqu'il change

  return filteredStats;
};

export default UseFilteredStats;
