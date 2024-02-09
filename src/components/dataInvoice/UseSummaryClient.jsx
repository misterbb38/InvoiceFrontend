import { useState, useEffect } from 'react';

const UseSummaryClient = (filter) => {
  const [summaryClient, setsummaryClient] = useState(null);

  const apiUrl = process.env.APP_API_BASE_URL;

  useEffect(() => {
    const fetchsummaryClient = async () => {
      try {
        
        const response = await fetch(`${apiUrl}/api/invoice/summaryclient`);
        if (!response.ok) {
          // Gérer les réponses non-OK
          console.error('Erreur lors de la récupération des statistiques filtrées:', response.statusText);
          return;
        }
        const data = await response.json();
        if (data.success) {
          setsummaryClient(data.data);
        } else {
          console.error('Erreur dans les données reçues:', data);
        }
      } catch (error) {
        console.error('Erreur lors du fetch des statistiques filtrées:', error);
      }
    };

    fetchsummaryClient();
  }, [filter, apiUrl]); // Dépendance sur le filtre pour mettre à jour les données lorsqu'il change

  return summaryClient;
};

export default UseSummaryClient;
