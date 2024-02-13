import { useState, useEffect, useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import UseFilteredStats from "../dataInvoice/UseFilteredStats";

const GraphFilter = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear().toString());
  const [isLoading, setIsLoading] = useState(false);
  const filteredStats = UseFilteredStats({ year: selectedYear });

  // Calcul des séries pour le diagramme
  const chartSeries = useMemo(() => {
    return Object.keys(filteredStats || {}).map((status) => ({
      name: status,
      data: filteredStats[status]?.map((month) => month.totalAmount) || [],
    }));
  }, [filteredStats]);

  useEffect(() => {
    // Détecte si filteredStats est en train d'être chargé
    if (!filteredStats) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [filteredStats]);

  // Options pour ApexChart
  const chartOptions = {
    chart: {
      stacked: true,
      stackType: "100%",
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Jan", "Fev", "Mar", "Avr", "Mai", "Jui",
        "Jul", "Aut", "Sep", "Oct", "Nov", "Dec",
      ],
    },
    yaxis: {
      title: {
        text: "Montant Total",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function(val) {
          return val + " Cfa";
        },
      },
    },
    legend: {
      position: "top",
    },
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 rounded-lg shadow h-full">
      <div className="mb-4">
        <label htmlFor="yearSelector">Sélectionner une année :</label>
        <select
          id="yearSelector"
          value={selectedYear}
          onChange={(e) => {
            setIsLoading(true); // Activer l'indicateur de chargement lors du changement d'année
            setSelectedYear(e.target.value);
          }}
          className="ml-2 border-2"
        >
          {Array.from(new Array(20), (val, index) => new Date().getFullYear() - index).map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>
      {isLoading ? (
        <span className="loading loading-spinner text-primary"></span> // Afficher l'indicateur de chargement
      ) : (
        <div className="w-full h-full">
          <ReactApexChart
            options={chartOptions}
            series={chartSeries}
            type="bar"
            height="100%"
          />
        </div>
      )}
    </div>
  );
};

export default GraphFilter;
