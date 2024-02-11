import { useState, useEffect } from "react";
import UseSummaryClient from "./dataInvoice/UseSummaryClient"; // Vérifiez le chemin d'importation

const ClientInvoiceSummary = () => {
  const summaryClient = UseSummaryClient();
  const [selectedClient, setSelectedClient] = useState("");

  useEffect(() => {
    if (summaryClient && summaryClient.length > 0) {
      setSelectedClient(summaryClient[0].client.email); // Pré-sélection du premier client
    }
  }, [summaryClient]);

  const handleClientChange = (e) => {
    setSelectedClient(e.target.value);
  };

  const selectedClientData = summaryClient?.find(
    (client) => client.client.email === selectedClient
  );

  return (
    <div className="container mx-auto px-4">
      <select
        className="block w-full p-2 border border-gray-200 rounded"
        value={selectedClient}
        onChange={handleClientChange}
      >
        {summaryClient?.map((client, index) => (
          <option key={index} value={client.client.email}>
            {client.client.name}
          </option>
        ))}
      </select>

      {selectedClientData && (
        <div className=" flex-wrap  grid grid-cols-2 gap-4">
          <div className="w-full  ">
            <h5 className="text-lg font-semibold">Statistiques </h5>
            <div className="mt-1">
              <p
                className={`text-xs font-bold ${
                  selectedClientData.totalAmountPaid > 0 ? "text-green-500" : ""
                }`}
              >
                Factures Payées: {selectedClientData.countPaid}
              </p>
              <p
                className={`text-xs font-bold ${
                  selectedClientData.totalAmountPending > 0
                    ? "text-red-500"
                    : ""
                }`}
              >
                Factures En Attente: {selectedClientData.countPending}
              </p>
              <p className="text-xs font-bold">
                Factures Annulées: {selectedClientData.countCancelled}
              </p>
            </div>
          </div>
          <div className="w-full ">
            <p className="text-lg font-semibold">Sommes</p>
            <div className="mt-1">
              <p
                className={`text-xs font-bold ${
                  selectedClientData.totalAmountPaid > 0 ? "text-green-500" : ""
                }`}
              >
                Factures Payées: {selectedClientData.totalAmountPaid}
              </p>
              <p
                className={`text-xs font-bold ${
                  selectedClientData.totalAmountPending > 0
                    ? "text-red-500"
                    : ""
                }`}
              >
                Factures En Attente: {selectedClientData.totalAmountPending}
              </p>

              <p className="text-xs font-bold">
                Factures Annulées: {selectedClientData.totalAmountCancelled}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientInvoiceSummary;
