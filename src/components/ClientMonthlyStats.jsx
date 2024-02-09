import { useState, useEffect } from 'react';

const apiUrl = process.env.APP_API_BASE_URL;
const fetchClientData = async () => {
  
  const response = await fetch(`${apiUrl}/api/invoice/clientMonthlyInvoiceStats`);
  const data = await response.json();
  return data.data;
};

const ClientMonthlyStats = () => {
  const [data, setData] = useState({});
  const [selectedClient, setSelectedClient] = useState('');
  const [selectedMonth, setSelectedMonth] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetchClientData();
      setData(fetchedData);
      setSelectedClient(Object.keys(fetchedData)[0]);
    };

    fetchData();
  }, []);

  const handleClientChange = (e) => setSelectedClient(e.target.value);
  const handleMonthChange = (e) => setSelectedMonth(parseInt(e.target.value, 10));

  const clientOptions = Object.keys(data).map(client => (
    <option key={client} value={client}>{client}</option>
  ));

  const months = ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aout', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthOptions = months.map((month, i) => (
    <option key={i + 1} value={i + 1}>{month}</option>
  ));

  const selectedData = data[selectedClient] ? data[selectedClient][selectedMonth - 1] : null;

  return (
    <div>
      <div className="flex justify-between items-center ">
        <div>
          <label className="mr-1">Choisissez un client</label>
          <select   className="block w-full p-2 border border-gray-200 rounded" value={selectedClient} onChange={handleClientChange}>
            {clientOptions}
          </select>
        </div>

        <div>
          <label className="mr-1">Choisissez un mois</label>
          <select  className="block w-full p-2 border border-gray-200 rounded" value={selectedMonth} onChange={handleMonthChange}>
            {monthOptions}
          </select>
        </div>
      </div>

      {selectedData && (
        <div className=" grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-bold">Statistiques pour {selectedClient} - {months[selectedMonth - 1]}</p>
            <p className={`text-xs font-bold ${selectedData.paid.totalAmount > 0 ? 'text-green-500' : ''}`}>Factures Payées: {selectedData.paid.count}</p>
            <p className={`text-xs font-bold ${selectedData.pending.totalAmount > 0 ? 'text-red-500' : ''}`}>Factures En Attente: {selectedData.pending.count}</p>
            <p className='text-xs font-bold'>Factures Annulées: {selectedData.cancelled.count}</p>
          </div>
          <div>
            <h5 className="text-xs font-bold">Sommes</h5>
            <p className= {`text-xs font-bold ${selectedData.paid.totalAmount > 0 ? 'text-green-500' : ''}`}>Total Payé: {selectedData.paid.totalAmount}</p>
            <p className={`text-xs font-bold ${selectedData.pending.totalAmount > 0 ? 'text-red-500' : ''}`}>Total En Attente: {selectedData.pending.totalAmount}</p>
            <p className='text-xs font-bold'>Total Annulé: {selectedData.cancelled.totalAmount}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientMonthlyStats;
