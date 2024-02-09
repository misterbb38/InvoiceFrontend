import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js'
import useInvoiceStats from "../dataInvoice/useInvoiceStats";

Chart.register(ArcElement);
function GraphCancelled() {
    const stats = useInvoiceStats();
    let invoiceCancelled;
    let countCancelled = 0;
    let totalCount = 0;
  
    if (stats) {
      invoiceCancelled = stats.find(stat => stat._id === 'cancelled');
      if (invoiceCancelled) {
        countCancelled = invoiceCancelled.count;
      }
      totalCount = stats.reduce((acc, curr) => acc + curr.count, 0);
    }
  
    const data = {
      labels: ['Factures Annulées', 'Autres Factures'],
      datasets: [
        {
          data: [countCancelled, totalCount - countCancelled],
          backgroundColor: ['#FF6384', '#36A2EB'],
        },
      ],
    };
    const options = {
      maintainAspectRatio: false,
    };
  
    return (
      <div className="h-20 w-20">
        <Doughnut data={data} options={options} />
      </div>
    );
  }
  
  export default GraphCancelled;
  