// glucose-timeline.js
export function renderGlucoseChart(containerId, labels, dataPoints) {
  const options = {
    chart: {
      type: 'line',
      height: 200,
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    responsive: [
    {
        breakpoint: 576,
        options: {
        chart: {
            height: 150 // уменьшаем высоту графика
        },
        markers: {
            size: 3 // уменьшаем точки
        },
        stroke: {
            width: 1.5
        },
        xaxis: {
            labels: {
            style: {
                fontSize: '10px'
            }
            }
        },
        yaxis: {
            labels: {
            style: {
                fontSize: '10px'
            }
            }
        }
        }
    }
    ],
    series: [{
      name: 'Глюкоза',
      data: dataPoints
    }],
    xaxis: {
      categories: labels,
      labels: {
        style: { fontSize: '12px' }
      },
      axisBorder: { show: false },
      axisTicks: { show: false }
    },
    yaxis: {
      min: 0,
      max: 9.8,
      tickAmount: 3,
      labels: {
        formatter: val => val.toFixed(1),
        style: { fontSize: '12px' }
      }
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    markers: {
      size: 5,
      colors: ['#3a8df5'],
      strokeColors: '#fff',
      strokeWidth: 2,
      hover: { sizeOffset: 2 }
    },
    grid: {
      borderColor: '#eee',
      strokeDashArray: 5 // ← пунктир
    },
    tooltip: {
      y: {
        formatter: val => `Глюкоза: ${val}`
      }
    },
    colors: ['#3a8df5']
  };

  const chart = new ApexCharts(document.querySelector(`#${containerId}`), options);
  chart.render();
}
