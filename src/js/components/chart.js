new Chart(
    chart = document.querySelector('.chart'),
    {
    type: 'line',
    data: {
        labels: [
            chart.dataset.chartXAxisA,    
            chart.dataset.chartXAxisB,    
            chart.dataset.chartXAxisC,    
            chart.dataset.chartXAxisD,    
        ],
        datasets: [
        {
            label: chart.dataset.chartLabelText,
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