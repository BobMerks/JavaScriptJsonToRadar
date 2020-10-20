// Create radar chart after css animation finishes
setTimeout(createChart, 300);

function createChart() {
  let ctx = document.getElementById("chart").getContext("2d");
  let myRadarChart = new Chart(ctx, {
    type: "radar",
    data: {
      labels: graphlabels,
      datasets: [
        {
          backgroundColor: "#d700967e",
          borderColor: "#d70096d0",
          pointBackgroundColor: "#d70096",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "#d70096d0",
          pointRadius: 7,
          pointHoverRadius: 7,
          data: graphvalues,
        },
      ],
    },
    options: {
      tooltips: {
        titleFontSize: 15,
        titleFontStyle: "normal",
        titleMarginBottom: -1,
        displayColors: false,
        bodyFontSize: 0,
      },
      legend: {
        display: false,
      },
      scale: {
        ticks: {
          suggestedMax: 100,
          suggestedMin: 0,
        },
        pointLabels: {
          fontSize: 16,
        },
      },
    },
  });
}
