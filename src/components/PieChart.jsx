import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const options = {
  plugins: {
    datalabels: {
      formatter: (value, ctx) => {
        let datasets = ctx.chart.data.datasets;

        if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
          let sum = datasets[0].data.reduce((a, b) => a + b, 0);
          let percentage = Math.round((value / sum) * 100) + "%";
          return percentage;
        } else {
          return percentage;
        }
      },
      color: "#fff",
    },
  },
};

export const data = {
  labels: ["Team", "CEX listings and LPs", "Presale and first LP"],
  datasets: [
    {
      label: "Token Distribution",
      data: [5, 10, 85],
      backgroundColor: ["#A1B86C", "#A46B4A", "#49434e"],
      borderColor: ["#A1B86C", "#A46B4A", "#49434e"],
      borderWidth: 1,
      cutout: "60%",
    },
  ],
};

export function PieChart() {
  return <Pie options={options} data={data} />;
}
