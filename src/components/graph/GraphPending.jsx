import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js'
import useInvoiceStats from "../dataInvoice/useInvoiceStats";

Chart.register(ArcElement);

function GraphPending() {
  const stats = useInvoiceStats();
  let invoicePending;
  let countPending = 0;
  let totalCount = 0;

  if (stats) {
    invoicePending = stats.find(stat => stat._id === 'pending');
    if (invoicePending) {
      countPending = invoicePending.count;
    }
    totalCount = stats.reduce((acc, curr) => acc + curr.count, 0);
  }

  const data = {
    labels: ['Factures En Attente', 'Autres Factures'],
    datasets: [
      {
        data: [countPending, totalCount - countPending],
        backgroundColor: ['#FFCE56', '#FF6384'],
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

export default GraphPending;
