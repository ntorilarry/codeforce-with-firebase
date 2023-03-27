import "chart.js/auto";
import { Chart as ChartJS } from "chart.js";
import { Line } from "react-chartjs-2";
import { ArrowCircleUpIcon } from "@heroicons/react/outline";

export default function Chart() {
  return (
    <div className="bg-[#2d2d2d]">
    <div className="w-full max-w-3xl rounded-xl bg-layer-2 px-8 py-6">
      <div className="flex justify-between">
        <div>
          <dt className="text-lg text-white font-semibold text-heading">
            Monthly Recurring Revenue
          </dt>
          <div className="mt-2" />
          <div className="flex items-center space-x-4">
            <dd className="text-3xl text-white font-semibold text-heading">$15,356</dd>
            <dd className="flex items-center space-x-2 text-green-500">
              <ArrowCircleUpIcon className="h-5 w-5" />
              <span className="text-lg font-semibold">24.2%</span>
            </dd>
          </div>
        </div>

        <div>
          <label htmlFor="range" className="sr-only text-white">
            Select a date range
          </label>
          <select
            id="range"
            className="block text-white w-full rounded-xl border-2 border-muted-3 bg-[#3d3d3d] py-2.5 pl-4 pr-8 font-medium text-text focus:border-primary disabled:opacity-30 sm:text-sm"
          >
            <option>Last Month</option>
            <option>Last Week</option>
            <option>Today</option>
          </select>
        </div>
      </div>

      <div className="mt-5" />

      <Line
        width={1000}
        height={366}
        data={mrrChartData}
        options={mrrChartOptions}
      />
    </div>
    </div>
  );
}

// Chart setup
ChartJS.defaults.font.family = "Poppins";
ChartJS.defaults.scale.grid.drawOnChartArea = false;
// ChartJS.defaults.scale.grid.drawBorder = false;
ChartJS.defaults.elements.point.radius = 0;
ChartJS.defaults.scale.ticks.color = "#abadc6";
ChartJS.defaults.datasets.line.borderColor = "#2563eb";
ChartJS.defaults.datasets.bar.borderColor = "#2563eb";
ChartJS.defaults.datasets.bar.backgroundColor = "#2563eb";
ChartJS.defaults.datasets.bar.borderRadius = 4;
ChartJS.defaults.datasets.bar.maxBarThickness = 28;

// Chart data

const allMonths = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const mrrChartData = {
  labels: allMonths,
  datasets: [
    {
      label: "",
      data: [
        40, 1400, 3900, 5400, 5400, 4700, 9200, 10800, 10200, 14000, 17500,
        19500,
      ],
    },
  ],
};

const mrrChartOptions = {
  scales: {
    y: {
      min: 0,
      ticks: { stepSize: 5000 },
    },
  },
  plugins: { legend: { display: false } },
};
