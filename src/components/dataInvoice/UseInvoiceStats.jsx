// import { useState, useEffect } from 'react';

// const UseInvoiceStats = () => {
//   const [stats, setStats] = useState(null);
//   const apiUrl = import.meta.env.VITE_APP_API_BASE_URL;

//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         const response = await fetch(`${apiUrl}/api/invoice/stats`);
//         if (!response.ok) {
//           // Gérer les réponses non-OK
//           console.error('Erreur lors de la récupération des statistiques:', response.statusText);
//           return;
//         }
//         const data = await response.json();
//         if (data.success) {
//           setStats(data.data);
//         } else {
//           console.error('Erreur dans les données reçues:', data);
//         }
//       } catch (error) {
//         console.error('Erreur lors du fetch des statistiques:', error);
//       }
//     };

//     fetchStats();
//   }, [apiUrl]); // Tableau de dépendances vide pour exécuter une fois au montage

//   return stats;
// };

// export default UseInvoiceStats;


import { useState, useEffect } from 'react';

const UseInvoiceStats = (year) => {
  const [stats, setStats] = useState(null);
  const apiUrl = import.meta.env.VITE_APP_API_BASE_URL;

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Construire l'URL avec le paramètre de l'année si spécifié
        const url = year ? `${apiUrl}/api/invoice/stats?year=${year}` : `${apiUrl}/api/invoice/stats`;
        const response = await fetch(url);
        if (!response.ok) {
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
  }, [apiUrl, year]); // Ajouter 'year' aux dépendances pour re-fetch lorsque 'year' change

  return stats;
};

export default UseInvoiceStats;
