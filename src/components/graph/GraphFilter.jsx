import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import UseFilteredStats from "../dataInvoice/useFilteredStats";

const GraphFilter = () => {
  const filteredStats = UseFilteredStats(/* votre filtre ici, si nécessaire */);
  const [chartData, setChartData] = useState({
    series: [],
    options: {
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
          "Jan",
          "Fev",
          "Mar",
          "Avr",
          "Mai",
          "Jui",
          "Jul",
          "Aut",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
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
    },
  });

  useEffect(() => {
    if (filteredStats) {
      // Transformer les données pour ApexCharts
      const series = Object.keys(filteredStats).map((status) => {
        return {
          name: status,
          data: filteredStats[status].map((month) => month.totalAmount),
        };
      });

      setChartData((prevState) => ({
        ...prevState,
        series: series,
      }));
    }
  }, [filteredStats]);

  return (
    <div className="p-4 md:p-6 lg:p-8 rounded-lg shadow h-full">
      <div className="w-full h-full">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height="100%"
        />
      </div>
    </div>
  );
};

export default GraphFilter;
