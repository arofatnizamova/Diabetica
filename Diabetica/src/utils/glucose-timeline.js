import ApexCharts from 'apexcharts';

const chartInstances = new Map(); 

export function renderGlucoseChart(containerId, labels, seriesData) {

    if (chartInstances.has(containerId)) {
        chartInstances.get(containerId).destroy();
        chartInstances.delete(containerId);
    }

    const options = {
        chart: {
            type: 'line',
            height: 250,
            toolbar: { show: false },
            zoom: { enabled: false }
        },
        stroke: {
            curve: 'smooth',
            width: 2
        },
        markers: {
            size: 6,
            strokeColors: '#fff',
            strokeWidth: 2,
            hover: { sizeOffset: 2 }
        },
        grid: {
            borderColor: '#ccc',
            strokeDashArray: 3
        },
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: (val) => `${val.toFixed(1)}`
            }
        },
        legend: {
            show: true,
            position: 'left',
            horizontalAlign: 'left',
            markers: {
                width: 8,
                height: 8,
                radius: 50
            },
            fontSize: '13px',
            itemMargin: {
                vertical: 5
            }
        },
        colors: ['#5DD100', '#4c9aff'],
        xaxis: {
            categories: labels,
            labels: {
                style: { fontSize: '11px' }
            },
            axisTicks: { show: false },
            axisBorder: { show: false }
        },
        yaxis: {
            labels: {
                style: { fontSize: '11px' }
            }
        },
        responsive: [
            {
                breakpoint: 1440,
                options: {
                    legend: {
                        position: 'bottom',
                        horizontalAlign: 'center'
                    },
                }
            },
            {
                breakpoint: 576,
                options: {
                    legend: {
                        position: 'bottom',
                        horizontalAlign: 'center'
                    },
                    chart: { height: 180 },
                    markers: { size: 4 },
                    stroke: { width: 1.5 },
                    xaxis: {
                        labels: { style: { fontSize: '9px' } }
                    },
                    yaxis: {
                        labels: { style: { fontSize: '9px' } }
                    }
                }
            }
        ],
        series: seriesData
    };

    const chart = new ApexCharts(document.querySelector(`#${containerId}`), options);
    chart.render();

    chartInstances.set(containerId, chart); 
}

export function destroyChart(containerId) {
    if (chartInstances.has(containerId)) {
        const chart = chartInstances.get(containerId);
        chart.destroy();
        chartInstances.delete(containerId);

        const container = document.querySelector(`#${containerId}`);
        if (container) {
            container.innerHTML = '';
        }
    }
}
