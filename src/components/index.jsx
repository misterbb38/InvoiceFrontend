import NavigationBreadcrumb from "../components/NavigationBreadcrumb";
import UseInvoiceStats from "./dataInvoice/UseInvoiceStats";
import UseFilteredStats from "./dataInvoice/useFilteredStats";
import GraphPaid from "./graph/GraphPaid";
import GraphPending from "./graph/GraphPending";
import GraphCancelled from "./graph/GraphCancelled";
import GraphFilter from "./graph/GraphFilter";
import ClientInvoiceSummary from "./SummaryClient";
import ClientMonthlyStats from "./ClientMonthlyStats";
const HomeContent = () => {
  const stats = UseInvoiceStats();
  const filteredStats = UseFilteredStats();
  console.log(stats);
  console.log(filteredStats);

  let countPaid = 0, totalAmountPaid = 0, 
      countPending = 0, totalAmountPending = 0,
      countCancelled = 0, totalAmountCancelled = 0,
      totalCount = 0;
  if (stats) {
    const invoicePaid = stats.find(stat => stat._id === 'paid');
    const invoicePending = stats.find(stat => stat._id === 'pending');
    const invoiceCancelled = stats.find(stat => stat._id === 'cancelled');

    if (invoicePaid) {
      ({ count: countPaid, totalAmount: totalAmountPaid } = invoicePaid);
    }
    if (invoicePending) {
      ({ count: countPending, totalAmount: totalAmountPending } = invoicePending);
    }
    if (invoiceCancelled) {
      ({ count: countCancelled, totalAmount: totalAmountCancelled } = invoiceCancelled);
    }
    totalCount = stats.reduce((acc, curr) => acc + curr.count, 0);
  }
  const percentagePaid = ((countPaid / totalCount) * 100).toFixed(1);
  const percentagePending = ((countPending / totalCount) * 100).toFixed(1);
  const percentageCancelled = ((countCancelled / totalCount) * 100).toFixed(1);

  

  return (
    <div className=" bg-base-100 p-4">
      <NavigationBreadcrumb pageName="Acceuil" />
      {/* Section supérieure avec quatre boîtes */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-base-300 box p-4 rounded-lg shadow flex justify-between items-center">
          <div>
            <h2 className="text-lg base-content font-semibold">
              Facture payée
            </h2>
            <span className="text-xs font-bold">Nombre: {countPaid}</span>
            <p className="text-xs font-bold">somme:{totalAmountPaid} €</p>
            <p className="text-xs font-bold">poucentage:{percentagePaid}% </p>
          </div>
          <div>
            <GraphPaid />
            <p className="text-xl"></p>
          </div>
        </div>

        <div className="bg-base-300 box p-4 rounded-lg shadow flex justify-between items-center">
          <div>
            <h2 className="text-lg base-content font-semibold">
              Facture impayée
            </h2>
            <span className="text-xs font-bold">Nombre: {countPending}</span>
            <p className="text-xs font-bold">somme:{totalAmountPending} €</p>
            <p className="text-xs font-bold">poucentage:{percentagePending}% </p>
          </div>
          <div>
            <GraphPending />
            <p className="text-xl"></p>
          </div>
        </div>
        <div className="bg-base-300 box p-4 rounded-lg shadow flex justify-between items-center">
          <div>
            <h2 className="text-lg base-content font-semibold">
              Facture annullée
            </h2>
            <span className="text-xs font-bold">Nombre: {countCancelled}</span>
            <p className="text-xs font-bold">somme:{totalAmountCancelled} €</p>
            <p className="text-xs font-bold">poucentage:{percentageCancelled}% </p>
          </div>
          <div>
            <GraphCancelled />
            <p className="text-xl"></p>
          </div>
        </div>
        <div className="box bg-base-300 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Titre 4</h2>
          <span className="text-xl">27</span>
        </div>
      </div>
      {/* Section divisée en deux parties */}
      <div className="flex flex-wrap -mx-4 mb-8">
        <div className="w-full md:w-1/2 px-4">
          {/* Contenu de la partie gauche */}
          <div className="bg-base-300 p-4 rounded-lg shadow h-[50vh]">
            <GraphFilter />
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4">
          {/* Contenu de la partie droite, divisé verticalement */}
          <div className="flex flex-col space-y-4">
            <div className="mt-2 bg-base-300 p-4 rounded-lg shadow h-[24vh]">
              <ClientInvoiceSummary/>
            </div>
            <div className="bg-base-300 p-4 rounded-lg shadow h-[24vh]">
              <ClientMonthlyStats/>
            </div>
          </div>
        </div>
      </div>

      {/* Div large de 300px en bas */}
      {/* <div className="w-full mb-8" >
        <div className="bg-base-300 p-4 rounded-lg shadow" style={{ minWidth: "300px", minHeight:"200px" }}>Contenu Large</div>
      </div> */}
    </div>
  );
};

export default HomeContent;
