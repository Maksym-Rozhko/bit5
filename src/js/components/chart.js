new Chart(
    chart = document.querySelector('.chart'),
    {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'March', 'April'],
        datasets: [
        {
            label: 'BIT Increase',
            data: [
                chart.dataset.chartDotA,
                chart.dataset.chartDotB,
                chart.dataset.chartDotC,
                chart.dataset.chartDotD
            ],
            borderColor: '#ee9b4f',
            borderWidth: 1,
            backgroundColor: '#ee9b4f2e',
            cubicInterpolationMode: 'monotone',
            pointStyle: 'circle',
            fill: true
        }
        ]
    },
    options: {
        responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                }
            }
        }
    }
);