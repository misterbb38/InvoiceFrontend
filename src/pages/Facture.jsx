import { useState, useEffect } from 'react';
import EditFactureButton from '../components/EditFactureButton';
import GeneratePDFButton from '../components/GeneratePDFButton';
import FilterFactures from '../components/FactureFilter';
import DeleteFactureButton from '../components/DeleteFactureButton';
import NavigationBreadcrumb from '../components/NavigationBreadcrumb';

function Facture() {
  const [allFactures, setAllFactures] = useState([]);
  const [displayedFactures, setDisplayedFactures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const facturesPerPage = 8;

  const apiUrl = import.meta.env.VITE_APP_API_BASE_URL;

   // Fonction pour rafraîchir les factures
   const refreshFactures = async () => {
    setLoading(true);
    await fetchFactures();
  };

  useEffect(() => {
    fetchFactures();
  }, []);

  const fetchFactures = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/invoice`);
      const data = await response.json();
      if (data.success) {
        const facturesFiltrees = data.data.filter(facture => facture.type === "facture");
        setAllFactures(facturesFiltrees);
        setDisplayedFactures(facturesFiltrees);
      }
      setLoading(false);
    } catch (error) {
      console.error("Erreur:", error);
      setLoading(false);
    }
  };

  const handleFilter = (filters) => {
    setLoading(true);
  
    const filteredFactures = allFactures.filter(facture => {
      // Filtrage par nom du client
      if (filters.name && !facture.client.name.toLowerCase().includes(filters.name.toLowerCase())) {
        return false;
      }
  
      // Filtrage par date
      if (filters.date && new Date(facture.date).toLocaleDateString() !== new Date(filters.date).toLocaleDateString()) {
        return false;
      }
  
      // Filtrage par année
      if (filters.year && new Date(facture.date).getFullYear().toString() !== filters.year) {
        return false;
      }
  
      // Filtrage par mois
      if (filters.month && (new Date(facture.date).getMonth() + 1).toString() !== filters.month) {
        return false;
      }
  
      // Filtrage par total
      if (filters.total && facture.total !== parseFloat(filters.total)) {
        return false;
      }
      // Filtrage par statut
  if (filters.status && facture.status.toLowerCase() !== filters.status.toLowerCase()) {
    return false;
  }
  
      return true;
    });
  
    setDisplayedFactures(filteredFactures);
    setCurrentPage(1);
    setLoading(false);
  };

  const indexOfLastFacture = currentPage * facturesPerPage;
  const indexOfFirstFacture = indexOfLastFacture - facturesPerPage;
  const currentFactures = displayedFactures.slice(indexOfFirstFacture, indexOfLastFacture);
  const totalPageCount = Math.ceil(displayedFactures.length / facturesPerPage);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="base-content bg-base-100 mx-auto p-4 min-h-[800px]">
      <NavigationBreadcrumb pageName="Facture" />
      <div className="divider"></div> 
      {/* <h2 className="text-2xl font-bold mb-4">Factures</h2> */}
      <FilterFactures onFilter={handleFilter} />
      <div className="divider"></div> 
      {loading ? (
        <div className="loading loading-spinner text-primary" >Chargement...</div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th className="font-bold text-lg text-base-content">Nom du Client</th>
                  <th className="font-bold text-lg text-base-content">Date</th>
                  <th className="font-bold text-lg text-base-content">Telephone</th>
                  <th className="font-bold text-lg text-base-content">Total</th>
                  <th className="font-bold text-lg text-base-content">Status</th>
                  <th className="font-bold text-lg text-base-content">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentFactures.map(facture => (
                  <tr key={facture._id}>
                    <td>{facture.client.name}</td>
                    <td>{new Date(facture.date).toLocaleDateString()}</td>
                    <td>{facture.client.telephone}</td>
                    <td>{facture.total.toFixed(2)}€</td>
                    <td>{facture.status}</td>
                    <td>
                      <GeneratePDFButton invoice={facture} currency="FCFA" />
                      <EditFactureButton factureId={facture._id} onFactureUpdated={refreshFactures} />
                      <DeleteFactureButton factureId={facture._id} onFactureDeleted={refreshFactures}  />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {totalPageCount > 1 && (
            <nav className="flex justify-center mt-4">
              <ul className="flex list-none">
                {Array.from({ length: totalPageCount }).map((_, i) => (
                  <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''} mr-2`}>
                    <a 
                      onClick={() => paginate(i + 1)} 
                      className="page-link btn btn-secondary hover:bg-primary text-base-content rounded"
                    >
                      {i + 1}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </>
      )}
    </div>
  );
}

export default Facture;
