import React from "react";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

export default function MenWomenChart({ menListing, womenListing }) {
  return (
    <div className="chart-container">
      {/* <h2 style={{ textAlign: "center" }}>Pie Chart</h2> */}
      <Doughnut
        data={{
          labels: ["MEN", "WOMEN"],
          datasets: [
            {
              label: "Popularity of colours",
              data: [menListing, womenListing],
              // you can set indiviual colors for each bar
              backgroundColor: ["#EED3D9", "#9BCF53"],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Product Listing",
            },
          },
        }}
      />
    </div>
  );
}
