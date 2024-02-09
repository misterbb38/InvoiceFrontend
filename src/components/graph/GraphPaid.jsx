
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js'
import useInvoiceStats from "../dataInvoice/useInvoiceStats";

// Enregistrement de l'ArcElement nécessaire pour le Doughnut chart
Chart.register(ArcElement);

function GraphPaid() {
  const stats = useInvoiceStats();
  let invoicePaid;
  let countPaid = 0;
 
  let totalCount = 0;

  if (stats) {
    invoicePaid = stats.find(stat => stat._id === 'paid');
    if (invoicePaid) {
      countPaid = invoicePaid.count;
      
    }

    // Calculer le nombre total des factures pour tous les statuts
    totalCount = stats.reduce((acc, curr) => acc + curr.count, 0);
  }

  const data = {
    labels: ['Factures Payées', 'Autres Factures'],
    datasets: [
      {
        data: [countPaid, totalCount - countPaid],
        backgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };
  const options = {
    maintainAspectRatio: false, // Permet de contrôler l'aspect ratio du graphique
  };


  return (
    <div className="h-20 w-20"> {/* Contrôle de la taille du conteneur */}
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default GraphPaid;
